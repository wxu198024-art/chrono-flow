'use client';

import React from 'react';
import { useLanguage } from '@/app/layout';

export default function PrivacyPage() {
  const { dict } = useLanguage();

  return (
    <div className="max-w-3xl mx-auto px-6 py-16 text-[var(--text-secondary)] space-y-6 text-xs leading-relaxed transition-colors duration-300">
      <h1 className="font-serif-title text-2xl text-[var(--text-primary)] uppercase tracking-widest border-b border-[var(--border-line)] pb-4">
        {dict.privacyTitle}
      </h1>

      {dict.privacyContent.map((item, index) => (
        <React.Fragment key={index}>
          <h2 className="text-sm font-semibold text-[var(--text-primary)] uppercase tracking-wider pt-2">
            {item.section}
          </h2>
          <p className="leading-relaxed">
            {item.body}
          </p>
        </React.Fragment>
      ))}
    </div>
  );
}
