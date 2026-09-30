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
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  // 1. 用户状态：guest(游客) | registered(已注册) | subscribed(付费解锁)
  const [userState, setUserState] = useState<'guest' | 'registered' | 'subscribed'>('guest');
  const [activeTab, setActiveTab] = useState<'field' | 'control'>('field');

  // 2. 选中的订阅周期：month(月) | quarter(季) | year(年)
  const [selectedPlan, setSelectedPlan] = useState<'month' | 'quarter' | 'year'>('year');

  // 3. 读取主页输入的真实原点资料
  const [userData, setUserData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem('chrono_origin_coordinates');
      if (stored) {
        const parsed = JSON.parse(stored);
        setUserData({
          name: parsed.name || (isEn ? 'Seeker' : '探索者'),
          birthDate: parsed.birthDate || '--',
          birthTime: parsed.birthTime || '--',
        });
        return;
      }
    } catch (e) {
      console.error('Failed to parse origin data in Dashboard:', e);
    }

    setUserData({
      name: isEn ? 'Unbound Origin' : isTW ? '未綁定原點' : '未绑定原点',
      birthDate: '--',
      birthTime: '--',
    });
  }, [isEn, isTW]);

  // 4. 注册 / 登录 Modal 弹窗控制
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  // 注册提交逻辑
  const handleRegisterSuccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail) return;
    setUserState('registered'); // 变为已注册，订阅栏依然保留
    setShowAuthModal(false);
  };

  // 模拟付费逻辑
  const handlePaySuccess = () => {
    setUserState('subscribed'); // 变为已订阅，订阅栏消失，显示全量页面
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300 pb-20">
      
      {/* 1. 顶部常驻区域：场域原点依据与碰撞 HEADER */}
      <FieldHeader
        userRole={userState}
        onRoleChange={(role) => setUserState(role)}
        onTriggerRegister={() => setShowAuthModal(true)}
      />

      {/* 2. 主场域内容区 */}
      <main className="max-w-6xl mx-auto px-4 pt-8 space-y-8">
        
        {/* Tab 导航 */}
        <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-2">
          <div className="flex gap-6">
            <button
              onClick={() => setActiveTab('field')}
              className={`font-serif-title text-base md:text-lg pb-2 transition-all relative ${
                activeTab === 'field'
                  ? 'text-[var(--text-primary)] font-medium border-b-2 border-[var(--cinnabar)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isEn ? 'THE FIELD MATRIX' : isTW ? '場域矩陣' : '场域矩阵'}
            </button>
            <button
              onClick={() => setActiveTab('control')}
              className={`font-serif-title text-base md:text-lg pb-2 transition-all relative ${
                activeTab === 'control'
                  ? 'text-[var(--text-primary)] font-medium border-b-2 border-[var(--cinnabar)]'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {isEn ? 'CONTROL CENTER' : isTW ? '時空中樞與黑歷史' : '时空中枢与黑历史'}
            </button>
          </div>

          <div className="text-[11px] font-mono text-[var(--text-muted)]">
            {isEn ? `FIELD: ${userData.name}` : isTW ? `當前場域：${userData.name}` : `当前场域：${userData.name}`}
          </div>
        </div>

        {/* Tab A: 场域矩阵 */}
        {activeTab === 'field' && (
          <div className="space-y-8">
            {/* 今日重力波脉搏 */}
            <DailyPulse
              userRole={userState}
              onTriggerRegister={() => setShowAuthModal(true)}
              onTriggerSubscribe={() => {
                const el = document.getElementById('subscription-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 四柱与五维动态均衡 */}
            <PillarsStructure 
              userRole={userState} 
              onTriggerRegister={() => setShowAuthModal(true)} 
            />

            {/* 3. 时空订阅栏（月 / 季 / 年），未付费时展示，付费后隐藏 */}
            {userState !== 'subscribed' ? (
              <section id="subscription-section" className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 yao-yang"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
                  <div>
                    <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
                      {isEn ? 'ORBITAL TEMPORAL SUBSCRIPTION' : isTW ? '軌道時空訂閱' : '轨道时空订阅'}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                      {isEn
                        ? 'UNLOCK 52-WEEK CONTINUOUS FIELD TRAJECTORY & RESISTANCE UNPACKING'
                        : isTW
                        ? '解鎖 52 週連續場域重力軌跡與週度阻力解包'
                        : '解锁 52 周连续场域重力轨迹与周度阻力解包'}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono px-2.5 py-1 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)]">
                    {userState === 'registered'
                      ? isEn ? 'Origin Anchored · Select Plan' : isTW ? '原點已綁定 · 選方案解鎖' : '原点已绑定 · 选方案解锁'
                      : isEn ? 'Guest Mode · Auto-bind on Sub' : isTW ? '遊客狀態 · 訂閱後自動綁定' : '游客状态 · 订阅后自动绑定'}
                  </div>
                </div>

                {/* 月 / 季 / 年 卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  
                  {/* 月度 */}
                  <div 
                    onClick={() => setSelectedPlan('month')}
                    className={`p-5 rounded border transition-all cursor-pointer space-y-3 relative ${
                      selectedPlan === 'month' 
                        ? 'border-[var(--cinnabar)] bg-[var(--cinnabar)]/5 shadow-md' 
                        : 'border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 hover:border-[var(--border-line-hover)]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                        {isEn ? 'MONTHLY ORBIT' : isTW ? '月度軌道' : '月度轨道'}
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
                        {isEn ? ' / month' : isTW ? ' / 月' : ' / 月'}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {isEn
                        ? 'Ideal for short-term field friction detection; unlocks the next 4 weeks of resistance diagnosis.'
                        : isTW
                        ? '適合短期場域重力波動探測，解鎖未來 4 週阻力診斷。'
                        : '适合短期场域重力波动探测，解锁未来 4 周阻力诊断。'}
                    </p>
                  </div>

                  {/* 季度 */}
                  <div 
                    onClick={() => setSelectedPlan('quarter')}
                    className={`p-5 rounded border transition-all cursor-pointer space-y-3 relative ${
                      selectedPlan === 'quarter' 
                        ? 'border-[var(--cinnabar)] bg-[var(--cinnabar)]/5 shadow-md' 
                        : 'border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 hover:border-[var(--border-line-hover)]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-[var(--text-muted)] uppercase">
                        {isEn ? 'QUARTERLY ORBIT' : isTW ? '季度軌道' : '季度轨道'}
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
                        {isEn ? ' / quarter' : isTW ? ' / 季' : ' / 季'}
                      </span>
                      <span className="ml-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                        {isEn ? 'SAVE 15%' : isTW ? '省 15%' : '省 15%'}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {isEn
                        ? 'Quarterly homeostatic alignment, including 12 weeks of unpacking and control review.'
                        : isTW
                        ? '季度內穩態調諧，包含 12 週阻力解包與中樞複盤。'
                        : '季度内稳态调谐，包含 12 周阻力解包与中枢复盘。'}
                    </p>
                  </div>

                  {/* 年度 */}
                  <div 
                    onClick={() => setSelectedPlan('year')}
                    className={`p-5 rounded border transition-all cursor-pointer space-y-3 relative ${
                      selectedPlan === 'year' 
                        ? 'border-[var(--cinnabar)] bg-[var(--cinnabar)]/5 shadow-md' 
                        : 'border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 hover:border-[var(--border-line-hover)]'
                    }`}
                  >
                    <div className="absolute -top-2.5 right-3 bg-[var(--cinnabar)] text-white text-[9px] font-mono px-2 py-0.5 rounded uppercase">
                      {isEn ? 'RECOMMENDED' : isTW ? '推薦方案' : '推荐方案'}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-[var(--cinnabar)] font-bold uppercase">
                        {isEn ? 'ANNUAL FULL ORBIT' : isTW ? '年度全景軌道' : '年度全景轨道'}
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
                        {isEn ? ' / year' : isTW ? ' / 年' : ' / 年'}
                      </span>
                      <span className="ml-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                        {isEn ? 'BEST VALUE' : isTW ? '省 15%' : '省 15%'}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {isEn
                        ? 'Full 52-week trajectory with complete historical logs and decisive guidance.'
                        : isTW
                        ? '完整 52 週重力軌跡與黑歷史歸檔，提供終極裁決指引。'
                        : '完整 52 周重力轨迹与黑历史归档，提供终极裁决指引。'}
                    </p>
                  </div>

                </div>

                {/* 解锁行动按钮 */}
                <div className="pt-4 border-t border-[var(--border-line)] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    {isEn
                      ? `Selected: ${selectedPlan === 'month' ? 'Monthly ($3.00)' : selectedPlan === 'quarter' ? 'Quarterly ($7.50)' : 'Annual ($29.00)'}`
                      : isTW
                      ? `當前選擇：${selectedPlan === 'month' ? '月度訂閱 (￥19)' : selectedPlan === 'quarter' ? '季度訂閱 (￥48)' : '年度全景訂閱 (￥198)'}`
                      : `当前选择：${selectedPlan === 'month' ? '月度订阅 (￥19)' : selectedPlan === 'quarter' ? '季度订阅 (￥48)' : '年度全景订阅 (￥198)'}`}
                  </div>

                  <button
                    onClick={handlePaySuccess}
                    className="w-full sm:w-auto px-8 py-2.5 bg-[var(--cinnabar)] text-white text-xs font-mono font-bold rounded shadow hover:opacity-90 transition-all uppercase tracking-wider"
                  >
                    {isEn ? 'UNLOCK ORBIT NOW' : isTW ? '立即支付解鎖場域軌道' : '立即支付解锁场域轨道'}
                  </button>
                </div>
              </section>
            ) : (
              /* 付费完成后出现的全景视图模块 */
              <section className="p-8 border border-emerald-500/30 bg-emerald-500/5 rounded-lg space-y-4 text-center">
                <div className="inline-block p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  ✓ TEMPORAL ALIGNMENT ACTIVE
                </div>
                <h3 className="font-serif-title text-xl text-[var(--text-primary)]">
                  {isEn ? 'FULL FIELD MATRIX UNLOCKED' : isTW ? '場域重力軌跡已全量解鎖' : '场域重力轨迹已全量解锁'}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
                  {isEn
                    ? `Your origin profile (${userData.name} / ${userData.birthDate}) is mapped to the field. All weekly resistance analyses and archives are synced.`
                    : isTW
                    ? `您的原點檔案（${userData.name} / ${userData.birthDate}）與場域已建立映射。訂閱週期內所有每週阻力解包與歷史存檔已同步。`
                    : `您的原点档案（${userData.name} / ${userData.birthDate}）与场域已建立映射。订阅周期内所有每周阻力解包与历史存档已同步。`}
                </p>
              </section>
            )}
          </div>
        )}

        {/* Tab B: 时空中枢 */}
        {activeTab === 'control' && (
          <ChronoControlCenter
            userEmail={authEmail || `${userData.name || 'user'}@field.io`}
            userRole={userState}
            subPlan={userState === 'subscribed' ? selectedPlan : 'none'}
          />
        )}
      </main>

      {/* 4. 注册 / 登录 Modal 弹窗 */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-line)] max-w-md w-full p-6 rounded-lg space-y-6 relative shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
              <div>
                <h3 className="font-serif-title text-base text-[var(--text-primary)]">
                  {isEn ? 'REGISTER ORIGIN ANCHOR' : isTW ? '保存場域原點檔案' : '保存场域原点档案'}
                </h3>
                <p className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                  {isEn ? 'Anchor:' : '绑定原点：'} {userData.name} ({userData.birthDate} {userData.birthTime})
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
                  {isEn ? 'Email / Account' : isTW ? '通信郵箱 / 賬號' : '通信邮箱 / 账号'}
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
                  {isEn ? 'Origin Key (Password)' : isTW ? '原點加密密鑰 (密碼)' : '原点加密密钥 (密码)'}
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

              <p className="text-[11px] text-[var(--text-muted)] font-sans leading-normal">
                {isEn
                  ? 'Registration locks your origin parameters. Subscribe to unlock 52-week trajectory tracking.'
                  : isTW
                  ? '註冊後將鎖定該原點參數。訂閱後可解鎖 52 週週期溯源。'
                  : '注册后将锁定该原点参数。订阅后可解锁 52 周周期溯源。'}
              </p>

              <button
                type="submit"
                className="w-full py-2.5 bg-[var(--cinnabar)] text-white text-xs font-mono font-bold rounded hover:opacity-90 transition-all uppercase tracking-wider"
              >
                {isEn ? 'CONFIRM & ANCHOR' : isTW ? '確認註冊並綁定原點' : '确认注册并绑定原点'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
