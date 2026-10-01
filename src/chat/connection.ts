import * as signalR from "@microsoft/signalr";

import type { ChatConnectionStatus, ConversationSeen, SupportMessage } from "./types";

const apiOrigin = String(process.env.NEXT_PUBLIC_API_BASE_URL ?? "").replace(/\/$/, "");

type Handlers = {
  onMessageCreated: (message: SupportMessage) => void;
  onConversationSeen: (seen: ConversationSeen) => void;
  onStatus: (status: ChatConnectionStatus, error?: string) => void;
};

let connection: signalR.HubConnection | null = null;
let handlers: Handlers | null = null;
let tokenReader = () => "";
let generation = 0;
let startPromise: Promise<void> | null = null;

const isUp = (hub: signalR.HubConnection) =>
  hub.state === signalR.HubConnectionState.Connected
  || hub.state === signalR.HubConnectionState.Connecting
  || hub.state === signalR.HubConnectionState.Reconnecting;

export const bindSupportChatHandlers = (next: Handlers) => {
  handlers = next;
};

export const setSupportChatTokenReader = (reader: () => string) => {
  tokenReader = reader;
};

const createHub = () => {
  const hub = new signalR.HubConnectionBuilder()
    .withUrl(`${apiOrigin}/hubs/support-chat`, {
      accessTokenFactory: () => tokenReader(),
      withCredentials: false,
    })
    .withAutomaticReconnect()
    .build();

  hub.on("MessageCreated", (message: SupportMessage) => {
    handlers?.onMessageCreated(message);
  });
  hub.on("ConversationSeen", (seen: ConversationSeen) => {
    handlers?.onConversationSeen(seen);
  });
  hub.onreconnecting(() => {
    if (connection === hub) handlers?.onStatus("reconnecting");
  });
  hub.onreconnected(() => {
    if (connection !== hub) return;
    handlers?.onStatus("connected");
  });
  hub.onclose((error) => {
    if (connection !== hub) return;
    handlers?.onStatus("disconnected", error?.message);
  });
  return hub;
};

const startHub = async (myGeneration: number) => {
  if (!tokenReader()) return;
  if (!connection) connection = createHub();
  handlers?.onStatus("connecting");
  try {
    await connection.start();
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    handlers?.onStatus("error", message);
    throw error;
  }
  if (myGeneration !== generation) {
    const hub = connection;
    connection = null;
    if (hub) await hub.stop();
    return;
  }
  handlers?.onStatus("connected");
};

export const startSupportChat = async () => {
  if (connection && isUp(connection)) return;
  if (startPromise) return startPromise;
  const myGeneration = generation;
  startPromise = startHub(myGeneration).finally(() => {
    if (generation === myGeneration) startPromise = null;
  });
  return startPromise;
};

export const stopSupportChat = async () => {
  generation += 1;
  const hub = connection;
  connection = null;
  startPromise = null;
  if (!hub) return;
  await hub.stop();
};
