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

/**
 * ============================================================================
 * 权限与锁定控制逻辑 (Locking Logic)
 * ============================================================================
 */

// 测试阶段总开关：设置为 true 时完全解锁 L1-L9 及 Level 0
export const ENABLE_ALL_LEVELS_FOR_TEST = true;

// 实际上线阶段：用户当前允许解锁的最大层级（例如：L1-L5 默认解锁，L6-L9 拦截锁定）
export const USER_MAX_UNLOCKED_LEVEL = 5;

/**
 * 判断指定层级是否解锁
 * @param level 层级数字 (0~9)
 */
export function isLevelUnlocked(level: number): boolean {
  if (ENABLE_ALL_LEVELS_FOR_TEST) {
    return true; // 测试阶段全开
  }
  // Level 0 为隐藏/高级元节点，线上需达到特定条件（如解锁全套 L9 或特殊权限）
  if (level === 0) {
    return USER_MAX_UNLOCKED_LEVEL >= 9;
  }
  return level <= USER_MAX_UNLOCKED_LEVEL;
}

/**
 * 获取解锁该层级所需的最低等级要求（上线预留机制）
 */
export function getRequiredUnlockLevel(level: number): number {
  return level;
}

/**
 * ============================================================================
 * Lexicon Data 数据定义
 * ============================================================================
 */
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
    ],
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
      zh: '底层映射：时间、空间与社会关系的三维立体剪切力',
      en: 'Core Mapping: 3D Structural Stress of Time, Space, and Social Relations',
    },
    definition: {
      zh: '作用于个体的三维现代空间力学挤压：涵盖时间重力轴（出生刻度）、空间漂移轴（现居 IP 地理坐标）以及社会关系应力轴（他人期望形成的挤压感）。当三轴交叠时，系统内部便会产生严重的应力集中。',
      en: 'The three-dimensional mechanical compression you endure: Temporal Gravity Axis, Spatial Drift Axis, and Social Relation Stress Axis. When they intersect, severe stress concentrations occur.',
    },
    visceralHook: {
      zh: '揭示你为何在某个城市或某个年龄段感到窒息与割裂，精确指出你即使什么都没做，也会感到像被巨石碾压过一样的深度疲惫感。',
      en: 'Exposes why you feel suffocated in specific cities or ages, pinpointing why you feel bone-deep exhaustion even after doing nothing.',
    },
    children: [
      {
        id: 'temporal-shear-axis',
        codeName: 'TEMPORAL GRAVITY AXIS',
        title: {
          zh: '时间重力轴',
          en: 'Temporal Gravity Axis',
        },
        definition: {
          zh: '由出生时间刻度与年龄增长带来的生命时间重力，注意力在未来的失控恐惧与过去的无法改写之间被双向拉扯撕裂。',
          en: 'The strain axis anchored to your birth timestamp and aging, torn between future loss of control and unalterable past regret.',
        },
        visceralHook: {
          zh: '揭示你无法享受当下任何休假与放松的根本原因——你的大脑永远在预演最坏的未来。',
          en: 'Exposes why you cannot enjoy rest—your mind is perpetually simulating catastrophic worst-case futures.',
        },
      },
      {
        id: 'spatial-drift-axis',
        codeName: 'SPATIAL DRIFT AXIS',
        title: {
          zh: '空间漂移轴',
          en: 'Spatial Drift Axis',
        },
        definition: {
          zh: '由现居 IP 地理坐标与出生原点之间的公里数差值所形成的地理引力差与环境水土磨削。',
          en: 'The spatial strain formed by the distance between your current geographical coordinates and your birthplace.',
        },
        visceralHook: {
          zh: '定位你因频繁更换城市或长期漂泊所产生的归属感缺失与无根飘零感。',
          en: 'Locates your rootlessness and lack of belonging caused by geographic displacement.',
        },
      },
      {
        id: 'social-relation-axis',
        codeName: 'SOCIAL RELATION STRESS AXIS',
        title: {
          zh: '社会关系应力轴',
          en: 'Social Relation Stress Axis',
        },
        definition: {
          zh: '外界与他人赋予你的角色期待（子女/职员/伴侣）与你内心真实主体意识之间的错位剪切带。',
          en: 'The fault line between external role expectations and your core, unadorned sense of self.',
        },
        visceralHook: {
          zh: '刺痛你在完成所有社会期待与优秀标准后，突然产生的那个灵魂质问：“那我到底是谁？”',
          en: 'Strikes at the haunting existential doubt after fulfilling all expectations: "Who am I underneath all this?"',
        },
      },
    ],
  },

  'four-pillars': {
    id: 'four-pillars',
    level: 4,
    codeName: 'THE FOUR PILLARS OF EXISTENCE',
    title: {
      zh: '四柱存在结构',
      en: 'The Four Pillars of Existence',
    },
    mapping: {
      zh: '底层映射：承载个体生命张力的四座现代心理与时空支柱',
      en: 'Core Mapping: Four Load-Bearing Pillars of Individual Life Tension',
    },
    definition: {
      zh: '承载个体生命张力的四座现代心理与时空骨架。从基因遗产与环境磨削，到核心自我与潜匿地平线，四柱共同构成了你抗击现实重力的力学拓扑结构。',
      en: 'The four structural pillars supporting your entire psychological and spatiotemporal framework against the gravitational forces of reality.',
    },
    visceralHook: {
      zh: '剖析你生命承重墙的结构缺陷，指出哪一根支柱正在承受超载的应力，引发你系统性崩溃的风险。',
      en: 'Analyzes structural vulnerabilities in your life’s load-bearing walls, exposing which pillar is under catastrophic stress.',
    },
    children: [
      {
        id: 'origin-pillar',
        codeName: 'THE ORIGIN PILLAR',
        title: {
          zh: '原点之柱',
          en: 'The Origin Pillar',
        },
        definition: {
          zh: '印刻在基因与骨髓里的时代底色与家族遗产。你无法选择的先天重力环境与幼年无意识吸收的防御机制。',
          en: 'The ancestral lineage and origin baseline imprinted upon your genetics. The immutable gravitational field of your origin.',
        },
        visceralHook: {
          zh: '精确指出你身上那些明明极度讨厌、却无意识重演的父母同款行为与情绪模式。',
          en: 'Exposes the exact behavioral patterns and emotional reactions you inherited from your lineage despite your conscious resistance.',
        },
      },
      {
        id: 'social-mask-pillar',
        codeName: 'THE SOCIAL MASK',
        title: {
          zh: '社会投影之柱',
          en: 'The Social Mask',
        },
        definition: {
          zh: '青年与中年期所遭遇的现实磨削力。涵盖职场生存、社会规训以及外部环境对你个人意愿的持续挤压。',
          en: 'The continuous friction and environmental shear forces exerted by societal training and professional survival.',
        },
        visceralHook: {
          zh: '点破你在现实撕扯下被迫妥协的边界，揭示你为了在职场生存而牺牲掉的最初灵气。',
          en: 'Pinpoints where you compromised your core integrity under societal pressure just to survive the career grind.',
        },
      },
      {
        id: 'core-ego-pillar',
        codeName: 'THE CORE EGO',
        title: {
          zh: '内核原点之柱',
          en: 'The Core Ego',
        },
        definition: {
          zh: '除去所有社会名片与外部角色后，纯粹的自我意识与主体内核。是你抵抗全宇宙熵增的最后阵地。',
          en: 'The unadorned core ego and ultimate locus of consciousness once all outer roles and social masks are stripped away.',
        },
        visceralHook: {
          zh: '直击你内心的终极孤立感——哪怕身边喧嚣簇拥，那个孤独的内核依然在独自承受一切。',
          en: 'Strikes at your deep, existential solitude—the raw core that remains isolated even in crowded rooms.',
        },
      },
      {
        id: 'hidden-horizon-pillar',
        codeName: 'THE HIDDEN HORIZON',
        title: {
          zh: '潜匿地平线之柱',
          en: 'The Hidden Horizon',
        },
        definition: {
          zh: '生命系统向未来延伸的归宿与潜伏地平线。涵盖晚年状态、潜意识信仰以及你留给时空连续体的精神残影。',
          en: 'The vector describing the ultimate convergence, terminal trajectory, and lingering footprint of your life system.',
        },
        visceralHook: {
          zh: '预判你生命后半程的心理归宿，揭示你一生拼搏最终试图证明或安放的到底是什么。',
          en: 'Forecasts the psychological retreat of your later years, revealing what your soul is ultimately trying to prove.',
        },
      },
    ],
  },

  'wuxing-factors': {
    id: 'wuxing-factors',
    level: 5,
    codeName: 'THE FIVE DYNAMIC EQUILIBRIUM FACTORS',
    title: {
      zh: '五行均衡因子',
      en: 'The Five Dynamic Equilibrium Factors',
    },
    mapping: {
      zh: '底层映射：维持个体心理系统内部稳态的 5 种环境力学因子',
      en: 'Core Mapping: Five Environmental Mechanics Factors Maintaining Psychological Homeostasis',
    },
    definition: {
      zh: '维持个体心理系统内部稳态（Homeostasis）的 5 种环境力学因子。脱离传统概念表象，化为扩张蔓延、显化张力、重力锚定、裁决边界与潜流直觉 5 种平衡能量。',
      en: 'The five dynamic mechanics governing your psychological homeostasis—Expansion, Visibility, Anchoring, Precision, and Adaptation.',
    },
    visceralHook: {
      zh: '定位你能量结构中最不稳定的那个频段，揭示你为何总会在“盲目蔓延”或“过度裁决”之间陷入自我反噬。',
      en: 'Pinpoints your default energetic imbalance, revealing why you oscillate between boundless expansion and brutal self-sabotage.',
    },
    children: [
      {
        id: 'expansion-factor',
        codeName: 'EXPANSION',
        title: {
          zh: '蔓延因子',
          en: 'Expansion Factor',
        },
        definition: {
          zh: '破土而出、向外拓展边界的本能欲望。代表创生力与生命张力，但在失去抑制时会演变为没有边际的内耗与贪婪。',
          en: 'The primal instinct to breach limits and expand outward. It fuels raw creativity, yet risks reckless boundary-pushing when unchecked.',
        },
        visceralHook: {
          zh: '击中你内心难以遏制的躁动与贪婪——哪怕精疲力竭，也无法停止向外无休止地蔓延和占有。',
          en: 'Exposes your relentless restlessness—the urge to expand and conquer even when your resources are depleted.',
        },
      },
      {
        id: 'visibility-factor',
        codeName: 'VISIBILITY',
        title: {
          zh: '显化因子',
          en: 'Visibility Factor',
        },
        definition: {
          zh: '渴望被看见、被赞美、将内心激情向外辐射的能量。它是你独特魅力的源泉，也是你最容易被他人利用和灼伤的脆弱弱点。',
          en: 'The urge to project passion, be recognized, and radiate presence. It is your ultimate charisma, but also your most vulnerable exposure.',
        },
        visceralHook: {
          zh: '揭开你对“认可”的隐性上瘾——明明讨厌社交，却极度害怕在人群中被完全忽视与边缘化。',
          en: 'Pierces your subtle addiction to validation—hating the spotlight, yet terrified of becoming invisible.',
        },
      },
      {
        id: 'anchoring-factor',
        codeName: 'ANCHORING',
        title: {
          zh: '锚定因子',
          en: 'Anchoring Factor',
        },
        definition: {
          zh: '在动荡现实中承载万物与自我消化的重力场。缺乏它会让你像无根之草般漂泊失控，过强则会让你陷入顽固沉闷的泥潭。',
          en: 'The heavy grounding mass that digests reality. Deficits leave you floating like seaweed; excess traps you in unyielding stagnation.',
        },
        visceralHook: {
          zh: '直击你内心的“绝望停滞感”——过度追求安全与稳固，反而让自己困在死寂的舒适区里无法动弹。',
          en: 'Strikes at your paralyzing inertia—where your desperate need for safety seals you inside a tomb of your own making.',
        },
      },
      {
        id: 'precision-factor',
        codeName: 'PRECISION',
        title: {
          zh: '裁决因子',
          en: 'Precision Factor',
        },
        definition: {
          zh: '划定绝对边界、做出果断割舍的冷酷理性。它是帮你的生命斩断有毒伤害的利刃，但也极易成为刺伤最亲密关系的凶器。',
          en: 'The razor-sharp boundary-setting force. A indispensable scalpel that severs toxicity, yet turns lethal in intimate spheres.',
        },
        visceralHook: {
          zh: '刺痛你冷酷切割关系后的后悔——为了不被伤害，你提前用最冰冷的“裁决”推开了所有真正关心你的人。',
          en: 'Exposes your defensive pre-emptive strikes—severing connections prematurely so they can never hurt you first.',
        },
      },
      {
        id: 'adaptation-factor',
        codeName: 'ADAPTATION',
        title: {
          zh: '潜流因子',
          en: 'Adaptation Factor',
        },
        definition: {
          zh: '如水般渗透、感知与情绪流动的深层直觉力。它是极度敏锐的同理心，但也极易让你在别人的情绪狂浪中彻底淹没自我。',
          en: 'The fluid, subterranean current of empathy and intuition. It provides deep absorption, but risks drowning your core self in outer tides.',
        },
        visceralHook: {
          zh: '剖析你“情绪过载”的真正源头——你总是无底线地吸收别人的痛苦与负能量，直到把你自己挤压坍缩。',
          en: 'Locates the root of your emotional drowning—sponging up foreign pain until your own structure collapses under water weight.',
        },
      },
    ],
  },

  'six-stage-flow': {
    id: 'six-stage-flow',
    level: 6,
    codeName: 'THE 6-STAGE FLOW CYCLE',
    title: {
      zh: '六维状态流',
      en: 'The 6-Stage Flow Cycle',
    },
    mapping: {
      zh: '底层映射：个体面对外部环境冲击时心理能量必经的 6 段状态相态跃迁',
      en: 'Core Mapping: Six Continuous Phase Transitions Under Environmental Stress',
    },
    definition: {
      zh: '描述你的生命系统在外部环境挤压与内部张力拉扯下，心理能量必经的 6 个连续状态相态（Inception 潜藏 → Emergence 显露 → Consolidation 警惕 → Transition 跃迁 → Apex 巅峰 → Recession 收敛）。',
      en: 'The continuous six-stage phase transition cycle governing your energy state: Inception → Emergence → Consolidation → Transition → Apex → Recession.',
    },
    visceralHook: {
      zh: '定位你当下的相态卡顿，揭示你为何明明机会就在眼前（跃迁期），却因内耗向量而被强行锁定在原地。',
      en: 'Pinpoints your exact phase lock, exposing why internal friction holds you back during critical transition windows.',
    },
    children: [
      {
        id: 'flow-inception',
        codeName: 'INCEPTION',
        title: { zh: '潜藏相态', en: 'Inception' },
        definition: { zh: '能量蓄积于地表之下的隐匿期。外界看似停滞，实则是底层结构在无声重构。', en: 'Energy subterranean accumulation; structural re-alignment beneath stillness.' },
        visceralHook: { zh: '告诉你此刻盲目向外冲锋只会徒增损耗，安心沉淀才是最高效的破局。', en: 'Reassures that forced action now only dissipates essential potential.' },
      },
      {
        id: 'flow-emergence',
        codeName: 'EMERGENCE',
        title: { zh: '显露相态', en: 'Emergence' },
        definition: { zh: '破土而出的初生期。新方向初具雏形，对外界刺激高度敏感。', en: 'Initial emergence into visibility; heightened sensitivity to ambient friction.' },
        visceralHook: { zh: '刺穿你对未知方向的恐惧，提醒你幼苗破土时最需要的不是犹豫而是保护。', en: 'Validates early vulnerability while urging bold protection of nascent momentum.' },
      },
      {
        id: 'flow-consolidation',
        codeName: 'CONSOLIDATION',
        title: { zh: '警惕相态', en: 'Consolidation' },
        definition: { zh: '遭遇现实阻力与规训的防御期。系统需要建立强有力的边界以防能量泄漏。', en: 'Defensive phase against reality resistance; establishing rigid systemic containment.' },
        visceralHook: { zh: '指出你为何在事业或关系刚有起色时突然变得高度戒备与焦虑。', en: 'Explains your hyper-vigilance just as new achievements begin to solidify.' },
      },
      {
        id: 'flow-transition',
        codeName: 'TRANSITION',
        title: { zh: '跃迁相态', en: 'Transition' },
        definition: { zh: '能级跨越的临界爆发期。旧轨道彻底断裂，新轨道尚未完全固化的动荡区间。', en: 'Critical threshold jump; orbit-cleaving kinetic window between state bounds.' },
        visceralHook: { zh: '直击你临门一脚时的巨大失重感，解释你为何总在即将成功前夜产生毁掉一切的冲动。', en: 'Strikes at your fear of success when standing upon the precipice of real transformation.' },
      },
      {
        id: 'flow-apex',
        codeName: 'APEX',
        title: { zh: '巅峰相态', en: 'Apex' },
        definition: { zh: '能量与辐射力达到顶峰的高光期。影响力最大化，但内部耗散速度也同时达到极致。', en: 'Peak energetic radiance and maximum footprint, accompanied by accelerated dissipation.' },
        visceralHook: { zh: '警示你在高光狂欢之下的空虚感，防止你在顶峰因盲目膨胀而瞬间坍缩。', en: 'Cautions against blinding arrogance that precedes sudden systemic collapse.' },
      },
      {
        id: 'flow-recession',
        codeName: 'RECESSION',
        title: { zh: '收敛相态', en: 'Recession' },
        definition: { zh: '高光过后的主动撤退与休养期。系统卸下过载负荷，进行能量的自我回收与净化。', en: 'Systemic retreat and internal purge; shedding structural overload after peak emission.' },
        visceralHook: { zh: '接纳你突如其来的厌世与麻木，告诉你暂时的撤退与躺平是系统防烧毁的保护机制。', en: 'Normalizes sudden exhaustion as a critical anti-burnout safety override.' },
      },
    ],
  },

  'chrono-pulse': {
    id: 'chrono-pulse',
    level: 7,
    codeName: 'THE SEPTENARY CHRONO-PULSE',
    title: {
      zh: '七代时空脉搏',
      en: 'The Septenary Chrono-Pulse',
    },
    mapping: {
      zh: '底层映射：以 7 天为周期的环境高频微波与日常高频行为校准',
      en: 'Core Mapping: High-Frequency 7-Day Micro-Wave Environmental Friction & Behavior Calibration',
    },
    definition: {
      zh: '以 7 天为微观周期的环境高频重力脉搏。它并非宏观运势，而是你日常生活中面临的即时摩擦点与能量锚点，为你提供高冷、精准且具极强执行力的日常行为校准。',
      en: 'The 7-day micro-gravitational pulse providing daily tactical adjustments, pinpointing friction vectors, and grounding anchors for execution.',
    },
    visceralHook: {
      zh: '捕捉你今天为何会无端对某个细节烦躁，提供即时可执行的能量锚点与每日准则，防范日间能量泄漏。',
      en: 'Captures daily micro-irritations and grounds your focus against ambient energetic leaks.',
    },
    children: [
      {
        id: 'pulse-daily-anchor',
        codeName: 'DAILY ANCHOR',
        title: { zh: '今日能量锚点', en: 'Daily Anchor' },
        definition: { zh: '今天能够为你稳定核心重力、防止心理崩盘的特定行为或认知焦点。', en: 'The tactical focus point designed to stabilize core gravity against daily entropy.' },
        visceralHook: { zh: '告诉你今天把注意力放在哪里才能最小化内耗。', en: 'Directs your focus to minimize internal friction today.' },
      },
      {
        id: 'pulse-friction-point',
        codeName: 'THE FRICTION POINT',
        title: { zh: '今日摩擦点', en: 'The Friction Point' },
        definition: { zh: '今天环境中容易与你的 L5 因子产生高频剧烈剪切的特定人际或事务陷阱。', en: 'The specific environmental trap likely to trigger shear strain with your factors.' },
        visceralHook: { zh: '预判你今天最容易踩爆的情绪雷区。', en: 'Pre-empts the exact emotional minefield awaiting you today.' },
      },
      {
        id: 'pulse-dos-donts',
        codeName: 'DAILY DOS & DONTS',
        title: { zh: 'Daily Dos & Don’ts', en: 'Daily Dos & Don’ts' },
        definition: { zh: '基于当前 7 天微波高频算法推演出的极简高效率行动与避坑指南。', en: 'Algorithmic action directives derived from 7-day micro-pulse calculations.' },
        visceralHook: { zh: '剔除情绪干扰，直接给出高冷的无隐患行动选项。', en: 'Bypasses emotional fatigue with cold, optimal decision paths.' },
      },
    ],
  },

  'octal-resonance': {
    id: 'octal-resonance',
    level: 8,
    codeName: 'THE OCTAL RESONANCE MATRIX',
    title: {
      zh: '八维共振矩阵',
      en: 'The Octal Resonance Matrix',
    },
    mapping: {
      zh: '底层映射：两个四柱存在结构相撞时在 8 个维度上的系统碰撞与能量重组',
      en: 'Core Mapping: Eight-Dimensional Collision of Two Four Pillars Structures & Relational Re-organization',
    },
    definition: {
      zh: '当两个独立的“四柱存在结构”（L4）互相靠近并发生碰撞时，在 8 个维度上激发的系统共振矩阵。它彻底解构了传统合盘，精准计算出双方之间的相位摩擦系数、能量互补锚点与暗面互动模式。',
      en: 'The eight-dimensional collision array generated when two discrete Four Pillars structures intersect. It computes friction indices, complementary anchors, and shadow interactions.',
    },
    visceralHook: {
      zh: '剖析你与特定人之间为何会产生“只要靠近就会互相打乱能量脉搏”或“无法逃离的重力吸附”的深层力学真相。',
      en: 'Exposes why a specific presence invalidates your daily recalibration or binds you in an inescapable orbital lock.',
    },
    children: [
      {
        id: 'matrix-friction-index',
        codeName: 'FRICTION INDEX',
        title: { zh: '相位摩擦系数', en: 'Friction Index' },
        definition: { zh: '双方防御机制与重力矢量不匹配所引发的持续能量磨削与损耗速率。', en: 'The rate of continuous energetic abrasion caused by incompatible defense mechanisms.' },
        visceralHook: { zh: '精算你们相处时每小时消耗的隐性心理能量。', en: 'Calculates the hourly mental tax exacted by being in proximity with each other.' },
      },
      {
        id: 'matrix-resonance-anchor',
        codeName: 'RESONANCE ANCHOR',
        title: { zh: '能量互补锚点', en: 'Resonance Anchor' },
        definition: { zh: '一方的稳定结构精准填补另一方凹陷缺陷的治愈与支撑接口。', en: 'The structural interface where one system’s density fills the other’s void.' },
        visceralHook: { zh: '指出你们关系中真正能让彼此感到灵魂安定的唯一重力依托。', en: 'Highlights the single structural anchor providing profound mutual safety.' },
      },
      {
        id: 'matrix-shadow-interaction',
        codeName: 'THE SHADOW INTERACTION',
        title: { zh: '暗面互动模式', en: 'The Shadow Interaction' },
        definition: { zh: '双方潜意识未解创伤与隐性内耗向量在暗中交织出的自毁性互动回路。', en: 'The subterranean feedback loop where twin unconscious wounds reinforce toxic dynamics.' },
        visceralHook: { zh: '刺穿你们明明相爱却在无意识中精准踩爆对方创伤的隐秘剧本。', en: 'Reveals the unconscious script driving you to trigger each other’s deepest wounds.' },
      },
    ],
  },

  'ennead-trajectory': {
    id: 'ennead-trajectory',
    level: 9,
    codeName: 'THE ENNEAD TRAJECTORY CYCLES',
    title: {
      zh: '九重轨道宏观周期',
      en: 'The Ennead Trajectory Cycles',
    },
    mapping: {
      zh: '底层映射：个体运行在宇宙长程重力轨道上的动态偏转图谱与 Stripe 订阅载体',
      en: 'Core Mapping: Macro Orbital Gravity Trajectories & Subscription Cycles Delivery Vehicle',
    },
    definition: {
      zh: '描述你的生命系统在长程时空重力场中运行的宏观偏转图谱。涵盖月相盈亏周期（30天）、地轴倾角周期（90天）、轨道连续图谱（365天）以及地理坐标引力差（空间漂移），是 Stripe 付费订阅的核心交付载体。',
      en: 'The macro-orbital path mapping your system\'s long-term gravity deflections across monthly, quarterly, annual, and geodynamic dimensions. Core delivery vehicle for subscriptions.',
    },
    visceralHook: {
      zh: '预判未来长程周期中的重力过载压强点，让你提前对即将到来的环境大转向做好系统加固。',
      en: 'Forecasts upcoming systemic pressure nodes, allowing pre-emptive reinforcement against environmental shifts.',
    },
    children: [
      {
        id: 'cycle-lunar-phase',
        codeName: 'LUNAR PHASE EQUILIBRIUM',
        title: { zh: '月相盈亏周期（月度订阅）', en: 'Lunar Phase Equilibrium' },
        definition: { zh: '30 天潜意识潮汐周期，决定敏感度峰值与情绪退潮规律。', en: '30-day subconscious tide cycle dictating sensitivity peaks and emotional ebbs.' },
        visceralHook: { zh: '破译你每月固定几天无预警崩溃的情绪潮汐规律。', en: 'Decodes your predictable monthly window of sudden sensitivity overload.' },
      },
      {
        id: 'cycle-axial-tilt',
        codeName: 'AXIAL TILT SHIFT',
        title: { zh: '地轴倾角周期（季度订阅）', en: 'Axial Tilt Shift' },
        definition: { zh: '90 天环境力学大转向，决定季度核心风向与重力场交替。', en: '90-day macro environmental shift governing seasonal focus and structural drift.' },
        visceralHook: { zh: '解释为何每过三个月你都会产生一种“想把过去全盘推翻”的转向冲动。', en: 'Explains the quarterly urge to overhaul your priorities and reset direction.' },
      },
      {
        id: 'cycle-continuous-orbit',
        codeName: 'CONTINUOUS ORBIT TRAJECTORY',
        title: { zh: '轨道连续图谱（年度订阅）', en: 'Continuous Orbit Trajectory' },
        definition: { zh: '365 天环形重力偏转轨迹，映射整年的重大跃迁与危机节点。', en: '365-day orbital loop mapping annual transformation nodes and hazard zones.' },
        visceralHook: { zh: '为你绘制全年最容易发生系统卡顿或爆发性跃迁的时空地图。', en: 'Maps your highest-stakes transformation windows and stress traps for the year.' },
      },
      {
        id: 'cycle-geodynamic-drift',
        codeName: 'GEODYNAMIC DRIFT',
        title: { zh: '地理坐标引力差（空间漂移）', en: 'Geodynamic Drift' },
        definition: { zh: '现居地与出生原点之间的地理公里数漂移对 L5 因子的物理再平衡修正。', en: 'Spatial offset miles between current location and birthplace modifying factor balance.' },
        visceralHook: { zh: '解释为何换一个城市或跨国生活后，你的性格与运气发生了翻天覆地的剧变。', en: 'Explains how shifting your geographic coordinates physically alters your internal baseline.' },
      },
    ],
  },

  'unbound-void': {
    id: 'unbound-void',
    level: 0,
    codeName: 'THE UNBOUND VOID',
    title: {
      zh: '归零·无极',
      en: 'The Unbound Void',
    },
    mapping: {
      zh: '底层映射：全系统的隐藏元节点，跳出外部时空重力场的主权自我',
      en: 'Core Mapping: Meta-Node Beyond Spatiotemporal Gravity; Sovereign Ego Unbound',
    },
    definition: {
      zh: '隐藏于系统最深处的元节点（Meta-Node）。前九级展示了你如何在重力场内被撕扯与影响；而 Level 0 则是当你看清前九级的全貌后，卸载所有重力与心理面具，回归绝对的主权自我（The Sovereign Ego）。',
      en: 'The meta-node hovering outside the gravitational matrix. Having deconstructed Levels 1-9, you strip away armor and environmental force to reclaim the Sovereign Ego.',
    },
    visceralHook: {
      zh: '触发终极心理解脱——你不再是重力撕扯下的受害者，而是这套生命系统的绝对观察者与主宰者。',
      en: 'Triggers ultimate release—transitioning from a passive entity in the force field to the sovereign architect of your reality.',
    },
  },
}; // <-- LEXICON_DATA 对象在此处闭合！

/**
 * ============================================================================
 * 辅助转换工具：将 LEXICON_DATA 转换为前端组件/API 可直接使用的 Array 格式
 * ============================================================================
 */
export function getLexiconLevelsArray(lang: LexiconLang = 'zh') {
  return Object.values(LEXICON_DATA).map((item) => {
    return {
      level: item.level,
      codeName: item.codeName,
      title: item.title[lang] || item.title.zh,
      mapping: item.mapping[lang] || item.mapping.zh,
      definition: item.definition[lang] || item.definition.zh,
      visceralHook: item.visceralHook[lang] || item.visceralHook.zh,
      unlocked: isLevelUnlocked(item.level),
      children: item.children?.map((child) => ({
        id: child.id,
        codeName: child.codeName,
        title: child.title[lang] || child.title.zh,
        definition: child.definition[lang] || child.definition.zh,
        visceralHook: child.visceralHook[lang] || child.visceralHook.zh,
      })),
    };
  });
}
