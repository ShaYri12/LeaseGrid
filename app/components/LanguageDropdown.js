import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w320/us.png" },
  { code: "de", name: "German", flag: "https://flagcdn.com/w320/de.png" },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const [currentLang, setCurrentLang] = useState(() => {
    const savedLang = localStorage.getItem("selectedLanguage");
    return savedLang
      ? languages.find((lang) => lang.code === savedLang) || languages[0]
      : languages[0];
  });

  // Function to change language and update the state with the correct flag
  const changeLanguage = (lng) => {
    if (lng !== i18n.language) {
      // Only change language if it's different
      i18n.changeLanguage(lng);
      const selectedLang = languages.find((lang) => lang.code === lng);
      setCurrentLang(selectedLang);
      localStorage.setItem("selectedLanguage", lng);

      // Use pathname to update the URL
      const newPath = lng === "en" ? "/en" : "/de";
      window.history.pushState({}, "", newPath);
      setIsOpen(false);
    }
  };

  // Handle URL-based language changes
  const updateLanguageFromURL = () => {
    const pathLang = window.location.pathname.split("/")[1]; // Get language from URL (e.g., /en or /de)
    const languageCode = pathLang === "de" ? "de" : "en"; // Default to "en" if not "de"

    if (languageCode !== i18n.language) {
      // Update i18n language
      changeLanguage(languageCode);
    } else {
      // Ensure the currentLang (flag) updates even if i18n.language is already correct
      const selectedLang = languages.find((lang) => lang.code === languageCode);
      setCurrentLang(selectedLang);
    }
  };

  useEffect(() => {
    // Update language and flag based on the current URL on component mount
    updateLanguageFromURL();

    const handlePopState = () => {
      updateLanguageFromURL(); // Handle back/forward navigation
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between py-1 items-center w-full text-sm font-medium text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <img
            src={currentLang.flag}
            alt={`${currentLang.name} flag`}
            className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-contain"
          />
          <svg
            className="-mr-1 ml-0 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.86l3.71-3.65a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 max-h-60 overflow-hidden rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 overflow-y-auto"
            style={{ maxHeight: "15rem" }}
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className="w-5 h-5 mr-2"
                />
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
