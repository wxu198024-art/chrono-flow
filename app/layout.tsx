'use client';

import './globals.css';
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import InkBackground from '@/components/InkBackground';
import { Locale, dictionaries } from '@/lib/dictionary';

// 1. 全局 Context 接口定义 (包含 Locale 与 Theme 虚实状态)
interface LanguageContextType {
  locale: Locale;
  lang: 'en' | 'zh';
  theme: 'dark' | 'light';
  setLocale: (locale: Locale) => void;
  toggleTheme: () => void;
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
  const [theme, setThemeState] = useState<'dark' | 'light'>('dark');

  // 读取本地存储的语言与主题偏好
  useEffect(() => {
    const savedLocale = localStorage.getItem('chrono_locale') as Locale;
    if (savedLocale && ['en', 'zh-CN', 'zh-TW'].includes(savedLocale)) {
      setLocaleState(savedLocale);
    }
    const currentTheme = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
    setThemeState(currentTheme);
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('chrono_locale', newLocale);
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setThemeState(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const dict = dictionaries[locale] || dictionaries['en'];
  const lang: 'en' | 'zh' = locale === 'en' ? 'en' : 'zh';

  return (
    <html lang={locale} data-theme={theme}>
      <head>
        <title>CHRONO–FLOW | Space, Time & The Unseen Self</title>
        <meta
          name="description"
          content="Unveil the unseen self through temporal mechanics, spatiotemporal alignment, and Jungian archetypes."
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between selection:bg-[var(--cinnabar)] selection:text-white relative bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <LanguageContext.Provider value={{ locale, lang, theme, setLocale, toggleTheme, dict }}>
          {/* 全局 Canvas 动态背景 */}
          <InkBackground />

          {/* 顶部统一 Header */}
          <Header />

          {/* 页面主内容区域 */}
          <main className="flex-grow relative z-10 pt-20 pb-12">
            {children}
          </main>

          {/* 极简页脚 */}
          <footer className="border-t border-[var(--border-line)] py-8 text-center text-[10px] text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-card)] backdrop-blur-md relative z-10 transition-colors duration-300">
            <div className="max-w-md mx-auto mb-6 yao-yang opacity-40"></div>

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
