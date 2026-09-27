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
  'four-pillars': {
    id: 'four-pillars',
    level: 4,
    codeName: 'THE FOUR PILLARS',
    title: {
      zh: '四柱结构',
      en: 'The Four Pillars',
    },
    mapping: {
      zh: '底层映射：生命系统在时空连续体中的四维承重支柱',
      en: 'Core Mapping: Four-Dimensional Load-Bearing Pillars of Life System',
    },
    definition: {
      zh: '支撑你整个生命物理框架的四维时空支柱。从印刻在骨髓中的基因遗传，到现实环境的持续磨削，再到核心自我与终局指向，四柱共同构成了你抗击现实重力的力学拓扑网。',
      en: 'The four-dimensional spatiotemporal pillars supporting your entire ontological structure. From inherited genetic baselines to environmental friction and ultimate directional collapse, they form your load-bearing framework against reality.',
    },
    visceralHook: {
      zh: '剖析你生命承重墙的结构缺陷，指出哪一根支柱正在承受超载的应力，引发你系统性崩溃的风险。',
      en: 'Analyzes structural vulnerabilities in your life’s load-bearing walls, exposing which pillar is under catastrophic stress.',
    },
    children: [
      {
        id: 'year-pillar-field',
        codeName: 'YEAR PILLAR FIELD',
        title: {
          zh: '年柱·基因场域',
          en: 'Year Pillar: Genetic Field',
        },
        definition: {
          zh: '印刻在基因与骨髓里的时代底色与家族遗产。你无法选择的先天重力环境与幼年无意识吸收的防御机制。',
          en: 'The ancestral lineage and generational baseline imprinted upon your genetics. The immutable gravitational field of your origin.',
        },
        visceralHook: {
          zh: '精确指出你身上那些明明极度讨厌、却无意识重演的父母同款行为与情绪模式。',
          en: 'Exposes the exact behavioral patterns and emotional reactions you inherited from your lineage despite your conscious resistance.',
        },
      },
      {
        id: 'month-pillar-shear',
        codeName: 'MONTH PILLAR SHEAR',
        title: {
          zh: '月柱·环境剪力',
          en: 'Month Pillar: Environmental Shear',
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
        id: 'day-pillar-core',
        codeName: 'DAY PILLAR CORE',
        title: {
          zh: '日柱·核心主体',
          en: 'Day Pillar: Core Ego',
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
        id: 'hour-pillar-vector',
        codeName: 'HOUR PILLAR VECTOR',
        title: {
          zh: '时柱·终局向量',
          en: 'Hour Pillar: Terminal Vector',
        },
        definition: {
          zh: '生命系统向未来延伸的归宿与坍缩方向。涵盖晚年状态、潜意识信仰以及你留给时空连续体的精神残影。',
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
      en: 'Dynamic Equilibrium Factors',
    },
    mapping: {
      zh: '底层映射：系统五维环境力学与心理能量的动态失衡与补偿',
      en: 'Core Mapping: Five Environmental & Energetic Mechanics of the Psyche',
    },
    definition: {
      zh: '构成你生命系统演化的 5 个动态均衡因子。它们脱离了传统的概念表象，化为 5 种充满张力的环境力学与心理能量频段，决定了你的扩张冲动、渴望显化的程度、自我消化力、割舍冷酷度与潜流直觉。',
      en: 'The five dynamic mechanics governing your psyches equilibrium. They represent raw tension and environmental force vectors—dictating your drive to expand, project, anchor, prune, and adapt under reality’s pressure.',
    },
    visceralHook: {
      zh: '定位你能量结构中最不稳定的那个频段，揭示你为何总会在“盲目蔓延”或“过度裁决”之间陷入自我反噬。',
      en: 'Pinpoints your default energetic imbalance, revealing why you oscillate between boundless expansion and brutal self-sabotage.',
    },
    children: [
      {
        id: 'expansion-factor',
        codeName: 'EXPANSION FACTOR',
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
        codeName: 'VISIBILITY FACTOR',
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
        codeName: 'ANCHORING FACTOR',
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
        codeName: 'PRECISION FACTOR',
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
        codeName: 'ADAPTATION FACTOR',
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
  'lunar-tides': {
    id: 'lunar-tides',
    level: 6,
    codeName: 'THE LUNAR TIDES',
    title: {
      zh: '情绪潮汐',
      en: 'The Lunar Tides',
    },
    mapping: {
      zh: '底层映射：潜意识引力与周期性心理能量涨落',
      en: 'Core Mapping: Subconscious Gravitational Pull & Cyclical Emotional Waves',
    },
    definition: {
      zh: '控制你潜意识情绪波动的无形周期节律。它像引力牵引海洋一样，在不经意间操纵着你的情绪涨落、敏感度峰值与能量枯竭周期。它解释了为何你的心理状态总呈现出不可控的周期性起伏。',
      en: 'The invisible gravitational mechanics governing your unconscious emotional cycles. Like tides pulled by celestial bodies, it dictates your cyclical surges of acute sensitivity and sudden energetic ebbs.',
    },
    visceralHook: {
      zh: '破译你情绪“无预警崩溃”与“突然厌世”的隐性时间周期，让你不再为不可避免的生理与心理低谷感到内疚。',
      en: 'Decodes the hidden timeline behind your unprovoked breakdowns and sudden urges to disconnect from the world.',
    },
    children: [
      {
        id: 'syzygy-surge-phase',
        codeName: 'SYZYGY SURGE PHASE',
        title: {
          zh: '极高潮期',
          en: 'Syzygy Surge Phase',
        },
        definition: {
          zh: '潜意识感官与情绪能量无预警冲顶的峰值状态。此时理性的逻辑防线极易崩溃，感官被无限放大，极易做出冲动决策。',
          en: 'The peak state where intuitive sensitivity and emotional volume overflow rational containment, triggering impulsive choices.',
        },
        visceralHook: {
          zh: '精准锁定你最容易因为“情绪过载”而说错话、做错决定，甚至亲手破坏重要关系的危险时刻。',
          en: 'Pinpoints the exact threshold where emotional overload compromises your judgment and leads to impulsive self-sabotage.',
        },
      },
      {
        id: 'apogee-ebbing-phase',
        codeName: 'APOGEE EBBING PHASE',
        title: {
          zh: '极退潮期',
          en: 'Apogee Ebbing Phase',
        },
        definition: {
          zh: '心理能量被瞬间抽干的空心状态。表现为对一切失去兴趣、情感极度麻木，以及想要彻底切断与外界联系的强烈避世本能。',
          en: 'The absolute energetic drawdown. Characterized by profound numbness, apathy, and an instinctive urge to isolate completely.',
        },
        visceralHook: {
          zh: '直击你在“退潮期”的绝望感——那种明明什么都没发生，却连回一条短信都觉得无比艰难的窒息麻木。',
          en: 'Strikes at your deep fatigue during ebb states—where even replying to a simple message feels like moving a mountain.',
        },
      },
      {
        id: 'sub-current-resonance',
        codeName: 'SUB-CURRENT RESONANCE',
        title: {
          zh: '暗潮共振带',
          en: 'Sub-Current Resonance',
        },
        definition: {
          zh: '潜意识深层对外界微弱信号（一句话、一个眼神、一种氛围）产生的延迟剧烈共振，常在深夜或独处时爆发。',
          en: 'The subterranean reverberation triggered by subtle external cues, culminating in delayed nocturnal emotional surges.',
        },
        visceralHook: {
          zh: '剖析你在深夜突然情绪失控的真相——那不是当下的问题，而是白天被你强行压下去的无声暗潮。',
          en: 'Exposes the true origin of your late-night breakdowns—unprocessed emotions delayed from daytime survival mode.',
        },
      },
    ],
  },
  'axial-tilt': {
    id: 'axial-tilt',
    level: 7,
    codeName: 'THE AXIAL TILT',
    title: {
      zh: '轴向转折',
      en: 'The Axial Tilt',
    },
    mapping: {
      zh: '底层映射：生命系统长周期黄赤交角偏转与重力场跃迁',
      en: 'Core Mapping: Long-Term Rotational Axis Shift & Gravitational Field Phase Transition',
    },
    definition: {
      zh: '描述你生命系统在漫长岁月里发生的自转轴角度偏转与磁场跃迁（即传统大运与流年交替）。它决定了你在不同人生阶段的整体风向、价值观翻转以及现实环境的剧烈重组。',
      en: 'The macro-structural tilt in your systemic rotation axis over multi-year cycles. It governs tectonic shifts in your value system, life focus, and macro-environmental gravity during major life transitions.',
    },
    visceralHook: {
      zh: '解释为何过去行之有效的生活经验突然失效，揭示你当前正处于何种级别的轴向偏转与现实卡点中。',
      en: 'Explains why your past proven playbooks suddenly fail, revealing the exact macro-axial shift currently dismantling your old life pattern.',
    },
    children: [
      {
        id: 'obliquity-shift-phase',
        codeName: 'OBLIQUITY SHIFT PHASE',
        title: {
          zh: '黄赤偏角跃迁',
          en: 'Obliquity Shift Phase',
        },
        definition: {
          zh: '长周期底层磁场换轨时的临界状态。旧的环境与人际圈层加速崩解，新的重力场强行介入，常伴随着强烈的阵痛与失重感。',
          en: 'The volatile phase boundary during major epochal shifts, where former social circles dissolve to force realignments with new gravity fields.',
        },
        visceralHook: {
          zh: '击中你在“交运换轨”期巨大的失控与恐慌——旧的抓不住，新的还没建立，整个人悬空在半山腰。',
          en: 'Strikes at the vertiginous panic during life realignments—holding onto crumbling pillars while suspended over an uncertain void.',
        },
      },
      {
        id: 'precession-centrifugal-force',
        codeName: 'PRECESSION CENTRIFUGAL FORCE',
        title: {
          zh: '进动离心力',
          en: 'Precession Centrifugal Force',
        },
        definition: {
          zh: '阶段性流年引力所施加的强大离心力。它将你从舒适区强行甩出，逼迫你打破原有平衡，去应对全新的现实挑战。',
          en: 'The transient centrifugal pressure exerted by yearly planetary forces, driving you violently out of comfortable stasis.',
        },
        visceralHook: {
          zh: '揭示你为何在某些年份会突然感到一种被某种力量“逼着往前走”、不得不做出巨大变革的压迫感。',
          en: 'Exposes why certain years force unavoidable transformations upon you, stripping away all options to remain static.',
        },
      },
      {
        id: 'orbital-correction-zone',
        codeName: 'ORBITAL CORRECTION ZONE',
        title: {
          zh: '轨道修正带',
          en: 'Orbital Correction Zone',
        },
        definition: {
          zh: '系统发生严重偏航时自动触发的重力自我校准机制。往往表现为突如其来的挫折与阻碍，实则是系统强行终止你错误消耗的保护动作。',
          en: 'The emergency gravitational braking zone activated when your trajectory veers into self-destruction, halting wrong momentum via sudden friction.',
        },
        visceralHook: {
          zh: '剖析你所遭遇的某种“重大受挫”——那不是命运的惩罚，而是系统为了防止你彻底偏航而拉响的紧急刹车。',
          en: 'Re-frames major failures not as curses, but as emergency systemic brakes deployed to avert fatal orbital decay.',
        },
      },
    ],
  },
};
