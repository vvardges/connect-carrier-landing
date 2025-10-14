"use client"

import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type ToastProps = {
  message: string;
  type: "success" | "error";
  onClose: () => void;
};

const Toast: React.FC<ToastProps> = ({ message, type, onClose }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-5 left-1/2 -translate-x-1/2 z-[1000] px-4 py-2 rounded shadow-lg text-white 
        ${type === "success" ? "bg-green-600" : "bg-red-600"}`}
    >
      {message}
    </div>
  );
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" } | null>(null);
  const { t } = useTranslation()
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm(
        "service_xkgbohc",
        "template_qt8a994",
        form.current,
        { publicKey: "R-rJXEPoHJaYNENBE" }
      )
      .then(
        () => {
          setToast({ msg: "Message sent successfully!", type: "success" });
          form.current?.reset();
        },
        (error) => {
          setToast({ msg: `Send failed: ${error.text || "Unknown error"}`, type: "error" });
        }
      );
  };

  return (
    <section id="contact" className="relative py-20">
      <div className="absolute left-0 top-0 -z-[1] h-full w-full dark:bg-dark"></div>
      <div/>
      <div className="container px-4">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
            <div className="ud-contact-content-wrapper">
              <div className="ud-contact-title">
                <span className="mb-4 block text-base font-medium text-dark dark:text-white">
                  {t("contact.title")}
                </span>
              </div>

              <div className="py-12 pl-0.5 grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left text-gray-600 dark:text-gray-300">
                <div className="space-y-2">
                  <img src="/images/flags/us.png" alt="USA" className="h-6 mx-auto md:mx-0"style={{ boxShadow: "0px 0px 5px 1px" }} />
                  <h3 className="text-lg lg:text-xl font-semibold">{t("contact.headquarterUSA")}</h3>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">HayWay Group LLC</p>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                    1050 N 3rd St, Laramie,
                    <br /> WY 82072, USA
                  </p>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    +1 307 640 9336
                  </p>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    info@haywaygroup.us
                  </p>
                </div>
                <div className="space-y-2">
                  <img src="/images/flags/de.png" alt="Germany" className="h-6 mx-auto md:mx-0" style={{ boxShadow: "0px 0px 5px 1px" }}/>
                  <h3 className="text-lg lg:text-xl font-semibold">{t("contact.branchGermany")}</h3>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                    Ruhrallee 9, Dortmund, 44139
                    <br /> Germany
                  </p>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    +49 160 123 4567
                  </p>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    info@connectcarrier.de
                  </p>
                </div>
                <div className="space-y-2">
                  <img src="/images/flags/pl.png" alt="Poland" className="h-6 mx-auto md:mx-0 shadow-md" style={{ boxShadow: "0px 0px 5px 1px" }}/>
                  <h3 className="text-lg lg:text-xl font-semibold">{t("contact.branchKrakow")}</h3>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                    Nadbrzezie 15a, 31-983 Kraków
                    <br /> Poland
                  </p>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    +48 888 788 333
                  </p>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    info@sistrans.pl
                  </p>
                </div>
                <div className="space-y-2">
                  <img src="/images/flags/pl.png" alt="Poland" className="h-6 mx-auto md:mx-0" style={{ boxShadow: "0px 0px 5px 1px" }}/>
                  <h3 className="text-lg lg:text-xl font-semibold">{t("contact.branchKatowice")}</h3>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400">
                    Bocheńskiego 67, 40-859 Katowice
                    <br /> Poland
                  </p>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    +48 511 884 988
                  </p>
                  <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    info@sistrans.pl
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <div
              className="wow fadeInUp rounded-lg bg-white px-8 py-10 shadow-testimonial dark:bg-dark-2 dark:shadow-none sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
              data-wow-delay=".2s"
            >
              <h3 className="mb-8 text-2xl font-semibold text-dark dark:text-white md:text-[28px] md:leading-[1.42]">
                {t("contact.sendMessage")}
              </h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-[22px]">
                  <label
                    htmlFor="fullName"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    {t("contact.fullName")}*
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    name="fullName"
                    placeholder="Adam Gelius"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="email"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    {t("contact.email")}*
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="example@yourmail.com"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[22px]">
                  <label
                    htmlFor="tel"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    {t("contact.phone")}*
                  </label>
                  <input
                    id="tel"
                    type="text"
                    name="phone"
                    required
                    placeholder="+49 176 250 5190"
                    className="w-full border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  />
                </div>
                <div className="mb-[30px]">
                  <label
                    htmlFor="message"
                    className="mb-4 block text-sm text-body-color dark:text-dark-6"
                  >
                    {t("contact.message")}*
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={1}
                    required
                    placeholder="type your message here"
                    className="w-full resize-none border-0 border-b border-[#f1f1f1] bg-transparent pb-3 text-dark placeholder:text-body-color/60 focus:border-primary focus:outline-none dark:border-dark-3 dark:text-white"
                  ></textarea>
                </div>
                <div className="mb-0">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-10 py-3 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-primary/90"
                  >
                    {t("contact.send")}
                  </button>
                </div>
              </form>
              {toast && (
                <Toast
                  message={toast.msg}
                  type={toast.type}
                  onClose={() => setToast(null)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
