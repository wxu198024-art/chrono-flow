// lib/archetypeLexicon.ts

export type ArchetypeLang = 'zh' | 'en' | 'ja';

export interface ArchetypeNode {
  id: string; // 唯一标识，如 ze_01, ju_01, yu_01
  code: string; // 赛博/极简英文代号，如 MIGRATOR, ENDGAME
  belongsToLevel: number; // 关联到 L1-L9 的层级，如 4 (对应 L4 四柱存在结构)
  name: Record<ArchetypeLang, string>;
  definition: Record<ArchetypeLang, string>;
  vectorCommand: Record<ArchetypeLang, string>; // 高维行为指令与避障指南
}

/**
 * ============================================================================
 * 1. 【~者】字典 (64位 / 对应 64 卦 / 主体相位 / 动态重力场)
 * 关联层级：Level 4 (四柱存在结构 / 内核原点)
 * ============================================================================
 */
export const ZE_ARCHETYPES: Record<string, ArchetypeNode> = {
  ze_01: {
    id: 'ze_01',
    code: 'MIGRATOR',
    belongsToLevel: 4,
    name: {
      zh: '迁徙者',
      en: 'Migrator',
      ja: '漂泊者',
    },
    definition: {
      zh: '你的人生并非通过停留获得稳定，而是通过不断改变环境，找到真正适合自己的时间位置。',
      en: 'Stability is found not by remaining still, but by continuously altering your field coordinates.',
      ja: '留まることではなく、環境を変化させ続けることで真の時空位相を見出します。',
    },
    vectorCommand: {
      zh: '断锚离相，忌停滞静摩擦。',
      en: 'Break anchor; avoid static friction.',
      ja: 'アンカーを解除し、静的摩擦を回避せよ。',
    },
  },
  ze_02: {
    id: 'ze_02',
    code: 'OBSERVER',
    belongsToLevel: 4,
    name: {
      zh: '观测者',
      en: 'Observer',
      ja: '観測者',
    },
    definition: {
      zh: '你置身于局中，但灵魂始终悬浮于高维轨道，以冷酷的精度记录着场域内一切相位的起伏。',
      en: 'You exist within the field, yet your consciousness remains outside it, observing every phase shift.',
      ja: '場の中に存在しながらも、意識は高次元に浮遊し、すべての位相変化を冷徹に記録します。',
    },
    vectorCommand: {
      zh: '保持坍缩悬停，切忌过早入局交织。',
      en: 'Maintain collapse hover; refrain from premature entanglements.',
      ja: '崩壊を保留せよ。早急な介入を回避せよ。',
    },
  },
  // 后续依次扩展至 ze_64
};

/**
 * ============================================================================
 * 2. 【~局】字典 (28位 / 对应 28 星宿 / 博弈局势 / 中频月周指令)
 * 关联层级：Level 7 (七代时空脉搏 / 摩擦点)
 * ============================================================================
 */
export const JU_ARCHETYPES: Record<string, ArchetypeNode> = {
  ju_01: {
    id: 'ju_01',
    code: 'ENDGAME_MATRIX',
    belongsToLevel: 7,
    name: {
      zh: '官子局',
      en: 'Endgame Phase',
      ja: '終盤局',
    },
    definition: {
      zh: '大局已定，胜负在于微观精度的切割与损耗控制。此时不可大起大落，需精算每一处能量交接。',
      en: 'The macro trajectory is sealed. Outcome hinges on micro-precision and energy containment.',
      ja: '大局は決定済み。微小な精度の切り出しとエネルギー損失の制御が成否を分かちます。',
    },
    vectorCommand: {
      zh: '收拢弥散张力，收官不增新变量。',
      en: 'Consolidate diffuse tension; introduce zero new variables.',
      ja: '拡散した緊張を収束させよ。新しい小作人を追加するな。',
    },
  },
  ju_02: {
    id: 'ju_02',
    code: 'RESTRICTED_BOUND',
    belongsToLevel: 7,
    name: {
      zh: '禁入局',
      en: 'Restricted Bound',
      ja: '進入禁止局',
    },
    definition: {
      zh: '当前时空切片呈现极高应力集聚，外部阻力高于系统推动力，强行破局必遭高频能量反噬。',
      en: 'High stress concentration present in the current spatial slice. Exterior resistance overwhelms drive.',
      ja: '現在の時空スライスは非常に高い応力集中を示しています。外圧が駆動力を上回っています。',
    },
    vectorCommand: {
      zh: '保持能量锁死，严禁主观扩张。',
      en: 'Lock down system energy; strictly prohibit subjective expansion.',
      ja: 'エネルギーを完全にロックせよ。主観的な拡張を厳禁する。',
    },
  },
  // 后续依次扩展至 ju_28
};

/**
 * ============================================================================
 * 3. 【~域】字典 (12位 / 对应 12 地支 / 全息空间场域 / 高阶年度视野)
 * 关联层级：Level 9 (九重轨道宏观周期 / 黄道拓扑)
 * ============================================================================
 */
export const YU_ARCHETYPES: Record<string, ArchetypeNode> = {
  yu_01: {
    id: 'yu_01',
    code: 'ASCENSION_REALM',
    belongsToLevel: 9,
    name: {
      zh: '升变域',
      en: 'Ascension Realm',
      ja: '昇華域',
    },
    definition: {
      zh: '高维空间剪切力释放，全息场域具备极高的跃迁容错率，是打破旧轨道重力束缚的最佳空间切面。',
      en: 'High-dimensional shear force released. The holistic realm grants high tolerance for orbital leaps.',
      ja: '高次元の剪断力が解放され、ホログラフィック場は軌道躍遷に対して極めて高い許容度を持ちます。',
    },
    vectorCommand: {
      zh: '顺应重力偏转，完成底层矢量重构。',
      en: 'Align with gravitational deflection; execute core vector restructuring.',
      ja: '重力偏向に従い、底層ベクトルの再構築を完了せよ。',
    },
  },
  // 后续依次扩展至 yu_12
};
