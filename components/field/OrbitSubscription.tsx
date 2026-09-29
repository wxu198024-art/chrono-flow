'use client';

import React from 'react';
import { useLanguage } from '@/app/layout';

export default function OrbitSubscription() {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  // 12 个时空环（12 个月）
  const cycles = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-6 transition-all duration-300 relative overflow-hidden">
      {/* 顶部极细爻线 */}
      <div className="absolute top-0 left-0 right-0 yao-yin"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
        <div>
          <div className="inline-flex items-center gap-2 text-[10px] font-mono text-[var(--cinnabar)] uppercase tracking-widest mb-1">
            <span>[ LEVEL 3 ]</span>
            <span>•</span>
            <span>{isEn ? '52-WEEK GRAVITY TRAJECTORY' : isTW ? '52周重力痕跡' : '52周重力痕迹'}</span>
          </div>
          <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
            {isEn ? '52-WEEK GRAVITY TRAJECTORY' : isTW ? '52周重力痕跡與自然週期對齊' : '52周重力痕迹与自然周期对齐'}
          </h2>
        </div>
        <div className="text-xs font-mono text-[var(--text-muted)]">
          {isEn ? 'STATUS: UNCALIBRATED' : '状态：未开启时空追踪'}
        </div>
      </div>

      {/* 52周重力痕迹 - 12月度时空网格 */}
      <div className="relative border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded p-6 space-y-6">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 opacity-30 blur-[1px]">
          {cycles.map((cycle) => (
            <div key={cycle} className="p-3 border border-[var(--border-line)] rounded bg-[var(--bg-card)] space-y-2">
              <div className="text-[10px] font-mono text-[var(--text-muted)] flex justify-between">
                <span>RING-{cycle < 10 ? `0${cycle}` : cycle}</span>
                <span>4W</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5">
                <div className="h-2 rounded-sm bg-[var(--cinnabar)]/60"></div>
                <div className="h-2 rounded-sm bg-[var(--border-line)]"></div>
                <div className="h-2 rounded-sm bg-[var(--border-line)]"></div>
                <div className="h-2 rounded-sm bg-[var(--border-line)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 居中解锁提示卡片 */}
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--bg-card)]/80 backdrop-blur-sm p-4">
          <div className="max-w-md w-full border border-[var(--border-line-hover)] bg-[var(--bg-card)] p-6 rounded text-center space-y-4 shadow-xl">
            <span className="text-[10px] font-mono text-[var(--cinnabar)] uppercase tracking-widest">
              [ {isEn ? 'LOCKED REGION' : isTW ? '未解鎖時空區間' : '未解锁时空区间'} ]
            </span>
            <h3 className="font-serif-title text-base text-[var(--text-primary)]">
              {isEn ? 'Unlock 52-Week Trajectory Tracking' : isTW ? '解鎖 52 週重力軌迹與自然週期對齊' : '解锁 52 周重力轨迹与自然周期对齐'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
              {isEn
                ? 'Calibrate your daily friction against seasonal gravity shifts and internal homeostasis.'
                : '开启全时空重力波对齐，实时观测季度重力偏折与个人内稳态压强变化。'}
            </p>
            <button className="px-6 py-2 border border-[var(--cinnabar)] text-[var(--cinnabar)] hover:bg-[var(--cinnabar)] hover:text-white transition-all duration-300 text-xs font-mono rounded-sm">
              {isEn ? 'ACTIVATE TRAJECTORY' : isTW ? '開啟軌跡校準' : '开启轨迹校准'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
