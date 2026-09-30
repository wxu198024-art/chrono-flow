'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export type Locale = 'zh-CN' | 'zh-TW' | 'ja' | 'en';

// 标准化语言 Code 方法（支持根据浏览器或传入字符串自动匹配）
export function normalizeLocale(lang: string): Locale {
  if (!lang) return 'zh-CN';
  const l = lang.toLowerCase();
  if (l.includes('tw') || l.includes('hk') || l.includes('hant')) return 'zh-TW';
  if (l.startsWith('ja')) return 'ja';
  if (l.startsWith('en')) return 'en';
  return 'zh-CN';
}

// 扩展接口：向下兼容旧组件依赖的 lang 属性以及任意字典 Key 访问
interface LanguageContextType {
  locale: Locale;
  lang: string; // 向下兼容旧组件的 lang 判断
  setLocale: (locale: Locale) => void;
  dict: Record<string, any>; // 允许任意动态属性访问，消除 TS2339 报错
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh-CN');
  const [dict, setDict] = useState<Record<string, any>>({});

  // 动态读取 JSON 字典
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

  // 实时推导旧组件需要的 lang 简写（'en', 'zh', 等）
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
