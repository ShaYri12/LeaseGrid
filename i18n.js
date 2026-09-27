"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translations directly
import enTranslations from "./public/locales/en.json";
import deTranslations from "./public/locales/de.json";

// Initialize i18next with bundled resources
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslations
      },
      de: {
        translation: deTranslations
      }
    },
    fallbackLng: "en",
    debug: false,
    
    interpolation: {
      escapeValue: false, // React already does escaping
    },

    lng: "en", // Default language
    
    react: {
      useSuspense: false, // Disable suspense to prevent SSR issues
    }
  });

export default i18n;
