"use client";

import type { Language } from "@/constants/translations";
import { useEffect, useState } from "react";

export function useLanguage(): Language {
  const [language, setLanguage] = useState<Language>("en"); // Set default to English

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Get the browser's language
      const browserLang = window.navigator.language.toLowerCase();
      console.log("Browser language:", browserLang); // Debug log

      // Check if the language starts with 'fr'
      const isFrench = browserLang.startsWith("fr");
      setLanguage(isFrench ? "fr" : "en");
    }
  }, []);

  return language;
}
