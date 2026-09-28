'use client';

import { useSearchParams, useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { calculateChart } from '@/lib/astrology';
import { MOCK_REPORTS } from '@/lib/mockData';
import PaywallOverlay from '@/components/PaywallOverlay';
import PillarsUnlocked from '@/components/PillarsUnlocked';
import SubscriptionCard from '@/components/SubscriptionCard';
import { useLanguage } from '@/app/layout'; // 引入全局语言 Provider
import { isLevelUnlocked } from '@/lib/lexicon'; // 1. 引入 lexicon 中的解锁判断函数

export default function ChartResultPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  // 获取全局 Context 中的语言设置
  const { lang: globalLang } = useLanguage();

  const rawScenarioId = (params?.id as string) || '';

  // 动态匹配场景 Mock 数据：优先使用 URL ID，否则根据全局语言自动选择中文/英文默认 Mock
  const scenarioId =
    rawScenarioId && MOCK_REPORTS[rawScenarioId]
      ? rawScenarioId
      : globalLang === 'zh'
      ? 'SCENARIO_A_ZH'
      : 'SCENARIO_A_EN';

  const mockReport = MOCK_REPORTS[scenarioId] || MOCK_REPORTS['SCENARIO_A_ZH'];

  // 优先采用全局 context 的 lang，确保 Header 语言切换时页面实时刷新
  const currentLang: 'zh' | 'en' = globalLang || (mockReport.lang as 'zh' | 'en') || 'zh';
  const isZh = currentLang === 'zh';

  const name = searchParams.get('name') || mockReport.meta?.name || 'Explorer';
  const birthDate = searchParams.get('date') || '1995-11-03';
  const birthTime = searchParams.get('time') || '21:15';

  // 2. 移除纯硬编码的 state，结合 lexicon.ts 检查 L6 是否默认解锁或读取本地/环境状态
  // 此处判断如果 L6 已经在 lexicon.ts 中开启/解锁，则默认渲染内容
  const [isPaid, setIsPaid] = useState<boolean>(() => isLevelUnlocked(6));

  // 兼容算盘/物理演化逻辑
  const chartData = useMemo(() => {
    try {
      return calculateChart(birthDate, birthTime);
    } catch {
      return null;
    }
  }, [birthDate, birthTime]);

  const { free_tier, locked_tier, subscription_tier } = mockReport as any;

  const handleSubscribe = (plan: string, priceId: string) => {
    alert(
      isZh
        ? `正在拉起 Stripe 订阅支付... [方案: ${plan}, PriceID: ${priceId}]`
        : `Redirecting to Stripe Checkout... [Plan: ${plan}, PriceID: ${priceId}]`
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
      {/* 头部信息 */}
      <div className="text-center space-y-2">
        <h1 className="font-serif-title text-3xl text-neutral-100">
          {name.toUpperCase()}&apos;S {isZh ? '场域诊断' : 'DIAGNOSIS'}
        </h1>
        <p className="text-xs text-neutral-500 uppercase tracking-widest">
          {chartData?.dayPillar
            ? `${chartData.dayPillar} Day Pillar Core Ego`
            : free_tier?.chrono_sigil?.dominant_phase}
        </p>
      </div>

      {/* SECTION 1: 时空场域定格 */}
      <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
        <div className="text-[10px] tracking-[0.25em] text-amber-500/90 uppercase font-mono">
          SECTION 1: {isZh ? '时空场域定格 · CHRONO-SIGIL' : 'CHRONO-SIGIL'}
        </div>
        <div className="space-y-2 text-xs font-mono text-neutral-300">
          <p>
            <span className="text-neutral-500">{isZh ? '主导相位:' : 'Dominant Phase:'}</span>{' '}
            {free_tier?.chrono_sigil?.dominant_phase}
          </p>
          <p>
            <span className="text-neutral-500">{isZh ? '空间张力:' : 'Spatial Tension:'}</span>{' '}
            {free_tier?.chrono_sigil?.spatial_tension}
          </p>
          <p>
            <span className="text-neutral-500">{isZh ? '姓名符号:' : 'Nomenclature Anchor:'}</span>{' '}
            {free_tier?.chrono_sigil?.nomenclature_anchor}
          </p>
          <p>
            <span className="text-neutral-500">{isZh ? '内稳态熵值:' : 'Entropy Index:'}</span>{' '}
            {free_tier?.chrono_sigil?.entropy_index}%
          </p>
          <p>
            <span className="text-neutral-500">{isZh ? '核心矢量:' : 'Core Vector:'}</span>{' '}
            {free_tier?.chrono_sigil?.core_vector}
          </p>
        </div>
      </section>

      {/* SECTION 2: 境象与灵魂解构 */}
      <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-4">
        <div className="text-[10px] tracking-[0.25em] text-amber-500/90 uppercase font-mono">
          SECTION 2: {isZh ? '境象与灵魂解构 · THE UNSEEN SELF' : 'THE UNSEEN SELF'}
        </div>
        <p className="text-sm italic text-amber-100/90 leading-relaxed font-serif">
          “{free_tier?.unseen_self?.unseen_image}”
        </p>
        <p className="text-xs text-neutral-400 leading-relaxed">
          {free_tier?.unseen_self?.deconstruction}
        </p>
      </section>

      {/* SECTION 3: 临界点与阻力警告 */}
      <section className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800 space-y-3">
        <div className="text-[10px] tracking-[0.25em] text-amber-500/90 uppercase font-mono">
          SECTION 3: {isZh ? '临界点与阻力警告 · PIVOT COUNTDOWN' : 'PIVOT COUNTDOWN'}
        </div>
        <p className="text-xs text-neutral-400 leading-relaxed">
          {free_tier?.pivot_countdown?.resistance_analysis}
        </p>
        <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-900/50 text-xs text-amber-200">
          <span className="font-bold mr-2">
            {isZh
              ? `倒计时 ${free_tier?.pivot_countdown?.days_remaining} 天:`
              : `Pivot in ${free_tier?.pivot_countdown?.days_remaining} Days:`}
          </span>
          {free_tier?.pivot_countdown?.field_warning}
        </div>
      </section>

      {/* SECTION 4: 核心诊断解密与解锁逻辑 */}
      <section className="relative pt-4 space-y-8">
        {/* 如果 isPaid 为 false，显示遮罩；如果已解锁，直接渲染 PillarsUnlocked */}
        {!isPaid ? (
          <PaywallOverlay onUnlockSuccess={() => setIsPaid(true)} />
        ) : (
          <div className="space-y-6 animate-fade-in">
            <PillarsUnlocked data={locked_tier} lang={currentLang} />
          </div>
        )}

        {/* 长效续订卡片：精确传入当前语言 currentLang */}
        <div className="pt-6 border-t border-neutral-800/80">
          <SubscriptionCard
            data={subscription_tier}
            lang={currentLang}
            tier="T1"
            onSubscribe={handleSubscribe}
          />
        </div>
      </section>
    </div>
  );
}
