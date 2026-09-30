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

  // 1. Level 4 四柱存在结构：全员（含游客）无门槛开放
  const isPillarsUnlocked = true;
  
  // 2. Level 5 五维均衡因子：已注册与已订阅解锁（游客状态遮罩锁定）
  const isEquilibriumUnlocked = userRole === 'registered' || userRole === 'subscribed';

  return (
    <div className="space-y-8">
      {/* SECTION 1: 四柱存在结构 (Level 4: The Four Pillars of Existence) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--text-primary)]"></span>
            <h2 className="font-serif-title text-base md:text-lg text-[var(--text-primary)] tracking-wide uppercase">
              {isEn ? 'LEVEL 4 | THE FOUR PILLARS OF EXISTENCE' : isTW ? 'LEVEL 4 | 四柱存在結構與解構' : 'LEVEL 4 | 四柱存在结构与解构'}
            </h2>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase">
            {isEn ? 'STATUS: UNLOCKED' : isTW ? '狀態：已解鎖' : '状态：已解锁'}
          </span>
        </div>

        {/* 4 柱网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative">
          
          {/* Pillar 1: 原点之柱 (The Origin) */}
          <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] space-y-3 relative overflow-hidden transition-all">
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase border-b border-[var(--border-line)]/50 pb-1">
              [PILLAR I] {isEn ? 'THE ORIGIN PILLAR' : isTW ? '原點之柱' : '原点之柱'}
            </div>
            <h3 className="font-serif-title text-sm font-bold text-[var(--text-primary)]">
              {isEn ? 'Inherited Gravity' : isTW ? '隱秘繼承重力場' : '隐秘继承重力场'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'Your foundation is anchored in high expectation and underlying anxiety. You inherited a deep-seated drive to seek order through compliance.'
                : isTW
                ? '你的底層安全感錨定在「高期待與隱秘焦慮」中。原點重力讓你天然帶著一種必須靠「秩序與聽話」來換取生存許可的潛意識。'
                : '你的底层安全感锚定在“高期待与隐秘焦虑”中。原点重力让你天然带着一种必须靠“秩序与听话”来换取生存许可的潜意识。'}
            </p>
            <div className="text-[10px] font-mono text-[var(--cinnabar)]">
              {isEn ? 'VECTOR: Adaptation Overload' : isTW ? '繼承因子：潛流過載' : '继承因子：潜流过载'}
            </div>
          </div>

          {/* Pillar 2: 社会投影之柱 (The Social Armor) */}
          <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] space-y-3 relative overflow-hidden transition-all">
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase border-b border-[var(--border-line)]/50 pb-1">
              [PILLAR II] {isEn ? 'THE SOCIAL MASK' : isTW ? '社會投影之柱' : '社会投影之柱'}
            </div>
            <h3 className="font-serif-title text-sm font-bold text-[var(--text-primary)]">
              {isEn ? 'The Habitual Accommodator' : isTW ? '習慣性妥協面具' : '习惯性妥协面具'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'Your social mask is built on absolute competence and emotional support. You act as a harbor for others, leaving your own boundary breached.'
                : isTW
                ? '你在職場與社交中塑造了「極其有涵養、體面、懂事」的配合者形象。大家習慣了你的妥協，以為那是你的涵養，實際上是你的防禦機制。'
                : '你在职场与社交中塑造了“极其有涵养、体面、懂事”的配合者形象。大家习惯了你的妥协，以为那是你的涵养，实际上是你的防御机制。'}
            </p>
            <div className="text-[10px] font-mono text-[var(--cinnabar)]">
              {isEn ? 'VECTOR: Visibility Compensation' : isTW ? '面具因子：顯化代償' : '面具因子：显化代偿'}
            </div>
          </div>

          {/* Pillar 3: 内核原点之柱 (The True Ego) */}
          <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] space-y-3 relative overflow-hidden transition-all">
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase border-b border-[var(--border-line)]/50 pb-1">
              [PILLAR III] {isEn ? 'THE CORE EGO' : isTW ? '內核原點之柱' : '内核原点之柱'}
            </div>
            <h3 className="font-serif-title text-sm font-bold text-[var(--text-primary)]">
              {isEn ? 'Suppressed Decision Engine' : isTW ? '被封印的裁決內核' : '被封印的裁决内核'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'In the dark, you carry immense boundary-setting potential. You are tired of being agreeable, but fear the chaos of saying "No".'
                : isTW
                ? '卸下所有面具後，你的內核早已對拖沓與爛攤子厭煩至極。你並非缺乏刀刃向內的勇氣，你只是習慣了用「再忍忍」逃避衝突。'
                : '卸下所有面具后，你的内核早已对拖沓与烂摊子厌烦至极。你并非缺乏刀刃向内的勇气，你只是习惯了用“再忍忍”逃避冲突。'}
            </p>
            <div className="text-[10px] font-mono text-[var(--cinnabar)]">
              {isEn ? 'VECTOR: Precision Locked' : isTW ? '內核因子：裁決被鎖' : '内核因子：裁决被锁'}
            </div>
          </div>

          {/* Pillar 4: 潜匿地平线之柱 (The Unseen Horizon) */}
          <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] space-y-3 relative overflow-hidden transition-all">
            <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase border-b border-[var(--border-line)]/50 pb-1">
              [PILLAR IV] {isEn ? 'THE HIDDEN HORIZON' : isTW ? '潛匿地平線之柱' : '潜匿地平线之柱'}
            </div>
            <h3 className="font-serif-title text-sm font-bold text-[var(--text-primary)]">
              {isEn ? 'Unspoken Breakout Drive' : isTW ? '終極徹底破局渴望' : '终极彻底破局渴望'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'Your unspoken desire is absolute independence and freedom from foreign anxieties. In 11 days, this drive will force a boundary.'
                : isTW
                ? '你從未對任何人提及的終極渴望，是徹底擺脫他人的負能量綁架。11 天內，積壓的忍耐將強制轉化為劃定邊界的裁決力。'
                : '你从未对任何人提及的终极渴望，是彻底摆脱他人的负能量绑架。11 天内，积压的忍耐将强制转化为划定边界的裁决力。'}
            </p>
            <div className="text-[10px] font-mono text-[var(--cinnabar)]">
              {isEn ? 'VECTOR: Anchoring Seeking' : isTW ? '渴望因子：重力再置' : '渴望因子：重力再置'}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: 五维动态均衡因子 (Level 5: The Five Dynamic Equilibrium Factors) */}
      <section className="space-y-4 pt-4 border-t border-[var(--border-line)]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            <h2 className="font-serif-title text-base md:text-lg text-[var(--text-primary)] tracking-wide uppercase">
              {isEn
                ? 'LEVEL 5 | THE FIVE DYNAMIC EQUILIBRIUM FACTORS'
                : isTW
                ? 'LEVEL 5 | 五維均衡因子動態矩陣'
                : 'LEVEL 5 | 五维均衡因子动态矩阵'}
            </h2>
          </div>
          <span className="text-[10px] font-mono uppercase text-amber-400">
            {isEquilibriumUnlocked
              ? isEn
                ? 'STATUS: UNLOCKED'
                : isTW
                ? '狀態：已解鎖'
                : '状态：已解锁'
              : isEn
              ? 'REQUIRES REGISTRATION'
              : isTW
              ? '需要註冊解鎖'
              : '需要注册解锁'}
          </span>
        </div>

        <div className="p-6 rounded border border-[var(--border-line)] bg-[var(--bg-card)] relative overflow-hidden space-y-6">
          <div className={`space-y-6 transition-all ${!isEquilibriumUnlocked ? 'filter blur-md select-none opacity-20' : ''}`}>
            
            {/* 5 个维度重力因子占比：顶端仅保留序号 [01]~[05]，消除任何名称重复 */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 font-mono text-xs">
              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[01]</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">
                  {isEn ? 'Precision' : isTW ? '裁決因子' : '裁决因子'}
                </div>
                <div className="mt-2 text-lg font-serif-title text-[var(--cinnabar)]">32%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">
                  {isEn ? 'Boundary Deficit' : isTW ? '斷裂危險 / 需補強' : '断裂危险 / 需补强'}
                </div>
              </div>

              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[02]</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">
                  {isEn ? 'Expansion' : isTW ? '蔓延因子' : '蔓延因子'}
                </div>
                <div className="mt-2 text-lg font-serif-title text-blue-400">68%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">
                  {isEn ? 'Highly Active' : isTW ? '野心散播 / 極度活躍' : '野心散播 / 极度活跃'}
                </div>
              </div>

              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[03]</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">
                  {isEn ? 'Adaptation' : isTW ? '潛流因子' : '潜流因子'}
                </div>
                <div className="mt-2 text-lg font-serif-title text-cyan-400">88%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">
                  {isEn ? 'Severe Overload' : isTW ? '嚴重過載 / 情緒吸耗' : '严重过载 / 情绪吸耗'}
                </div>
              </div>

              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[04]</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">
                  {isEn ? 'Visibility' : isTW ? '顯化因子' : '显化因子'}
                </div>
                <div className="mt-2 text-lg font-serif-title text-purple-400">74%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">
                  {isEn ? 'Defensive Masking' : isTW ? '過度防禦性體面' : '过度防御性体面'}
                </div>
              </div>

              <div className="p-3 bg-[var(--bg-card-hover)] rounded border border-[var(--border-line)]">
                <div className="text-[var(--text-muted)] text-[10px]">[05]</div>
                <div className="font-bold text-sm text-[var(--text-primary)]">
                  {isEn ? 'Anchoring' : isTW ? '錨定因子' : '锚定因子'}
                </div>
                <div className="mt-2 text-lg font-serif-title text-emerald-400">41%</div>
                <div className="text-[9px] text-[var(--text-muted)] mt-1">
                  {isEn ? 'Seeking Stability' : isTW ? '定力虧缺 / 尋找錨點' : '定力亏缺 / 寻找锚点'}
                </div>
              </div>
            </div>

            {/* 深度重力动态撕裂比分析 */}
            <div className="p-4 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)]/50 space-y-2">
              <h4 className="font-serif-title text-sm text-[var(--text-primary)] font-bold">
                {isEn
                  ? 'DYNAMIC STRAIN ANALYSIS: ADAPTATION (88%) VS PRECISION (32%)'
                  : isTW
                  ? '重力張力撕裂比分析：潛流因子 (88%) 比 裁決因子 (32%)'
                  : '重力张力撕裂比分析：潜流因子 (88%) 比 裁决因子 (32%)'}
              </h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {isEn
                  ? 'Your Adaptation factor is operating in severe overload, causing you to absorb ambient stress. Meanwhile, your Precision factor is suppressed, leaving you unable to enforce boundaries. This 56% strain gap is the direct driver of your inner friction.'
                  : isTW
                  ? '你的「潛流因子」（同理與吸收力）處於 88% 的極度過載狀態，而你的「裁決因子」（劃界與斬斷力）僅為 32%。高達 56% 的張力差，是你內在內耗與不敢說 No 的根本病灶。'
                  : '你的“潜流因子”（同理与吸收力）处于 88% 的极度过载状态，而你的“裁决因子”（划界与斩断力）仅为 32%。高达 56% 的张力差，是你内部内耗与不敢说 No 的根本病灶。'}
              </p>
            </div>
          </div>

          {/* 未注册锁定遮罩（仅游客显示，通过全局传递的 isEquilibriumUnlocked 控制） */}
          {!isEquilibriumUnlocked && (
            <div className="absolute inset-0 bg-[var(--bg-card)]/90 backdrop-blur-md flex flex-col items-center justify-center p-6 text-center space-y-3 z-20">
              <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-[10px]">
                {isEn ? 'FREE REGISTRATION REQUIRED' : isTW ? '免費註冊解鎖' : '免费注册解锁'}
              </span>
              <h3 className="font-serif-title text-base md:text-lg text-[var(--text-primary)]">
                {isEn
                  ? 'UNLOCK LEVEL 5 | FIVE DYNAMIC EQUILIBRIUM FACTORS'
                  : isTW
                  ? '解鎖 LEVEL 5 | 五維均衡因子動態矩陣'
                  : '解锁 LEVEL 5 | 五维均衡因子动态矩阵'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] max-w-md leading-relaxed">
                {isEn
                  ? 'Register a free account to calculate your 5 equilibrium factors and internal dynamic strain ratios.'
                  : isTW
                  ? '免費註冊帳號綁定生辰座標，全量解剖你的 5 維重力因子占比與內在張力撕裂比。'
                  : '免费注册账号绑定生辰坐标，全量解剖你的 5 维重力因子占比与内在张力撕裂比。'}
              </p>
              <button
                onClick={onTriggerRegister}
                className="px-6 py-2.5 bg-[var(--cinnabar)] text-white font-mono font-bold text-xs rounded hover:opacity-90 transition-all uppercase tracking-wider shadow-lg"
              >
                {isEn ? 'Register Free to Unlock' : isTW ? '免費註冊解鎖五維矩陣' : '免费注册解锁五维矩阵'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
