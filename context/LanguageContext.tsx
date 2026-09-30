'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, Dictionary } from '@/types/i18n';
import zhCN from '@/locales/zh-CN.json';

export { type Locale };

export function normalizeLocale(lang: string): Locale {
  if (!lang) return 'zh-CN';
  const l = lang.toLowerCase();
  if (l.includes('tw') || l.includes('hk') || l.includes('hant')) return 'zh-TW';
  if (l.startsWith('ja')) return 'ja';
  if (l.startsWith('en')) return 'en';
  return 'zh-CN';
}

interface LanguageContextType {
  locale: Locale;
  lang: string;
  setLocale: (locale: Locale) => void;
  dict: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh-CN');
  // 默认使用同步导入的 zhCN 数据作为初始保障，确保文字第一瞬间全部可见！
  const [dict, setDict] = useState<Dictionary>(zhCN as Dictionary);

  const loadDictionary = async (targetLocale: Locale) => {
    try {
      const dictionary = await import(`@/locales/${targetLocale}.json`);
      setDict((dictionary.default || dictionary) as Dictionary);
    } catch (error) {
      console.warn(`Failed to load dictionary for locale: ${targetLocale}, falling back to zh-CN.`);
      setDict(zhCN as Dictionary);
    }
  };

  useEffect(() => {
    const savedLocale = localStorage.getItem('chrono_locale');
    const activeLocale = savedLocale ? normalizeLocale(savedLocale) : 'zh-CN';
    setLocaleState(activeLocale);
    if (activeLocale !== 'zh-CN') {
      loadDictionary(activeLocale);
    }
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
