export interface ReportData {
  scenario_id: string;
  lang: 'zh' | 'en';
  meta: {
    name: string;
    gender: string;
    birth: string;
    origin_city: string;
    current_city: string;
    shift_km: number;
  };
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
      days_remaining: number;
      resistance_analysis: string;
      field_warning: string;
    };
  };
  locked_tier: {
    four_pillars: {
      social_armor: string;
      unspoken_desires: string;
    };
    dynamic_matrix: {
      precision_vs_adaptation_ratio: string;
      breaking_sigil: string;
    };
  };
  subscription_tier: {
    daily_pulse: string;
    pivot_calendar_preview: string;
  };
}

export const MOCK_REPORTS: Record<string, ReportData> = {
  // 场景 A：中文测试数据
  'SCENARIO_A_ZH': {
    scenario_id: 'SCENARIO_A_ZH',
    lang: 'zh',
    meta: {
      name: '陈思涵',
      gender: '女',
      birth: '1995-11-03 21:15',
      origin_city: '成都',
      current_city: '上海',
      shift_km: 1900
    },
    free_tier: {
      chrono_sigil: {
        dominant_phase: '凝炼 · 裁决前夜',
        spatial_tension: '1,900 km（离开原点重力场 / 异地秩序构建中）',
        nomenclature_anchor: '潜流型面具（社会期待：同理心 / 情绪吸收器）',
        entropy_index: 78,
        core_vector: '外在秩序过度强撑 / 内核决策力被封印'
      },
      unseen_self: {
        unseen_image: '你在上海的霓虹与高楼间构建了体面的秩序，但你的内核依然停留在蜀地的湿润与安宁里。空间撕扯出的张力，让你每天都在用超额的精神资源，去滋养一个并不属于你的战场。',
        deconstruction: '你的姓名烙印与社会盔甲（潜流型），让你在职场与社交中天然扮演了“情绪抚平者”与“好说话的配合者”。大家习惯了你的妥协，以为那是你的涵养。但系统检测到，你在上海构建的这套“完美配合”的秩序，本质上是你用来抵御异地孤独感的防御机制。你习惯用“再忍忍”和“多做一点”来换取安全感，导致你的‘裁决因子’（划定界限的能力）被长期封印。你不是没有脾气，你只是在用机械的忙碌，逃避一次必然的摊牌。'
      },
      pivot_countdown: {
        days_remaining: 11,
        resistance_analysis: '你当前的疲惫，不是因为工作量本身，而是因为你缺乏边界。你吸收了太多别人的烂情绪与不属于你的责任，异地漂移产生的无根感，正在放大这种消耗。',
        field_warning: '11 天内，场域张力将达峰值。长期积压的忍耐将强制转化为‘裁决力’。请停止无效的讨好，这一次，你需要冷酷地划定边界。'
      }
    },
    locked_tier: {
      four_pillars: {
        social_armor: '乙木潜流 · 习惯性承接与柔性防御（年柱/月柱静默面具）',
        unspoken_desires: '辛金裁决 · 极度渴望清晰边界与秩序主导（日柱/时柱潜匿内核）'
      },
      dynamic_matrix: {
        precision_vs_adaptation_ratio: 'Adaptation (潜流) 68% vs Precision (裁决) 32% [高内耗强撕裂态]',
        breaking_sigil: '【破局暗语】裁决不需要解释。在第 11 天临界点到来前，对非必要的请求直接答复‘不’，并保持 3 秒以上的沉默。'
      }
    },
    subscription_tier: {
      daily_pulse: '今日场域：庚金冲克，宜冷酷收割边界，忌无意义迎合。',
      pivot_calendar_preview: '本月包含 2 个关键拐点日（第 11 天边界强制重塑 / 第 24 天能量回流）。'
    }
  },

  // 场景 A：英文测试数据
  'SCENARIO_A_EN': {
    scenario_id: 'SCENARIO_A_EN',
    lang: 'en',
    meta: {
      name: 'Victor',
      gender: 'Male',
      birth: '1995-11-03 21:15',
      origin_city: 'London',
      current_city: 'New York',
      shift_km: 5500
    },
    free_tier: {
      chrono_sigil: {
        dominant_phase: 'Pre-Boundary Phase (Nearing the limit)',
        spatial_tension: '5,500 km (Transatlantic Shift / Rootless Gravity)',
        nomenclature_anchor: 'Precision Mask (Societal expectation to be firm & indecisive)',
        entropy_index: 78,
        core_vector: 'Over-constructed Control / Frozen Decisions'
      },
      unseen_self: {
        unseen_image: 'You have built a sharp, functional life in New York, thousands of miles from where your story began. Yet, the spatial distance has created a quiet, persistent rift between the armor you wear and the rest you truly need.',
        deconstruction: 'Your name (Victor) carries hard, decisive phonetics. The world expects you to be in control, to be the one who handles the weight without flinching. As a result, your social mask is built on absolute competence and composure. However, the system detects that your current composure is not peace—it is a defensive over-compensation. To survive in a new city away from your origin, you have forced yourself to accept chaotic situations and unreasonable demands just to maintain order. You are not lacking capability; you are trapped in conflict avoidance.'
      },
      pivot_countdown: {
        days_remaining: 11,
        resistance_analysis: "Your exhaustion does not stem from your workload, but from leaking boundaries. The 5,500 km spatial shift intensifies your implicit floating anxiety, causing you to absorb friction that isn't yours to carry.",
        field_warning: "In 11 days, your field will reach a critical tension point. Your suppressed willingness to say 'No' will force its way out. Prepare to enforce a boundary."
      }
    },
    locked_tier: {
      four_pillars: {
        social_armor: 'High Composure Shield · Defensive Competence (Pillar Matrix Outer Mask)',
        unspoken_desires: 'Radical Rest & Boundary Enforcer (Pillar Matrix Core Desire)'
      },
      dynamic_matrix: {
        precision_vs_adaptation_ratio: 'Precision 40% vs Adaptation 60% (High Internal Friction Rate)',
        breaking_sigil: '【Boundary Sigil】Execution requires no validation. Before the 11-day pivot, decline one non-essential demand with absolute silence after your statement.'
      }
    },
    subscription_tier: {
      daily_pulse: 'Today Field: High Tension. Enforce non-negotiable personal boundaries.',
      pivot_calendar_preview: '2 Critical Pivots remaining this month (Day 11 Boundary Reset / Day 24 Energy Realignment).'
    }
  }
};