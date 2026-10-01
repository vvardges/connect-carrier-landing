"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { createClientMessageId } from "./id";
import type { ChatConnectionStatus, SupportMessage } from "./types";

type ChatConversationProps = {
  title: string;
  status: ChatConnectionStatus;
  error?: string;
  messages: SupportMessage[];
  onSend: (input: { body: string; clientMessageId: string }) => Promise<void>;
  onClose: () => void;
};

const statusKey = (status: ChatConnectionStatus) => {
  if (status === "idle") return "liveChat.waiting";
  return `liveChat.${status}`;
};

const formatTime = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};

const formatDay = (value: string, todayLabel: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  const now = new Date();
  const sameDay =
    date.getFullYear() === now.getFullYear()
    && date.getMonth() === now.getMonth()
    && date.getDate() === now.getDate();
  if (sameDay) return todayLabel;
  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
};

const dayKey = (value: string) => {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
};

export default function ChatConversation({
  title,
  status,
  error,
  messages,
  onSend,
  onClose,
}: ChatConversationProps) {
  const { t } = useTranslation();
  const [draft, setDraft] = useState("");
  const [sending, setSending] = useState(false);
  const [failedSend, setFailedSend] = useState(false);
  const [localError, setLocalError] = useState("");
  const pending = useRef<{ id: string; signature: string } | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const newestId = messages[0]?.messageId;
  const visible = [...messages].reverse();

  const statusClass =
    status === "connected"
      ? "text-xs text-green-600 dark:text-green-400"
      : status === "error"
        ? "text-xs text-red-600"
        : "text-xs text-gray-500 dark:text-gray-400";

  useEffect(() => {
    const node = listRef.current;
    if (node) node.scrollTop = node.scrollHeight;
  }, [newestId]);

  const submit = async () => {
    if (draft.length > 4000) {
      setLocalError(t("liveChat.messageTooLong"));
      return;
    }
    if (!draft.trim()) {
      setLocalError(t("liveChat.bodyOrFile"));
      return;
    }
    const signature = draft;
    const clientMessageId =
      pending.current?.signature === signature
        ? pending.current.id
        : createClientMessageId();
    pending.current = { id: clientMessageId, signature };
    setSending(true);
    setLocalError("");
    try {
      await onSend({ body: draft, clientMessageId });
      pending.current = null;
      setFailedSend(false);
      setDraft("");
    } catch (sendError) {
      const text = sendError instanceof Error ? sendError.message : String(sendError);
      setFailedSend(true);
      setLocalError(text === "expired" ? t("liveChat.expired") : text);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex h-full min-h-0 flex-col overflow-hidden rounded-2xl bg-white dark:bg-[#233044]">
      <div className="flex items-start justify-between gap-2 border-b border-gray-100 px-4 py-3 dark:border-white/10">
        <div>
          <p className="m-0 text-base font-semibold text-gray-900 dark:text-gray-100">{title}</p>
          <p className={`mt-0.5 mb-0 ${statusClass}`}>
            {localError || error || t(statusKey(status))}
          </p>
        </div>
        <button
          type="button"
          className="border-0 bg-transparent text-xl leading-none text-gray-500"
          onClick={onClose}
          aria-label={t("liveChat.close")}
        >
          ×
        </button>
      </div>

      <div ref={listRef} className="flex min-h-0 flex-1 flex-col gap-2 overflow-auto bg-transparent p-4">
        {visible.length === 0 ? (
          <p className="m-auto text-sm text-gray-500 dark:text-gray-400">{t("liveChat.noMessages")}</p>
        ) : (
          (() => {
            let previousDay = "";
            return visible.map((message) => {
              const outgoing = message.senderSide === "Guest";
              const day = dayKey(message.createdAtUtc);
              const showDay = day !== previousDay;
              previousDay = day;
              return (
                <div
                  key={message.messageId}
                  className={`flex flex-col gap-2 ${outgoing ? "items-end" : "items-start"}`}
                >
                  {showDay && (
                    <p className="mx-auto my-1 rounded-full bg-white px-2.5 py-1 text-xs text-gray-500 dark:bg-[#2c3a4d] dark:text-gray-300">
                      {formatDay(message.createdAtUtc, t("liveChat.today"))}
                    </p>
                  )}
                  <div
                    className={`max-w-[75%] rounded-xl px-3 py-2.5 text-sm leading-5 shadow-sm ${
                      outgoing
                        ? "rounded-br-sm bg-primary text-white"
                        : "rounded-bl-sm bg-white text-gray-900 dark:bg-[#2c3a4d] dark:text-gray-100"
                    }`}
                  >
                    {message.body && <p className="m-0 break-words">{message.body}</p>}
                    <span
                      className={`mt-1.5 flex justify-end gap-1.5 text-[11px] ${
                        outgoing ? "text-white/85" : "text-gray-400"
                      }`}
                    >
                      {formatTime(message.createdAtUtc)}
                      {outgoing && <span>{message.seenBySupport ? "✓✓" : "✓"}</span>}
                    </span>
                  </div>
                </div>
              );
            });
          })()
        )}
      </div>

      <form
        className="flex items-end gap-2 border-t border-gray-100 px-4 py-3 dark:border-white/10"
        onSubmit={(event) => {
          event.preventDefault();
          void submit();
        }}
      >
        <div className="min-w-0 flex-1 rounded-lg border border-gray-100 bg-white px-3 py-2 dark:border-white/10 dark:bg-[#1a2332]">
          <textarea
            value={draft}
            placeholder={t("liveChat.placeholder")}
            className="max-h-[120px] min-h-[40px] w-full resize-y border-0 bg-transparent text-sm outline-none dark:text-gray-100"
            onChange={(event) => setDraft(event.target.value)}
          />
        </div>
        <button
          type="submit"
          disabled={sending}
          className="h-9 shrink-0 rounded-lg bg-primary px-4 text-sm font-medium text-white disabled:cursor-default disabled:opacity-50 hover:bg-primary/90"
        >
          {failedSend ? t("liveChat.retry") : t("liveChat.send")}
        </button>
      </form>
    </div>
  );
}
