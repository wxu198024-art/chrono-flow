'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'zh-CN' | 'zh-TW' | 'ja' | 'en';

export function normalizeLocale(lang: string): Locale {
  if (!lang) return 'zh-CN';
  const l = lang.toLowerCase();
  if (l.includes('tw') || l.includes('hk') || l.includes('hant')) return 'zh-TW';
  if (l.startsWith('ja')) return 'ja';
  if (l.startsWith('en')) return 'en';
  return 'zh-CN';
}

// 优化：为 dict 显式声明 [key: string]: any，允许任意属性安全访问
interface LanguageContextType {
  locale: Locale;
  lang: string;
  setLocale: (locale: Locale) => void;
  dict: Record<string, any> & { [key: string]: any }; 
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh-CN');
  const [dict, setDict] = useState<Record<string, any>>({});

  const loadDictionary = async (targetLocale: Locale) => {
    try {
      const dictionary = await import(`@/locales/${targetLocale}.json`);
      setDict(dictionary.default || dictionary);
    } catch (error) {
      console.warn(`Failed to load dictionary for locale: ${targetLocale}, falling back to zh-CN.`);
      if (targetLocale !== 'zh-CN') {
        const fallbackDict = await import(`@/locales/zh-CN.json`);
        setDict(fallbackDict.default || fallbackDict);
      }
    }
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem('chrono_locale');
    const activeLocale = savedLocale ? normalizeLocale(savedLocale) : 'zh-CN';
    setLocaleState(activeLocale);
    loadDictionary(activeLocale);
  }, []);

  const setLocale = (newLocale: Locale) => {
    const normalized = normalizeLocale(newLocale);
    setLocaleState(normalized);
    localStorage.setItem('chrono_locale', normalized);
    loadDictionary(normalized);
  };

  const lang = locale.startsWith('en') ? 'en' : locale.startsWith('ja') ? 'ja' : 'zh';

  return (
    <LanguageContext.Provider value={{ locale, lang, setLocale, dict }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
