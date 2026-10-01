"use client";

import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { openGuestConversation, sendGuestMessage, SupportChatError } from "./api";
import {
  bindSupportChatHandlers,
  setSupportChatTokenReader,
  startSupportChat,
  stopSupportChat,
} from "./connection";
import type { ChatConnectionStatus, ConversationSeen, GuestOpened, GuestSession, SupportMessage } from "./types";

const GUEST_TOKEN_MS = 12 * 60 * 60 * 1000;

type GuestChatState = {
  status: ChatConnectionStatus;
  error?: string;
  guest: GuestSession | null;
  messages: SupportMessage[];
};

type GuestChatContextValue = GuestChatState & {
  beginGuest: (input: {
    email: string;
    subject?: string;
    body: string;
    clientMessageId: string;
  }) => Promise<void>;
  continueGuest: (input: { body: string; clientMessageId: string }) => Promise<void>;
  reset: () => void;
};

const GuestChatContext = createContext<GuestChatContextValue | null>(null);

const guestMessage = (opened: GuestOpened, clientMessageId: string): SupportMessage => ({
  messageId: opened.messageId,
  conversationId: opened.conversationId,
  senderUserId: null,
  senderUserName: null,
  senderSide: "Guest",
  body: opened.body,
  clientMessageId,
  createdAtUtc: opened.createdAtUtc,
  seenByCompany: false,
  seenBySupport: false,
  attachments: [],
});

export const messageOf = (error: unknown) =>
  error instanceof Error ? error.message : String(error);

export default function GuestChatProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<ChatConnectionStatus>("idle");
  const [error, setError] = useState<string | undefined>();
  const [guest, setGuest] = useState<GuestSession | null>(null);
  const [messages, setMessages] = useState<SupportMessage[]>([]);
  const guestRef = useRef<GuestSession | null>(null);
  const expiryTimer = useRef<number | undefined>(undefined);

  guestRef.current = guest;

  const clearExpiry = useCallback(() => {
    window.clearTimeout(expiryTimer.current);
    expiryTimer.current = undefined;
  }, []);

  const reset = useCallback(() => {
    clearExpiry();
    setGuest(null);
    setMessages([]);
    setStatus("idle");
    setError(undefined);
    void stopSupportChat();
  }, [clearExpiry]);

  const armExpiry = useCallback(
    (expiresAt: number) => {
      clearExpiry();
      expiryTimer.current = window.setTimeout(() => {
        reset();
      }, Math.max(0, expiresAt - Date.now()));
    },
    [clearExpiry, reset],
  );

  const storeGuest = useCallback(
    (opened: GuestOpened) => {
      const expiresAt = Date.now() + GUEST_TOKEN_MS;
      const next: GuestSession = {
        conversationId: opened.conversationId,
        hubToken: opened.hubToken,
        subject: opened.subject,
        expiresAt,
      };
      setGuest(next);
      guestRef.current = next;
      armExpiry(expiresAt);
      setSupportChatTokenReader(() => guestRef.current?.hubToken ?? "");
    },
    [armExpiry],
  );

  const rememberMessage = useCallback((message: SupportMessage) => {
    setMessages((current) => {
      if (current.some((item) => item.messageId === message.messageId)) return current;
      if (current.some((item) => item.clientMessageId === message.clientMessageId)) return current;
      return [message, ...current];
    });
  }, []);

  const connectGuest = useCallback(async () => {
    try {
      await startSupportChat();
    } catch {
      // startSupportChat already records the connection error
    }
  }, []);

  useEffect(() => {
    bindSupportChatHandlers({
      onMessageCreated: (message) => {
        const openId = guestRef.current?.conversationId;
        if (!openId || message.conversationId !== openId) return;
        rememberMessage({
          ...message,
          attachments: message.attachments ?? [],
        });
      },
      onConversationSeen: (seen: ConversationSeen) => {
        const openId = guestRef.current?.conversationId;
        if (!openId || seen.conversationId !== openId) return;
        if (seen.seenBySide !== "Support") return;
        setMessages((current) =>
          current.map((message) => {
            const created = Date.parse(message.createdAtUtc);
            const readAt = Date.parse(seen.lastReadCreatedAtUtc);
            const timeOk = Number.isFinite(created) && Number.isFinite(readAt);
            const atOrBefore =
              message.messageId === seen.lastReadMessageId
              || (timeOk && created < readAt)
              || (timeOk && created === readAt && message.messageId <= seen.lastReadMessageId);
            if (!atOrBefore) return message;
            return { ...message, seenBySupport: true };
          }),
        );
      },
      onStatus: (nextStatus, nextError) => {
        setStatus(nextStatus);
        setError(nextError);
      },
    });

    return () => {
      clearExpiry();
      void stopSupportChat();
    };
  }, [clearExpiry, rememberMessage]);

  const beginGuest = useCallback(
    async (input: {
      email: string;
      subject?: string;
      body: string;
      clientMessageId: string;
    }) => {
      const opened = await openGuestConversation(input);
      storeGuest(opened);
      rememberMessage(guestMessage(opened, input.clientMessageId));
      await connectGuest();
    },
    [connectGuest, rememberMessage, storeGuest],
  );

  const continueGuest = useCallback(
    async (input: { body: string; clientMessageId: string }) => {
      const current = guestRef.current;
      if (!current || current.expiresAt <= Date.now()) {
        reset();
        throw new SupportChatError(401, "expired");
      }
      const opened = await sendGuestMessage({
        conversationId: current.conversationId,
        hubToken: current.hubToken,
        body: input.body,
        clientMessageId: input.clientMessageId,
      });
      storeGuest(opened);
      rememberMessage(guestMessage(opened, input.clientMessageId));
      await connectGuest();
    },
    [connectGuest, rememberMessage, reset, storeGuest],
  );

  const value = useMemo<GuestChatContextValue>(
    () => ({
      status,
      error,
      guest,
      messages,
      beginGuest,
      continueGuest,
      reset,
    }),
    [beginGuest, continueGuest, error, guest, messages, reset, status],
  );

  return <GuestChatContext.Provider value={value}>{children}</GuestChatContext.Provider>;
}

export function useGuestChat() {
  const value = useContext(GuestChatContext);
  if (!value) throw new Error("useGuestChat must be used within GuestChatProvider");
  return value;
}
