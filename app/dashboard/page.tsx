'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/layout';
import DailyPulse from '@/components/field/DailyPulse';
import PillarsStructure from '@/components/field/PillarsStructure';
import OrbitSubscription from '@/components/field/OrbitSubscription';
import ChronoControlCenter from '@/components/field/ChronoControlCenter';

export default function DashboardPage() {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  // 测试阶段身份模拟切换 (游客 / 免费注册 / 周期对齐)
  const [userRole, setUserRole] = useState<'guest' | 'free' | 'subscribed'>('guest');
  const [subPlan, setSubPlan] = useState<'none' | 'monthly' | 'quarterly' | 'annual'>('none');
  const [activeTab, setActiveTab] = useState<'field' | 'control'>('field');

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300 pb-20">
      {/* 1. 顶部黑盒控制棒 (测试阶段方便快速切换角色状态) */}
      <header className="sticky top-0 z-40 bg-[var(--bg-card)]/80 backdrop-blur-md border-b border-[var(--border-line)] px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="text-[var(--cinnabar)] font-bold tracking-widest uppercase">
              CHRONOENGINE™
            </span>
            <span className="text-[var(--text-muted)]">|</span>
            <span className="text-[var(--text-secondary)]">
              {isEn ? 'SPATIOTEMPORAL FIELD' : isTW ? '高維時空場域' : '高维时空场域'}
            </span>
          </div>

          {/* 状态快捷切换测试条 */}
          <div className="flex items-center gap-2 bg-[var(--bg-card-hover)] p-1 rounded border border-[var(--border-line)]">
            <span className="text-[10px] text-[var(--text-muted)] px-1">
              {isEn ? 'ROLE TEST:' : '测试身份切换:'}
            </span>
            <button
              onClick={() => {
                setUserRole('guest');
                setSubPlan('none');
              }}
              className={`px-2 py-0.5 rounded text-[10px] transition-all ${
                userRole === 'guest'
                  ? 'bg-[var(--cinnabar)] text-white'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isEn ? 'GUEST' : isTW ? '遊客態' : '游客态'}
            </button>
            <button
              onClick={() => {
                setUserRole('free');
                setSubPlan('none');
              }}
              className={`px-2 py-0.5 rounded text-[10px] transition-all ${
                userRole === 'free'
                  ? 'bg-[var(--text-primary)] text-[var(--bg-card)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isEn ? 'REGISTERED' : isTW ? '已存檔原點' : '已存档原点'}
            </button>
            <button
              onClick={() => {
                setUserRole('subscribed');
                setSubPlan('annual');
              }}
              className={`px-2 py-0.5 rounded text-[10px] transition-all ${
                userRole === 'subscribed'
                  ? 'bg-amber-500 text-black font-bold'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isEn ? 'ANNUAL LEVEL 0' : isTW ? '年度全景對齊' : '年度全景对齐'}
            </button>
          </div>
        </div>
      </header>

      {/* 2. 主场域内容区 */}
      <main className="max-w-6xl mx-auto px-4 pt-8 space-y-8">
        {/* 顶部场域导航切换 */}
        <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-2">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('field')}
              className={`font-serif-title text-base md:text-lg pb-2 transition-all relative ${
                activeTab === 'field'
                  ? 'text-[var(--text-primary)] font-medium border-b-2 border-[var(--cinnabar)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isEn ? 'THE FIELD MATRIX' : isTW ? '場域矩陣' : '场域矩阵'}
            </button>
            <button
              onClick={() => setActiveTab('control')}
              className={`font-serif-title text-base md:text-lg pb-2 transition-all relative ${
                activeTab === 'control'
                  ? 'text-[var(--text-primary)] font-medium border-b-2 border-[var(--cinnabar)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isEn ? 'CONTROL CENTER' : isTW ? '時空中樞与黑歷史' : '时空中枢与黑历史'}
            </button>
          </div>

          <div className="text-[11px] font-mono text-[var(--text-muted)] hidden sm:block">
            {isEn ? 'VECTOR COORDINATES: LOCKED' : isTW ? '原點座標：已錨定' : '原点坐标：已锚定'}
          </div>
        </div>

        {/* 视图 Tab A: 场域矩阵解包 */}
        {activeTab === 'field' && (
          <div className="space-y-8">
            {/* 1. 今日重力波脉搏 */}
            <DailyPulse userRole={userRole} />

            {/* 2. 四柱存在结构与五维动态均衡因子 */}
            <PillarsStructure userRole={userRole} />

            {/* 3. 52周重力轨迹与自然周期对齐 */}
            <OrbitSubscription userRole={userRole} subPlan={subPlan} />
          </div>
        )}

        {/* 视图 Tab B: 时空中枢、密钥重构与黑历史沉淀 */}
        {activeTab === 'control' && (
          <ChronoControlCenter
            userEmail={userRole === 'guest' ? 'guest_observer@chronoflow.io' : 'observer_0812@chronoflow.io'}
            userRole={userRole}
            subPlan={subPlan}
          />
        )}
      </main>
    </div>
  );
}
