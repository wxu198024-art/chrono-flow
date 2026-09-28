'use client';

import React from 'react';

// 1. 调试模式开关：设置为 true 则全量解锁 L1-L9；上线前切回 false 即可按阶段解锁
const FORCE_UNLOCK_ALL = true;

interface PillarsUnlockedProps {
  data?: any;
  lang?: 'zh' | 'en';
}

export default function PillarsUnlocked({ data, lang = 'zh' }: PillarsUnlockedProps) {
  const isZh = lang === 'zh';

  // 2. 模拟/从 data 获取层级数据列表 (L1 - L9)
  // 如果 data 中传了 levels，优先读取，否则使用 Mock 的 L1-L9 结构展示
  const levels = data?.levels || [
    { level: 1, title: isZh ? 'L1 时空场域锚定' : 'L1 Spatial-Temporal Anchor', unlocked: true },
    { level: 2, title: isZh ? 'L2 能量拓扑与五行占比' : 'L2 Five Elements Topology', unlocked: true },
    { level: 3, title: isZh ? 'L3 境象与灵魂解构' : 'L3 Unseen Self Deconstruction', unlocked: true },
    { level: 4, title: isZh ? 'L4 临界点与阻力分析' : 'L4 Resistance & Pivot Warning', unlocked: true },
    { level: 5, title: isZh ? 'L5 秩序与节律矩阵' : 'L5 Order & Rhythm Matrix', unlocked: true },
    { level: 6, title: isZh ? 'L6 高阶因果流转 (L6)' : 'L6 High-Dimensional Causality', unlocked: false },
    { level: 7, title: isZh ? 'L7 深度决策路线图 (L7)' : 'L7 Deep Strategy Roadmap', unlocked: false },
    { level: 8, title: isZh ? 'L8 暗物质阻力避坑 (L8)' : 'L8 Dark Matter Resistance', unlocked: false },
    { level: 9, title: isZh ? 'L9 终极秩序合相 (L9)' : 'L9 Ultimate Conjunction', unlocked: false },
  ];

  return (
    <div className="w-full space-y-6 p-6 rounded-2xl bg-neutral-900/60 border border-amber-500/40 shadow-2xl animate-fade-in">
      
      {/* 1. 头部成功解锁标识 */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <div>
          <span className="text-[10px] tracking-widest text-amber-400 font-mono uppercase">
            {isZh ? '✦ 高阶时空场域诊断矩阵' : '✦ HIGH-DIMENSIONAL DATA MATRIX'}
          </span>
          <h3 className="text-lg font-bold text-neutral-100 font-serif">
            {isZh ? '四柱五行拓扑矩阵与命格内核' : 'Four Pillars & Five Elements Energy Matrix'}
          </h3>
        </div>
        <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono border border-amber-500/30">
          {FORCE_UNLOCK_ALL ? 'DEBUG: FULL SPECTRUM' : 'TIERED ACCESS'}
        </span>
      </div>

      {/* 2. 四柱干支参数矩阵 (年柱/月柱/日柱/时柱) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: isZh ? '年柱 (时代基底)' : 'Year Pillar', val: '乙亥 (Wood-Water)', phase: isZh ? '海中金 / 静谧受纳' : 'Oceanic Gold' },
          { label: isZh ? '月柱 (社会环境)' : 'Month Pillar', val: '丙戌 (Fire-Earth)', phase: isZh ? '屋上土 / 边界防御' : 'Roof Top Earth' },
          { label: isZh ? '日柱 (核心自我)' : 'Day Pillar', val: '庚子 (Metal-Water)', phase: isZh ? '壁上土 / 极锋显化' : 'Wall Top Earth' },
          { label: isZh ? '时柱 (归宿潜能)' : 'Hour Pillar', val: '丁亥 (Fire-Water)', phase: isZh ? '屋上土 / 深邃收敛' : 'Late Evening Fire' },
        ].map((item, idx) => (
          <div key={idx} className="p-3 rounded-lg bg-neutral-950/60 border border-neutral-800 space-y-1">
            <div className="text-[10px] text-neutral-400 font-mono">{item.label}</div>
            <div className="text-sm font-bold text-amber-300 font-serif">{item.val}</div>
            <div className="text-[10px] text-neutral-400 italic">{item.phase}</div>
          </div>
        ))}
      </div>

      {/* 3. 五行能量占比图谱 */}
      <div className="space-y-3 p-4 rounded-xl bg-neutral-950/40 border border-neutral-800">
        <h4 className="text-xs font-mono text-neutral-300 tracking-wider">
          {isZh ? '▸ 五行矢量场分布 (Five Elements Energy Distribution)' : '▸ Five Elements Field Distribution'}
        </h4>
        <div className="space-y-2">
          {[
            { name: isZh ? '木 (生长/开拓)' : 'Wood (Growth)', ratio: 35, color: 'bg-emerald-500' },
            { name: isZh ? '火 (显化/热情)' : 'Fire (Manifestation)', ratio: 15, color: 'bg-rose-500' },
            { name: isZh ? '土 (稳态/承载)' : 'Earth (Stability)', ratio: 20, color: 'bg-amber-600' },
            { name: isZh ? '金 (收敛/决断)' : 'Metal (Convergence)', ratio: 10, color: 'bg-slate-300' },
            { name: isZh ? '水 (流动/智慧)' : 'Water (Wisdom)', ratio: 20, color: 'bg-sky-500' },
          ].map((el, i) => (
            <div key={i} className="space-y-1">
              <div className="flex justify-between text-[11px] font-mono text-neutral-300">
                <span>{el.name}</span>
                <span>{el.ratio}%</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-neutral-800 overflow-hidden">
                <div className={`h-full ${el.color}`} style={{ width: `${el.ratio}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. L1 - L9 层级渲染区域 (支持全量调试 / 阶段锁定) */}
      <div className="space-y-4 pt-4 border-t border-neutral-800">
        <h4 className="text-xs font-mono text-amber-400/90 uppercase tracking-widest">
          {isZh ? '✦ L1 - L9 深度层级解构' : '✦ L1 - L9 DEEP DECONSTRUCTION'}
        </h4>

        <div className="space-y-3">
          {levels.map((item: any) => {
            // 判定当前层级是否解锁：全局调试模式开关为 true 时强制全部解锁
            const isUnlocked = FORCE_UNLOCK_ALL || item.unlocked;

            return (
              <div
                key={item.level}
                className={`p-4 rounded-xl border transition-all ${
                  isUnlocked
                    ? 'bg-neutral-950/60 border-neutral-800 text-neutral-200'
                    : 'bg-neutral-950/20 border-neutral-900/60 text-neutral-600 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-mono text-amber-500 font-bold">
                      [L{item.level}]
                    </span>
                    <span className="text-sm font-serif font-semibold">
                      {item.title}
                    </span>
                  </div>

                  {/* 状态标签：已解锁 vs 未解锁 */}
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded border ${
                      isUnlocked
                        ? 'bg-emerald-950/40 text-emerald-400 border-emerald-800/50'
                        : 'bg-neutral-900 text-neutral-500 border-neutral-800'
                    }`}
                  >
                    {isUnlocked
                      ? isZh ? '已解锁' : 'UNLOCKED'
                      : isZh ? '🔒 需升级解锁' : '🔒 LOCKED'}
                  </span>
                </div>

                {/* 内容区域：解锁则显示完整诊断内容，锁定则显示模糊掩码提示 */}
                {isUnlocked ? (
                  <p className="mt-2 text-xs text-neutral-400 leading-relaxed font-sans">
                    {item.content ||
                      (isZh
                        ? `这里是 L${item.level} 层级的深度能量与秩序诊断结果。系统根据《易经》变易与时空动力学重构，为您计算出当前节律的关键决策建议。`
                        : `This is the deep diagnosis content for level L${item.level}, derived from temporal-spatial mechanics.`)}
                  </p>
                ) : (
                  <div className="mt-2 p-2 rounded bg-neutral-900/50 border border-dashed border-neutral-800 text-[11px] text-neutral-500 font-mono italic">
                    {isZh
                      ? `[ L${item.level} 高阶数据已锁定，请订阅 Unlock 方案解锁全部时空节律 ]`
                      : `[ L${item.level} High-tier data locked. Subscribe to view complete rhythm analysis. ]`}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
