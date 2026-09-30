'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface OrbitSubscriptionProps {
  userRole?: 'guest' | 'free' | 'registered' | 'subscribed' | string;
  subPlan?: string;
  onTriggerPay?: () => void; // 增加此回调接口以解决 TypeScript TS2322 报错
}

export default function OrbitSubscription({
  userRole = 'guest',
  subPlan = 'none',
  onTriggerPay,
}: OrbitSubscriptionProps) {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-6 relative overflow-hidden">
      {/* 顶部极细爻线 */}
      <div className="absolute top-0 left-0 right-0 yao-yang"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
        <div>
          <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
            {isEn ? 'ORBITAL TEMPORAL SUBSCRIPTION' : isTW ? '軌道時空訂閱' : '轨道时空订阅'}
          </h2>
          <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
            {isEn ? 'UNLOCK 52-WEEK CONTINUOUS FIELD TRAJECTORY' : '解锁 52 周连续场域重力轨迹与周度阻力解包'}
          </p>
        </div>
        <div className="text-[10px] font-mono px-2.5 py-1 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)] self-start md:self-auto">
          {isEn ? 'STATUS: UNLOCKED ON DEMAND' : '当前状态：按需对齐解锁'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {/* 周度解包权 */}
        <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded space-y-3">
          <div className="text-xs font-mono text-[var(--cinnabar)] font-bold uppercase tracking-wider">
            {isEn ? 'WEEKLY VECTOR UNPACKING' : '每周重力阻力解包'}
          </div>
          <h3 className="font-serif-title text-base text-[var(--text-primary)]">
            {isEn ? '52-Week High-Precision Trajectory' : '52 周高精度场域诊断'}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {isEn
              ? 'Receive exact temporal friction coordinates and decision boundaries every 7 days.'
              : '每 7 天推送一次精准的时空摩擦力坐标，提供决策界限与内稳态校准方案。'}
          </p>
        </div>

        {/* 历史沉淀 */}
        <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded space-y-3">
          <div className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
            {isEn ? 'CHRONO LOG ARCHIVE' : '时空中枢与黑历史沉淀'}
          </div>
          <h3 className="font-serif-title text-base text-[var(--text-primary)]">
            {isEn ? 'Historical Resistance Mapping' : '历史重力阻力演变图谱'}
          </h3>
          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {isEn
              ? 'Permanent storage of all temporal node responses and behavioral pattern archives.'
              : '永久存储所有历史节点响应、决策记录与行为模式黑历史，形成长期轨迹对照。'}
          </p>
        </div>
      </div>

      {/* 订阅/解锁行动区 */}
      <div className="pt-4 border-t border-[var(--border-line)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs font-mono text-[var(--text-muted)]">
          {isEn ? 'UNPAY: $52 / YEAR OR $5 / MONTH' : '订阅方案：￥198 / 年 或 ￥19 / 月'}
        </div>

        <button
          onClick={() => onTriggerPay?.()}
          className="w-full sm:w-auto px-6 py-2.5 bg-[var(--cinnabar)] text-white text-xs font-mono font-bold rounded shadow hover:opacity-90 transition-all uppercase tracking-wider"
        >
          {isEn ? 'UNLOCK 52-WEEK ORBIT' : isTW ? '解鎖 52 週場域軌道' : '解锁 52 周场域轨道'}
        </button>
      </div>
    </section>
  );
}
