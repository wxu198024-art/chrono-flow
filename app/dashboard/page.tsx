'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/layout';
import DailyPulse from '@/components/field/DailyPulse';
import PillarsStructure from '@/components/field/PillarsStructure';
import OrbitSubscription from '@/components/field/OrbitSubscription';
import ChronoControlCenter from '@/components/field/ChronoControlCenter';

export default function DashboardPage() {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  // 1. 核心用户状态：guest(游客) | registered(注册用户) | subscribed(已订阅/付费用户)
  const [userState, setUserState] = useState<'guest' | 'registered' | 'subscribed'>('guest');
  const [activeTab, setActiveTab] = useState<'field' | 'control'>('field');

  // 2. 首页继承的客户原点资料 (所有结果页的核心依托)
  const [userData, setUserData] = useState({
    name: '言哲',
    birthDate: '1995-08-12',
    birthTime: '14:30',
  });

  // 3. 弹窗控制状态
  const [showAuthModal, setShowAuthModal] = useState(false); // 注册/登录弹窗
  const [authEmail, setAuthEmail] = useState('');
  const [authPassword, setAuthPassword] = useState('');

  // 处理注册动作
  const handleRegisterSuccess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authEmail) return;
    setUserState('registered'); // 变为已注册状态（订阅栏仍保持展示）
    setShowAuthModal(false);
  };

  // 处理模拟付费订阅动作
  const handlePaySuccess = () => {
    setUserState('subscribed'); // 变为已付费/已订阅状态（订阅栏隐藏，解锁完整页面）
  };

  return (
    <div className="min-h-screen bg-[var(--bg-main)] text-[var(--text-primary)] font-sans antialiased transition-colors duration-300 pb-20">
      
      {/* 1. 顶部黑盒控制棒：最上方常驻显示客户在首页输入的个人资料（所有结果页的根基依托） */}
      <header className="sticky top-0 z-40 bg-[var(--bg-card)]/90 backdrop-blur-md border-b border-[var(--border-line)] px-4 py-3">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-xs font-mono">
          
          {/* 左侧：常驻个人资料核心卡片（无品牌标，直接展示原点依据） */}
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[var(--text-muted)] uppercase tracking-wider">
              {isEn ? 'ORIGIN ANCHOR:' : '场域原点依据:'}
            </span>
            <div className="flex items-center gap-2 bg-[var(--bg-card-hover)] px-3 py-1 rounded border border-[var(--border-line)]">
              <span className="text-[var(--text-primary)] font-bold">{userData.name}</span>
              <span className="text-[var(--text-muted)]">|</span>
              <span className="text-[var(--text-secondary)]">{userData.birthDate} {userData.birthTime}</span>
            </div>
          </div>

          {/* 右侧：状态指示与测试快捷切换（方便开发调试） */}
          <div className="flex items-center gap-3">
            {/* 当前账号身份标记 */}
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

            {/* 测试切换快捷按扭 */}
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

        {/* Tab A: 场域矩阵解包 */}
        {activeTab === 'field' && (
          <div className="space-y-8">
            {/* 1. 今日重力波脉搏 */}
            <DailyPulse userRole={userState} />

            {/* 2. 四柱存在结构与五维动态均衡因子 (传入唤起注册弹窗的方法) */}
            <PillarsStructure 
              userRole={userState} 
              onTriggerRegister={() => setShowAuthModal(true)} 
            />

            {/* 3. 订阅栏 (只有当未付费/未订阅时展示；付费后订阅栏自动消失，展现场域完事页面) */}
            {userState !== 'subscribed' ? (
              <div className="relative">
                <OrbitSubscription 
                  userRole={userState} 
                  subPlan="none" 
                  onTriggerPay={handlePaySuccess} 
                />
                <div className="text-center pt-2">
                  <p className="text-xs font-mono text-[var(--text-muted)]">
                    {userState === 'registered' 
                      ? '已完成原点注册，付费对齐订阅后此栏将隐藏，直接展开 52 周全景真迹'
                      : '注册并订阅后，解锁全景 52 周重力轨迹'}
                  </p>
                </div>
              </div>
            ) : (
              /* 付费完成后出现的“完事”全景视图模块 */
              <section className="p-8 border border-emerald-500/30 bg-emerald-500/5 rounded-lg space-y-4 text-center">
                <div className="inline-block p-3 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs">
                  ✓ 52-WEEK TEMPORAL ALIGNMENT ACTIVE
                </div>
                <h3 className="font-serif-title text-xl text-[var(--text-primary)]">
                  {isEn ? 'FULL FIELD MATRIX UNLOCKED' : '52 周场域重力轨迹已全量解锁'}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
                  您的原点档案与高维场域已建立永久映射。订阅周期内所有每周阻力解包、周期性内稳态归因与黑历史存档已实时同步至【时空中枢】。
                </p>
              </section>
            )}
          </div>
        )}

        {/* Tab B: 时空中枢与黑历史 */}
        {activeTab === 'control' && (
          <ChronoControlCenter
            userEmail={`${userData.name}@chronoflow.io`}
            userRole={userState}
            subPlan={userState === 'subscribed' ? 'annual' : 'none'}
          />
        )}
      </main>

      {/* 3. 高维注册/登录 Modal 弹窗 (点击五行/四柱上方注册时触发) */}
      {showAuthModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-line)] max-w-md w-full p-6 rounded-lg space-y-6 relative shadow-2xl">
            
            <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
              <div>
                <h3 className="font-serif-title text-base text-[var(--text-primary)]">
                  {isEn ? 'REGISTER ORIGIN ANCHOR' : '保存场域原点档案'}
                </h3>
                <p className="text-[10px] font-mono text-[var(--text-muted)] mt-0.5">
                  绑定原点：{userData.name} ({userData.birthDate})
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
                注册后将永久锁定该原点的解包参数。订阅后可移除广告与锁定遮罩，开启 52 周周期溯源。
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
