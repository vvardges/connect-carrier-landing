const hex = (value: number) => value.toString(16).padStart(2, "0");

export const createClientMessageId = () => {
  const cryptoApi = globalThis.crypto;

  if (typeof cryptoApi?.randomUUID === "function") {
    return cryptoApi.randomUUID();
  }

  if (typeof cryptoApi?.getRandomValues === "function") {
    const bytes = cryptoApi.getRandomValues(new Uint8Array(16));
    bytes[6] = (bytes[6] & 0x0f) | 0x40;
    bytes[8] = (bytes[8] & 0x3f) | 0x80;
    const parts = Array.from(bytes, hex);
    return [
      parts.slice(0, 4).join(""),
      parts.slice(4, 6).join(""),
      parts.slice(6, 8).join(""),
      parts.slice(8, 10).join(""),
      parts.slice(10, 16).join(""),
    ].join("-");
  }

  return `id-${Date.now().toString(16)}-${Math.random().toString(16).slice(2, 10)}`;
};
