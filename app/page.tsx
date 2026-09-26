import React from 'react';
import BirthForm from '@/components/BirthForm';

export default function HomePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-16 space-y-16 transition-colors duration-300">
      
      {/* 模块 1：YOUR DAILY RHYTHM (今日时空节律) */}
      <section className="text-center space-y-6">
        <div className="inline-flex items-center space-x-2 border border-[var(--border-line)] bg-[var(--bg-card)] px-4 py-1.5 rounded-full text-[10px] tracking-[0.25em] text-[var(--text-secondary)] uppercase backdrop-blur-md">
          <span className="cinnabar-dot animate-pulse"></span>
          <span>Your Daily Spatiotemporal Rhythm • 今日时空节律</span>
        </div>

        {/* 极简深度提示卡片 */}
        <div className="p-8 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-sm max-w-2xl mx-auto space-y-4 relative overflow-hidden transition-all duration-300 hover:border-[var(--border-line-hover)]">
          <div className="absolute top-0 left-0 w-full yao-yang"></div>
          
          <p className="font-serif-title text-xl md:text-2xl text-[var(--text-primary)] italic tracking-wide">
            " Silence is your energy anchor today. "
          </p>
          <p className="text-xs text-[var(--text-secondary)] tracking-wider">
            今日节律：<span className="text-[var(--text-primary)] font-medium">蓄力沉淀</span> / 忌：<span className="text-[var(--cinnabar)]">急躁盲动</span>
          </p>

          <div className="pt-2 text-[11px] text-[var(--text-muted)] italic">
            "Water is dominant in your current pillar. Do not mistake motion for progress."
          </div>
        </div>
      </section>

      {/* 阴爻分割线 */}
      <div className="yao-yin max-w-xl mx-auto opacity-40"></div>

      {/* 模块 2：输入时空坐标 (Spatiotemporal Coordinates) */}
      <section className="space-y-6 text-center">
        <div className="space-y-2">
          <h2 className="font-serif-title text-2xl md:text-3xl text-[var(--text-primary)] uppercase tracking-[0.15em]">
            Input Spatiotemporal Coordinates
          </h2>
          <p className="text-xs text-[var(--text-secondary)] max-w-md mx-auto leading-relaxed">
            输入生辰时空参数。系统将基于真太阳时自动转化为四柱能量结构图（4-Pillar Energy Matrix）。
          </p>
        </div>

        {/* 生辰表单挂载区 */}
        <div className="max-w-md mx-auto">
          <BirthForm />
        </div>
      </section>

      {/* 阳爻分割线 */}
      <div className="yao-yang max-w-xl mx-auto opacity-30"></div>

      {/* 模块 3：三大核心分析维度看板 */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          {
            num: '01',
            title: '性格原型',
            en: 'Archetype Analysis',
            desc: '四柱能量结构（4-Pillar Matrix）与系统内稳态因子解析。',
          },
          {
            num: '02',
            title: '周程演化',
            en: 'Pattern Trends',
            desc: '十年宏观趋势与年度环境阻力系数（Phase Friction）。',
          },
          {
            num: '03',
            title: '双方共振',
            en: 'Relational Sync',
            desc: '双人时空共振（Dual System Alignment）与摩擦点图谱。',
          },
        ].map((item, idx) => (
          <div 
            key={idx} 
            className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-sm hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-card-hover)] transition-all duration-300 group relative"
          >
            <div className="text-[10px] stems-matrix mb-3 group-hover:text-[var(--cinnabar)] transition-colors">
              [{item.num}]
            </div>
            <h3 className="font-serif-title text-base text-[var(--text-primary)] mb-1">
              {item.title}
            </h3>
            <div className="text-[11px] text-[var(--text-muted)] uppercase tracking-wider mb-3">
              {item.en}
            </div>
            <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

    </div>
  );
}
