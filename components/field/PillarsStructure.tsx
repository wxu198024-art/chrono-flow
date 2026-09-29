'use client';

import React from 'react';
import { useLanguage } from '@/app/layout';

export default function PillarsStructure() {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  // 四柱存在结构 (纯净版，无机械编号)
  const pillarsData = [
    {
      title: isEn ? 'The Origin Pillar' : isTW ? '原點之柱' : '原点之柱',
      sub: isEn ? 'TIMELINE ORIGIN' : '时空印记 / 原生重力',
      tag: isEn ? 'Adaptation' : '潜流适应矢量',
      desc: isEn
        ? 'Defines early homeostatic environment & innate gravity.'
        : '定义个体降落时自带的底层防御机制与原生环境重力。',
    },
    {
      title: isEn ? 'The Social Mask' : isTW ? '社會投影之柱' : '社会投影之柱',
      sub: isEn ? 'EXTERNAL ARMOR' : '社会假面 / 期望压强',
      tag: isEn ? 'Visibility' : '显化辐射矢量',
      desc: isEn
        ? 'Defines social expectations, protective mask & tension.'
        : '定义社会期望施加的外在面具，展现给世界的精密防御。',
    },
    {
      title: isEn ? 'The Core Ego' : isTW ? '內核原點之柱' : '内核原点之柱',
      sub: isEn ? 'SOVEREIGN IDENTITY' : '主权自我 / 真实内核',
      tag: isEn ? 'Anchoring' : '锚定平衡矢量',
      desc: isEn
        ? 'The true self-regulating observer under quiet moments.'
        : '卸下重力与假面后的主权自我，静夜中的真实觉知。',
    },
    {
      title: isEn ? 'The Hidden Horizon' : isTW ? '潛匿地平線之柱' : '潜匿地平线之柱',
      sub: isEn ? 'FUTURE INTENTION' : '潜意识归宿 / 终极张力',
      tag: isEn ? 'Expansion' : '蔓延扩张矢量',
      desc: isEn
        ? 'Unconscious drives, deep desires & late-life trajectory.'
        : '未被言说的潜在野心与晚期轨迹演化的归宿。',
    },
  ];

  // 五维动态均衡因子 (纯净版，无英文编码)
  const factorsData = [
    {
      name: isEn ? 'Expansion' : isTW ? '蔓延因子' : '蔓延因子',
      value: 85,
      status: isEn ? 'OVERLOAD' : '极度强盛',
      color: 'bg-[var(--cinnabar)]',
      desc: isEn ? 'High initiative, risk of lack of focus.' : '野心与拓展欲极强，但容易贪多求全、缺乏收尾斩断力。',
    },
    {
      name: isEn ? 'Visibility' : isTW ? '顯化因子' : '显化因子',
      value: 45,
      status: isEn ? 'BALANCED' : '内稳态',
      color: 'bg-amber-500',
      desc: isEn ? 'Moderate emotional expression & presence.' : '表达与外露适度，具备良好的环境共振能力。',
    },
    {
      name: isEn ? 'Anchoring' : isTW ? '錨定因子' : '锚定因子',
      value: 60,
      status: isEn ? 'STABLE' : '稳固',
      color: 'bg-emerald-500',
      desc: isEn ? 'Provides psychological safety & focus.' : '内心秩序锚定尚可，不易完全被外部混乱带偏。',
    },
    {
      name: isEn ? 'Precision' : isTW ? '裁決因子' : '裁决因子',
      value: 15,
      status: isEn ? 'CRITICAL DEFICIT' : '极度匮乏',
      color: 'bg-rose-500',
      desc: isEn ? 'Difficulty saying No, indecisiveness.' : '不敢冷酷割舍，容易妥协与拖延决断，缺乏冷酷界限。',
    },
    {
      name: isEn ? 'Adaptation' : isTW ? '潛流因子' : '潜流因子',
      value: 30,
      status: isEn ? 'LOW' : '偏低',
      color: 'bg-sky-500',
      desc: isEn ? 'Suppressed emotions, hard to empathize.' : '情感自我封闭，沟通偶尔生硬，防御机制偏强。',
    },
  ];

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-8 transition-colors duration-300 relative overflow-hidden">
      {/* 顶部极细爻线 */}
      <div className="absolute top-0 left-0 right-0 yao-yang"></div>

      {/* 1. 四柱存在结构 */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
          <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
            {isEn ? 'THE FOUR PILLARS OF EXISTENCE' : isTW ? '四柱存在結構' : '四柱存在结构'}
          </h2>
          <p className="text-xs text-[var(--text-muted)] font-mono">
            {isEn ? 'ARCHETYPE MATRIX CALIBRATED' : '四座时空骨架与底层防御机制'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillarsData.map((item, idx) => (
            <div
              key={idx}
              className="p-4 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/50 rounded-sm space-y-3 hover:border-[var(--border-line-hover)] transition-all duration-300 group"
            >
              <div>
                <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-medium">
                  {item.title}
                </h3>
                <p className="text-[10px] font-mono text-[var(--text-muted)] uppercase tracking-wider mt-0.5">
                  {item.sub}
                </p>
              </div>

              <div className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] text-[var(--text-secondary)] inline-block">
                {item.tag}
              </div>

              <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans pt-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 2. 五维动态均衡因子 */}
      <div className="space-y-6 pt-4 border-t border-[var(--border-line)]">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
          <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
            {isEn ? 'THE FIVE DYNAMIC EQUILIBRIUM FACTORS' : isTW ? '五維動態均衡因子' : '五维动态均衡因子'}
          </h2>
          <div className="text-[10px] font-mono text-[var(--text-muted)]">
            {isEn ? 'CRITICAL DEFICIT: PRECISION (15%)' : '内稳态诊断：裁决因子极度匮乏 (15%)'}
          </div>
        </div>

        <div className="space-y-4">
          {factorsData.map((factor, idx) => (
            <div key={idx} className="space-y-1.5 p-3 rounded-sm border border-[var(--border-line)]/50 bg-[var(--bg-card-hover)]/30">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[var(--text-primary)] font-medium">
                  {factor.name}
                </span>
                <div className="flex items-center gap-3">
                  <span className={`text-[9px] px-1.5 py-0.2 rounded font-mono ${factor.value <= 15 ? 'text-rose-400 border border-rose-500/30 bg-rose-500/10' : 'text-[var(--text-muted)]'}`}>
                    {factor.status}
                  </span>
                  <span className="text-[var(--text-primary)] font-bold">{factor.value}%</span>
                </div>
              </div>

              <div className="w-full h-1.5 bg-[var(--border-line)]/60 rounded-full overflow-hidden">
                <div
                  className={`h-full transition-all duration-1000 ease-out ${factor.color}`}
                  style={{ width: `${factor.value}%` }}
                />
              </div>

              <p className="text-[11px] text-[var(--text-secondary)] font-sans pt-0.5">
                {factor.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
