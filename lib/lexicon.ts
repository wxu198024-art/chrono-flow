export type LexiconLang = 'zh' | 'en';

export interface SubLexiconEntry {
  id: string;
  codeName: string;
  title: Record<LexiconLang, string>;
  definition: Record<LexiconLang, string>;
  visceralHook: Record<LexiconLang, string>;
}

export interface LexiconEntry {
  id: string;
  level: number;
  codeName: string;
  title: Record<LexiconLang, string>;
  mapping: Record<LexiconLang, string>;
  definition: Record<LexiconLang, string>;
  visceralHook: Record<LexiconLang, string>;
  children?: SubLexiconEntry[];
}

export const LEXICON_DATA: Record<string, LexiconEntry> = {
  'primordial-anchor': {
    id: 'primordial-anchor',
    level: 1,
    codeName: 'THE PRIMORDIAL ANCHOR',
    title: {
      zh: '时空原点锚块',
      en: 'The Primordial Anchor',
    },
    mapping: {
      zh: '底层映射：出生时刻与空间初始重力刻度',
      en: 'Core Mapping: Baseline Spatiotemporal Coordinates',
    },
    definition: {
      zh: '你落入这个时空连续体瞬间，被宇宙第一道引力波割裂并定格的初始重力坐标。它不是你的性格，而是你生命系统启动时自带的底层环境底色。它决定了你初始的情绪质量密度与终生隐性焦虑的频段。',
      en: 'The fundamental gravity coordinates locked at the precise millisecond of your entry into the spatiotemporal continuum. It is not your personality, but the immutable background field that dictates your default emotional mass and baseline anxieties.',
    },
    visceralHook: {
      zh: '揭示你为何明明生活顺遂，却总在某些特定时刻感到一种莫名、宏大的虚无与疲惫感，直击你从家族基因与出生环境中无意识继承的隐秘防御机制。',
      en: 'Unveils why you carry an unexplainable, existential fatigue even during your highest achievements, and pinpoints the invisible intergenerational burden you have been unconsciously compensating for.',
    },
  },

  'dual-vector': {
    id: 'dual-vector',
    level: 2,
    codeName: 'THE DUAL VECTOR FIELD',
    title: {
      zh: '双向向量场',
      en: 'The Dual Vector Field',
    },
    mapping: {
      zh: '底层映射：显性自我与隐性内耗的极性对抗',
      en: 'Core Mapping: Explicit Self vs. Implicit Self Polarity',
    },
    definition: {
      zh: '你体内永远处于拉扯状态的双向力学向量场。涵盖为了在社会规则中高精密度生存而锻造的防御外壳，与极度压抑下随时可能引发自我毁灭的本能底色。',
      en: 'The perpetual structural tension generated between your outward defensive shell built for societal survival and your collapsed instinctual core under pressure.',
    },
    visceralHook: {
      zh: '精确计算出你在“无缝伪装”与“深夜坍缩”之间所消耗的内耗能量比，指出你为何总会在事情即将成功的前夜产生毁掉一切的冲动。',
      en: 'Exposes the exact energy dissipation rate between who you pretend to be and who you are when the lights go out.',
    },
    children: [
      {
        id: 'exo-structural-vector',
        codeName: 'EXO-STRUCTURAL VECTOR',
        title: {
          zh: '外核显性向量',
          en: 'Exo-Structural Vector',
        },
        definition: {
          zh: '为了在社会规则中生存，你为自己精细锻造的无缝盔甲。它是你在职场、社交与外人面前展示的精密镜子与理性防御机制。',
          en: 'The highly optimized armor engineered for societal survival. The precise mask and rational defense mechanism you present to the world.',
        },
        visceralHook: {
          zh: '刺穿你的“社会伪装”，指出你在社交交往中明明极度厌倦、却不得不咬牙扮演的高效角色。',
          en: 'Exposes your social mask and pinpoints the exhaustive role you are forced to play despite extreme fatigue.',
        },
      },
      {
        id: 'collapsed-endo-vector',
        codeName: 'COLLAPSED ENDO-VECTOR',
        title: {
          zh: '坍缩内核向量',
          en: 'Collapsed Endo-Vector',
        },
        definition: {
          zh: '当夜深人静、所有名片与防御都被撕下时，那个在黑暗中与你自己对视的纯粹本能。它隐藏着你最底层的安全感来源与压抑下的毁灭倾向。',
          en: 'The suppressed instinctual core that triggers unprovoked self-sabotage under extreme environmental stress.',
        },
        visceralHook: {
          zh: '直击你在极度高压或失控时，为何会产生冲动想要亲手毁掉已经建立好的成就与关系的根本原因。',
          en: 'Explains your sudden, irrational urge to burn down your own success when high pressure builds up.',
        },
      },
   'tri-axial-strain': {
    id: 'tri-axial-strain',
    level: 3,
    codeName: 'THE TRI-AXIAL STRAIN',
    title: {
      zh: '三轴应力交叠',
      en: 'The Tri-Axial Strain',
    },
    mapping: {
      zh: '底层映射：时间、情绪与身份的三维立体剪切力',
      en: 'Core Mapping: 3D Structural Stress of Time, Emotion, and Identity',
    },
    definition: {
      zh: '你在现实生存结构中所承受的三维力学挤压。当时间流逝压力、隐性情绪消耗与外界身份期待在同一时刻交叠，系统内部便会产生严重的应力集中，导致无预警的心理疲惫与自我觉察剥离。',
      en: 'The three-dimensional mechanical compression you endure within reality. When temporal pressure, emotional energy dissipation, and identity expectations intersect, severe stress concentrations occur, triggering unannounced systemic exhaustion.',
    },
    visceralHook: {
      zh: '精确指出你为何即使什么都没做，只是静坐一整天，也会感到一种像被巨石碾压过一样的深度骨髓疲惫感。',
      en: 'Pinpoints exactly why you feel bone-deep exhaustion even after doing nothing, as if crushed by an invisible weight all day.',
    },
    children: [
      {
        id: 'temporal-shear-axis',
        codeName: 'TEMPORAL SHEAR AXIS',
        title: {
          zh: '时间扭曲轴',
          en: 'Temporal Shear Axis',
        },
        definition: {
          zh: '注意力在“对未来的失控恐惧”与“对过去的无法改写”之间被双向拉扯撕裂的应力轴向。',
          en: 'The strain axis where your presence is torn between future loss of control and unalterable past regret.',
        },
        visceralHook: {
          zh: '揭示你无法享受当下任何休假与放松的根本原因——你的大脑永远在预演最坏的未来。',
          en: 'Exposes why you cannot enjoy rest—your mind is perpetually simulating catastrophic worst-case futures.',
        },
      },
      {
        id: 'emotional-dissipation-axis',
        codeName: 'EMOTIONAL DISSIPATION AXIS',
        title: {
          zh: '情绪耗散轴',
          en: 'Emotional Dissipation Axis',
        },
        definition: {
          zh: '为了在外界面前维持“一切正常”与“理性体面”而持续泄漏、无法回收的隐形能量损耗。',
          en: 'The invisible, irrecoverable energy leakage spent maintaining an illusion of composure and rationality.',
        },
        visceralHook: {
          zh: '定位你体内那个隐形的“电池漏洞”，解释为何一句轻微的批评就能瞬间抽空你所有的情绪储备。',
          en: 'Locates the invisible drain in your psyche, explaining how a minor remark can instantly drain your emotional battery.',
        },
      },
      {
        id: 'identity-anchor-axis',
        codeName: 'IDENTITY ANCHOR AXIS',
        title: {
          zh: '身份锚定轴',
          en: 'Identity Anchor Axis',
        },
        definition: {
          zh: '外界赋予你的社会角色（子女/职员/伴侣）与你内心深处纯粹主体意识之间的错位剪切带。',
          en: 'The fault line between society’s assigned roles and your core, unadorned sense of self.',
        },
        visceralHook: {
          zh: '刺痛你在完成所有社会期待与优秀标准后，突然产生的那个灵魂质问：“那我到底是谁？”',
          en: 'Strikes at the haunting existential doubt after fulfilling all expectations: "Who am I underneath all this?"',
        },
      },
    ],
  },
};
