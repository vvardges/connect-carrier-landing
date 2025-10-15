"use client"

import { useTranslation } from "react-i18next";

import SectionTitle from "../Common/SectionTitle";
import SingleFaq from "./SingleFaq";

export default function Faq() {
  const { t } = useTranslation();

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[30px] lg:pt-[200px]">
      <div className="container">
        <SectionTitle
          title={t("faq.title")}
          paragraph={t("faq.subtitle")}
          width="640px"
          center
        />

        <div className="-mx-4 mt-[60px] flex flex-wrap lg:mt-20">
          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              id={1}
              question={t("faq.step1.title")}
              answer={
                <div>
                  <p>{t("faq.step1.content")}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>{t("faq.step1.fields.email")}</li>
                    <li>{t("faq.step1.fields.password")}</li>
                    <li>{t("faq.step1.fields.fullName")}</li>
                    <li>{t("faq.step1.fields.companyName")}</li>
                    <li>{t("faq.step1.fields.vatNumber")}</li>
                  </ul>
                  <p className="mt-2">
                    {t("faq.step1.action")}
                  </p>
                </div>
              }
            />

            <SingleFaq
              id={2}
              question={t("faq.step2.title")}
              answer={
                <div>
                  <p>{t("faq.step2.content")}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>{t("faq.step2.item1")}</li>
                    <li>{t("faq.step2.item2")}</li>
                  </ul>
                </div>
              }
            />

            <SingleFaq
              id={3}
              question={t("faq.step3.title")}
              answer={
                <div>
                  <p>{t("faq.step3.content")}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>{t("faq.step3.items.companyDetails")}</li>
                    <li>{t("faq.step3.items.addressLine1")}</li>
                    <li>{t("faq.step3.items.location")}</li>
                    <li>{t("faq.step3.items.phone")}</li>
                    <li>{t("faq.step3.items.domiciles")}</li>
                    <li>{t("faq.step3.items.operatingLicense")}</li>
                    <li>{t("faq.step3.items.insuranceDocs")}</li>
                    <li>{t("faq.step3.items.paymentInfo")}</li>
                    <li>{t("faq.step3.items.equipmentInventory")}</li>
                  </ul>
                </div>
              }
            />
          </div>

          <div className="w-full px-4 lg:w-1/2">
            <SingleFaq
              id={4}
              question={t("faq.step4.title")}
              answer={
                <div>
                  <p>{t("faq.step4.content")}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>{t("faq.step4.item1")}</li>
                    <li>{t("faq.step4.item2")}</li>
                    <li>{t("faq.step4.item3")}</li>
                  </ul>
                </div>
              }
            />

            <SingleFaq
              id={5}
              question={t("faq.step5.title")}
              answer={
                <div>
                  <p>{t("faq.step5.content")}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>{t("faq.step5.item1")}</li>
                    <li>{t("faq.step5.item2")}</li>
                    <li>{t("faq.step5.item3")}</li>
                  </ul>
                </div>
              }
            />

            <SingleFaq
              id={6}
              question={t("faq.step6.title")}
              answer={
                <div>
                  <p>{t("faq.step6.content")}</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>{t("faq.step6.item1")}</li>
                    <li>{t("faq.step6.item2")}</li>
                  </ul>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
