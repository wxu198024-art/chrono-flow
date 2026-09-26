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
    subscription_tier: {
      daily_pulse: 'Field friction adjusting, suggest focus and convergence.',
      pivot_calendar_preview: '3 days until next equinox/solstice shift.',
    },
  },
};
