'use client';

import React from 'react';
import { useLanguage } from '@/app/layout';

interface DailyPulseProps {
  userRole: 'guest' | 'registered' | 'subscribed';
  onTriggerRegister?: () => void;
  onTriggerSubscribe?: () => void;
}

export default function DailyPulse({ userRole, onTriggerRegister, onTriggerSubscribe }: DailyPulseProps) {
  const { lang } = useLanguage?.() || { lang: 'zh' };
  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  const isUnlocked = userRole === 'subscribed';

  return (
    <section className="space-y-4">
      {/* 标题 */}
      <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-2">
        <div className="flex items-center gap-2">
          <span className="cinnabar-dot animate-pulse"></span>
          <h2 className="font-serif-title text-base md:text-lg text-[var(--text-primary)] tracking-wide uppercase">
            {isEn ? 'DAILY GRAVITATIONAL PULSE & MICRO-CALIBRATION' : isTW ? '今日重力波脈搏與微觀校準' : '今日重力波脉搏与微观校准'}
          </h2>
        </div>
        <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
          L7 - MICRO CYCLE
        </span>
      </div>

      {/* 3 张卡片网格 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* 卡片 1：认知阻力 (Cognitive Friction) - 免费体验钩子，完全开放 */}
        <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md space-y-3 relative overflow-hidden group hover:border-[var(--border-line-hover)] transition-all">
          <div className="absolute top-0 left-0 right-0 yao-yang"></div>
          <div className="flex justify-between items-center text-[10px] font-mono text-[var(--cinnabar)]">
            <span>[01] {isEn ? 'COGNITIVE FRICTION' : isTW ? '認知阻力臨界點' : '认知阻力临界点'}</span>
            <span className="px-1.5 py-0.5 rounded bg-[var(--cinnabar)]/10 border border-[var(--cinnabar)]/20">
              FREE HOOK
            </span>
          </div>

          <h3 className="font-serif-title text-sm text-[var(--text-primary)]">
            {isEn ? 'Over-Exertion in Decision Space' : '决策领域的过度代偿阻力'}
          </h3>

          <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
            {isEn
              ? 'Today, your field experiences high friction when forced into rapid micro-decisions. Expect internal tension around boundaries.'
              : isTW
              ? '今日場域在被迫做出快速微觀決策时呈现高阻力，易在人際界限与掌控欲上产生内部绷紧感。'
              : '今日场域在被迫做出快速微观决策时呈现高阻力，易在人际界限与掌控欲上产生内部绷紧感。'}
          </p>

          <div className="pt-2 border-t border-[var(--border-line)]/50 text-[10px] font-mono text-[var(--text-muted)]">
            {isEn ? 'FRICTION INDEX: 74% (HIGH TENSION)' : '阻力指数：74% (高张力期)'}
          </div>
        </div>

        {/* 卡片 2：锚定内稳态 (Anchoring Homeostasis) - 游客半遮罩 */}
        <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md space-y-3 relative overflow-hidden">
          <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)]">
            <span>[02] {isEn ? 'HOMEOSTASIS ANCHOR' : isTW ? '錨定內穩態与法則' : '锚定内稳态与法则'}</span>
            {!isUnlocked && (
              <span className="text-[10px] font-mono text-amber-400">[LOCKED]</span>
            )}
          </div>

          {/* 内容区 */}
          <div className={`space-y-3 transition-all ${!isUnlocked ? 'filter blur-sm select-none opacity-40' : ''}`}>
            <h3 className="font-serif-title text-sm text-[var(--text-primary)]">
              {isEn ? 'Silence & Intentional Withdrawal' : '蓄力沉淀 / 戒除急躁盲动'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'Dos: Maintain structured silence during discussions. Don\'ts: Do not push for immediate consensus or legal commitments today.'
                : isTW
                ? '宜：在重大讨论中保持结构性沉默；忌：推行即时共识或签署未核实的长期协议。'
                : '宜：在重大讨论中保持结构性沉默；忌：推行即时共识或签署未核实的长期协议。'}
            </p>
            <div className="pt-2 border-t border-[var(--border-line)]/50 text-[10px] font-mono text-[var(--text-muted)]">
              {isEn ? 'ENERGY VECTOR: WATER DOMINANT' : '能量向量：水局主导 / 守夜沉淀'}
            </div>
          </div>

          {/* 未解锁覆盖层 */}
          {!isUnlocked && (
            <div className="absolute inset-0 bg-[var(--bg-card)]/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center space-y-2 z-10">
              <p className="text-xs font-mono text-[var(--text-primary)]">
                {isEn ? 'MICRO-CALIBRATION LOCKED' : isTW ? '微觀校准與日法則已隱藏' : '微观校准与日法则已隐藏'}
              </p>
              <p className="text-[10px] font-mono text-[var(--text-muted)] max-w-[200px]">
                {userRole === 'guest'
                  ? (isEn ? 'Register account to reveal daily Dos & Don\'ts.' : '注册账号锁定坐标后查看今日微观校准。')
                  : (isEn ? 'Unlock full orbit to view.' : '付费解锁全景轨道后开放。')}
              </p>
              <button
                onClick={userRole === 'guest' ? onTriggerRegister : onTriggerSubscribe}
                className="px-3 py-1 bg-[var(--cinnabar)] text-white text-[10px] font-mono rounded hover:opacity-90 transition-all uppercase tracking-wider"
              >
                {userRole === 'guest'
                  ? (isEn ? 'Register to Unlock' : '注册并解锁')
                  : (isEn ? 'Subscribe to Unlock' : '解锁全景轨道')}
              </button>
            </div>
          )}
        </div>

        {/* 卡片 3：界限张力 (Boundary Strain) - 游客半遮罩 */}
        <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md space-y-3 relative overflow-hidden">
          <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)]">
            <span>[03] {isEn ? 'BOUNDARY STRAIN' : isTW ? '界限張力與割捨' : '界限张力与割舍'}</span>
            {!isUnlocked && (
              <span className="text-[10px] font-mono text-amber-400">[LOCKED]</span>
            )}
          </div>

          {/* 内容区 */}
          <div className={`space-y-3 transition-all ${!isUnlocked ? 'filter blur-sm select-none opacity-40' : ''}`}>
            <h3 className="font-serif-title text-sm text-[var(--text-primary)]">
              {isEn ? 'Relinquishing Projection Traps' : '切割人际投射陷阱与期望包裹'}
            </h3>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {isEn
                ? 'Targeted strain detected in emotional boundaries. Cut off unreciprocated expectation projections before 18:00.'
                : isTW
                ? '感情与合作界限呈现拉扯，需在今日 18:00 前切断单向情绪投入与不切实际的期望包裹。'
                : '感情与合作界限呈现拉扯，需在今日 18:00 前切断单向情绪投入与不切实际的期望包裹。'}
            </p>
            <div className="pt-2 border-t border-[var(--border-line)]/50 text-[10px] font-mono text-[var(--text-muted)]">
              {isEn ? 'STRAIN INDEX: BOUNDARY BREACH RISK' : '张力预警：界限侵蚀风险'}
            </div>
          </div>

          {/* 未解锁覆盖层 */}
          {!isUnlocked && (
            <div className="absolute inset-0 bg-[var(--bg-card)]/80 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center space-y-2 z-10">
              <p className="text-xs font-mono text-[var(--text-primary)]">
                {isEn ? 'BOUNDARY STRAIN DIAGNOSIS LOCKED' : isTW ? '界限張力診斷未解鎖' : '界限张力诊断未解锁'}
              </p>
              <button
                onClick={userRole === 'guest' ? onTriggerRegister : onTriggerSubscribe}
                className="px-3 py-1 border border-[var(--border-line-hover)] bg-[var(--bg-card-hover)] hover:border-[var(--cinnabar)] text-[var(--text-primary)] text-[10px] font-mono rounded transition-all uppercase tracking-wider"
              >
                {isEn ? 'Unlock Diagnosis' : '立即解锁诊断'}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
