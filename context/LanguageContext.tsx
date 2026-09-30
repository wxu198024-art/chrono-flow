'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import { Locale, Dictionary } from '@/types/i18n';

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

// 核心：创建防崩溃 Proxy，当读取的 Key 不存在时，返回既是数组又是对象的空值，防止 .map() 或属性读取崩溃
function createSafeDictionary(rawDict: Record<string, any> = {}): Dictionary {
  return new Proxy(rawDict, {
    get(target, prop: string | symbol) {
      if (typeof prop === 'symbol') return Reflect.get(target, prop);
      
      // 如果 JSON 中已定义该属性，直接返回
      if (prop in target && target[prop] !== undefined) {
        return target[prop];
      }

      // 如果未定义（如 SSG 预渲染阶段或 JSON 尚未加载完成）：
      // 创建一个既能当作空数组 .map()，又能当作空对象/字符串调用的 Safe Standard Array
      const safeFallback: any = [];
      safeFallback.toString = () => '';
      safeFallback.valueOf = () => '';
      
      return safeFallback;
    },
  });
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('zh-CN');
  // 初始即挂载带 Proxy 保护的安全字典
  const [dict, setDict] = useState<Dictionary>(() => createSafeDictionary());

  const loadDictionary = async (targetLocale: Locale) => {
    try {
      const dictionary = await import(`@/locales/${targetLocale}.json`);
      setDict(createSafeDictionary(dictionary.default || dictionary));
    } catch (error) {
      console.warn(`Failed to load dictionary for locale: ${targetLocale}, falling back to zh-CN.`);
      if (targetLocale !== 'zh-CN') {
        try {
          const fallbackDict = await import(`@/locales/zh-CN.json`);
          setDict(createSafeDictionary(fallbackDict.default || fallbackDict));
        } catch (e) {
          setDict(createSafeDictionary());
        }
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
