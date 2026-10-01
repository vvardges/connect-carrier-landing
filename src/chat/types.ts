export type ChatConnectionStatus =
  | "idle"
  | "connecting"
  | "connected"
  | "reconnecting"
  | "disconnected"
  | "error";

export type SupportSide = "Company" | "Support" | "Guest";

export type SupportAttachment = {
  attachmentId: number;
  fileName: string;
  fileUrl: string;
};

export type SupportMessage = {
  messageId: string;
  conversationId: string;
  senderUserId: string | null;
  senderUserName: string | null;
  senderSide: SupportSide;
  body: string | null;
  clientMessageId: string;
  createdAtUtc: string;
  seenByCompany: boolean;
  seenBySupport: boolean;
  attachments: SupportAttachment[];
  email?: string | null;
};

export type GuestOpened = {
  conversationId: string;
  messageId: string;
  subject: string;
  body: string | null;
  createdAtUtc: string;
  hubToken: string;
};

export type GuestSession = {
  conversationId: string;
  hubToken: string;
  subject: string;
  expiresAt: number;
};

export type ConversationSeen = {
  conversationId: string;
  seenBySide: "Company" | "Support";
  lastReadMessageId: string;
  lastReadCreatedAtUtc: string;
};
