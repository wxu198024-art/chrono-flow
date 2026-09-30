'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/layout';

interface OrbitSubscriptionProps {
  userRole?: 'guest' | 'free' | 'subscribed' | string;
  subPlan?: 'none' | 'monthly' | 'quarterly' | 'annual' | string;
}

export default function OrbitSubscription({ userRole = 'guest', subPlan = 'none' }: OrbitSubscriptionProps) {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  const isSubscribed = userRole === 'subscribed';
  const isAnnual = subPlan === 'annual';

  // 测试阶段：允许点击解锁预览
  const [isTestUnlocked, setIsTestUnlocked] = useState(false);

  const activeUnlocked = isSubscribed || isTestUnlocked;

  const cycles = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-6 transition-colors duration-300 relative overflow-hidden">
      {/* 顶部极细爻线 */}
      <div className="absolute top-0 left-0 right-0 yao-yin"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
        <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
          {isEn ? '52-WEEK GRAVITY TRAJECTORY' : isTW ? '52周重力痕跡與自然週期對齊' : '52周重力痕迹与自然周期对齐'}
        </h2>
        <div className="text-xs font-mono text-[var(--text-muted)]">
          {activeUnlocked
            ? (isEn ? 'STATUS: TRAJECTORY ACTIVE' : '状态：52周重力追踪已开启')
            : (isEn ? 'STATUS: UNCALIBRATED' : '状态：未开启时空追踪')}
        </div>
      </div>

      {/* 52周重力轨迹网格区 */}
      <div className="relative border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded p-4 md:p-6 space-y-6">
        <div className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 transition-all duration-300 ${!activeUnlocked ? 'opacity-20 blur-[1px]' : ''}`}>
          {cycles.map((cycle) => (
            <div key={cycle} className="p-2.5 border border-[var(--border-line)] rounded bg-[var(--bg-card)] space-y-1.5">
              <div className="text-[9px] font-mono text-[var(--text-muted)] flex justify-between">
                <span>RING-{cycle < 10 ? `0${cycle}` : cycle}</span>
                <span>4W</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                <div className={`h-1.5 rounded-sm ${activeUnlocked ? 'bg-[var(--cinnabar)]' : 'bg-[var(--cinnabar)]/60'}`}></div>
                <div className={`h-1.5 rounded-sm ${activeUnlocked ? 'bg-[var(--text-primary)]/40' : 'bg-[var(--border-line)]'}`}></div>
                <div className="h-1.5 rounded-sm bg-[var(--border-line)]"></div>
                <div className="h-1.5 rounded-sm bg-[var(--border-line)]"></div>
              </div>
            </div>
          ))}
        </div>

        {/* 订阅卡片区 */}
        <div className="space-y-6 pt-2">
          {!activeUnlocked && (
            <div className="text-center max-w-xl mx-auto space-y-2">
              <h3 className="font-serif-title text-base md:text-lg text-[var(--text-primary)]">
                {isEn ? 'Align Your Trajectory with Natural Cycles' : '对齐自然周期，开启 52 周重力痕迹追踪'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                {isEn
                  ? 'Gravity shifts dynamically with celestial mechanics. Choose a cycle to calibrate your inner state.'
                  : '重力波受月相、四时与黄道回归周期动态折射。选择适合您的对齐周期，沉淀专属时空档案。'}
              </p>
            </div>
          )}

          {/* 三周期卡片：月度 / 季度 / 年度 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 月度卡片 */}
            <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card)] rounded space-y-3 flex flex-col justify-between hover:border-[var(--border-line-hover)] transition-all">
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  {isEn ? 'LUNAR CYCLE' : '月相朔望周期'}
                </div>
                <h4 className="font-serif-title text-sm text-[var(--text-primary)] font-medium">
                  {isEn ? 'Monthly Alignment' : '月度重力校准'}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                  {isEn
                    ? 'Calibrate daily friction against 28-day lunar tidal shifts.'
                    : '实时对齐 28 天潮汐与朔望相位，监测短期心理防线与摩擦系数。'}
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-line)]/50 space-y-2">
                <div className="text-sm font-mono font-bold text-[var(--text-primary)]">$29 / Mo</div>
                <button 
                  onClick={() => setIsTestUnlocked(true)}
                  className="w-full py-2 border border-[var(--border-line-hover)] hover:border-[var(--cinnabar)] hover:text-[var(--cinnabar)] transition-all text-xs font-mono rounded-sm"
                >
                  {activeUnlocked 
                    ? (isEn ? 'CURRENTLY ACTIVE' : '测试已预览') 
                    : (isEn ? 'SELECT MONTHLY' : '开启月度校准')}
                </button>
              </div>
            </div>

            {/* 季度卡片 */}
            <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card)] rounded space-y-3 flex flex-col justify-between hover:border-[var(--border-line-hover)] transition-all">
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  {isEn ? 'SEASONAL CYCLE' : '四时四象周期'}
                </div>
                <h4 className="font-serif-title text-sm text-[var(--text-primary)] font-medium">
                  {isEn ? 'Quarterly Realignment' : '季度四节重构'}
                </h4>
                <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                  {isEn
                    ? 'Capture seasonal pressure vector changes and macro shift points.'
                    : '捕捉春夏秋冬四时交替中的关键转折点，重置底层决策框架。'}
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-line)]/50 space-y-2">
                <div className="text-sm font-mono font-bold text-[var(--text-primary)]">$69 / Qtr</div>
                <button 
                  onClick={() => setIsTestUnlocked(true)}
                  className="w-full py-2 border border-[var(--border-line-hover)] hover:border-[var(--cinnabar)] hover:text-[var(--cinnabar)] transition-all text-xs font-mono rounded-sm"
                >
                  {activeUnlocked 
                    ? (isEn ? 'CURRENTLY ACTIVE' : '测试已预览') 
                    : (isEn ? 'SELECT QUARTERLY' : '开启季度校准')}
                </button>
              </div>
            </div>

            {/* 年度卡片 (中文显示“推荐”/“推薦”) */}
            <div className="p-5 border border-[var(--cinnabar)]/60 bg-[var(--bg-card)] rounded space-y-3 flex flex-col justify-between relative shadow-sm">
              <div className="absolute -top-2.5 right-3 px-2 py-0.5 bg-[var(--cinnabar)] text-white text-[9px] font-mono rounded">
                {isEn ? 'RECOMMENDED' : isTW ? '推薦' : '推荐'}
              </div>
              <div className="space-y-2">
                <div className="text-[10px] font-mono text-[var(--cinnabar)] uppercase">
                  {isEn ? 'SOLAR TROPICAL CYCLE' : '黄道全景回归'}
                </div>
                <h4 className="font-serif-title text-sm text-[var(--text-primary)] font-medium flex items-center gap-1.5">
                  <span>{isEn ? 'Annual Master Alignment' : '年度全景回归'}</span>
                  <span className="text-[9px] font-mono px-1 border border-amber-500/40 text-amber-500 rounded">Level 0</span>
                </h4>
                <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
                  {isEn
                    ? 'Full 52-week trajectory tracking + Level 0 (The Unbound Void) unlocking.'
                    : '沉淀 52 周全景痕迹，解锁 Level 0 (归零·无极) 隐藏破局卡片与 Gemini 深度对谈。'}
                </p>
              </div>
              <div className="pt-3 border-t border-[var(--border-line)]/50 space-y-2">
                <div className="text-sm font-mono font-bold text-[var(--text-primary)]">$199 / Yr</div>
                <button 
                  onClick={() => setIsTestUnlocked(true)}
                  className="w-full py-2 bg-[var(--cinnabar)] text-white hover:bg-[var(--cinnabar)]/90 transition-all text-xs font-mono rounded-sm"
                >
                  {activeUnlocked 
                    ? (isEn ? 'PREVIEW UNLOCKED' : '测试已解锁轨迹') 
                    : (isEn ? 'ACTIVATE ANNUAL MASTER' : '开启年度全景对齐')}
                </button>
              </div>
            </div>
          </div>

          {/* 为什么仅有月季年三个周期说明 */}
          <div className="p-4 border border-[var(--border-line)]/60 bg-[var(--bg-card)] rounded-sm space-y-1.5 text-xs text-[var(--text-secondary)] font-sans">
            <div className="font-mono text-[10px] text-[var(--text-muted)] uppercase">
              {isEn ? 'WHY MONTHLY / QUARTERLY / ANNUAL?' : '为什么仅设立月、季、年三个周期？'}
            </div>
            <p className="leading-relaxed">
              {isEn
                ? 'Human inner homeostasis aligns with celestial physics: Lunar tides (monthly), Earth rotation tilt (quarterly), and Solar orbit return (annual). We align with natural rhythms, avoiding arbitrary timers.'
                : '人的内稳态节律与天体运行物理强绑定：月相朔望决定潮汐情感（月），地轴倾角决定能量交替（季），黄道回归决定命运重组（年）。道场仅依据自然科学节律进行重力校准。'}
            </p>
          </div>
        </div>

        {/* 测试阶段解锁 / 年度订阅：展示 Level 0 (归零·无极) 隐藏卡片 */}
        {(activeUnlocked || isAnnual) && (
          <div className="mt-6 p-5 border border-amber-500/40 bg-gradient-to-r from-amber-500/5 via-transparent to-cyan-500/5 rounded space-y-3 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-amber-500/50 text-amber-500 bg-amber-500/10">
                  LEVEL 0 UNLOCKED
                </span>
                <h3 className="font-serif-title text-sm md:text-base text-[var(--text-primary)] font-medium">
                  {isEn ? 'The Unbound Void (归零·无极)' : '归零·无极 (The Unbound Void)'}
                </h3>
              </div>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">ANNUAL EXCLUSIVE</span>
            </div>
            <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
              {isEn
                ? 'Beyond gravity and mask projection lies the zero-point energy field. Harness high tension to shatter resistance.'
                : '在重力束缚与社会假面之外，存在着绝对主权零点。当阻力压强升至极值，即是逆风觉醒与破局割舍的最佳契机。'}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
