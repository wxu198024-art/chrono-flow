import React from 'react';

interface SubscriptionCardProps {
  data: {
    daily_pulse: string;
    pivot_calendar_preview: string;
  };
  lang?: 'zh' | 'en';
  onSubscribe?: () => void;
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({
  data,
  lang = 'zh',
  onSubscribe
}) => {
  const isZh = lang === 'zh';

  return (
    <div className="w-full max-w-2xl mx-auto my-10 p-6 rounded-xl bg-gradient-to-b from-neutral-900/90 to-neutral-950/95 border border-amber-500/50 backdrop-blur-md shadow-2xl transition-all duration-700 animate-fade-in">
      {/* 顶部付费标签 */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
        <div className="flex items-center space-x-2">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-xs tracking-widest text-amber-300 uppercase font-mono">
            {isZh ? 'CHRONO-FLOW CONTINUOUS' : 'CHRONO-FLOW CONTINUOUS'}
          </span>
        </div>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono">
          {isZh ? '按月深度续订' : 'MONTHLY SUBSCRIPTION'}
        </span>
      </div>

      {/* 订阅内容预览区 */}
      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-xs font-mono text-neutral-400 mb-1">
            {isZh ? '【每日脉搏预警】' : '【DAILY PULSE WARNING】'}
          </h4>
          <p className="text-xs text-neutral-200 bg-neutral-900/80 p-3 rounded border border-neutral-800 font-mono">
            {data.daily_pulse}
          </p>
        </div>

        <div>
          <h4 className="text-xs font-mono text-neutral-400 mb-1">
            {isZh ? '【关键拐点日历】' : '【KEY PIVOT CALENDAR】'}
          </h4>
          <p className="text-xs text-neutral-200 bg-neutral-900/80 p-3 rounded border border-neutral-800 font-mono">
            {data.pivot_calendar_preview}
          </p>
        </div>
      </div>

      {/* 诱导文案与支付按钮 */}
      <div className="pt-2 text-center space-y-3">
        <p className="text-[11px] text-neutral-400">
          {isZh
            ? '订阅开启长效时空场域监测，掌控每一个命运拐点'
            : 'Unlock continuous spatiotemporal tracking & key pivot calendar'}
        </p>
        <button
          onClick={onSubscribe}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 text-neutral-950 font-medium text-xs tracking-wider uppercase shadow-lg hover:brightness-110 active:scale-[0.99] transition-all"
        >
          {isZh ? '开启每日时空脉搏 ($9.9 / 月)' : 'ACTIVATE DAILY PULSE ($9.9 / MONTH)'}
        </button>
      </div>
    </div>
  );
};

export default SubscriptionCard;