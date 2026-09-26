'use client';

import React, { useState } from 'react';

export type TierTier = 'T1' | 'T2' | 'T3';
export type PlanInterval = 'monthly' | 'quarterly' | 'annual';

interface SubscriptionCardProps {
  data?: {
    daily_pulse?: string;
    pivot_calendar_preview?: string;
  };
  lang?: 'zh' | 'en';
  tier?: TierTier; // 默认根据 IP 或地区识别，传 T1/T2/T3
  onSubscribe?: (plan: PlanInterval, priceId: string) => void;
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  data,
  lang = 'zh',
  tier = 'T1',
  onSubscribe
}) => {
  const isZh = lang === 'zh';
  const [selectedPlan, setSelectedPlan] = useState<PlanInterval>('quarterly');

  // PPP 动态定价表
  const pricingMatrix = {
    T1: {
      monthly: { price: '$9.99', unit: isZh ? '/ 月' : '/ mo', id: 'price_t1_month' },
      quarterly: { price: '$24.99', unit: isZh ? '/ 季' : '/ qtr', id: 'price_t1_quarter' },
      annual: { price: '$79.99', unit: isZh ? '/ 年' : '/ yr', id: 'price_t1_year' },
    },
    T2: {
      monthly: { price: '¥28', unit: '/ 月', id: 'price_t2_month' },
      quarterly: { price: '¥78', unit: '/ 季', id: 'price_t2_quarter' },
      annual: { price: '¥228', unit: '/ 年', id: 'price_t2_year' },
    },
    T3: {
      monthly: { price: '$2.99', unit: '/ mo', id: 'price_t3_month' },
      quarterly: { price: '$6.99', unit: '/ qtr', id: 'price_t3_quarter' },
      annual: { price: '$24.99', unit: '/ yr', id: 'price_t3_year' },
    },
  };

  const currentPrices = pricingMatrix[tier] || pricingMatrix.T1;

  // 三档物理/天文节律包装文案
  const planInfo = {
  monthly: {
    title: isZh ? '【月相朔望与潮汐相位】' : '【LUNAR SYNODIC ALIGNMENT】',
    sub: '29.53 Days',
    desc: isZh
      ? '月有盈亏，水有潮汐。29 天是月球与地球引力场完成交叠的物理周期。适合敏感感知当下情绪阻力与能量转折者。'
      : 'Align with the 29.53-day synodic cycle and gravitational tides to capture daily emotional friction.',
    badge: null,
  },
  quarterly: {
    title: isZh ? '【四时四象与节律转折】' : '【QUARTERLY EQUINOX ALIGNMENT】',
    sub: '90 Days',
    desc: isZh
      ? '地轴倾角每偏转 90 度带来的四时演化。在完整的‘生长—显化—收敛—沉潜’小循环中，保持系统绝对稳态。'
      : 'Track the Earth’s 90° axial shift through a complete 4-season cycle of manifestation and convergence.',
    badge: isZh ? '理性推荐' : 'RECOMMENDED',
  },
  annual: {
    // 👈 已去掉了“黄道”，换为“公转闭环与六阶回归”
    title: isZh ? '【公转闭环与六阶回归】' : '【ANNUAL ORBITAL CONTINUUM】',
    sub: '365 Days',
    desc: isZh
      ? '365 天轨道连续体的拓扑闭合。将你的生辰参数重新置于原点回归，建立跨越四季的终极长周期精神导航。'
      : 'Complete 365-day orbital loop. Re-anchor your natal origin for long-term existential navigation.',
    badge: isZh ? '立省 33%' : 'SAVE 33%',
  },
};

  const activeInfo = planInfo[selectedPlan];
  const activePrice = currentPrices[selectedPlan];

  return (
    <div className="w-full max-w-2xl mx-auto my-10 p-6 rounded-xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 border border-amber-500/40 backdrop-blur-md shadow-2xl transition-all duration-500">
      
      {/* 顶部付费标识 */}
      <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-800">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs tracking-widest text-amber-300 uppercase font-mono">
            {isZh ? 'CHRONO-FLOW 场域长效续订' : 'CHRONO-FLOW CONTINUOUS ALIGNMENT'}
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 font-mono">
          {tier} {isZh ? '购买力匹配' : 'PPP PRICING'}
        </span>
      </div>

      {/* 选项卡：三档物理/节律选择器 */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        {(['monthly', 'quarterly', 'annual'] as PlanInterval[]).map((planKey) => {
          const isSelected = selectedPlan === planKey;
          const info = planInfo[planKey];
          const priceObj = currentPrices[planKey];

          return (
            <button
              key={planKey}
              onClick={() => setSelectedPlan(planKey)}
              className={`relative p-3 rounded-lg border text-left transition-all ${
                isSelected
                  ? 'border-amber-500/80 bg-amber-950/20 text-neutral-100 shadow-md'
                  : 'border-neutral-800 bg-neutral-900/40 text-neutral-400 hover:border-neutral-700'
              }`}
            >
              {info.badge && (
                <span className="absolute -top-2 right-2 px-1.5 py-0.2 text-[9px] bg-amber-500 text-neutral-950 font-bold rounded">
                  {info.badge}
                </span>
              )}
              <div className="text-[10px] font-mono text-amber-400/80 uppercase">{info.sub}</div>
              <div className="text-xs font-bold my-1 text-neutral-100">
                {priceObj.price} <span className="text-[10px] font-normal text-neutral-400">{priceObj.unit}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 当前选中节律的深度包装描述 */}
      <div className="p-4 rounded-lg bg-neutral-900/80 border border-neutral-800/90 mb-6 space-y-2">
        <h4 className="text-xs font-medium text-amber-200/90 tracking-wide font-mono">
          {activeInfo.title}
        </h4>
        <p className="text-xs text-neutral-300 leading-relaxed italic">
          “{activeInfo.desc}”
        </p>
      </div>

      {/* 续订专属权益：每日脉搏与拐点日历 */}
      {data && (
        <div className="space-y-2 mb-6 text-xs text-neutral-400 font-mono bg-neutral-950/60 p-3 rounded border border-neutral-900">
          <div><span className="text-amber-500/80">▸ {isZh ? '实时诊断:' : 'Daily Pulse:'}</span> {data.daily_pulse}</div>
          <div><span className="text-amber-500/80">▸ {isZh ? '拐点预览:' : 'Pivot Calendar:'}</span> {data.pivot_calendar_preview}</div>
        </div>
      )}

      {/* 支付发起按钮 */}
      <button
        onClick={() => onSubscribe?.(selectedPlan, activePrice.id)}
        className="w-full py-3.5 rounded-lg bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-neutral-950 font-semibold text-xs tracking-widest uppercase shadow-lg hover:brightness-110 active:scale-[0.99] transition-all"
      >
        {isZh
          ? `以 ${activePrice.price} 开启 ${activeInfo.title.replace(/【|】/g, '')}`
          : `ACTIVATE ${selectedPlan.toUpperCase()} ALIGNMENT (${activePrice.price})`}
      </button>

    </div>
  );
};

export default SubscriptionCard;
