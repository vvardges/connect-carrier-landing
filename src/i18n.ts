import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonDe from "@/locales/de/common.json";
import commonEn from "@/locales/en/common.json";
import commonPl from "@/locales/pl/common.json";
// import commonRu from "@/locales/ru/common.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: { translation: commonEn },
    // ru: { translation: commonRu },
    pl: { translation: commonPl },
    de: { translation: commonDe },
  },
});

export default i18n;
