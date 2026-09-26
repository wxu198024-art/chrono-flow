'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/layout';
import { Locale } from '@/lib/dictionary';

export default function Header() {
  const { locale, setLocale, dict } = useLanguage();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentTheme = (document.documentElement.getAttribute('data-theme') as 'dark' | 'light') || 'dark';
    setTheme(currentTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages: { code: Locale; label: string }[] = [
    { code: 'en', label: 'English (EN)' },
    { code: 'zh-TW', label: '繁體中文' },
    { code: 'zh-CN', label: '简体中文' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-card)] backdrop-blur-md border-b border-[var(--border-line)] px-6 py-4 flex justify-between items-center text-xs tracking-widest uppercase transition-colors duration-300">
      
      {/* 1. Logo 区域 */}
      <Link href="/" className="flex items-center space-x-3 font-serif-title font-bold text-sm text-[var(--text-primary)] hover:opacity-80 transition-opacity">
        <span className="cinnabar-dot"></span>
        <span>{dict.brand}</span>
        {dict.subtitle && (
          <span className="text-[var(--text-muted)] font-normal text-[11px] hidden sm:inline">
            / {dict.subtitle}
          </span>
        )}
      </Link>

      {/* 2. 今日时空节律 (完全读取字典) */}
      <div className="hidden md:flex items-center space-x-2 stems-matrix text-[11px]">
        <span>{dict.todayRhythm}</span>
      </div>

      {/* 3. 右侧控制区：虚/实 场域切换 + LOCALE 语言切换 */}
      <div className="flex items-center space-x-6 text-[var(--text-secondary)]">
        
        {/* 【虚 / 实】场域切换按钮 */}
        <button
          onClick={toggleTheme}
          className="flex items-center space-x-2 hover:text-[var(--text-primary)] transition-colors text-[11px] font-medium"
          title="Toggle Theme"
        >
          <span className={`w-3.5 h-3.5 rounded-full border border-[var(--text-secondary)] flex items-center justify-center transition-all ${
            theme === 'dark' ? 'border-dashed' : 'border-solid bg-[var(--text-primary)]'
          }`}>
            {theme === 'dark' && <span className="w-1.5 h-1.5 rounded-full bg-[var(--cinnabar)]"></span>}
          </span>
          <span>{theme === 'dark' ? dict.themeDark : dict.themeLight}</span>
        </button>

        <span className="text-[var(--border-line)]">•</span>

        {/* 多语言切换 Popover */}
        <div className="relative" ref={langDropdownRef}>
          <button
            onClick={() => setIsLangOpen(!isLangOpen)}
            className="flex items-center space-x-1 hover:text-[var(--text-primary)] transition-colors text-[11px] font-medium uppercase"
          >
            <span>LOCALE</span>
            <span className="text-[var(--text-muted)]">•</span>
            <span className="text-[var(--text-primary)]">
              {locale === 'en' ? 'EN' : locale === 'zh-TW' ? '繁' : '简'}
            </span>
            <svg
              className={`w-3 h-3 ml-0.5 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* 下拉 Popover 菜单 */}
          {isLangOpen && (
            <div className="absolute right-0 mt-3 w-36 bg-[var(--bg-card)] border border-[var(--border-line)] backdrop-blur-xl shadow-2xl rounded-sm py-1.5 z-50">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLocale(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`w-full text-left px-4 py-2 text-[11px] tracking-wider transition-colors flex items-center justify-between ${
                    locale === lang.code
                      ? 'text-[var(--text-primary)] bg-[var(--accent-glow)] font-medium'
                      : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--input-bg)]'
                  }`}
                >
                  <span>{lang.label}</span>
                  {locale === lang.code && <span className="cinnabar-dot"></span>}
                </button>
              ))}
            </div>
          )}
        </div>

      </div>

    </header>
  );
}
