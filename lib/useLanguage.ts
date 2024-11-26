'use client';

import { useEffect, useState } from 'react';
import type { Language } from '@/constants/translations';

export function useLanguage(): Language {
  const [language, setLanguage] = useState<Language>('fr'); // Set default to French

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Get the browser's language
      const browserLang = window.navigator.language.toLowerCase();
      console.log('Browser language:', browserLang); // Debug log
      
      // Check if the language starts with 'fr'
      const isFrench = browserLang.startsWith('fr');
      setLanguage(isFrench ? 'fr' : 'en');
    }
  }, []);

  return language;
}
