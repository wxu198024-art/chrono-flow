'use client';

import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import InkBackground from '@/components/InkBackground';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider, useLanguage } from '@/context/LanguageContext';

// 抽取内部 Layout 组件，以便调用 useLanguage 获取页脚字典文案
function LayoutContent({ children }: { children: ReactNode }) {
  const { dict } = useLanguage();

  return (
    <>
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
            {dict.dictionary || 'Dictionary'}
          </Link>
          <span className="text-[var(--border-line)]">•</span>
          <Link href="/terms" className="hover:text-[var(--text-primary)] transition-colors">
            {dict.terms || 'Terms'}
          </Link>
          <span className="text-[var(--border-line)]">•</span>
          <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
            {dict.privacy || 'Privacy'}
          </Link>
        </div>

        <p>{dict.copyright || '© Chrono Flow. All rights reserved.'}</p>
      </footer>
    </>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN" data-theme="dark">
      <head>
        <title>CHRONO–FLOW | Space, Time & The Unseen Self</title>
        <meta
          name="description"
          content="Unveil the unseen self through temporal mechanics, spatiotemporal alignment, and Jungian archetypes."
        />
      </head>
      <body className="min-h-screen flex flex-col justify-between selection:bg-[var(--cinnabar)] selection:text-white relative bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <ThemeProvider>
          <LanguageProvider>
            <LayoutContent>{children}</LayoutContent>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
