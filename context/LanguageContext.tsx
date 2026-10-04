'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { LOCALES, LOCALE_META, type Locale } from '@/types/i18n'

import en from '@/locales/en.json'
import ja from '@/locales/ja.json'
import zhTW from '@/locales/zh-TW.json'
import zhCN from '@/locales/zh-CN.json'

const translations: Record<Locale, typeof en> = {
  'en': en,
  'ja': ja,
  'zh-TW': zhTW,
  'zh-CN': zhCN,
}

export type LanguageContextType = {
  language: Locale
  setLanguage: (lang: Locale) => void
  t: typeof en
  // 增加向下兼容的别名导出
  lang: Locale
  locale: Locale
  dict: typeof en
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('chrono_locale') as Locale
    if (saved && LOCALES.includes(saved)) {
      setLanguage(saved)
    }
  }, [])

  const handleSetLanguage = (lang: Locale) => {
    setLanguage(lang)
    localStorage.setItem('chrono_locale', lang)
  }

  const currentDict = translations[language] || en

  const value: LanguageContextType = {
    language,
    setLanguage: handleSetLanguage,
    t: currentDict,
    // 映射兼容别名：满足老代码对 lang, locale, dict 的读取
    lang: language,
    locale: language,
    dict: currentDict,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
