"use client";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import KeyFeatures from "../components/KeyFeatures";
import Testimonials from "../components/Testimonials";
import WhyChoose from "../components/WhyChoose";
import FrequentlyAskedQuestion from "../components/FrequentlyAskedQuestion";
import ChoosePlan from "../components/ChoosePlan";

import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import i18n from "../../i18n";
import { I18nextProvider } from "react-i18next";

const LanguagePage = ({ params }) => {
  const { i18n } = useTranslation();

  // Unwrap the params with React.use()
  const lang = React.use(params).lang; // Unwrap params

  useEffect(() => {
    const selectedLang = lang === "de" ? "de" : "en"; // Default to 'en'

    // Change language based on the URL
    i18n.changeLanguage(selectedLang);
    localStorage.setItem("selectedLanguage", selectedLang);
  }, [i18n, lang]);

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

// Static paths for languages
export const getStaticPaths = async () => {
  return {
    paths: [{ params: { lang: "en" } }, { params: { lang: "de" } }],
    fallback: false, // Return a 404 page for any other paths
  };
};

export default LanguagePage;
