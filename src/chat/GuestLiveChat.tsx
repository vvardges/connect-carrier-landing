"use client";

import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import ChatConversation from "./ChatConversation";
import { messageOf, useGuestChat } from "./GuestChatProvider";
import { createClientMessageId } from "./id";

const fileSignature = (email: string, subject: string, body: string) =>
  `${email}::${subject}::${body}`;

const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export default function GuestLiveChat() {
  const { t } = useTranslation();
  const { guest, status, error: hubError, messages, beginGuest, continueGuest } = useGuestChat();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [emailReady, setEmailReady] = useState(false);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [sending, setSending] = useState(false);
  const [failedSend, setFailedSend] = useState(false);
  const [error, setError] = useState("");
  const pending = useRef<{ id: string; signature: string } | null>(null);

  const confirmEmail = () => {
    const guestEmail = email.trim();
    if (!guestEmail) {
      setError(t("liveChat.emailRequired"));
      return;
    }
    if (!isEmail(guestEmail)) {
      setError(t("liveChat.emailInvalid"));
      return;
    }
    setError("");
    setEmail(guestEmail);
    setEmailReady(true);
  };

  const start = async () => {
    const guestEmail = email.trim();
    if (!isEmail(guestEmail)) {
      setEmailReady(false);
      setError(t("liveChat.emailRequired"));
      return;
    }
    if (subject.trim().length > 256) {
      setError(t("liveChat.subjectTooLong"));
      return;
    }
    if (!body.trim()) {
      setError(t("liveChat.bodyOrFile"));
      return;
    }
    if (body.length > 4000) {
      setError(t("liveChat.messageTooLong"));
      return;
    }
    const signature = fileSignature(guestEmail, subject, body);
    const clientMessageId =
      pending.current?.signature === signature
        ? pending.current.id
        : createClientMessageId();
    pending.current = { id: clientMessageId, signature };
    setSending(true);
    setError("");
    try {
      await beginGuest({
        email: guestEmail,
        subject,
        body: body.trim(),
        clientMessageId,
      });
      pending.current = null;
      setFailedSend(false);
      setSubject("");
      setBody("");
    } catch (startError) {
      setFailedSend(true);
      setError(messageOf(startError));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="live-chat">
      {open && (
        <section
          className="fixed bottom-[92px] right-6 z-[1000] flex h-[520px] max-h-[calc(100dvh-120px)] w-[360px] max-w-[calc(100vw-32px)] flex-col overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(21,21,21,0.16)] dark:bg-[#233044]"
          aria-label={t("liveChat.title")}
        >
          {guest ? (
            <ChatConversation
              title={guest.subject || "Guest"}
              status={status}
              error={hubError}
              messages={messages}
              onClose={() => setOpen(false)}
              onSend={(input) =>
                continueGuest({
                  body: input.body.trim(),
                  clientMessageId: input.clientMessageId,
                })
              }
            />
          ) : (
            <form
              className="relative z-[2] flex flex-col gap-2 p-4"
              onSubmit={(event) => {
                event.preventDefault();
                if (!emailReady) {
                  confirmEmail();
                  return;
                }
                void start();
              }}
            >
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 dark:border-white/10">
                <p className="m-0 text-base font-semibold text-gray-900 dark:text-gray-100">
                  {t("liveChat.title")}
                </p>
                <button
                  type="button"
                  className="border-0 bg-transparent text-xl leading-none text-gray-500"
                  onClick={() => setOpen(false)}
                  aria-label={t("liveChat.close")}
                >
                  ×
                </button>
              </div>
              {!emailReady ? (
                <>
                  <p className="m-0 text-sm leading-5 text-gray-700 dark:text-gray-300">
                    {t("liveChat.emailRequired")}
                  </p>
                  <input
                    type="email"
                    value={email}
                    placeholder={t("liveChat.email")}
                    autoComplete="email"
                    className="w-full rounded-lg border border-gray-100 px-3 py-2 text-sm outline-none dark:border-white/10 dark:bg-[#1a2332] dark:text-gray-100"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  <button
                    type="submit"
                    className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    {t("liveChat.continue")}
                  </button>
                </>
              ) : (
                <>
                  <input
                    value={subject}
                    placeholder={t("liveChat.subject")}
                    className="w-full rounded-lg border border-gray-100 px-3 py-2 text-sm outline-none dark:border-white/10 dark:bg-[#1a2332] dark:text-gray-100"
                    onChange={(event) => setSubject(event.target.value)}
                  />
                  <textarea
                    value={body}
                    placeholder={t("liveChat.placeholder")}
                    className="min-h-[100px] w-full rounded-lg border border-gray-100 px-3 py-2 text-sm outline-none dark:border-white/10 dark:bg-[#1a2332] dark:text-gray-100"
                    onChange={(event) => setBody(event.target.value)}
                  />
                  <button
                    type="submit"
                    disabled={sending}
                    className="rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white disabled:cursor-default disabled:opacity-50 hover:bg-primary/90"
                  >
                    {failedSend ? t("liveChat.retry") : t("liveChat.send")}
                  </button>
                </>
              )}
              {error && <p className="m-0 text-xs text-red-600">{error}</p>}
            </form>
          )}
        </section>
      )}
      <button
        type="button"
        className="fixed bottom-6 right-6 z-[1000] h-14 w-14 cursor-pointer rounded-full border-0 bg-primary text-sm font-medium text-white shadow-[0_8px_24px_rgba(21,21,21,0.16)] hover:bg-primary/90"
        onClick={() => setOpen((current) => !current)}
      >
        {t("liveChat.chat")}
      </button>
    </div>
  );
}
