'use client';

import React from 'react';
import { useLanguage } from '@/app/layout';

export default function FieldHeader() {
  const languageContext = useLanguage();
  const lang = languageContext?.language || 'zh-CN';
  const dict = languageContext?.dict?.chronoField?.header || {
    fieldStatus: '场域状态',
    statusCalibrated: '已校准',
    calibrateAction: '场域重校准',
    modeForm: '实态模式',
    modeVoid: '虚态模式',
  };

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-300">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)]">
            [ {dict.fieldStatus} ]
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono">
            ● {dict.statusCalibrated}
          </span>
        </div>
        
        <h1 className="font-serif-title text-xl md:text-2xl text-[var(--text-primary)] tracking-wide uppercase">
          {languageContext?.dict?.chronoField?.title || '个人时空场域'}
        </h1>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          {languageContext?.dict?.chronoField?.subtitle || '时空状态与内稳态解析控制台'}
        </p>
      </div>

      <div className="text-xs text-[var(--text-secondary)] border-l-2 border-[var(--cinnabar)] pl-3 space-y-1">
        <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
          CHRONO COORDINATES
        </p>
        <p className="font-mono text-[var(--text-primary)] text-sm">
          1992.07.15 — 14:00 (TRUE SOLAR)
        </p>
      </div>
    </section>
  );
}
