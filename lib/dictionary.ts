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
        section: '1. Non-Medical & Non-Psychological Guidance',
        body: 'CHRONO–FLOW provides archetypal and field resonance analysis based on the ChronoEngine™ proprietary spatiotemporal matrix calculation model and non-linear energy field mapping algorithms. The insights provided are strictly for personal self-reflection, philosophical exploration, and energetic alignment. They do not constitute professional psychological counselling, medical advice, or financial planning.'
      },
      {
        section: '2. Merchant of Record',
        body: 'Our order process is conducted by our online reseller Paddle.com. Paddle.com is the Merchant of Record for all our orders. Paddle provides all customer service inquiries and handles returns.'
      },
      {
        section: '3. Intellectual Property & Field Security',
        body: 'All generated matrix reports, visual aesthetics, geometric symbols, and proprietary calculation code within CHRONO–FLOW are protected under international intellectual property laws. Users are granted a personal, non-exclusive license to view and share their spatiotemporal resonance outputs.'
      }
    ],

    privacyContent: [
      {
        section: '1. Information We Collect',
        body: 'We collect birth dates, birth times, gender polarity, and optional geographic location entries solely to compute your True Solar Time coordinates, construct your four-pillar energy matrix, and generate personalized resonance reports. We do not sell or monetize your personal temporal metadata.'
      },
      {
        section: '2. Processing via ChronoEngine™ Nodes',
        body: 'Your computed spatiotemporal parameters are transmitted securely to isolated ChronoEngine™ computation nodes to execute energy matrix alignment and generate report texts. No government IDs, financial credentials, or sensitive personal identity records are stored on our primary servers.'
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
        section: '1. 非医疗与非心理诊疗说明',
        body: 'CHRONO–FLOW 依托 ChronoEngine™ 专有时空矩阵演算模型与非线性能量场映射算法，提供原型与能量场共振解析。所呈现的洞察仅供个人内在觉察、哲学探索与能量对齐参考，不构成专业心理咨询、医疗建议或财务规划。'
      },
      {
        section: '2. 官方名义商家 (Merchant of Record)',
        body: '我们的订单支付由在线经销商 Paddle.com 负责处理。Paddle.com 是我们所有订单的官方名义商家（Merchant of Record），负责提供相关客户服务并处理退款事宜。'
      },
      {
        section: '3. 知识产权与场域安全',
        body: 'CHRONO–FLOW 内生成的能量矩阵报告、视觉美学布局、几何符号及专有演算代码，均受国际知识产权法律保护。使用者获授权获得个人非排他性许可，用于查看与分享其时空共振结果。'
      }
    ],

    privacyContent: [
      {
        section: '1. 我们采集的信息',
        body: '我们仅在必要范围内采集出生日期、出生时间、性别极性和可选的出生地理位置，用于计算真太阳时坐标、构建四柱能量矩阵并生成个性化共振报告。我们绝不出售或商业化变现您的个人时空元数据。'
      },
      {
        section: '2. 通过 ChronoEngine™ 节点演算',
        body: '您的生辰时空参数均以加密形式传输至隔离的 ChronoEngine™ 演算节点，用于完成能量矩阵对齐与报告生成。我们的主服务器不存储任何政府身份证件、财务凭证或敏感个人身份信息。'
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
        section: '1. 非醫療與非心理診療說明',
        body: 'CHRONO–FLOW 依託 ChronoEngine™ 專有時空矩陣演算模型與非線性能量場映射算法，提供原型與能量場共振解析。所呈現的洞察僅供個人內在覺察、哲學探索與能量對齊參考，不構成專業心理諮詢、醫療建議或財務規劃。'
      },
      {
        section: '2. 官方名義商家 (Merchant of Record)',
        body: '我們的訂單支付由線上經銷商 Paddle.com 負責處理。Paddle.com 是我們所有訂單的官方名義商家（Merchant of Record），負責提供相關客戶服務並處理退款事宜。'
      },
      {
        section: '3. 智慧財產權與場域安全',
        body: 'CHRONO–FLOW 內生成的能量矩陣報告、視覺美感佈局、幾何符號及專有演算代碼，均受國際智慧財產權法律保護。使用者獲授權獲得個人非排他性許可，用於查看與分享其時空共振結果。'
      }
    ],

    privacyContent: [
      {
        section: '1. 我們採集的資訊',
        body: '我們僅在必要範圍內採集出生日期、出生時間、性別極性和選填的出生地理位置，用於計算真太陽時坐標、構建四柱能量矩陣並生成個性化共振報告。我們絕不出售或商業化變現您的個人時空元數據。'
      },
      {
        section: '2. 透過 ChronoEngine™ 節點演算',
        body: '您的生辰時空參數均以加密形式傳輸至隔離的 ChronoEngine™ 演算節點，用於完成能量矩陣對齊與報告生成。我們的主伺服器不儲存任何政府身份證件、財務憑據或敏感個人身份資訊。'
      }
    ],

    // Footer Navigation
    dictionary: '概念詞典',
    terms: '服務條款',
    privacy: '隱私政策',
    copyright: '© 2026 CHRONO–FLOW. 時空與未顯之己.',
  },
};
