"use client";
import React, { useEffect } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import KeyFeatures from "./KeyFeatures";
import Testimonials from "./Testimonials";
import WhyChoose from "./WhyChoose";
import FrequentlyAskedQuestion from "./FrequentlyAskedQuestion";
import ChoosePlan from "./ChoosePlan";

import { useTranslation } from "react-i18next";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

const LanguagePageClient = ({ lang }) => {
  const { i18n: i18nInstance } = useTranslation();
  
  useEffect(() => {
    const getLanguage = () => {
      if (typeof window !== "undefined") {
        const pathLang = window.location.pathname.split("/")[1];
        const storedLang = localStorage.getItem("selectedLanguage");
        return pathLang === "de" ? "de" : storedLang || "en";
      }
      return lang || "en";
    };
  
    const selectedLang = getLanguage();
  
    // Ensure i18n is ready before changing the language
    if (i18nInstance.isInitialized) {
      i18nInstance.changeLanguage(selectedLang).catch(err => {
        console.error("Error changing language:", err);
      });
      localStorage.setItem("selectedLanguage", selectedLang);
    }
  }, [i18nInstance, lang]);
  

  return (
    <I18nextProvider i18n={i18n}>
      <Header />
      <Hero />
      <KeyFeatures />
      <Testimonials />
      <ChoosePlan />
      <WhyChoose />
      <FrequentlyAskedQuestion />
      <Footer />
    </I18nextProvider>
  );
};

export default LanguagePageClient;
