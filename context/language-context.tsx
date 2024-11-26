"use client";

import type { Language } from "@/constants/translations";
import { translations } from "@/constants/translations";
import React, { createContext, useContext, useState, useEffect } from "react";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (
    key: keyof typeof translations.en
  ) => (typeof translations.en)[keyof typeof translations.en];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr"); // Default to French

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get browser language
      const browserLang = window.navigator.language.toLowerCase();
      
      // Check if language starts with 'fr' (includes fr-FR, fr-CA, etc.)
      const isFrench = browserLang.startsWith('fr');
      setLanguage(isFrench ? 'fr' : 'en');
    }
  }, []); // Run once on mount

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
