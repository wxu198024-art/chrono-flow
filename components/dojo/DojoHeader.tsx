'use client';

import React from 'react';
import { useLanguage } from '@/app/layout';

export default function DojoHeader() {
  const languageContext = useLanguage();
  const dict = languageContext?.dict || {};

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-300">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)]">
            {dict.dojoOriginAnchor || '时空原点'}
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-[#0284c7]/30 bg-[#0284c7]/10 text-[#38bdf8]">
            {(dict.dojoSpatialDrift || '空间漂移重力差') + ': 800 km'}
          </span>
        </div>
        
        <h1 className="font-serif-title text-xl md:text-2xl text-[var(--text-primary)] tracking-wide uppercase">
          {dict.dojoTitle || '个人时空场域'}
        </h1>
      </div>

      <div className="text-xs text-[var(--text-secondary)] border-l-2 border-[var(--cinnabar)] pl-3 space-y-1">
        <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
          {dict.dojoOriginPillar || '原点之柱'}
        </p>
        <p className="font-mono text-[var(--text-primary)]">
          1992.07.15 — 14:00
        </p>
      </div>
    </section>
  );
}
