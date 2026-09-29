'use client';

import React from 'react';
import { useLanguage } from '@/app/layout';

export default function DailyPulse() {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-6 transition-colors duration-300 relative overflow-hidden">
      {/* 顶部极细爻线 */}
      <div className="absolute top-0 left-0 right-0 yao-yin"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
        <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
          {isEn ? 'GRAVITY WAVE PULSE' : isTW ? '今日重力波脈搏' : '今日重力波脉搏'}
        </h2>
        <div className="text-xs font-mono text-[var(--text-muted)]">
          {isEn ? 'PHASE: HIGH TENSION' : '当前相态：高压强折射'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/40 rounded-sm space-y-2">
          <h3 className="text-sm font-medium text-[var(--text-primary)]">
            {isEn ? 'Cognitive Friction' : '认知阻力指数'}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
            {isEn ? 'High mental load. Avoid impulsive decision making.' : '环境期望压强升高，建议降低决策频率，保持观察。'}
          </p>
        </div>

        <div className="p-4 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/40 rounded-sm space-y-2">
          <h3 className="text-sm font-medium text-[var(--text-primary)]">
            {isEn ? 'Anchor Balance' : '锚定内稳态'}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
            {isEn ? 'Stable inner order. Ideal for strategic planning.' : '内部心理防线稳固，适合深层自省与长远布局。'}
          </p>
        </div>

        <div className="p-4 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/40 rounded-sm space-y-2">
          <h3 className="text-sm font-medium text-[var(--text-primary)]">
            {isEn ? 'Boundary Tension' : '界限张力'}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
            {isEn ? 'Critical deficit in precision vector. Say No.' : '裁决因子偏弱，需警惕他人情感绑架，建立明确边界。'}
          </p>
        </div>
      </div>
    </section>
  );
}
