export interface MockReport {
  lang: 'zh' | 'en';
  meta: { name: string };
  free_tier: {
    chrono_sigil: {
      dominant_phase: string;
      spatial_tension: string;
      nomenclature_anchor: string;
      entropy_index: number;
      core_vector: string;
    };
    unseen_self: {
      unseen_image: string;
      deconstruction: string;
    };
    pivot_countdown: {
      resistance_analysis: string;
      field_warning: string;
      days_remaining: number;
    };
  };
  // 新增：L1-L9 高阶诊断层级数据接口
  locked_tier: {
    levels: Array<{
      level: number;
      title: string;
      content: string;
      unlocked: boolean; // 关键控权开关：调试设为 true，上线后 L6-L9 设为 false
    }>;
  };
  subscription_tier: {
    daily_pulse: string;
    pivot_calendar_preview: string;
  };
}

export const MOCK_REPORTS: Record<string, MockReport> = {
  SCENARIO_A_ZH: {
    lang: 'zh',
    meta: { name: '探索者' },
    free_tier: {
      chrono_sigil: {
        dominant_phase: '木相重构 · 0.78 偏转度',
        spatial_tension: '高熵发散状态',
        nomenclature_anchor: '音律共鸣 · 变局点',
        entropy_index: 38,
        core_vector: '破局/创生矢量',
      },
      unseen_self: {
        unseen_image: '在寒林中持炬前行的冰封智者。外部沉静，内核炽烈。',
        deconstruction:
          '你的场域呈现出极高的深层感知力，但长期受制于外部秩序的压抑。深层意识正在积蓄突破的能量，近期的阻力并非停滞，而是系统重组前的必然张力。',
      },
      pivot_countdown: {
        resistance_analysis:
          '在接下来的 29 天内，你的情绪流速将与外部环境产生微弱错位，避免在此期间做出冲动的重大断舍离决定。',
        field_warning: '注意即将到来的节律交叠，避免场域内耗。',
        days_remaining: 14,
      },
    },
    // 注入全量 L1 - L9 诊断词条与调试解锁控制
    locked_tier: {
      levels: [
        { level: 1, title: 'L1 时空场域锚定', content: '四柱干支与五行矢量场重构，精准锁定你的核心初始场域。', unlocked: true },
        { level: 2, title: 'L2 能量拓扑与五行占比', content: '分析木、火、土、金、水能量流速，检测全局系统熵值与稳定度。', unlocked: true },
        { level: 3, title: 'L3 境象与灵魂解构', content: '结合荣格同步性理论，剖析隐秘自我与显性行为模式之间的冲突与平衡。', unlocked: true },
        { level: 4, title: 'L4 临界点与阻力警告', content: '精准预测未来 29 天的节律交叠与阻力相位，提供风险防范指导。', unlocked: true },
        { level: 5, title: 'L5 秩序与节律矩阵', content: '重构时空动力学路线，建立个人专属的精力分配与决策节律。', unlocked: true },
        
        // 调试阶段：L6-L9 设为 true 强行解锁展示；上线前只需将下方的 unlocked 改为 false 即可！
        { level: 6, title: 'L6 高阶因果流转', content: '洞察高维场域因果惯性，帮助你从无意识的命运重复中解脱，掌握主动决策权。', unlocked: true },
        { level: 7, title: 'L7 深度决策路线图', content: '结合商业、人际与精力管理，提供未来 90 天的最佳战略破局切入点。', unlocked: true },
        { level: 8, title: 'L8 暗物质阻力避坑', content: '识别潜在的人际场域内耗与隐藏风险，提前建立能量防御边界。', unlocked: true },
        { level: 9, title: 'L9 终极秩序合相', content: '实现人与时空节律的高度顺应，开启高效、通透的“天道循环”状态。', unlocked: true },
      ],
    },
    subscription_tier: {
      daily_pulse: '场域阻力微调中，建议收敛能量',
      pivot_calendar_preview: '距下一个四时相位转折点仅剩 3 天',
    },
  },
  SCENARIO_A_EN: {
    lang: 'en',
    meta: { name: 'EXPLORER' },
    free_tier: {
      chrono_sigil: {
        dominant_phase: 'Wood-Phase Reconfiguration · 0.78 Shift',
        spatial_tension: 'High Entropy Divergence',
        nomenclature_anchor: 'Acoustic Resonance Anchor',
        entropy_index: 38,
        core_vector: 'Disruption & Genesis Vector',
      },
      unseen_self: {
        unseen_image: 'A silent thinker holding a torch through a frozen forest. Quiet outside, fierce within.',
        deconstruction:
          'Your energetic signature reveals acute perception suppressed by rigid external structures. Your deep consciousness is accumulating momentum; friction is merely a sign of system re-alignment.',
      },
      pivot_countdown: {
        resistance_analysis:
          'Over the next 29 days, your inner rhythm will subtly clash with ambient momentum. Refrain from impulsive life decisions during this realignment.',
        field_warning: 'Equinox field alignment approaching; conserve energy.',
        days_remaining: 14,
      },
    },
    locked_tier: {
      levels: [
        { level: 1, title: 'L1 Spatiotemporal Anchor', content: 'Reconstructing Four Pillars & Five Elements vectors to anchor your primary ego field.', unlocked: true },
        { level: 2, title: 'L2 Energy Topology & Balance', content: 'Analyzing flow rates of Wood, Fire, Earth, Metal, Water and systemic entropy.', unlocked: true },
        { level: 3, title: 'L3 Unseen Self Deconstruction', content: 'Deconstructing subconscious friction using Jungian synchronicity models.', unlocked: true },
        { level: 4, title: 'L4 Resistance & Pivot Warning', content: 'Predicting phase shifts and field resistance over the upcoming 29-day cycle.', unlocked: true },
        { level: 5, title: 'L5 Order & Rhythm Matrix', content: 'Structuring personal energy decision systems based on temporal mechanics.', unlocked: true },
        
        // Debug mode: Set to true. Change to false for production tiered lock.
        { level: 6, title: 'L6 High-Dimensional Causality', content: 'Uncovering causal momentum to free your decision-making from subconscious cycles.', unlocked: true },
        { level: 7, title: 'L7 Strategic Execution Roadmap', content: 'Providing a 90-day actionable roadmap for career, relationship, and vitality.', unlocked: true },
        { level: 8, title: 'L8 Dark Matter Resistance Shielding', content: 'Identifying hidden interpersonal field drains and establishing energetic boundaries.', unlocked: true },
        { level: 9, title: 'L9 Ultimate Conjunction & Harmony', content: 'Achieving total alignment with the macro rhythm of order and time.', unlocked: true },
      ],
    },
    subscription_tier: {
      daily_pulse: 'Field friction adjusting, suggest focus and convergence.',
      pivot_calendar_preview: '3 days until next equinox/solstice shift.',
    },
  },
};
