'use client';

import React from 'react';
import { useLanguage } from '@/app/layout';

interface PillarsStructureProps {
  userRole: 'guest' | 'registered' | 'subscribed';
  onTriggerRegister: () => void;
  onTriggerSubscribe?: () => void;
}

export default function PillarsStructure({ userRole, onTriggerRegister, onTriggerSubscribe }: PillarsStructureProps) {
  const { lang } = useLanguage?.() || { lang: 'zh' };
  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  // 1. 注册解锁：注册用户与订阅用户均可查看四柱结构
  const isPillarsUnlocked = userRole === 'registered' || userRole === 'subscribed';
  
  // 2. 付费解锁：仅订阅用户可解锁五维动态均衡矩阵
  const isEquilibriumUnlocked = userRole === 'subscribed';

  return (
    <div className="space-y-8">
      {/* SECTION 1: 四柱存在结构 (The Four Pillars of Existence) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></span>
            <h2 className="font-serif-title text-base md:text-lg text-[var(--text-primary)] tracking-wide uppercase">
              {isEn ? 'THE FOUR PILLARS OF EXISTENCE' : isTW ? '四柱存在結構與解構' : '四柱存在结构与解构'}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
            {isPillarsUnlocked ? (isEn ? 'STATUS: UNLOCKED' : '状态：已解锁') : (isEn ? 'REQUIRES REGISTRATION' : '需要注册解锁')}
          </span>
        </div>

        {/* 4 柱网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          
          {/* Pillar 1: 原点之柱 (The Origin) */}
          <div className={`p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] space-y-3 relative overflow-hidden transition-all ${!isPillarsUnlocked ? 'filter blur-sm select-none opacity-30' : ''}`}>
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase border-b border-[var(--border-line)]/50 pb-1">
              [PILLAR I] {isEn ? 'THE ORIGIN' : '原点之柱 (年)'}
            </div>
            <h3 className="font-serif-title text-sm font-bold text-[var(--text-primary)]">
              {isEn ? 'Inherited Gravity' : '隐秘继承重力场'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'Your foundation is anchored in high expectation and underlying anxiety. You inherited a deep-seated drive to seek order through compliance.'
                : '你的底层安全感锚定在“高期待与隐秘焦虑”中。原点重力让你天然带着一种必须靠“秩序与听话”来换取生存许可的潜意识。'}
            </p>
            <div className="text-[10px] font-mono text-[var(--cinnabar)]">
              {isEn ? 'VECTOR: Adaptation High' : '继承因子：潜流过载 (Adaptation)'}
            </div>
          </div>

          {/* Pillar 2: 社会投影之柱 (The Social Armor) */}
          <div className={`p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] space-y-3 relative overflow-hidden transition-all ${!isPillarsUnlocked ? 'filter blur-sm select-none opacity-30' : ''}`}>
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase border-b border-[var(--border-line)]/50 pb-1">
              [PILLAR II] {isEn ? 'THE SOCIAL ARMOR' : '社会投影之柱 (月)'}
            </div>
            <h3 className="font-serif-title text-sm font-bold text-[var(--text-primary)]">
              {isEn ? 'The Habitual Accommodator' : '习惯性妥协面具'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'Your social mask is built on absolute competence and emotional support. You act as a harbor for others, leaving your own boundary breached.'
                : '你在职场与社交中塑造了“极其有涵养、体面、懂事”的配合者形象。大家习惯了你的妥协，以为那是你的涵养，实际上是你的防御机制。'}
            </p>
            <div className="text-[10px] font-mono text-[var(--cinnabar)]">
              {isEn ? 'VECTOR: Visibility Overused' : '面具因子：显化代偿 (Visibility)'}
            </div>
          </div>

          {/* Pillar 3: 内核原点之柱 (The True Ego) */}
          <div className={`p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] space-y-3 relative overflow-hidden transition-all ${!isPillarsUnlocked ? 'filter blur-sm select-none opacity-30' : ''}`}>
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase border-b border-[var(--border-line)]/50 pb-1">
              [PILLAR III] {isEn ? 'THE TRUE EGO' : '内核原点之柱 (日)'}
            </div>
            <h3 className="font-serif-title text-sm font-bold text-[var(--text-primary)]">
              {isEn ? 'Suppressed Decision Engine' : '被封印的裁决内核'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'In the dark, you carry immense boundary-setting potential. You are tired of being agreeable, but fear the chaos of saying "No".'
                : '卸下所有面具后，你的内核早已对拖沓与烂摊子厌烦至极。你并非缺乏刀刃向内的勇气，你只是习惯了用“再忍忍”逃避冲突。'}
            </p>
            <div className="text-[10px] font-mono text-[var(--cinnabar)]">
              {isEn ? 'VECTOR: Precision Locked' : '内核因子：裁决被锁 (Precision)'}
            </div>
          </div>

          {/* Pillar 4: 潜匿地平线之柱 (The Unseen Horizon) */}
          <div className={`p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] space-y-3 relative overflow-hidden transition-all ${!isPillarsUnlocked ? 'filter blur-sm select-none opacity-30' : ''}`}>
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase border-b border-[var(--border-line)]/50 pb-1">
              [PILLAR IV] {isEn ? 'THE UNSEEN HORIZON' : '潜匿地平线之柱 (时)'}
            </div>
            <h3 className="font-serif-title text-sm font-bold text-[var(--text-primary)]">
              {isEn ? 'Unspoken Breakout Drive' : '终极彻底破局渴望'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'Your unspoken desire is absolute independence and freedom from foreign anxieties. In 11 days, this drive will force a boundary.'
                : '你从未对任何人提及的终极渴望，是彻底摆脱他人的负能量绑架。11 天内，积压的忍耐将强制转化为划定边界的裁决力。'}
            </p>
            <div className="text-[10px] font-mono text-[var(--cinnabar)]">
              {isEn ? 'VECTOR: Anchoring Seeking' : '渴望因子：重力再置 (Anchoring)'}
            </div>
          </div>

          {/* 游客注册引导层 */}
          {!isPillarsUnlocked && (
            <div className="absolute inset-0 bg-[var(--bg-card)]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-3 z-20 rounded border border-[var(--border-line)]">
              <h3 className="font-serif-title text-base md:text-lg text-[var(--text-primary)]">
                {isEn ? 'UNLOCK YOUR FOUR PILLARS OF EXISTENCE' : isTW ? '解鎖您的四柱存在結構' : '解锁您的四柱存在结构'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] max-w-md leading-relaxed">
                {isEn
                  ? 'Enter your email to reveal your Inherited Gravity, Social Armor, True Ego, and Unspoken Desires for free.'
                  : '免费注册账号锁定生辰坐标，全量解剖你的原点重力、社会盔甲、纯粹内核与终极潜匿欲望。'}
              </p>
              <button
                onClick={onTriggerRegister}
                className="px-6 py-2.5 bg-[var(--cinnabar)] text-white text-xs font-mono font-bold rounded hover:opacity-90 transition-all uppercase tracking-wider shadow-lg"
              >
                {isEn ? 'Register Free to Unlock' : '免费注册并解锁四柱'}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SECTION 2: 五维动态均衡矩阵 (The Five Dynamic Equilibrium Factors) - 付费解锁 */}
      <section className="space-y-4 pt-4 border-t border-[var(--border-line)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <h2 className="font-serif-title text-base md:text-lg text-[var(--text-primary)] tracking-wide uppercase">
              {isEn ? 'THE FIVE DYNAMIC EQUILIBRIUM FACTORS' : isTW ? '五維重力因子動態均衡矩陣' : '五维重力因子动态均衡矩阵'}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-amber-400 uppercase">
            {isEquilibriumUnlocked ? (isEn ? 'FULL ORBIT ACTIVE' : '全景已激活') : (isEn ? 'PAID SUBSCRIBERS ONLY' : '仅限付费订阅解锁')}
          </span>
        </div>

        <div className="p-6 rounded border border-[var(--border-line)] bg-[var(--bg-card)] relative overflow-hidden space-y-6">
          <div className={`space-y-6 transition-all ${!isEquilibriumUnlocked ? 'filter blur-md select-none opacity-20' : ''}`}>
            
            {/* 5 个因子进度条 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs">
              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[01] PRECISION</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">裁决因子</div>
                <div className="mt-2 text-lg font-serif-title text-[var(--cinnabar)]">32%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">断裂危险 / 需补强</div>
              </div>

              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[02] EXPANSION</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">蔓延因子</div>
                <div className="mt-2 text-lg font-serif-title text-blue-400">68%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">野心散播 / 极度活跃</div>
              </div>

              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[03] ADAPTATION</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">潜流因子</div>
                <div className="mt-2 text-lg font-serif-title text-amber-400">88%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">严重过载 / 情绪吸耗</div>
              </div>

              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[04] VISIBILITY</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">显化因子</div>
                <div className="mt-2 text-lg font-serif-title text-purple-400">74%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">过度防御性体面</div>
              </div>

              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[05] ANCHORING</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">锚定因子</div>
                <div className="mt-2 text-lg font-serif-title text-emerald-400">41%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">定力亏缺 / 寻找锚点</div>
              </div>
            </div>

            {/* 深度冲突解读 */}
            <div className="p-4 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)]/50 space-y-2">
              <h4 className="font-serif-title text-sm text-[var(--text-primary)] font-bold">
                {isEn ? 'DYNAMICAL TENSION ANALYSIS: ADAPTATION VS PRECISION' : '动态撕裂比分析：潜流因子 (88%) VS 裁决因子 (32%)'}
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {isEn
                  ? 'Your Adaptation factor is operating in severe over-capacity, causing you to absorb ambient stress. Meanwhile, your Precision factor is suppressed, leaving you unable to enforce boundaries. This 56% gap is the direct source of your inner friction.'
                  : '你的“潜流因子”（同理与吸收力）处于 88% 的极度过载状态，而你的“裁决因子”（划界与斩断力）仅为 32%。高达 56% 的张力差，是你内部内耗与不敢说 No 的根本病灶。'}
              </p>
            </div>
          </div>

          {/* 未付费订阅遮罩 */}
          {!isEquilibriumUnlocked && (
            <div className="absolute inset-0 bg-[var(--bg-card)]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-3 z-20">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px]">
                {isEn ? 'ORBITAL SUBSCRIPTION REQUIRED' : '全景轨道订阅限定'}
              </span>
              <h3 className="font-serif-title text-base md:text-lg text-[var(--text-primary)]">
                {isEn ? 'UNLOCK 52-WEEK DYNAMIC EQUILIBRIUM MATRIX' : isTW ? '解鎖 52 週動態重力矩陣與週度解包' : '解锁 52 周动态重力矩阵与周度解包'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] max-w-md leading-relaxed">
                {isEn
                  ? 'Unlock full dynamic factor ratios, weekly friction unpacking, and 52-week trajectory tracking.'
                  : '解锁 5 个重力因子实显比例、动态撕裂比计算、52 周连续轨迹追踪与黑历史中枢归档。'}
              </p>
              <button
                onClick={onTriggerSubscribe || onTriggerRegister}
                className="px-6 py-2.5 bg-amber-500 text-black font-mono font-bold text-xs rounded hover:opacity-90 transition-all uppercase tracking-wider shadow-lg"
              >
                {isEn ? 'Unlock Full Orbit ($29/yr)' : '解锁全景轨道 (￥198/年)'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
