'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsPage() {
  const { dict } = useLanguage();

  // 安全获取 termsContent 数组，防范 undefined 导致的 .map() 崩溃
  const contentList = Array.isArray(dict?.termsContent) ? dict.termsContent : [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-[var(--text-secondary)] space-y-6 text-xs leading-relaxed transition-colors duration-300">
      <h1 className="font-serif-title text-2xl text-[var(--text-primary)] uppercase tracking-widest border-b border-[var(--border-line)] pb-4">
        {dict?.termsTitle || dict?.terms || '服务条款'}
      </h1>
      
      {contentList.length > 0 ? (
        contentList.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <h2 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider pt-2">
              {item.section}
            </h2>
            <p className="leading-relaxed">
              {item.body || item.content}
            </p>
          </React.Fragment>
        ))
      ) : (
        <p className="text-[var(--text-muted)] font-mono">加载中...</p>
      )}
    </div>
  );
}
