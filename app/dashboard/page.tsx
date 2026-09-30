'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/app/layout';
import DailyPulse from '@/components/field/DailyPulse';
import PillarsStructure from '@/components/field/PillarsStructure';
import ChronoControlCenter from '@/components/field/ChronoControlCenter';

export default function DashboardPage() {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  // 1. 用户状态：guest(游客) | registered(已注册) | subscribed(付费解锁)
  const [userState, setUserState] = useState<'guest' | 'registered' | 'subscribed'>('guest');
  const [activeTab, setActiveTab] = useState<'field' | 'control'>('field');

  // 2. 选中的订阅周期：month(月) | quarter(季) | year(年)
  const [selectedPlan, setSelectedPlan] = useState<'month' | 'quarter' | 'year'>('year');

  // 3. 读取主页输入的真实原点资料（绝不硬编码）
  const [userData, setUserData] = useState({
    name: '',
    birthDate: '',
    birthTime: '',
  });

  useEffect(() => {
    // 优先从本地缓存读取主页用户输入的真实原点数据
    const storedName = localStorage.getItem('user_origin_name') || sessionStorage.getItem('user_origin_name') || '';
    const storedDate = localStorage.getItem('user_origin_date') || sessionStorage.getItem('user_origin_date') || '';
    const storedTime = localStorage.getItem('user_origin_time') || sessionStorage.getItem('user_origin_time') || '';

    setUserData({
      name: storedName || (isEn ? 'Unbound Origin' : '未绑定原点'),
      birthDate: storedDate || '--',
      birthTime: storedTime || '--',
    });
  }, [isEn]);

  // 4. 注册/登录弹窗控制
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
    setUserState('subscribed'); // 变为已订阅，订阅栏消失，显示完事页面
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300 pb-20">
      
      {/* 1. 顶部常驻区域：完全展现主页输入的真实原点资料 */}
      <header className="sticky top-0 z-40 bg-[var(--bg-card)]/90 backdrop-blur-md border-b border-[var(--border-line)] px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
          
          {/* 左侧：常驻原点资料卡片 */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[var(--text-muted)] uppercase tracking-wider">
              {isEn ? 'ORIGIN ANCHOR:' : '场域原点依据:'}
            </span>
            <div className="flex items-center gap-2 bg-[var(--bg-card-hover)] px-3 py-1 rounded border border-[var(--border-line)]">
              <span className="text-[var(--text-primary)] font-bold">
                {userData.name}
              </span>
              <span className="text-[var(--text-muted)]">|</span>
              <span className="text-[var(--text-secondary)]">
                {userData.birthDate} {userData.birthTime}
              </span>
            </div>
          </div>

          {/* 右侧：状态指示与快捷调试面板 */}
          <div className="flex items-center gap-3">
            <div className="text-[10px] font-mono px-2 py-0.5 rounded border border-[var(--border-line)] bg-[var(--bg-card)]">
              {userState === 'guest' && (
                <span className="text-amber-400">{isEn ? 'GUEST FIELD' : '游客场域'}</span>
              )}
              {userState === 'registered' && (
                <span className="text-blue-400">{isEn ? 'REGISTERED ANCHOR' : '已注册原点'}</span>
              )}
              {userState === 'subscribed' && (
                <span className="text-emerald-400">{isEn ? 'FULL ORBIT UNLOCKED' : '已解锁 52 周全景'}</span>
              )}
            </div>

            {/* 测试切换状态 */}
            <div className="flex items-center gap-1 bg-[var(--bg-card-hover)] p-1 rounded border border-[var(--border-line)] text-[10px]">
              <button
                onClick={() => setUserState('guest')}
                className={`px-2 py-0.5 rounded ${userState === 'guest' ? 'bg-[var(--cinnabar)] text-white' : 'text-[var(--text-muted)]'}`}
              >
                游客
              </button>
              <button
                onClick={() => setUserState('registered')}
                className={`px-2 py-0.5 rounded ${userState === 'registered' ? 'bg-[var(--text-primary)] text-[var(--bg-card)]' : 'text-[var(--text-muted)]'}`}
              >
                已注册
              </button>
              <button
                onClick={() => setUserState('subscribed')}
                className={`px-2 py-0.5 rounded ${userState === 'subscribed' ? 'bg-amber-500 text-black font-bold' : 'text-[var(--text-muted)]'}`}
              >
                付费解锁
              </button>
            </div>
          </div>
        </div>
      </header>

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
            {isEn ? `CURRENT FIELD: ${userData.name}` : `当前场域归属：${userData.name}`}
          </div>
        </div>

        {/* Tab A: 场域矩阵 */}
        {activeTab === 'field' && (
          <div className="space-y-8">
            {/* 今日脉搏 */}
            <DailyPulse userRole={userState} />

            {/* 四柱与五维动态均衡（传入唤起注册弹窗） */}
            <PillarsStructure 
              userRole={userState} 
              onTriggerRegister={() => setShowAuthModal(true)} 
            />

            {/* 3. 时空订阅栏（三组：月 / 季 / 年），未付费时展示，付费后隐藏 */}
            {userState !== 'subscribed' ? (
              <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-6 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 yao-yang"></div>

                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
                  <div>
                    <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
                      {isEn ? 'ORBITAL TEMPORAL SUBSCRIPTION' : isTW ? '軌道時空訂閱' : '轨道时空订阅'}
                    </h2>
                    <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
                      {isEn ? 'UNLOCK CONTINUOUS FIELD TRAJECTORY & RESISTANCE UNPACKING' : '解锁 52 周连续场域重力轨迹与周度阻力解包'}
                    </p>
                  </div>
                  <div className="text-[10px] font-mono px-2.5 py-1 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)]">
                    {userState === 'registered' ? '原点已绑定 · 选方案解锁' : '游客状态 · 订阅后自动绑定'}
                  </div>
                </div>

                {/* 月 / 季 / 年 三组方案卡片 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  
                  {/* 月度方案 */}
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
                        {isEn ? 'MONTHLY' : '月度轨道'}
                      </span>
                      {selectedPlan === 'month' && (
                        <span className="w-2 h-2 rounded-full bg-[var(--cinnabar)]"></span>
                      )}
                    </div>
                    <div>
                      <span className="text-2xl font-serif-title font-bold text-[var(--text-primary)]">￥19</span>
                      <span className="text-xs font-mono text-[var(--text-muted)]"> / 月</span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      适合短期场域重力波动探测，解锁未来 4 周阻力诊断。
                    </p>
                  </div>

                  {/* 季度方案 */}
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
                        {isEn ? 'QUARTERLY' : '季度轨道'}
                      </span>
                      {selectedPlan === 'quarter' && (
                        <span className="w-2 h-2 rounded-full bg-[var(--cinnabar)]"></span>
                      )}
                    </div>
                    <div>
                      <span className="text-2xl font-serif-title font-bold text-[var(--text-primary)]">￥48</span>
                      <span className="text-xs font-mono text-[var(--text-muted)]"> / 季</span>
                      <span className="ml-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                        省 15%
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      季度内稳态调谐，包含 12 周阻力解包与中枢复盘。
                    </p>
                  </div>

                  {/* 年度方案 */}
                  <div 
                    onClick={() => setSelectedPlan('year')}
                    className={`p-5 rounded border transition-all cursor-pointer space-y-3 relative ${
                      selectedPlan === 'year' 
                        ? 'border-[var(--cinnabar)] bg-[var(--cinnabar)]/5 shadow-md' 
                        : 'border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 hover:border-[var(--border-line-hover)]'
                    }`}
                  >
                    <div className="absolute -top-2.5 right-3 bg-[var(--cinnabar)] text-white text-[9px] font-mono px-2 py-0.5 rounded uppercase">
                      推荐方案
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs font-mono text-[var(--cinnabar)] font-bold uppercase">
                        {isEn ? 'ANNUAL FULL ORBIT' : '年度全景轨道'}
                      </span>
                      {selectedPlan === 'year' && (
                        <span className="w-2 h-2 rounded-full bg-[var(--cinnabar)]"></span>
                      )}
                    </div>
                    <div>
                      <span className="text-2xl font-serif-title font-bold text-[var(--text-primary)]">￥198</span>
                      <span className="text-xs font-mono text-[var(--text-muted)]"> / 年</span>
                      <span className="ml-2 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                        省 15%
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      完整 52 周重力轨迹与黑历史归档，提供终极裁决指引。
                    </p>
                  </div>

                </div>

                {/* 解锁行动按钮 */}
                <div className="pt-4 border-t border-[var(--border-line)] flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-[var(--text-muted)]">
                    当前选择：{selectedPlan === 'month' ? '月度订阅 (￥19)' : selectedPlan === 'quarter' ? '季度订阅 (￥48)' : '年度全景订阅 (￥198)'}
                  </div>

                  <button
                    onClick={handlePaySuccess}
                    className="w-full sm:w-auto px-8 py-2.5 bg-[var(--cinnabar)] text-white text-xs font-mono font-bold rounded shadow hover:opacity-90 transition-all uppercase tracking-wider"
                  >
                    {isEn ? 'CONFIRM & UNLOCK ORBIT' : '立即支付解锁场域轨道'}
                  </button>
                </div>
              </section>
            ) : (
              /* 付费完成后出现的“完事”全景视图模块 */
              <section className="p-8 border border-emerald-500/30 bg-emerald-500/5 rounded-lg space-y-4 text-center">
                <div className="inline-block p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  ✓ TEMPORAL ALIGNMENT ACTIVE
                </div>
                <h3 className="font-serif-title text-xl text-[var(--text-primary)]">
                  {isEn ? 'FULL FIELD MATRIX UNLOCKED' : '场域重力轨迹已全量解锁'}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
                  您的原点档案（{userData.name} / {userData.birthDate}）与场域已建立映射。订阅周期内所有每周阻力解包与历史存档已同步至【时空中枢】。
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
                  {isEn ? 'REGISTER ORIGIN ANCHOR' : '保存场域原点档案'}
                </h3>
                <p className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                  绑定原点：{userData.name} ({userData.birthDate} {userData.birthTime})
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
                  {isEn ? 'Email / Account' : '通信邮箱 / 账号'}
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
                  {isEn ? 'Origin Key (Password)' : '原点加密密钥 (密码)'}
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
                注册后将锁定该原点参数。订阅后可解锁 52 周周期溯源。
              </p>

              <button
                type="submit"
                className="w-full py-2.5 bg-[var(--cinnabar)] text-white text-xs font-mono font-bold rounded hover:opacity-90 transition-all uppercase tracking-wider"
              >
                {isEn ? 'CONFIRM & ANCHOR' : '确认注册并绑定原点'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
