import type { GuestOpened } from "./types";

const apiOrigin = String(process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/$/, "");

export class SupportChatError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

const request = async <T>(
  path: string,
  init: RequestInit,
  token?: string | null,
): Promise<T> => {
  const headers = new Headers(init.headers);
  if (token) headers.set("Authorization", `Bearer ${token}`);
  if (init.body && !(init.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  const response = await fetch(`${apiOrigin}${path}`, { ...init, headers });
  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as { message?: string } | null;
    throw new SupportChatError(
      response.status,
      body?.message || `Request failed with status ${response.status}`,
    );
  }
  if (response.status === 204) return undefined as T;
  return response.json() as Promise<T>;
};

export const openGuestConversation = (input: {
  email: string;
  subject?: string;
  body: string;
  clientMessageId: string;
}) =>
  request<GuestOpened>("/SupportChat/guest/conversations", {
    method: "POST",
    body: JSON.stringify({
      email: input.email.trim(),
      subject: input.subject?.trim() || undefined,
      body: input.body,
      clientMessageId: input.clientMessageId,
    }),
  });

export const sendGuestMessage = (input: {
  conversationId: string;
  hubToken: string;
  body: string;
  clientMessageId: string;
}) =>
  request<GuestOpened>(
    `/SupportChat/guest/conversations/${input.conversationId}/messages`,
    {
      method: "POST",
      body: JSON.stringify({
        body: input.body,
        clientMessageId: input.clientMessageId,
      }),
    },
    input.hubToken,
  );
