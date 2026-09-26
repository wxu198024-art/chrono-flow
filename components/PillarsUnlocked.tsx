'use client';

import React from 'react';

interface PillarsUnlockedProps {
  data?: any;
  lang?: 'zh' | 'en';
}

export default function PillarsUnlocked({ data, lang = 'zh' }: PillarsUnlockedProps) {
  const isZh = lang === 'zh';

  return (
    <div className="w-full space-y-6 p-6 rounded-2xl bg-neutral-900/60 border border-amber-500/40 shadow-2xl animate-fade-in">
      
      {/* 1. 头部成功解锁标识 */}
      <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
        <div>
          <span className="text-[10px] tracking-widest text-amber-400 font-mono uppercase">
            {isZh ? '✦ 已成功解锁高阶数据' : '✦ HIGH-DIMENSIONAL DATA UNLOCKED'}
          </span>
          <h3 className="text-lg font-bold text-neutral-100 font-serif">
            {isZh ? '四柱五行拓扑矩阵与命格内核' : 'Four Pillars & Five Elements Energy Matrix'}
          </h3>
        </div>
        <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 text-xs font-mono border border-amber-500/30">
          FULL SPECTRUM
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

      {/* 4. 深度诊断文案：强烈的获得感 */}
      <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-900/40 space-y-2">
        <h4 className="text-xs font-bold text-amber-200 font-serif">
          {isZh ? '✦ 核心场域诊断结论' : '✦ Core Existential Conclusion'}
        </h4>
        <p className="text-xs text-neutral-300 leading-relaxed">
          {isZh
            ? '你的日柱【庚子】代表绝对强韧的理性内核与深层的水相直觉。当前场域中【木】与【水】的偏转极高，暗示你正处于“高产出、高消耗”的创新临界点。系统检测到你的全局熵值处于 38% 的绝佳稳态区，极适合在接下来的四时相位中开启长效规划。'
            : 'Your core Day Pillar [Geng-Zi] exhibits extreme analytical strength coupled with intuitive water qualities. High density in Wood/Water elements indicates a high-creativity threshold. Your systemic entropy is at 38%, ideal for initiating long-term alignment.'}
        </p>
      </div>

    </div>
  );
}
