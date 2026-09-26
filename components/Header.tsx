'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('EN');

  // 初始化主题（优先读取 localStorage）
  useEffect(() => {
    const savedTheme = localStorage.getItem('chrono_theme') as 'dark' | 'light' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // 切换阴阳主题（虚/实 场域）
  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('chrono_theme', nextTheme);
  };

  const languages = [
    { code: 'EN', name: 'English' },
    { code: 'TC', name: '繁體中文' },
    { code: 'SC', name: '简体中文' },
  ];

  return (
    <header className="w-full border-b border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md fixed top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          href="/" 
          className="font-serif-title text-xl tracking-[0.25em] text-[var(--text-primary)] hover:opacity-80 transition-opacity"
        >
          CHRONO–FLOW
        </Link>

        {/* 动态干支时刻 / 时空场域表示 */}
        <div className="hidden md:flex items-center space-x-2 text-[10px] tracking-[0.2em] text-[var(--text-secondary)] uppercase">
          <span className="cinnabar-dot animate-pulse"></span>
          <span>SPATIOTEMPORAL RHYTHM • UTC</span>
        </div>

        {/* 右侧交互控制区 */}
        <div className="flex items-center space-x-6">
          
          {/* 1. 【阴阳·调和】仪式感切换开关 (零八卦，纯几何抽象) */}
          <button
            onClick={toggleTheme}
            aria-label="Yin / Yang Alignment"
            title={theme === 'dark' ? 'Field: Dark Cyber Zen (Void)' : 'Field: Modern Wabi-Sabi (Form)'}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              {theme === 'dark' ? (
                /* 【虚 / 阴】: 极细虚线圆环 */
                <div className="w-4 h-4 rounded-full border border-dashed border-[var(--text-primary)] opacity-80" />
              ) : (
                /* 【实 / 阳】: 沉静实心钛金圆点 */
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-primary)]" />
              )}
            </div>
            <span className="text-[10px] tracking-[0.2em] text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-colors uppercase hidden sm:inline">
              {theme === 'dark' ? 'VOID' : 'FORM'}
            </span>
          </button>

          <span className="text-[var(--border-line)]">|</span>

          {/* 2. LOCALE 多语言选择器 (毛玻璃 Popover 方案) */}
          <div className="relative">
            <button
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="text-xs tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none flex items-center space-x-1"
            >
              <span>LOCALE • {currentLang}</span>
            </button>

            {/* 语言选择弹窗 */}
            {isLangOpen && (
              <>
                {/* 全屏透明遮罩用于点击外部关闭 */}
                <div 
                  className="fixed inset-0 z-40" 
                  onClick={() => setIsLangOpen(false)} 
                />
                <div className="absolute right-0 mt-3 w-36 py-2 bg-[var(--bg-card)] border border-[var(--border-line)] backdrop-blur-xl shadow-2xl z-50 rounded-sm">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`w-full text-left px-4 py-1.5 text-xs tracking-wider transition-colors flex items-center justify-between ${
                        currentLang === lang.code
                          ? 'text-[var(--text-primary)] font-medium bg-[var(--accent-glow)]'
                          : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-line)]'
                      }`}
                    >
                      <span>{lang.name}</span>
                      {currentLang === lang.code && (
                        <span className="w-1 h-1 rounded-full bg-[var(--cinnabar)]" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>

      </div>
    </header>
  );
}
