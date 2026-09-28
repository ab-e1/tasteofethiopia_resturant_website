'use client';

import React, { createContext, useContext, useState, useEffect, useTransition } from 'react';

export type Language = 'nl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (nl: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'taste_of_ethiopia_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('nl');
  const [, startTransition] = useTransition();

  // Load persisted language from URL param or localStorage on client mount
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLang = params.get('lang') as Language | null;
      if (urlLang === 'nl' || urlLang === 'en') {
        setLanguageState(urlLang);
        localStorage.setItem(STORAGE_KEY, urlLang);
        document.documentElement.lang = urlLang;
        return;
      }

      const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null;
      if (savedLang === 'nl' || savedLang === 'en') {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        document.documentElement.lang = 'nl';
      }
    } catch {
      // Fallback gracefully if localStorage is disabled or restricted
    }
  }, []);

  const setLanguage = (lang: Language) => {
    startTransition(() => {
      setLanguageState(lang);
    });

    try {
      localStorage.setItem(STORAGE_KEY, lang);
      document.documentElement.lang = lang;
    } catch {
      // Ignore localStorage errors
    }
  };

  const t = (nl: string, en: string): string => {
    return language === 'en' ? en : nl;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
