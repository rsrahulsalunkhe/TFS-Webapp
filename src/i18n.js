import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from '../public/locales/en.json'
import hiTranslation from '../public/locales/hi.json'

i18n.use(initReactI18next).init({
    resources: {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
    },
    lng: localStorage.getItem("language") || "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;