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

  // 1. 用户状态扩展：guest | registered | subscribed_month | subscribed_quarter | subscribed_year
  type UserRoleState = 'guest' | 'registered' | 'subscribed_month' | 'subscribed_quarter' | 'subscribed_year';
  const [userState, setUserState] = useState<UserRoleState>('guest');
  const [activeTab, setActiveTab] = useState<'field' | 'control'>('field');

  // 2. 选中的订阅周期：month(月·者局域) | quarter(季·无我) | year(年·天道)
  const [selectedPlan, setSelectedPlan] = useState<'month' | 'quarter' | 'year'>('year');

  // 3. 读取主页输入的真实原点资料与 Node ID
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
          name: parsed.name || (isEn ? 'Seeker' : isTW ? '探索者' : '探索者'),
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
      name: isEn ? 'Unbound Origin' : isTW ? '未綁定原點' : '未绑定原点',
      birthDate: '--',
      birthTime: '--',
      nodeId: 'NODE-8F92',
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
    setUserState('registered');
    setShowAuthModal(false);
  };

  // 模拟高维相位校准付费逻辑
  const handlePaySuccess = () => {
    if (selectedPlan === 'month') setUserState('subscribed_month');
    else if (selectedPlan === 'quarter') setUserState('subscribed_quarter');
    else setUserState('subscribed_year');
  };

  const isSubscribed = userState.startsWith('subscribed');

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300 pb-20">
      
      {/* 1. 顶部常驻区域：场域原点依据与碰撞 HEADER */}
      <FieldHeader
        userRole={isSubscribed ? 'subscribed' : (userState as 'guest' | 'registered')}
        onRoleChange={(role) => setUserState(role as UserRoleState)}
        onTriggerRegister={() => setShowAuthModal(true)}
      />

      {/* 2. 主场域内容区 */}
      <main className="max-w-6xl mx-auto px-4 pt-8 space-y-8">
        
        {/* Tab 导航与公开个人主页入口 */}
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
              {isEn ? 'CONTROL CENTER & ARCHIVE' : isTW ? '時空中樞與黑歷史' : '时空中枢与黑历史'}
            </button>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono">
            <span className="text-[var(--text-muted)]">
              {isEn ? `ORIGIN: ${userData.name}` : isTW ? `當前場域：${userData.name}` : `当前场域：${userData.name}`}
            </span>
            <a
              href={`/chart/${userData.nodeId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--cinnabar)] hover:underline border border-[var(--cinnabar)]/30 px-2 py-0.5 rounded bg-[var(--cinnabar)]/5 transition-all"
            >
              {isEn ? '[ PUBLIC PROFILE ]' : isTW ? '[ 公開個人主頁 ]' : '[ 公开个人主页 ]'}
            </a>
          </div>
        </div>

        {/* Tab A: 场域矩阵 */}
        {activeTab === 'field' && (
          <div className="space-y-8">
            {/* 今日重力波脉搏 */}
            <DailyPulse
              userRole={isSubscribed ? 'subscribed' : (userState as 'guest' | 'registered')}
              onTriggerRegister={() => setShowAuthModal(true)}
              onTriggerSubscribe={() => {
                const el = document.getElementById('subscription-section');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            />

            {/* 四柱与【者·局·域】五维动态均衡 */}
            <PillarsStructure 
              userRole={userState} 
              onTriggerRegister={() => setShowAuthModal(true)} 
            />

            {/* 3. 时空订阅栏（月 / 季 / 年），未付费时展示，付费后隐藏 */}
            {!isSubscribed ? (
              <section id="subscription-section" className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 yao-yang"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
                  <div>
                    <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
                      {isEn ? 'ORBITAL TEMPORAL SUBSCRIPTION' : isTW ? '軌道時空訂閱' : '轨道时空订阅'}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                      {isEn
                        ? 'UNLOCK CONTINUOUS FIELD TRAJECTORY & RESISTANCE UNPACKING'
                        : isTW
                        ? '解鎖連續場域重力軌跡與週度阻力解包'
                        : '解锁连续场域重力轨迹与周度阻力解包'}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono px-2.5 py-1 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)]">
                    {userState === 'registered'
                      ? isEn ? 'ORIGIN ANCHORED · SELECT ORBIT' : isTW ? '原點已綁定 · 選方案解鎖' : '原点已绑定 · 选方案解锁'
                      : isEn ? 'GUEST MODE · AUTO-BIND ON SUB' : isTW ? '遊客狀態 · 訂閱後自動綁定' : '游客状态 · 订阅后自动绑定'}
                  </div>
                </div>

                {/* 月 / 季 / 年 卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  
                  {/* 月度：解锁 者·局·域 */}
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
                        ? 'Unlocks [Archetype + Friction + Domain] 3-in-1 complete perspective.'
                        : isTW
                        ? '解鎖【~者】+【~局】+【~域】三位一體全貌。'
                        : '解锁【~者】+【~局】+【~域】三位一体全貌。'}
                    </p>
                  </div>

                  {/* 季度：无我之境 (隐去者) */}
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
                        ? 'Transcends ego. Focuses purely on [Friction + Domain] dynamics.'
                        : isTW
                        ? '進入「無我之境」，聚聚焦【~局】+【~域】動態博弈。'
                        : '进入“无我之境”，聚焦【~局】+【~域】动态博弈。'}
                    </p>
                  </div>

                  {/* 年度：天道之境 (全息域) */}
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
                        {isEn ? 'BEST VALUE' : isTW ? '超值首選' : '超值首选'}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {isEn
                        ? 'Absolute perspective. Unlocks [Full Domain] holographic trajectory.'
                        : isTW
                        ? '大道至簡，直達【~域】全息時空空間與終極歸檔。'
                        : '大道至简，直达【~域】全息时空空间与终极归档。'}
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
                    {isEn ? 'ALIGN TEMPORAL PHASE NOW' : isTW ? '立即校準高維相位' : '立即校准高维相位'}
                  </button>
                </div>
              </section>
            ) : (
              /* 付费完成后出现的相位重构视图 */
              <section className="p-8 border border-emerald-500/30 bg-emerald-500/5 rounded-lg space-y-4 text-center relative overflow-hidden">
                <div className="inline-block p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  ✓ TEMPORAL ALIGNMENT ACTIVE
                </div>
                <h3 className="font-serif-title text-xl text-[var(--text-primary)]">
                  {isEn ? 'FIELD PHASE RECONFIGURED' : isTW ? '高維相位已重新重構' : '高维相位已重新重构'}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
                  {isEn
                    ? `Origin (${userData.name}) field state is mapped. Current Level: [${userState.replace('subscribed_', '').toUpperCase()} ORBIT].`
                    : isTW
                    ? `原點（${userData.name}）場域相位已完成映射。當前境界：[${userState === 'subscribed_month' ? '月度·三位一體' : userState === 'subscribed_quarter' ? '季度·無我之境' : '年度·天道全息'}]。`
                    : `原点（${userData.name}）场域相位已完成映射。当前境界：[${userState === 'subscribed_month' ? '月度·三位一体' : userState === 'subscribed_quarter' ? '季度·无我之境' : '年度·天道全息'}]。`}
                </p>
                <div className="pt-2 text-[10px] font-mono text-[var(--text-muted)] tracking-widest opacity-60">
                  GetChronoFlow
                </div>
              </section>
            )}
          </div>
        )}

        {/* Tab B: 时空中枢 */}
        {activeTab === 'control' && (
          <ChronoControlCenter
            userEmail={authEmail || `${userData.name || 'user'}@field.io`}
            userRole={isSubscribed ? 'subscribed' : (userState as 'guest' | 'registered')}
            subPlan={isSubscribed ? selectedPlan : 'none'}
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
                  {isEn ? 'ANCHOR:' : '绑定原点：'} {userData.name} ({userData.birthDate} {userData.birthTime})
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
                  {isEn ? 'Email / Identity' : isTW ? '通信郵箱 / 賬號' : '通信邮箱 / 账号'}
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
