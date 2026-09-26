export type Locale = 'en' | 'zh-CN' | 'zh-TW';

export const dictionaries = {
  'en': {
    brand: 'CHRONO–FLOW',
    subtitle: 'SPACE, TIME & THE UNSEEN SELF',
    
    // Header Rhythm & Clock
    todayRhythm: 'SEP 26, 2026 • BING-WU / DING-YOU',
    
    // Theme Switch
    themeLight: 'FORM',
    themeDark: 'VOID',

    // Section 1: Daily Rhythm Card
    dailyRhythmTag: 'YOUR DAILY SPATIOTEMPORAL RHYTHM',
    dailyRhythmQuote: '" Silence is your energy anchor today. "',
    dailyRhythmDetail: 'DAILY RHYTHM: GATHER & STORE / AVOID: IMPETUOUS ACTION',
    dailyRhythmSubQuote: '"Water is dominant in your current pillar. Do not mistake motion for progress."',

    // Section 2: Spatiotemporal Coordinates Title
    spatiotemporalTitle: 'INPUT SPATIOTEMPORAL COORDINATES',
    spatiotemporalNotice: 'Input birth parameters. The system will convert them into a 4-Pillar Energy Matrix based on True Solar Time.',

    // Form Section Title & Notice
    formTitle: 'ENTER BIRTH INFORMATION',
    formNotice: 'The system will automatically transform data into a Four Pillars energy structure diagram based on True Solar Time.',
    
    // Form Inputs
    identifierLabel: 'Name',
    identifierPlaceholder: 'e.g. Orion / Yuan',
    
    polarityLabel: 'Gender',
    polarityMale: 'Male',
    polarityFemale: 'Female',
    
    birthDateLabel: 'Date of Birth',
    birthTimeLabel: 'Time of Birth',
    
    locationLabel: 'Place of Birth',
    locationPlaceholder: 'e.g. Shanghai',
    locationHint: 'True Solar Time Adjustment',
    
    submitButton: 'ALIGN SPATIOTEMPORAL FREQUENCY',

    // Bottom Three Feature Cards
    card1Title: 'Personality Archetype',
    card1SubTitle: 'Archetype Analysis',
    card1Desc: '4-Pillar Matrix and internal homeostatic factor analysis.',
    
    card2Title: 'Temporal Evolution',
    card2SubTitle: 'Pattern Trends',
    card2Desc: 'Decadal macro trends and annual environment friction coefficients.',
    
    card3Title: 'Relational Resonance',
    card3SubTitle: 'Relational Sync',
    card3Desc: 'Dual system alignment and relational friction mapping.',
    
    // Legal Pages (Terms & Privacy)
    termsTitle: 'Terms of Service',
    privacyTitle: 'Privacy Policy',
    
    termsContent: [
      {
        section: 'I. Spatiotemporal Calculation Engine & Computation Principles',
        body: 'CHRONO–FLOW operates on the ChronoEngine™ proprietary spatiotemporal matrix calculation model, executing non-linear energy field mapping based on user-provided birth parameters, geographic coordinates, and True Solar Time offsets. All calculation results represent energetic frequency projections and systemic homeostasis states within discrete temporal frames, provided solely for personal introspective awareness and philosophical exploration.'
      },
      {
        section: 'II. Boundaries of Perception & User Scope',
        body: 'The field mapping and archetype matrices provided by CHRONO–FLOW do not constitute medical, legal, financial, or psychological guidance. Users should view all spatiotemporal resonance outputs through the lens of individual agency, using the insights as reflective reference points for personal growth.'
      },
      {
        section: 'III. Intellectual Property & System Field Security',
        body: 'All proprietary calculation models, matrix visual layouts, geometric symbols, and textual expressions within CHRONO–FLOW are protected under international copyright and intellectual property framework. Unauthorized reverse engineering, automated data extraction, or commercial reproduction is strictly prohibited.'
      }
    ],

    privacyContent: [
      {
        section: 'I. Data Minimization & Temporal Parameter Collection',
        body: 'To generate precise spatiotemporal matrices, CHRONO–FLOW collects only necessary spatial and temporal parameters: name/identifier, gender polarity, date/time of birth, and geographic birthplace. This data is processed exclusively to calculate True Solar Time coordinates and energy field distributions.'
      },
      {
        section: 'II. Data Isolation & Local Memory Processing',
        body: 'Your spatiotemporal parameters are processed within isolated temporary computation nodes. CHRONO–FLOW never sells, trades, or exposes your personal temporal parameters to external third-party monetization networks.'
      },
      {
        section: 'III. User Autonomy & Parameter Erasure',
        body: 'Users retain full ownership over their input parameters. You may purge cached spatiotemporal data at any time by clearing your browser session state or executing a local data reset.'
      }
    ],

    // Footer Navigation
    dictionary: 'Lexicon',
    terms: 'Terms of Service',
    privacy: 'Privacy Policy',
    copyright: '© 2026 CHRONO–FLOW. SPACE, TIME & THE UNSEEN SELF.',
  },

  'zh-CN': {
    brand: 'CHRONO–FLOW',
    subtitle: '时空与未显之己',
    
    // Header Rhythm & Clock
    todayRhythm: '2026年9月26日 • 丙午年 丁酉月',
    
    // Theme Switch
    themeLight: '实',
    themeDark: '虚',

    // Section 1: Daily Rhythm Card
    dailyRhythmTag: '今日时空节律',
    dailyRhythmQuote: '“ 沉寂，即是今日的能量之锚。”',
    dailyRhythmDetail: '今日节律：蓄力沉淀 / 忌：急躁盲动',
    dailyRhythmSubQuote: '“ 水局主事，切莫将无休止的动作误认为前行。”',

    // Section 2: Spatiotemporal Coordinates Title
    spatiotemporalTitle: '输入生辰时空参数',
    spatiotemporalNotice: '输入生辰参数，系统将基于真太阳时自动转化为四柱能量结构图。',

    // Form Section Title & Notice
    formTitle: '输入出生时空信息',
    formNotice: '系统将基于真太阳时自动转化为四柱能量结构图',
    
    // Form Inputs
    identifierLabel: '姓名',
    identifierPlaceholder: '例如：齐渊',
    
    polarityLabel: '性别',
    polarityMale: '男',
    polarityFemale: '女',
    
    birthDateLabel: '出生日期',
    birthTimeLabel: '出生时间',
    
    locationLabel: '出生地点',
    locationPlaceholder: '例如：上海',
    locationHint: '真太阳时偏移校正',
    
    submitButton: '开启时空场域对齐',

    // Bottom Three Feature Cards
    card1Title: '性格原型',
    card1SubTitle: '',
    card1Desc: '四柱能量结构与系统内稳态因子解析。',
    
    card2Title: '周程演化',
    card2SubTitle: '',
    card2Desc: '十年宏观趋势与年度环境阻力系数。',
    
    card3Title: '双方共振',
    card3SubTitle: '',
    card3Desc: '双人时空共振与摩擦点图谱。',
    
    // Legal Pages (Terms & Privacy)
    termsTitle: '服务条款',
    privacyTitle: '隐私政策',
    
    termsContent: [
      {
        section: '一、 时空演算引擎与推演原则',
        body: 'CHRONO–FLOW 依托 ChronoEngine™ 专有时空矩阵演算模型，基于用户输入的生辰参数、地理坐标与真太阳时偏移量执行非线性能量场域映射。所有计算与推演结果仅代表特定时间相位下的能量频率投影与系统内稳态表达，旨在提供自我认知观察与哲学探索参考。'
      },
      {
        section: '二、 认知边界与使用者责任',
        body: 'CHRONO–FLOW 所呈现的场域映射与原型矩阵不构成医疗、法律、财务或心理诊疗等专业建议。使用者应当以独立自主的觉察视角对待所有时空共振结果，将其作为内在觉察与自我探索的参照坐标。'
      },
      {
        section: '三、 知识产权与场域安全',
        body: 'CHRONO–FLOW 内包含的所有专有演算模型、矩阵视觉构图、几何符号及文本表达，均受国际著作权及知识产权法律体系保护。严禁任何未经授权的逆向工程、自动化数据提取或商业化复刻。'
      }
    ],

    privacyContent: [
      {
        section: '一、 数据极化与时空参数采集',
        body: '为生成精确的时空能量矩阵，CHRONO–FLOW 仅采集必要的时空参数：姓名/标识符、性别极性、出生日期时间及出生地理位置。此类数据仅用于计算真太阳时坐标与能量场分布。'
      },
      {
        section: '二、 隔离计算与本地内存处理',
        body: '您的生辰时空参数均在隔离的临时计算节点中运行。CHRONO–FLOW 绝不向任何第三方商业化广告网络出售、交易或泄露您的个人时空参数。'
      },
      {
        section: '三、 用户自主权与参数抹除',
        body: '使用者对输入的时空参数享有绝对控制权。您随时可通过清理浏览器缓存或执行本地数据重置，彻底抹除所有暂存的时空演算记录。'
      }
    ],

    // Footer Navigation
    dictionary: '概念词典',
    terms: '服务条款',
    privacy: '隐私政策',
    copyright: '© 2026 CHRONO–FLOW. 时空与未显之己.',
  },

  'zh-TW': {
    brand: 'CHRONO–FLOW',
    subtitle: '時空與未顯之己',
    
    // Header Rhythm & Clock
    todayRhythm: '2026年9月26日 • 丙午年 丁酉月',
    
    // Theme Switch
    themeLight: '實',
    themeDark: '虛',

    // Section 1: Daily Rhythm Card
    dailyRhythmTag: '今日時空節律',
    dailyRhythmQuote: '「 沉寂，即是今日的能量之錨。」',
    dailyRhythmDetail: '今日節律：蓄力沉澱 / 忌：急躁盲動',
    dailyRhythmSubQuote: '「 水局主事，切莫將無休止的動作誤認為前行。」',

    // Section 2: Spatiotemporal Coordinates Title
    spatiotemporalTitle: '輸入生辰時空參數',
    spatiotemporalNotice: '輸入生辰參數，系統將基於真太陽時自動轉化為四柱能量結構圖。',

    // Form Section Title & Notice
    formTitle: '輸入出生時空資訊',
    formNotice: '系統將基於真太陽時自動轉化為四柱能量結構圖',
    
    // Form Inputs
    identifierLabel: '姓名',
    identifierPlaceholder: '例如：齊淵',
    
    polarityLabel: '性別',
    polarityMale: '男',
    polarityFemale: '女',
    
    birthDateLabel: '出生日期',
    birthTimeLabel: '出生時間',
    
    locationLabel: '出生地點',
    locationPlaceholder: '例如：臺北',
    locationHint: '真太陽時偏移校正',
    
    submitButton: '開啟時空場域對齊',

    // Bottom Three Feature Cards
    card1Title: '性格原型',
    card1SubTitle: '',
    card1Desc: '四柱能量結構與系統內穩態因子解析。',
    
    card2Title: '周程演化',
    card2SubTitle: '',
    card2Desc: '十年宏觀趨勢與年度環境阻力係數。',
    
    card3Title: '雙方共振',
    card3SubTitle: '',
    card3Desc: '雙人時空共振與摩擦點圖譜。',
    
    // Legal Pages (Terms & Privacy)
    termsTitle: '服務條款',
    privacyTitle: '隱私政策',
    
    termsContent: [
      {
        section: '一、 時空演算引擎與推演原則',
        body: 'CHRONO–FLOW 依託 ChronoEngine™ 專有時空矩陣演算模型，基於使用者輸入的生辰參數、地理坐標與真太陽時偏移量執行非線性能量場域映射。所有計算與推演結果僅代表特定時間相位下的能量頻率投影與系統內穩態表達，旨在提供自我認知觀察與哲學探索參考。'
      },
      {
        section: '二、 認知邊界與使用者責任',
        body: 'CHRONO–FLOW 所呈現的場域映射與原型矩陣不構成醫療、法律、財務或心理診療等專業建議。使用者應當以獨立自主的覺察視角對待所有時空共振結果，將其作為內在覺察與自我探索的參照坐標。'
      },
      {
        section: '三、 智慧財產權與場域安全',
        body: 'CHRONO–FLOW 內包含的所有專有演算模型、矩陣視覺構圖、幾何符號及文本表達，均受國際著作權及智慧財產權法律體系保護。嚴禁任何未經授權的逆向工程、自動化數據提取或商業化複刻。'
      }
    ],

    privacyContent: [
      {
        section: '一、 數據極化與時空參數採集',
        body: '為生成精確的時空能量矩陣，CHRONO–FLOW 僅採集必要的時空參數：姓名/標識符、性別極性、出生日期時間及出生地理位置。此類數據僅用於計算真太陽時坐標與能量場分態。'
      },
      {
        section: '二、 隔離計算與本地記憶體處理',
        body: '您的生辰時空參數均在隔離的臨時計算節點中運行。CHRONO–FLOW 絕不向任何第三方商業化廣告網路出售、交易或洩露您的個人時空參數。'
      },
      {
        section: '三、 使用者自主權與參數抹除',
        body: '使用者對輸入的時空參數享有絕對控制權。您隨時可透過清理瀏覽器快取或執行本地數據重置，徹底抹除所有暫存的時空演算記錄。'
      }
    ],

    // Footer Navigation
    dictionary: '概念詞典',
    terms: '服務條款',
    privacy: '隱私政策',
    copyright: '© 2026 CHRONO–FLOW. 時空與未顯之己.',
  },
};
