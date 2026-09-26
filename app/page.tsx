'use client';

import React from 'react';
import BirthForm from '@/components/BirthForm';
import { useLanguage } from '@/app/layout';

export default function HomePage() {
  const { dict } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 space-y-16 transition-colors duration-300">
      
      {/* 模块 1：今日时空节律 */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 border border-[var(--border-line)] bg-[var(--bg-card)] px-4 py-1.5 rounded-full text-[10px] tracking-[0.25em] text-[var(--text-secondary)] uppercase backdrop-blur-md">
          <span className="cinnabar-dot animate-pulse"></span>
          <span>{dict.dailyRhythmTag || '今日时空节律'}</span>
        </div>

        {/* 极简深度提示卡片 */}
        <div className="p-8 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-sm max-w-2xl mx-auto space-y-4 relative overflow-hidden transition-all duration-300 hover:border-[var(--border-line-hover)]">
          <div className="absolute top-0 left-0 w-full yao-yang"></div>
          
          <p className="font-serif-title text-xl md:text-2xl text-[var(--text-primary)] italic tracking-wide">
            {dict.dailyRhythmQuote || '" Silence is your energy anchor today. "'}
          </p>
          <p className="text-xs text-[var(--text-secondary)] tracking-wider">
            {dict.dailyRhythmDetail || '今日节律：蓄力沉淀 / 忌：急躁盲动'}
          </p>

          <div className="pt-2 text-[11px] text-[var(--text-muted)] italic">
            {dict.dailyRhythmSubQuote || '"Water is dominant in your current pillar. Do not mistake motion for progress."'}
          </div>
        </div>
      </section>

      {/* 阴爻分割线 */}
      <div className="yao-yin max-w-xl mx-auto opacity-40"></div>

      {/* 模块 2：输入生辰时空参数 */}
      <section className="space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="font-serif-title text-2xl md:text-3xl text-[var(--text-primary)] uppercase tracking-[0.15em]">
            {dict.spatiotemporalTitle || '输入生辰时空参数'}
          </h2>
          <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
            {dict.spatiotemporalNotice || '系统将基于真太阳时自动转化为四柱能量结构图。'}
          </p>
        </div>

        {/* 生辰表单挂载区 */}
        <div className="max-w-md mx-auto">
          <BirthForm />
        </div>
      </section>

      {/* 阳爻分割线 */}
      <div className="yao-yang max-w-xl mx-auto opacity-30"></div>

      {/* 模块 3：保留原本的三大核心分析维度看板（完全读取字典，纯净无混排） */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            num: '01',
            title: dict.card1Title || '性格原型',
            en: dict.card1SubTitle || '', // 字典里英文界面有值，中文界面为空，避免中文界面出现英文副标题
            desc: dict.card1Desc || '四柱能量结构与系统内稳态因子解析。',
          },
          {
            num: '02',
            title: dict.card2Title || '周程演化',
            en: dict.card2SubTitle || '',
            desc: dict.card2Desc || '十年宏观趋势与年度环境阻力系数。',
          },
          {
            num: '03',
            title: dict.card3Title || '双方共振',
            en: dict.card3SubTitle || '',
            desc: dict.card3Desc || '双人时空共振与摩擦点图谱。',
          },
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-sm hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 group relative cursor-pointer"
          >
            <div className="text-[10px] stems-matrix mb-3 group-hover:text-[var(--cinnabar)] transition-colors">
              [{item.num}]
            </div>
            <h3 className="font-serif-title text-base text-[var(--text-primary)] mb-1">
              {item.title}
            </h3>
            {item.en && (
              <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-3">
                {item.en}
              </div>
            )}
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

    </div>
  );
}
