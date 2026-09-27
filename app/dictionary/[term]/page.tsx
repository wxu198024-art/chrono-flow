'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/app/layout';
import { LEXICON_DATA, LexiconLang } from '@/lib/lexicon';

export default function DictionaryTermPage() {
  const params = useParams();
  const rawTerm = (params?.term as string) || 'primordial-anchor';
  const decodedTerm = decodeURIComponent(rawTerm).toLowerCase();

  // 1. 全局语言 Context 绑定
  const { lang: globalLang } = useLanguage();
  const currentLang: LexiconLang = globalLang === 'en' ? 'en' : 'zh';
  const isZh = currentLang === 'zh';

  // 2. 匹配对应路由词条，若未找到则安全回退到 L1
  const entry = LEXICON_DATA[decodedTerm] || LEXICON_DATA['primordial-anchor'];

  // 3. 9 级导航矩阵数据
  const matrixItems = [
    { level: 1, id: 'primordial-anchor', name: isZh ? 'L1 原点锚块' : 'L1 Primordial Anchor' },
    { level: 2, id: 'dual-vector', name: isZh ? 'L2 双向向量场' : 'L2 Dual Vector Field' },
    { level: 3, id: 'tri-axial-strain', name: isZh ? 'L3 三轴应力' : 'L3 Tri-Axial Strain' },
    { level: 4, id: 'four-pillars', name: isZh ? 'L4 四柱结构' : 'L4 Four Pillars' },
    { level: 5, id: 'wuxing-factors', name: isZh ? 'L5 均衡因子' : 'L5 Wuxing Factors' },
    { level: 6, id: 'lunar-tides', name: isZh ? 'L6 情绪潮汐' : 'L6 Lunar Tides' },
    { level: 7, id: 'axial-tilt', name: isZh ? 'L7 轴向转折' : 'L7 Axial Tilt' },
    { level: 8, id: 'relational-sync', name: isZh ? 'L8 双人共振' : 'L8 Relational Sync' },
    { level: 9, id: 'orbit-continuum', name: isZh ? 'L9 轨道图谱' : 'L9 Orbit Continuum' },
  ];

  return (
    <div className="relative min-h-screen text-[var(--text-primary)] transition-colors duration-500 pb-20 pt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto z-10 relative space-y-8">
        
        {/* 顶部面包屑导航 */}
        <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-4">
          <Link
            href="/"
            className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
          >
            ← {isZh ? '返回时空主站' : 'CHRONO–FLOW // INDEX'}
          </Link>
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
            {isZh ? '时空锚典矩阵' : 'CHRONO–LEXICON MATRIX'}
          </div>
        </div>

        {/* 头部标题区 */}
        <div className="text-center sm:text-left space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-line)] bg-[var(--bg-card)] text-xs text-[var(--text-muted)]">
            <span className="cinnabar-dot" />
            <span>{isZh ? '时空场域层级' : 'FIELD LEVEL'}</span>
            <span className="opacity-40">|</span>
            <span className="font-mono">LEVEL 0{entry.level}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-title tracking-wider text-[var(--text-primary)] font-bold">
            {entry.title[currentLang]}
          </h1>
          <p className="text-xs font-mono uppercase text-[var(--text-muted)] tracking-widest">
            {entry.codeName}
          </p>
        </div>

        {/* 核心主概念卡片 */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-line)] backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-2xl space-y-6 transition-all">
          <div className="yao-yang" />

          {/* 1. 底层映射 */}
          <div>
            <span className="inline-block text-xs font-mono px-3 py-1.5 rounded bg-[var(--accent-glow)] text-[var(--text-secondary)] border border-[var(--border-line)]">
              {entry.mapping[currentLang]}
            </span>
          </div>

          {/* 2. 重构定义 */}
          <div className="space-y-2">
            <h3 className="text-xs uppercase font-mono tracking-widest text-[var(--text-muted)]">
              // {isZh ? '定义与时空隐喻' : 'DEFINITION & METAPHOR'}
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-primary)] font-light">
              {entry.definition[currentLang]}
            </p>
          </div>

          {/* 3. 子概念网络展现场 (Sub-concepts Section) */}
          {entry.children && entry.children.length > 0 && (
            <div className="pt-6 border-t border-[var(--border-line)] space-y-4">
              <h4 className="text-xs uppercase font-mono tracking-widest text-[var(--text-muted)]">
                // {isZh ? '底层关联子概念网络' : 'SUB-CONCEPT NETWORK'}
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {entry.children.map((child) => (
                  <div
                    key={child.id}
                    className="p-5 rounded-lg bg-[var(--input-bg)] border border-[var(--border-line)] space-y-2 transition-all hover:border-[var(--border-line-hover)]"
                  >
                    <div className="text-[10px] font-mono text-[var(--text-muted)] tracking-wider">
                      {child.codeName}
                    </div>
                    <div className="font-bold text-sm text-[var(--text-primary)]">
                      {child.title[currentLang]}
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {child.definition[currentLang]}
                    </p>
                    <div className="pt-2 text-xs text-[var(--cinnabar)] italic border-t border-[var(--border-line)]">
                      {isZh ? '刺痛点:' : 'Hook:'} {child.visceralHook[currentLang]}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. 刺穿感痛点 */}
          <div className="p-5 rounded-lg bg-[var(--accent-amber-glow)] border border-[var(--border-line)] space-y-2">
            <div className="text-xs font-mono uppercase tracking-wider text-[var(--accent-amber)] font-semibold">
              CRITICAL VISCERAL POINT // {isZh ? '刺穿感痛点' : 'VISCERAL HOOK'}
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed italic">
              &quot;{entry.visceralHook[currentLang]}&quot;
            </p>
          </div>

          <div className="yao-yin" />
        </div>

        {/* 底部 1-9 级矩阵控制台 (彻底解决 L1-L9 链接问题) */}
        <div className="pt-6 text-center space-y-4">
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            // {isZh ? '时空锚典矩阵控制台' : 'CHRONO–LEXICON MATRIX NAVIGATOR'}
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {matrixItems.map((item) => {
              const isActive = entry.level === item.level;
              const isImplemented = !!LEXICON_DATA[item.id]; // 自动判断是否已在 lexicon.ts 里实现

              return (
                <Link
                  key={item.level}
                  href={isImplemented ? `/dictionary/${item.id}` : '#'}
                  className={`px-3.5 py-2 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'border-[var(--yao-light)] text-[var(--text-primary)] bg-[var(--bg-card-hover)] shadow-lg scale-105 font-bold'
                      : isImplemented
                      ? 'border-[var(--border-line)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--border-line-hover)]'
                      : 'border-[var(--border-line)] opacity-40 cursor-not-allowed text-[var(--text-muted)]'
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      isImplemented ? 'bg-[var(--yao-light)]' : 'bg-neutral-600'
                    }`}
                  />
                  <span>{item.name}</span>
                  {!isImplemented && <span className="text-[10px]">🔒</span>}
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
