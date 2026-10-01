'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useTheme } from '@/context/ThemeContext';

export default function Header() {
  const { locale, setLocale } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-line)] bg-[var(--bg-card)]/80 backdrop-blur-md transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* LOGO / 站点名称 */}
        <Link href="/" className="font-serif-title text-lg tracking-widest text-[var(--text-primary)] hover:opacity-80 transition-opacity">
          CHRONO <span className="text-xs text-[var(--cinnabar)]">矩阵</span>
        </Link>

        {/* 全局唯一控制区：风格与语言 */}
        <div className="flex items-center space-x-4 text-xs font-mono">
          {/* 风格切换（青黑/暖沙） */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1.5 rounded-full border border-[var(--border-line)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-[var(--border-line-hover)] transition-all flex items-center space-x-1.5 cursor-pointer"
            title="切换场域风格"
          >
            <span className="w-2 h-2 rounded-full bg-[var(--cinnabar)]"></span>
            {/* 更加清晰的文字状态表达：显示当前风格类型 */}
            <span>{theme === 'dark' ? '青黑' : '暖沙'}</span>
          </button>

          {/* 语言切换：对应你的 setLocale('zh-CN') 和 setLocale('en') */}
          <div className="flex items-center border border-[var(--border-line)] rounded-full overflow-hidden">
            <button
              onClick={() => setLocale('zh-CN')}
              className={`px-2.5 py-1 transition-colors ${
                locale === 'zh-CN'
                  ? 'bg-[var(--text-primary)] text-[var(--bg-card)] font-bold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              中
            </button>
            <button
              onClick={() => setLocale('en')}
              className={`px-2.5 py-1 transition-colors ${
                locale === 'en'
                  ? 'bg-[var(--text-primary)] text-[var(--bg-card)] font-bold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              EN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
