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

  // 只要是已注册或已付费，今日重力波 3 张卡片全开
  const isPulseUnlocked = userRole === 'registered' || userRole === 'subscribed';

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
        
        {/* 卡片 1：认知阻力 (Cognitive Friction) - 全员开放 */}
        <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md space-y-3 relative overflow-hidden group hover:border-[var(--border-line-hover)] transition-all flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono text-[var(--cinnabar)] mb-2">
              <span>[01] {isEn ? 'COGNITIVE FRICTION' : isTW ? '認知阻力臨界點' : '认知阻力临界点'}</span>
              <span className="px-1.5 py-0.5 rounded bg-[var(--cinnabar)]/10 border border-[var(--cinnabar)]/20">
                {isEn ? 'FREE ACCESS' : '免费体验'}
              </span>
            </div>

            <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-bold mb-2">
              {isEn ? 'Over-Exertion in Decision Space' : '决策领域的过度代偿阻力'}
            </h3>

            {/* 结果与扎心解读 */}
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed mb-3">
              {isEn
                ? 'Your system is operating like a spring stretched to its limit. Your composure is not peace—it is an armor built to avoid immediate conflict while absorbing internal friction.'
                : isTW
                ? '你现在的状态像一根拉到极限的弹簧。外在的体面与配合并非平和，而是你习惯用“再忍忍”逃避摊牌后积累的巨大代偿阻力。'
                : '你现在的状态像一根拉到极限的弹簧。外在的体面与配合并非平和，而是你习惯用“再忍忍”逃避摊牌后积累的巨大代偿阻力。'}
            </p>
          </div>

          <div className="pt-2 border-t border-[var(--border-line)]/50 text-[10px] font-mono text-[var(--text-muted)]">
            {isEn ? 'FRICTION INDEX: 78% (HIGH INNER NOISE)' : '阻力指数：78% (高内耗/过度防御)'}
          </div>
        </div>

        {/* 卡片 2：锚定内稳态 (Homeostasis Anchor) - 注册后解锁 */}
        <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md space-y-3 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)] mb-2">
              <span>[02] {isEn ? 'HOMEOSTASIS ANCHOR' : isTW ? '錨定內穩態與法則' : '锚定内稳态与法则'}</span>
              {!isPulseUnlocked && (
                <span className="text-[10px] font-mono text-amber-400">[REGISTER TO UNLOCK]</span>
              )}
            </div>

            {/* 内容区 */}
            <div className={`space-y-3 transition-all ${!isPulseUnlocked ? 'filter blur-sm select-none opacity-30' : ''}`}>
              <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-bold">
                {isEn ? 'Silence & Boundary Enforcement' : '结构性沉默 / 裁决界限'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {isEn
                  ? 'Protocol: Enforce Precision factor today. Do not reply to anxiety-inducing requests within 30 minutes. Stop offering unasked emotional support.'
                  : isTW
                  ? '微觀法則：调用“裁决因子”。在今日讨论中保持结构性沉默，对超纲的消耗性请求冷酷延迟响应，停止无底线情绪讨好。'
                  : '微观法则：调用“裁决因子”。在今日讨论中保持结构性沉默，对超纲的消耗性请求冷酷延迟响应，停止无底线情绪讨好。'}
              </p>
            </div>
          </div>

          <div className={`pt-2 border-t border-[var(--border-line)]/50 text-[10px] font-mono text-[var(--text-muted)] ${!isPulseUnlocked ? 'filter blur-sm' : ''}`}>
            {isEn ? 'CORE PROTOCOL: ENFORCE PRECISION' : '核心法则：激活裁决因子 (Precision)'}
          </div>

          {/* 未解锁遮罩 (仅游客显示) */}
          {!isPulseUnlocked && (
            <div className="absolute inset-0 bg-[var(--bg-card)]/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center space-y-2.5 z-10">
              <p className="text-xs font-mono font-bold text-[var(--text-primary)]">
                {isEn ? 'DAILY PROTOCOL LOCKED' : isTW ? '今日微觀法則已隱藏' : '今日微观法则已隐藏'}
              </p>
              <p className="text-[10px] font-mono text-[var(--text-muted)] max-w-[200px]">
                {isEn ? 'Register account to reveal daily protocols & Four Pillars.' : '免费注册账号锁定坐标，解锁今日微观法则与四柱存在结构。'}
              </p>
              <button
                onClick={onTriggerRegister}
                className="px-3.5 py-1.5 bg-[var(--cinnabar)] text-white text-[10px] font-mono rounded hover:opacity-90 transition-all uppercase tracking-wider font-bold"
              >
                {isEn ? 'Register Free' : '免费注册解锁'}
              </button>
            </div>
          )}
        </div>

        {/* 卡片 3：界限张力 (Boundary Strain) - 注册后解锁 */}
        <div className="p-5 rounded border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md space-y-3 relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)] mb-2">
              <span>[03] {isEn ? 'BOUNDARY STRAIN' : isTW ? '界限張力與割捨' : '界限张力与割舍'}</span>
              {!isPulseUnlocked && (
                <span className="text-[10px] font-mono text-amber-400">[REGISTER TO UNLOCK]</span>
              )}
            </div>

            {/* 内容区 */}
            <div className={`space-y-3 transition-all ${!isPulseUnlocked ? 'filter blur-sm select-none opacity-30' : ''}`}>
              <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-bold">
                {isEn ? 'Relinquishing Projection Traps' : '切断情绪垃圾桶与投射陷阱'}
              </h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {isEn
                  ? 'Adaptation factor over-absorption detected. Cut off unreciprocated expectation projections before 18:00 to prevent energy drain.'
                  : isTW
                  ? '检测到“潜流因子”过度过载。请在今日 18:00 前强制切断单向的情绪照顾，拒绝充当他人的情绪垃圾桶。'
                  : '检测到“潜流因子”过度过载。请在今日 18:00 前强制切断单向的情绪照顾，拒绝充当他人的情绪垃圾桶。'}
              </p>
            </div>
          </div>

          <div className={`pt-2 border-t border-[var(--border-line)]/50 text-[10px] font-mono text-[var(--text-muted)] ${!isPulseUnlocked ? 'filter blur-sm' : ''}`}>
            {isEn ? 'STRAIN INDEX: BOUNDARY BREACH RISK' : '张力预警：界限侵蚀风险'}
          </div>

          {/* 未解锁遮罩 (仅游客显示) */}
          {!isPulseUnlocked && (
            <div className="absolute inset-0 bg-[var(--bg-card)]/85 backdrop-blur-[2px] flex flex-col items-center justify-center p-4 text-center space-y-2.5 z-10">
              <p className="text-xs font-mono font-bold text-[var(--text-primary)]">
                {isEn ? 'BOUNDARY DIAGNOSIS LOCKED' : isTW ? '界限張力診斷未解鎖' : '界限张力诊断未解锁'}
              </p>
              <button
                onClick={onTriggerRegister}
                className="px-3.5 py-1.5 border border-[var(--border-line-hover)] bg-[var(--bg-card-hover)] hover:border-[var(--cinnabar)] text-[var(--text-primary)] text-[10px] font-mono rounded transition-all uppercase tracking-wider font-bold"
              >
                {isEn ? 'Unlock Free' : '免费解锁诊断'}
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
