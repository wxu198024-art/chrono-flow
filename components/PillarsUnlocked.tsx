import React from 'react';

interface PillarsUnlockedProps {
  data: {
    four_pillars: {
      social_armor: string;
      unspoken_desires: string;
    };
    dynamic_matrix: {
      precision_vs_adaptation_ratio: string;
      breaking_sigil: string;
    };
  };
  lang?: 'zh' | 'en';
}

export const PillarsUnlocked: React.FC<PillarsUnlockedProps> = ({ data, lang = 'zh' }) => {
  const isZh = lang === 'zh';

  return (
    <div className="w-full max-w-2xl mx-auto my-8 p-6 rounded-xl bg-neutral-900/80 border border-amber-500/30 backdrop-blur-md transition-all duration-700 animate-fade-in">
      {/* 头部标记 */}
      <div className="flex items-center justify-between pb-4 mb-6 border-b border-neutral-800">
        <span className="text-xs tracking-widest text-amber-400/90 uppercase font-mono">
          {isZh ? '🔓 契约已激活 · 四柱与五行解包' : '🔓 HORIZON UNLOCKED · PILLARS & MATRIX'}
        </span>
        <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono">
          {isZh ? '免费解锁层' : 'FREE UNLOCKED'}
        </span>
      </div>

      {/* 四柱存在结构 */}
      <div className="mb-6 space-y-3">
        <h4 className="text-sm font-medium text-neutral-300 tracking-wider">
          {isZh ? '【四柱存在结构】' : '【THE FOUR PILLARS OF EXISTENCE】'}
        </h4>
        <div className="p-3.5 rounded bg-neutral-950/60 border border-neutral-800/80 space-y-2 text-xs leading-relaxed text-neutral-300">
          <div>
            <span className="text-neutral-500 mr-2">{isZh ? '社会盔甲:' : 'Social Armor:'}</span>
            <span className="text-amber-200/90 font-mono">{data.four_pillars.social_armor}</span>
          </div>
          <div>
            <span className="text-neutral-500 mr-2">{isZh ? '潜匿地平线:' : 'Unspoken Desires:'}</span>
            <span className="text-amber-200/90 font-mono">{data.four_pillars.unspoken_desires}</span>
          </div>
        </div>
      </div>

      {/* 五行均衡矩阵 */}
      <div className="mb-6 space-y-3">
        <h4 className="text-sm font-medium text-neutral-300 tracking-wider">
          {isZh ? '【五行均衡矩阵】' : '【THE FIVE DYNAMIC EQUILIBRIUM】'}
        </h4>
        <div className="p-3.5 rounded bg-neutral-950/60 border border-neutral-800/80 space-y-2 text-xs leading-relaxed text-neutral-300">
          <div className="flex items-center justify-between">
            <span className="text-neutral-500">{isZh ? '撕裂比列:' : 'Dynamic Ratio:'}</span>
            <span className="text-amber-400/90 font-mono">{data.dynamic_matrix.precision_vs_adaptation_ratio}</span>
          </div>
        </div>
      </div>

      {/* 破局暗语 */}
      <div className="p-4 rounded-lg bg-amber-950/20 border border-amber-500/40 text-amber-200 text-xs leading-relaxed">
        {data.dynamic_matrix.breaking_sigil}
      </div>
    </div>
  );
};

export default PillarsUnlocked;