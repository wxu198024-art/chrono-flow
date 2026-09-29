'use client';

import React from 'react';
import { Locale, dictionaries } from '@/lib/dictionary';
import { useLanguage } from '@/app/layout';

interface DailyPulseProps {
  lang?: Locale;
}

export default function DailyPulse({ lang }: DailyPulseProps) {
  // 优先使用传入的 lang，若无则读取 layout 中的 useLanguage，最后降级至 'zh-CN'
  const contextLang = useLanguage?.()?.lang as Locale;
  const currentLang = lang || contextLang || 'zh-CN';

  const dict =
    dictionaries[currentLang]?.chronoField?.dailyPulse ||
    dictionaries['zh-CN']?.chronoField?.dailyPulse ||
    {
      tag: '今日动态脉搏',
      frictionIndex: '阻力指数',
      resistanceHigh: '高阻力场',
      resistanceLow: '低阻力场',
      directiveLabel: '场域避险指令',
      directiveText: '收敛扩张欲望，避免重大决策摩擦。',
      anchorLabel: '内稳态锚点',
      anchorText: '保持观察者姿态，充沛内部能量。',
    };

  // 阻力指数模拟（可后续对接真实算法）
  const resistanceScore = 38; 
  const isHighResistance = resistanceScore > 60;

  return (
    <section className="w-full max-w-4xl mx-auto p-6 my-6 border border-neutral-800 bg-neutral-950/80 backdrop-blur-md rounded-xl text-neutral-100 transition-all duration-300">
      {/* 顶部 Tag 标识 */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800/60 mb-6">
        <span className="text-xs font-mono tracking-widest text-neutral-400 uppercase">
          [ {dict.tag} ]
        </span>
        <span className="text-xs font-mono px-2 py-0.5 rounded border border-emerald-500/30 text-emerald-400 bg-emerald-500/10">
          FIELD: ACTIVE
        </span>
      </div>

      {/* 核心阻力指数展示 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center mb-6">
        <div className="md:col-span-1 flex flex-col items-start justify-center p-4 bg-neutral-900/50 rounded-lg border border-neutral-800">
          <span className="text-xs text-neutral-400 mb-1">{dict.frictionIndex}</span>
          <div className="flex items-baseline space-x-2">
            <span className="text-4xl font-light font-mono text-neutral-100">{resistanceScore}</span>
            <span className="text-xs text-neutral-500">/ 100</span>
          </div>
          <span className={`text-[10px] mt-2 font-mono uppercase tracking-wider ${isHighResistance ? 'text-amber-400' : 'text-emerald-400'}`}>
            {isHighResistance ? dict.resistanceHigh : dict.resistanceLow}
          </span>
        </div>

        {/* 场域避险指令与内稳态锚点 */}
        <div className="md:col-span-2 space-y-4">
          <div className="p-3 bg-neutral-900/30 border-l-2 border-amber-500/80 rounded-r-md">
            <span className="text-xs text-amber-400 font-mono block mb-1">
              • {dict.directiveLabel}
            </span>
            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              {dict.directiveText}
            </p>
          </div>

          <div className="p-3 bg-neutral-900/30 border-l-2 border-emerald-500/80 rounded-r-md">
            <span className="text-xs text-emerald-400 font-mono block mb-1">
              • {dict.anchorLabel}
            </span>
            <p className="text-sm text-neutral-300 leading-relaxed font-sans">
              {dict.anchorText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
