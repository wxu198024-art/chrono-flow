'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/app/layout';

interface OriginCoordinates {
  name?: string;
  gender?: string;
  birthDate?: string;
  birthTime?: string;
}

export default function FieldHeader() {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  const [origin, setOrigin] = useState<OriginCoordinates | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('chrono_origin_coordinates');
      if (stored) {
        setOrigin(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse chrono origin coordinates:', e);
    }
  }, []);

  const displayName = origin?.name || (isEn ? 'SEEKER' : isTW ? '探索者' : '探索者');
  const displayDate = origin?.birthDate || '1995-08-18';
  const displayTime = origin?.birthTime || '14:30';

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-4 transition-colors duration-300 relative overflow-hidden">
      {/* 顶部极细爻线 */}
      <div className="absolute top-0 left-0 right-0 yao-yang"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[10px] font-mono text-[var(--cinnabar)] uppercase tracking-widest mb-1">
            {isEn ? 'CHRONO COORDINATES' : isTW ? '時空坐標' : '时空坐标'}
          </div>
          <h1 className="font-serif-title text-xl md:text-2xl text-[var(--text-primary)] font-semibold tracking-wide">
            {displayName}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-[var(--text-secondary)]">
          <div className="px-3 py-1.5 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] flex items-center gap-2">
            <span className="text-[var(--text-muted)]">{isEn ? 'ORIGIN DATE' : isTW ? '原點日期' : '原点日期'}:</span>
            <span className="text-[var(--text-primary)]">{displayDate}</span>
          </div>
          <div className="px-3 py-1.5 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] flex items-center gap-2">
            <span className="text-[var(--text-muted)]">{isEn ? 'TRUE SOLAR TIME' : isTW ? '真太陽時' : '真太阳时'}:</span>
            <span className="text-[var(--text-primary)]">{displayTime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
