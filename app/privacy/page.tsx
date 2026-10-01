'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function PrivacyPage() {
  const { dict } = useLanguage();

  // 1. 防御性获取列表，防止 undefined 导致 .map() 崩溃
  const contentList = Array.isArray(dict?.privacyContent) ? dict.privacyContent : [];

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-[var(--text-secondary)] space-y-6 text-xs leading-relaxed transition-colors duration-300">
      <h1 className="font-serif-title text-2xl text-[var(--text-primary)] uppercase tracking-widest border-b border-[var(--border-line)] pb-4">
        {dict?.privacyTitle || dict?.privacy || '隐私政策'}
      </h1>

      {contentList.length > 0 ? (
        contentList.map((item: any, index: number) => (
          <React.Fragment key={index}>
            <h2 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider pt-2">
              {item.section}
            </h2>
            <p className="leading-relaxed">
              {/* 同时兼容 item.body 和 item.content */}
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
