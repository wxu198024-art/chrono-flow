'use client';

import './globals.css';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import InkBackground from '@/components/InkBackground';
import { Locale, dictionaries } from '@/lib/dictionary';

// 1. 创建全局语言 Context (补齐 lang 别名属性)
interface LanguageContextType {
  locale: Locale;
  lang: 'en' | 'zh';
  setLocale: (locale: Locale) => void;
  dict: typeof dictionaries['en'];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export default function RootLayout({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  // 读取本地存储的语言偏好
  useEffect(() => {
    const savedLocale = localStorage.getItem('chrono_locale') as Locale;
    if (savedLocale && ['en', 'zh-CN', 'zh-TW'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('chrono_locale', newLocale);
  };

  const dict = dictionaries[locale];
  // 计算出简化的 lang 别名，供后续逻辑精确识别 en / zh
  const lang: 'en' | 'zh' = locale === 'en' ? 'en' : 'zh';

  return (
    <html lang={locale} data-theme="dark">
      <head>
        <title>CHRONO–FLOW | Space, Time & The Unseen Self</title>
        <meta
          name="description"
          content="Unveil the unseen self through temporal mechanics, spatiotemporal alignment, and Jungian archetypes."
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between selection:bg-[var(--cinnabar)] selection:text-white relative bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <LanguageContext.Provider value={{ locale, lang, setLocale, dict }}>
          {/* 全局 Canvas 动态背景 (1px 几何爻线 + 向心漩涡水墨) */}
          <InkBackground />

          {/* 顶部统一 Header (包含 Void/Form 阴阳切换与 EN / 繁 / 简 多语言 Popover) */}
          <Header />

          {/* 页面主内容区域 */}
          <main className="flex-grow relative z-10 pt-20 pb-12">
            {children}
          </main>

          {/* 极简页脚 */}
          <footer className="border-t border-[var(--border-line)] py-8 text-center text-[10px] text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-card)] backdrop-blur-md relative z-10 transition-colors duration-300">
            <div className="max-w-md mx-auto mb-6 yao-yang opacity-40"></div>

            {/* 概念与合规导航入口 */}
            <div className="flex justify-center items-center space-x-6 mb-6 text-[var(--text-secondary)] text-[11px]">
              <Link href="/dictionary" className="hover:text-[var(--text-primary)] transition-colors">
                {dict.dictionary}
              </Link>
              <span className="text-[var(--border-line)]">•</span>
              <Link href="/terms" className="hover:text-[var(--text-primary)] transition-colors">
                {dict.terms}
              </Link>
              <span className="text-[var(--border-line)]">•</span>
              <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
                {dict.privacy}
              </Link>
            </div>

            <p>{dict.copyright}</p>
          </footer>
        </LanguageContext.Provider>
      </body>
    </html>
  );
}
