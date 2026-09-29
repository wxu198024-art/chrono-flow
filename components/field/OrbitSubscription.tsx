'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/layout';

interface OrbitSubscriptionProps {
  userRole?: 'guest' | 'member';
}

export default function OrbitSubscription({ userRole = 'guest' }: OrbitSubscriptionProps) {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  const isMember = userRole === 'member';

  // 52周的虚拟重力轨迹点阵（生成 52 列 x 7 行的点数据）
  const totalWeeks = 52;
  const unlockedWeeks = isMember ? 52 : 8; // 游客解锁前 8 周

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-6 transition-all duration-300 relative overflow-hidden">
      {/* 顶部极细爻线 */}
      <div className="absolute top-0 left-0 right-0 yao-yang"></div>

      {/* 标题与对齐状态 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[var(--border-line)] pb-4">
        <div>
          <h2 className="font-serif-title text-base md:text-lg text-[var(--text-primary)] uppercase tracking-wide">
            {isEn
              ? 'ANNUAL ORBIT TRAJECTORY & ALIGNMENT'
              : isTW
              ? '52周重力痕跡與自然週期對齊'
              : '52周重力痕迹与自然周期对齐'}
          </h2>
          <p className="text-xs text-[var(--text-muted)] mt-1 font-mono">
            {isEn
              ? `UNLOCKED TRAJECTORY: ${unlockedWeeks} / 52 WEEKS`
              : `已解算轨迹：${unlockedWeeks} / 52 周`}
          </p>
        </div>

        <div className="flex items-center gap-2 self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-[var(--cinnabar)] animate-ping" />
          <span className="text-[10px] font-mono tracking-widest text-[var(--cinnabar)] uppercase">
            {isMember
              ? isEn ? 'ORBIT ALIGNMENT: ACTIVE (FULL)' : '全量轨道已对齐'
              : isEn ? 'ORBIT ALIGNMENT: PARTIAL (8 WEEKS)' : '体验版：前8周已对齐'}
          </span>
        </div>
      </div>

      {/* 52周重力热力/轨迹矩阵图 */}
      <div className="relative py-2 overflow-x-auto scrollbar-none">
        <div className="min-w-[680px] grid grid-cols-52 gap-1.5 items-center">
          {Array.from({ length: totalWeeks }).map((_, weekIdx) => {
            const isUnlocked = weekIdx < unlockedWeeks;

            return (
              <div key={weekIdx} className="flex flex-col gap-1 items-center group cursor-pointer">
                {/* 7 天微型点 */}
                {Array.from({ length: 7 }).map((_, dayIdx) => {
                  const activeLevel = isUnlocked ? (weekIdx + dayIdx) % 4 : 0;
                  
                  let bgStyle = 'bg-[var(--border-line)] opacity-30';
                  if (isUnlocked) {
                    if (activeLevel === 3) bgStyle = 'bg-[var(--cinnabar)] opacity-90';
                    else if (activeLevel === 2) bgStyle = 'bg-[var(--cinnabar)] opacity-60';
                    else if (activeLevel === 1) bgStyle = 'bg-[var(--cinnabar)] opacity-35';
                    else bgStyle = 'bg-[var(--border-line)] opacity-50';
                  }

                  return (
                    <span
                      key={dayIdx}
                      className={`w-2 h-2 rounded-[1px] transition-all duration-200 group-hover:scale-125 ${bgStyle}`}
                    />
                  );
                })}
                <span className="text-[8px] font-mono text-[var(--text-muted)] mt-1 scale-75">
                  W{weekIdx + 1}
                </span>
              </div>
            );
          })}
        </div>

        {/* 游客解锁引导遮罩 */}
        {!isMember && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--bg-card)]/80 to-[var(--bg-card)] backdrop-blur-[2px] flex items-center justify-end pr-8 md:pr-16">
            <div className="p-5 border border-[var(--border-line-hover)] bg-[var(--bg-card-hover)]/95 backdrop-blur-xl rounded-sm max-w-sm text-center space-y-3 shadow-2xl">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border border-[var(--cinnabar)]/40 bg-[var(--accent-glow)] text-[9px] font-mono text-[var(--cinnabar)] uppercase tracking-widest">
                <span>{isEn ? 'RESTRICTED FIELD' : '未解锁时空区间'}</span>
              </div>

              <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                {isEn
                  ? 'Unlock full 52-week spatiotemporal trajectory to observe precise annual energy fluctuations and critical nodes.'
                  : '解锁全部52周时空重力轨迹，精确观测全年能量阻力峰值与内稳态关键节点。'}
              </p>

              <Link
                href="/pricing"
                className="inline-flex items-center justify-center w-full py-2.5 px-4 bg-[var(--cinnabar)] hover:bg-[var(--cinnabar-hover)] text-white text-xs font-mono tracking-widest uppercase transition-all duration-300 rounded-sm shadow-md group"
              >
                <span>{isEn ? 'UNLOCK 52-WEEK TRAJECTORY' : '解锁52周全量轨迹'}</span>
                <span className="ml-1 group-hover:translate-x-1 transition-transform">&gt;</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
