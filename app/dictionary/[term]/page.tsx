'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Locale } from '@/lib/dictionary';

// ============================================================================
// 1. 【时空锚典】专有概念数据源 (可在此处扩展 Level 1 至 Level 9)
// ============================================================================
export interface LexiconEntry {
  id: string; // URL 路径唯一标识
  level: number;
  codeName: string; // 英文高冷代号
  title: Record<Locale, string>;
  mapping: Record<Locale, string>; // 传统内核映射
  definition: Record<Locale, string>; // 重构定义与时空隐喻
  visceralHook: Record<Locale, string>; // 刺穿感痛点
  children?: {
    id: string;
    codeName: string;
    title: Record<Locale, string>;
    definition: Record<Locale, string>;
    visceralHook: Record<Locale, string>;
  }[];
}

export const LEXICON_DATA: Record<string, LexiconEntry> = {
  'primordial-anchor': {
    id: 'primordial-anchor',
    level: 1,
    codeName: 'THE PRIMORDIAL ANCHOR',
    title: {
      'en': 'The Primordial Anchor',
      'zh-CN': '时空原点锚块',
      'zh-TW': '時空原點錨塊',
    },
    mapping: {
      'en': 'Core Mapping: Baseline Spatiotemporal Coordinates',
      'zh-CN': '底层映射：出生时刻与空间初始重力刻度',
      'zh-TW': '底層映射：出生時刻與空間初始重力刻度',
    },
    definition: {
      'en': 'The fundamental gravity coordinates locked at the precise millisecond of your entry into the spatiotemporal continuum. It is not your personality, but the immutable background field that dictates your default emotional mass and baseline anxieties.',
      'zh-CN': '你落入这个时空连续体瞬间，被宇宙第一道引力波割裂并定格的初始重力坐标。它不是你的性格，而是你生命系统启动时自带的底层环境底色。它决定了你初始的情绪质量密度与终生隐性焦虑的频段。',
      'zh-TW': '你落入這個時空連續體瞬間，被宇宙第一道引力波割裂並定格的初始重力坐標。它不是你的性格，而是你生命系統啟動時自帶的底層環境底色。它決定了你初始的情緒質量密度與終生隱性焦慮的頻段。',
    },
    visceralHook: {
      'en': 'Unveils why you carry an unexplainable, existential fatigue even during your highest achievements, and pinpoints the invisible intergenerational burden you’ve been unconsciously compensating for.',
      'zh-CN': '揭示你为何明明生活顺遂，却总在某些特定时刻感到一种莫名、宏大的虚无与疲惫感，直击你从家族基因与出生环境中无意识继承的隐秘防御机制。',
      'zh-TW': '揭示你為何明明生活順遂，卻總在某些特定時刻感到一種莫名、宏大的虛無與疲憊感，直擊你從家族基因與出生環境中無意識繼承的隱秘防禦機制。',
    },
  },
  'dual-vector': {
    id: 'dual-vector',
    level: 2,
    codeName: 'THE DUAL VECTOR FIELD',
    title: {
      'en': 'The Dual Vector Field',
      'zh-CN': '双向向量场',
      'zh-TW': '雙向向量場',
    },
    mapping: {
      'en': 'Core Mapping: Explicit Self vs. Implicit Self Polarity',
      'zh-CN': '底层映射：显性自我与隐性内耗的极性对抗',
      'zh-TW': '底層映射：顯性自我與隱性內耗的極性對抗',
    },
    definition: {
      'en': 'The perpetual structural tension generated between your outward defensive shell built for societal survival and your collapsed instinctual core under pressure.',
      'zh-CN': '你体内永远处于拉扯状态的双向力学向量场。涵盖为了在社会规则中高精密度生存而锻造的防御外壳，与极度压抑下随时可能引发自我毁灭的本能底色。',
      'zh-TW': '你體內永遠處於拉扯狀態的雙向力學向量場。涵蓋為了在社會規則中高精密度生存而鍛造的防禦外殼，與極度壓抑下隨時可能引發自我毀滅的本能底色。',
    },
    visceralHook: {
      'en': 'Exposes the exact energy dissipation rate between who you pretend to be and who you are when the lights go out.',
      'zh-CN': '精确计算出你在“无缝伪装”与“深夜坍缩”之间所消耗的内耗能量比，指出你为何总会在事情即将成功的前夜产生毁掉一切的冲动。',
      'zh-TW': '精確計算出你在「無縫偽裝」與「深夜坍縮」之間所消耗的內耗能量比，指出你為何總會在事情即將成功的前夜產生毀掉一切的衝動。',
    },
    children: [
      {
        id: 'exo-structural-vector',
        codeName: 'EXO-STRUCTURAL VECTOR',
        title: { 'en': 'Exo-Structural Vector', 'zh-CN': '外核显性向量', 'zh-TW': '外核顯性向量' },
        definition: {
          'en': 'The highly optimized armor engineered for societal survival. The precise mask and rational defense mechanism you present to the world.',
          'zh-CN': '为了在社会规则中生存，你为自己精细锻造的无缝盔甲。它是你在职场、社交与外人面前展示的精密镜子与理性防御机制。',
          'zh-TW': '為了在社會規則中生存，你為自己精細鍛造的無縫盔甲。它是你在職場、社交與外人面前展示的精密鏡子與理性防禦機制。',
        },
        visceralHook: {
          'en': 'Exposes your social mask and pinpoints the exhaustive role you are forced to play despite extreme fatigue.',
          'zh-CN': '刺穿你的“社会伪装”，指出你在社交交往中明明极度厌倦、却不得不咬牙扮演的高效角色。',
          'zh-TW': '刺穿你的「社會偽裝」，指出你在社交交往中明明極度厭倦、卻不得不咬牙扮演的高效角色。',
        },
      },
      {
        id: 'collapsed-endo-vector',
        codeName: 'COLLAPSED ENDO-VECTOR',
        title: { 'en': 'Collapsed Endo-Vector', 'zh-CN': '坍缩内核向量', 'zh-TW': '坍縮內核向量' },
        definition: {
          'en': 'The suppressed instinctual core that triggers unprovoked self-sabotage under extreme environmental stress.',
          'zh-CN': '当夜深人静、所有名片与防御都被撕下时，那个在黑暗中与你自己对视的纯粹本能。它隐藏着你最底层的安全感来源与压抑下的毁灭倾向。',
          'zh-TW': '當夜深人靜、所有名片與防禦都被撕下時，那個在黑暗中與你自己對視的純粹本能。它隱藏著你最底層的安全感來源與壓抑下的毀滅傾向。',
        },
        visceralHook: {
          'en': 'Explains your sudden, irrational urge to burn down your own success when high pressure builds up.',
          'zh-CN': '直击你在极度高压或失控时，为何会产生冲动想要亲手毁掉已经建立好的成就与关系的根本原因。',
          'zh-TW': '直擊你在極度高壓或失控時，為何會產生衝動想要親手毀掉已經建立好的成就與關係的根本原因。',
        },
      },
    ],
  },
};

// ============================================================================
// 2. 主页面组件
// ============================================================================
export default function DictionaryTermPage({ params }: { params: { term: string } }) {
  const decodedTerm = decodeURIComponent(params.term || '').toLowerCase();
  const [currentLocale, setCurrentLocale] = useState<Locale>('zh-CN');

  // 从 HTML Attribute 中读取全局语言/主题状态
  useEffect(() => {
    const lang = document.documentElement.getAttribute('lang') as Locale;
    if (lang && ['en', 'zh-CN', 'zh-TW'].includes(lang)) {
      setCurrentLocale(lang);
    }
  }, []);

  const entry = LEXICON_DATA[decodedTerm] || LEXICON_DATA['primordial-anchor'];

  return (
    <div className="relative min-h-screen text-[var(--text-primary)] transition-colors duration-500 pb-20 pt-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto z-10 relative">
        
        {/* 顶部面包屑与导航 */}
        <div className="flex items-center justify-between mb-8 border-b border-[var(--border-line)] pb-4">
          <Link
            href="/"
            className="text-xs uppercase font-serif-title tracking-widest text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors flex items-center gap-2"
          >
            ← CHRONO–FLOW // INDEX
          </Link>

          {/* 语言切换器 */}
          <div className="flex items-center gap-2 text-xs">
            {(['zh-CN', 'zh-TW', 'en'] as Locale[]).map((loc) => (
              <button
                key={loc}
                onClick={() => {
                  setCurrentLocale(loc);
                  document.documentElement.setAttribute('lang', loc);
                }}
                className={`px-2 py-0.5 rounded transition-colors ${
                  currentLocale === loc
                    ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium'
                    : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                }`}
              >
                {loc === 'zh-CN' ? '简' : loc === 'zh-TW' ? '繁' : 'EN'}
              </button>
            ))}
          </div>
        </div>

        {/* 标题控制台 */}
        <div className="mb-10 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--border-line)] bg-[var(--bg-card)] text-xs text-[var(--text-muted)] mb-3">
            <span className="cinnabar-dot" />
            <span>THE CHRONO–LEXICON // 时空锚典</span>
            <span className="opacity-40">|</span>
            <span className="font-mono">LEVEL 0{entry.level}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif-title tracking-wider text-[var(--text-primary)] font-bold">
            {entry.title[currentLocale]}
          </h1>
          <p className="text-xs font-mono uppercase text-[var(--text-muted)] mt-1 tracking-widest">
            {entry.codeName}
          </p>
        </div>

        {/* 核心解构卡片 (Glassmorphism Card) */}
        <div className="bg-[var(--bg-card)] border border-[var(--border-line)] backdrop-blur-md rounded-xl p-6 sm:p-8 shadow-2xl space-y-8 transition-all hover:border-[var(--border-line-hover)]">
          
          {/* 1px 几何爻线 (Yao Line) */}
          <div className="yao-yang" />

          {/* 1. 底层传统内核映射 Tag */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono px-2.5 py-1 rounded bg-[var(--accent-glow)] text-[var(--text-secondary)] border border-[var(--border-line)]">
              {entry.mapping[currentLocale]}
            </span>
          </div>

          {/* 2. 重构定义与隐喻 */}
          <div className="space-y-3">
            <h3 className="text-xs uppercase font-mono tracking-widest text-[var(--text-muted)]">
              // RECONSTRUCTED DEFINITION & SPATIOTEMPORAL METAPHOR (定义与隐喻)
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-[var(--text-primary)] font-light">
              {entry.definition[currentLocale]}
            </p>
          </div>

          {/* 如果有子词条 (例如 Level 2 的外核/坍缩内核) */}
          {entry.children && entry.children.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-[var(--border-line)]">
              {entry.children.map((child) => (
                <div key={child.id} className="p-4 rounded-lg bg-[var(--input-bg)] border border-[var(--border-line)] space-y-2">
                  <div className="text-xs font-mono text-[var(--text-muted)]">{child.codeName}</div>
                  <div className="font-bold text-sm text-[var(--text-primary)]">{child.title[currentLocale]}</div>
                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed">{child.definition[currentLocale]}</p>
                  <div className="pt-2 text-xs text-[var(--cinnabar)] italic border-t border-[var(--border-line)]">
                    刺痛点: {child.visceralHook[currentLocale]}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. 刺穿感痛点 (Visceral Hook Section) */}
          <div className="p-5 rounded-lg bg-[var(--accent-amber-glow)] border border-[var(--border-line)] space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--accent-amber)] font-semibold">
              <span>CRITICAL VISCERAL POINT // 刺穿感痛点</span>
            </div>
            <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed italic">
              "{entry.visceralHook[currentLocale]}"
            </p>
          </div>

          <div className="yao-yin" />
        </div>

        {/* 底部 9 级时空锚典控制台 (Level Navigation Console) */}
        <div className="mt-12 text-center space-y-4">
          <div className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest">
            // CHRONO–LEXICON MATRIX NAVIGATOR
          </div>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { level: 1, id: 'primordial-anchor', name: 'L1 原点锚块' },
              { level: 2, id: 'dual-vector', name: 'L2 双向向量场' },
              { level: 3, id: 'tri-axial-strain', name: 'L3 三轴应力' },
              { level: 4, id: 'four-pillars', name: 'L4 四柱结构' },
              { level: 5, id: 'wuxing-factors', name: 'L5 均衡因子' },
              { level: 6, id: 'lunar-tides', name: 'L6 情绪潮汐' },
              { level: 7, id: 'axial-tilt', name: 'L7 轴向转折' },
              { level: 8, id: 'relational-sync', name: 'L8 双人共振' },
              { level: 9, id: 'orbit-continuum', name: 'L9 轨道图谱' },
            ].map((item) => {
              const isActive = entry.level === item.level;
              const isImplemented = item.level <= 2; // 目前 1 和 2 级已编制完成

              return (
                <Link
                  key={item.level}
                  href={isImplemented ? `/dictionary/${item.id}` : '#'}
                  className={`px-3 py-2 rounded-lg border text-xs font-mono transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'border-[var(--yao-light)] text-[var(--text-primary)] bg-[var(--bg-card-hover)] shadow-lg scale-105'
                      : isImplemented
                      ? 'border-[var(--border-line)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:border-[var(--border-line-hover)]'
                      : 'border-[var(--border-line)] opacity-40 cursor-not-allowed text-[var(--text-muted)]'
                  }`}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${isImplemented ? 'bg-[var(--yao-light)]' : 'bg-neutral-600'}`} />
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
