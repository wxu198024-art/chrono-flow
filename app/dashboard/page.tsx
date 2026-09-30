'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/layout';
import FieldHeader from '@/components/field/FieldHeader';
import DailyPulse from '@/components/field/DailyPulse';
import PillarsStructure from '@/components/field/PillarsStructure';
import ChronoControlCenter from '@/components/field/ChronoControlCenter';

export default function DashboardPage() {
  const { lang } = useLanguage?.() || { lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isJa = currentLang === 'ja';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  type UserRoleState = 'guest' | 'registered' | 'subscribed_month' | 'subscribed_quarter' | 'subscribed_year';
  const [userState, setUserState] = useState<UserRoleState>('guest');
  const [activeTab, setActiveTab] = useState<'field' | 'control'>('field');

  const [selectedPlan, setSelectedPlan] = useState<'month' | 'quarter' | 'year'>('year');

  const [userData, setUserData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
    nodeId: 'NODE-8F92',
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem('chrono_origin_coordinates');
      if (stored) {
        const parsed = JSON.parse(stored);
        setUserData({
          name: parsed.name || (isEn ? 'Seeker' : isJa ? '探索者' : '探索者'),
          birthDate: parsed.birthDate || '--',
          birthTime: parsed.birthTime || '--',
          nodeId: parsed.nodeId || 'NODE-8F92',
        });
        return;
      }
    } catch (e) {
      console.error('Failed to parse origin data in Dashboard:', e);
    }

    setUserData({
      name: isEn ? 'Unbound Origin' : isJa ? '未接続の原点' : isTW ? '未綁定原點' : '未绑定原点',
      birthDate: '--',
      birthTime: '--',
      nodeId: 'NODE-8F92',
    });
  }, [isEn, isJa, isTW]);

  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  const handleRegisterSuccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail) return;
    setUserState('registered');
    setShowAuthModal(false);
  };

  const handlePaySuccess = () => {
    if (selectedPlan === 'month') setUserState('subscribed_month');
    else if (selectedPlan === 'quarter') setUserState('subscribed_quarter');
    else setUserState('subscribed_year');
  };

  const isSubscribed = userState.startsWith('subscribed');

  const baseUserRole: 'guest' | 'registered' | 'subscribed' = isSubscribed
    ? 'subscribed'
    : (userState as 'guest' | 'registered');

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300 pb-20">
      
      <FieldHeader
        userRole={baseUserRole}
        onRoleChange={(role) => setUserState(role as UserRoleState)}
        onTriggerRegister={() => setShowAuthModal(true)}
      />

      <main className="max-w-6xl mx-auto px-4 pt-8 space-y-8">
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[var(--border-line)] pb-2 gap-4">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('field')}
              className={`font-serif-title text-base md:text-lg pb-2 transition-all relative ${
                activeTab === 'field'
                  ? 'text-[var(--text-primary)] font-medium border-b-2 border-[var(--cinnabar)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isEn ? 'THE FIELD MATRIX' : isJa ? '場域マトリクス' : isTW ? '場域矩陣' : '场域矩阵'}
            </button>
            <button
              onClick={() => setActiveTab('control')}
              className={`font-serif-title text-base md:text-lg pb-2 transition-all relative ${
                activeTab === 'control'
                  ? 'text-[var(--text-primary)] font-medium border-b-2 border-[var(--cinnabar)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isEn ? 'CONTROL CENTER & ARCHIVE' : isJa ? '時空中枢とアーカイブ' : isTW ? '時空中樞與黑歷史' : '时空中枢与黑历史'}
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[var(--text-muted)]">
              {isEn ? `ORIGIN: ${userData.name}` : isJa ? `現在の原点: ${userData.name}` : isTW ? `當前場域：${userData.name}` : `当前场域：${userData.name}`}
            </span>
            <a
              href={`/chart/${userData.nodeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cinnabar)] hover:underline border border-[var(--cinnabar)]/30 px-2 py-0.5 rounded bg-[var(--cinnabar)]/5 transition-all"
            >
              {isEn ? '[ PUBLIC PROFILE ]' : isJa ? '[ 公開プロフィール ]' : isTW ? '[ 公開個人主頁 ]' : '[ 公开个人主页 ]'}
            </a>
          </div>
        </div>

        {activeTab === 'field' && (
          <div className="space-y-8">
            <DailyPulse
              userRole={baseUserRole}
              onTriggerRegister={() => setShowAuthModal(true)}
              onTriggerSubscribe={() => {
                const el = document.getElementById('subscription-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            <PillarsStructure 
              userRole={baseUserRole} 
              onTriggerRegister={() => setShowAuthModal(true)} 
            />

            {!isSubscribed ? (
              <section id="subscription-section" className="p-6 md:p-8 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 yao-yang"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
                  <div>
                    <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
                      {isEn ? 'TEMPORAL ALIGNMENT CYCLES' : isJa ? '時空位相同調サイクル' : isTW ? '時空位相同調週期' : '时空位相同调周期'}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                      {isEn
                        ? 'ALIGNMENT WITH NATURAL CELESTIAL & BIOLOGICAL RHYTHMS'
                        : isJa
                        ? '天体運動と生物学的内穏態に基づく時空位相の同期'
                        : isTW
                        ? '遵循天體物理与自然節律的自然重力相位對位'
                        : '遵循天体物理与自然节律的自然重力相位对位'}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono px-2.5 py-1 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)]">
                    {userState === 'registered'
                      ? isEn ? 'ORIGIN ANCHORED · SELECT CYCLE' : isJa ? '原点固定済み · サイクル選択' : isTW ? '原點已對位 · 選擇對位週期' : '原点已对位 · 选择对位周期'
                      : isEn ? 'GUEST MODE · AUTO-BIND ON ALIGNMENT' : isJa ? 'ゲスト状態 · 選択時に自動同調' : isTW ? '訪客狀態 · 同調後自動對位' : '访客状态 · 同调后自动对位'}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  
                  <div 
                    onClick={() => setSelectedPlan('month')}
                    className={`p-6 rounded border transition-all cursor-pointer space-y-4 relative flex flex-col justify-between ${
                      selectedPlan === 'month' 
                        ? 'border-[var(--cinnabar)] bg-[var(--cinnabar)]/5 shadow-md' 
                        : 'border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 hover:border-[var(--border-line-hover)]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                          {isEn ? 'MICRO GRAVITY CROSS-SECTION' : isJa ? '微小重力断面同調' : isTW ? '微觀重力截面' : '微观重力截面'}
                        </span>
                        {selectedPlan === 'month' && (
                          <span className="w-2 h-2 rounded-full bg-[var(--cinnabar)]"></span>
                        )}
                      </div>
                      <div>
                        <span className="text-2xl font-serif-title font-bold text-[var(--text-primary)]">
                          {isEn ? '$3.00' : '￥19'}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {isEn ? ' / month' : isJa ? ' / 月' : ' / 月'}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                        {isEn
                          ? '29.5-day gravitational overlay. Captures emotional fluidity and internal homeostasis adjustments in micro-velocity.'
                          : isJa
                          ? '29.5日の引力場オーバーレイ。微小な流速の中で感情の抵抗と生体内穏態の微調整を捕捉。'
                          : isTW
                          ? '29.5天引力場交疊。在微觀流速中，捕捉微小的情緒阻力与生體內穩態微調。'
                          : '29.5天引力场交叠。在微观流速中，捕捉微小的情绪阻力与生体内稳态微调。'}
                      </p>
                    </div>
                    <div className="pt-2 text-[10px] font-mono text-[var(--text-muted)] border-t border-[var(--border-line)]/50">
                      {isEn ? 'TIDE & HOMEOSTASIS PERCEPTION' : isJa ? '潮汐・内穏態の感知' : '潮汐感知 · 捕捉微观阻力'}
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedPlan('quarter')}
                    className={`p-6 rounded border transition-all cursor-pointer space-y-4 relative flex flex-col justify-between ${
                      selectedPlan === 'quarter' 
                        ? 'border-[var(--cinnabar)] bg-[var(--cinnabar)]/5 shadow-md' 
                        : 'border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 hover:border-[var(--border-line-hover)]'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-wider">
                          {isEn ? 'ORBITAL INCLINE LOOP' : isJa ? '公転偏角閉環' : isTW ? '公轉偏角閉環' : '公转偏角闭环'}
                        </span>
                        {selectedPlan === 'quarter' && (
                          <span className="w-2 h-2 rounded-full bg-[var(--cinnabar)]"></span>
                        )}
                      </div>
                      <div>
                        <span className="text-2xl font-serif-title font-bold text-[var(--text-primary)]">
                          {isEn ? '$7.50' : '￥48'}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {isEn ? ' / quarter' : isJa ? ' / 季' : ' / 季'}
                        </span>
                        <span className="ml-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                          {isEn ? 'CLOSED LOOP' : isJa ? '閉環同調' : '完整小循环'}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                        {isEn
                          ? 'Earth shifts 90° along its orbit. Maintains field equilibrium across a complete "Growth-Manifestation-Harvest-Rest" loop.'
                          : isJa
                          ? '地球が軌道上を90度偏向。「生成—顕化—収斂—沈潜」の完全なフィールド小循環でシステムを平衡。'
                          : isTW
                          ? '公轉軌道每偏轉90度带来磁場倒錯。在完整的「生成—顯化—收斂—沉潛」小循環中保持系統穩態。'
                          : '公转轨道每偏转90度带来磁场倒错。在完整的“生成—显化—收敛—沉潜”小循环中保持系统稳态。'}
                      </p>
                    </div>
                    <div className="pt-2 text-[10px] font-mono text-[var(--text-muted)] border-t border-[var(--border-line)]/50">
                      {isEn ? 'ORBITAL SYSTEM EQUILIBRIUM' : isJa ? '軌道システムの平衡' : '阶段演化 · 维持系统稳态'}
                    </div>
                  </div>

                  <div 
                    onClick={() => setSelectedPlan('year')}
                    className={`p-6 rounded border transition-all cursor-pointer space-y-4 relative flex flex-col justify-between ${
                      selectedPlan === 'year' 
                        ? 'border-[var(--cinnabar)] bg-[var(--cinnabar)]/5 shadow-md' 
                        : 'border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 hover:border-[var(--border-line-hover)]'
                    }`}
                  >
                    <div className="absolute -top-2.5 right-3 bg-[var(--cinnabar)] text-white text-[9px] font-mono px-2 py-0.5 rounded uppercase">
                      {isEn ? 'ORBITAL CONTINUUM' : isJa ? '原点回帰' : isTW ? '原點回歸' : '原点回归'}
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-mono text-[var(--cinnabar)] font-bold uppercase tracking-wider">
                          {isEn ? 'FULL-SPECTRUM ORBITAL' : isJa ? '全息軌道回帰' : isTW ? '全息軌道對位' : '全息轨道对位'}
                        </span>
                        {selectedPlan === 'year' && (
                          <span className="w-2 h-2 rounded-full bg-[var(--cinnabar)]"></span>
                        )}
                      </div>
                      <div>
                        <span className="text-2xl font-serif-title font-bold text-[var(--text-primary)]">
                          {isEn ? '$29.00' : '￥198'}
                        </span>
                        <span className="text-xs font-mono text-[var(--text-muted)]">
                          {isEn ? ' / year' : isJa ? ' / 年' : ' / 年'}
                        </span>
                        <span className="ml-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                          {isEn ? 'ULTIMATE NAVIGATOR' : isJa ? '終極ナビ' : '终极导航'}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
                        {isEn
                          ? '365.25-day full trajectory closure. Embeds your personal evolution archive into long-period temporal dynamics.'
                          : isJa
                          ? '365.25日の全軌道閉合。個人の演化アーカイブを長周期の時間図譜に組み込む精神ナビゲーション。'
                          : isTW
                          ? '365天全景軌跡閉合。將個人演化檔案嵌入長週期時間圖譜，建立跨越時空的終極精神導航。'
                          : '365天全景轨迹闭合。将个人演化档案嵌入长周期时间图谱，建立跨越时空的终极精神导航。'}
                      </p>
                    </div>
                    <div className="pt-2 text-[10px] font-mono text-[var(--cinnabar)] border-t border-[var(--border-line)]/50">
                      {isEn ? 'FULL TEMPORAL ARCHIVE' : isJa ? '全息時間軸・精神アーカイブ' : '全息时空图谱 · 终极导航'}
                    </div>
                  </div>

                </div>

                <div className="p-5 rounded bg-[var(--bg-card-hover)]/40 border border-[var(--border-line)]/60 space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">
                    {isEn
                      ? 'WHY THESE ALIGNMENT CYCLES?'
                      : isJa
                      ? 'なぜこれらの同調サイクルなのか？'
                      : isTW
                      ? '為什麼時間無法被隨意割裂？'
                      : '为什么时间无法被随意割裂？'}
                  </h4>
                  <p className="text-xs text-[var(--text-muted)] leading-relaxed font-sans">
                    {isEn
                      ? 'Time flow is not a mechanical sequence of arbitrary numbers, but a physical result of celestial motion. We strictly provide Micro Gravitational (Monthly), Orbital Incline (Quarterly), and Full-Spectrum Orbital (Annual) alignment—the only three natural resonance cycles between celestial mechanics and human biometrics.'
                      : isJa
                      ? '時間の流れは機械的な数値の累積ではなく、天体運動の物理的帰結です。当システムは、微小重力（月）、公転偏角（季）、全息軌道（年）の3周期のみを提供します。これこそが天体力学と生物学的共鳴を生み出す唯一の自然周期だからです。'
                      : isTW
                      ? '物理學与天文学表明，時間并非數字的堆砌，而是天體運行与場域作用的自然結果。半年或任意月份划分只是行政設想，不存在自然斷層。我們僅提供 微觀重力（月）、公轉偏角（季）、全息軌道（年）三種對位，因其是地球与生物力學產生真實共振的唯一三大自然週期。'
                      : '物理学与天文学表明，时间并非数字的堆砌，而是天体运行与场域作用的自然结果。半年或任意月份划分只是行政设想，不存在自然断层。我们仅提供 微观重力（月）、公转偏角（季）、全息轨道（年）三种对位，因其是地球与生物力学产生真实共振的唯一三大自然周期。'}
                  </p>
                </div>

                <div className="pt-2 border-t border-[var(--border-line)] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    {isEn
                      ? `Selected Alignment: ${selectedPlan === 'month' ? 'Micro Gravity ($3.00)' : selectedPlan === 'quarter' ? 'Orbital Incline ($7.50)' : 'Full-Spectrum Orbital ($29.00)'}`
                      : isJa
                      ? `選択中の同調: ${selectedPlan === 'month' ? '微小重力断面 (￥19)' : selectedPlan === 'quarter' ? '公転偏角閉環 (￥48)' : '全息軌道回帰 (￥198)'}`
                      : isTW
                      ? `當前選擇：${selectedPlan === 'month' ? '微觀重力對位 (￥19)' : selectedPlan === 'quarter' ? '公轉偏角對位 (￥48)' : '全息軌道對位 (￥198)'}`
                      : `当前选择：${selectedPlan === 'month' ? '微观重力对位 (￥19)' : selectedPlan === 'quarter' ? '公转偏角对位 (￥48)' : '全息轨道对位 (￥198)'}`}
                  </div>

                  <button
                    onClick={handlePaySuccess}
                    className="w-full sm:w-auto px-8 py-2.5 bg-[var(--cinnabar)] text-white text-xs font-mono font-bold rounded shadow hover:opacity-90 transition-all uppercase tracking-wider"
                  >
                    {isEn ? 'ALIGN TEMPORAL PHASE NOW' : isJa ? '高次元位相を同期する' : isTW ? '立即校準高維相位' : '立即校准高维相位'}
                  </button>
                </div>
              </section>
            ) : (
              <section className="p-8 border border-emerald-500/30 bg-emerald-500/5 rounded-lg space-y-4 text-center relative overflow-hidden">
                <div className="inline-block p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  ✓ TEMPORAL ALIGNMENT ACTIVE
                </div>
                <h3 className="font-serif-title text-xl text-[var(--text-primary)]">
                  {isEn ? 'FIELD PHASE RECONFIGURED' : isJa ? '高次元位相の再構築完了' : isTW ? '高維相位已重新重構' : '高维相位已重新重构'}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
                  {isEn
                    ? `Origin (${userData.name}) field state mapped. Active Cycle: [${userState.replace('subscribed_', '').toUpperCase()} ALIGNMENT].`
                    : isJa
                    ? `原点（${userData.name}）の位相マッピング完了。現在の境界: [${userState === 'subscribed_month' ? '微小重力同調' : userState === 'subscribed_quarter' ? '公転偏角同調' : '全息軌道同調'}]。`
                    : isTW
                    ? `原點（${userData.name}）場域相位已完成映射。當前境界：[${userState === 'subscribed_month' ? '微觀重力對位' : userState === 'subscribed_quarter' ? '公轉偏角對位' : '全息軌道對位'}]。`
                    : `原点（${userData.name}）场域相位已完成映射。当前境界：[${userState === 'subscribed_month' ? '微观重力对位' : userState === 'subscribed_quarter' ? '公转偏角对位' : '全息轨道对位'}]。`}
                </p>
                <div className="pt-2 text-[10px] font-mono text-[var(--text-muted)] tracking-widest opacity-60">
                  GetChronoFlow
                </div>
              </section>
            )}
          </div>
        )}

        {activeTab === 'control' && (
          <ChronoControlCenter
            userEmail={authEmail || `${userData.name || 'user'}@field.io`}
            userRole={baseUserRole}
            subPlan={isSubscribed ? selectedPlan : 'none'}
          />
        )}
      </main>

      {showAuthModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-line)] max-w-md w-full p-6 rounded-lg space-y-6 relative shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
              <div>
                <h3 className="font-serif-title text-base text-[var(--text-primary)]">
                  {isEn ? 'REGISTER ORIGIN ANCHOR' : isJa ? '場域原点アーカイブの保存' : isTW ? '保存場域原點檔案' : '保存场域原点档案'}
                </h3>
                <p className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                  {isEn ? 'ANCHOR:' : isJa ? 'アンカー:' : '绑定原点：'} {userData.name} ({userData.birthDate} {userData.birthTime})
                </p>
              </div>
              <button
                onClick={() => setShowAuthModal(false)}
                className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                [ ESC / CLOSE ]
              </button>
            </div>

            <form onSubmit={handleRegisterSuccess} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  {isEn ? 'Email / Identity' : isJa ? 'メールアドレス / ID' : isTW ? '通信郵箱 / 賬號' : '通信邮箱 / 账号'}
                </label>
                <input
                  type="email"
                  required
                  value={authEmail}
                  onChange={(e) => setAuthEmail(e.target.value)}
                  placeholder="observer@domain.com"
                  className="w-full px-3 py-2 text-xs font-mono bg-[var(--bg-card-hover)] border border-[var(--border-line)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--cinnabar)]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-[var(--text-muted)] mb-1">
                  {isEn ? 'Origin Key (Password)' : isJa ? '原点暗号キー (パスワード)' : isTW ? '原點加密密鑰 (密碼)' : '原点加密密钥 (密码)'}
                </label>
                <input
                  type="password"
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2 text-xs font-mono bg-[var(--bg-card-hover)] border border-[var(--border-line)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--cinnabar)]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-[var(--cinnabar)] text-white text-xs font-mono font-bold rounded hover:opacity-90 transition-all uppercase tracking-wider"
              >
                {isEn ? 'CONFIRM & ANCHOR' : isJa ? '登録して原点を固定' : isTW ? '確認註冊並綁定原點' : '确认注册并绑定原点'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
