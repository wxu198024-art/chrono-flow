'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/layout';

interface ChronoControlCenterProps {
  userEmail?: string;
  userRole?: 'guest' | 'free' | 'subscribed' | string;
  subPlan?: 'none' | 'monthly' | 'quarterly' | 'annual' | string;
}

export default function ChronoControlCenter({
  userEmail = 'observer@chronoflow.io',
  userRole = 'free',
  subPlan = 'none',
}: ChronoControlCenterProps) {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  // 1. 密码修改/密钥重构状态
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [keyResetStatus, setKeyResetStatus] = useState<'idle' | 'success'>('idle');

  // 2. P2P 场域授权门票开关
  const [p2pAllow, setP2pAllow] = useState(true);
  const [p2pTicketPrice, setP2pTicketPrice] = useState('1.99');

  // 3. 历史记录弹窗查看
  const [selectedArchive, setSelectedArchive] = useState<any | null>(null);

  // 模拟的【52周重力真迹】历史解包存档
  const archiveRecords = [
    {
      date: '2026-09-28',
      phase: isEn ? 'High Refraction' : '强压强折射',
      resistance: '78%',
      dominantFactor: isEn ? 'Precision Deficit' : '裁决因子极度匮乏',
      note: isEn ? 'Delayed major decision due to high entropy.' : '检测到高熵环境，完成了阻力事件挂起。',
    },
    {
      date: '2026-09-15',
      phase: isEn ? 'Zero-Point Convergence' : '零点收敛相',
      resistance: '32%',
      dominantFactor: isEn ? 'Expansion Peak' : '蔓延因子过载',
      note: isEn ? 'High initiative, alignment verified.' : '场域张力处于扩张区间，完成了一项核心架构部署。',
    },
    {
      date: '2026-08-30',
      phase: isEn ? 'Tidal Dislocation' : '潮汐离相',
      resistance: '64%',
      dominantFactor: isEn ? 'Anchoring Offset' : '锚定内稳态偏移',
      note: isEn ? 'Subtle mental fatigue detected.' : '内部秩序微幅波动，进行了底层逻辑整理。',
    },
  ];

  const handlePasswordReset = (e: React.FormEvent) => {
    e.preventDefault();
    if (!oldPassword || !newPassword) return;
    setKeyResetStatus('success');
    setTimeout(() => {
      setOldPassword('');
      setNewPassword('');
      setKeyResetStatus('idle');
    }, 3000);
  };

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-8 transition-colors duration-300 relative overflow-hidden">
      {/* 顶部极细爻线 */}
      <div className="absolute top-0 left-0 right-0 yao-yang"></div>

      {/* 模块标题 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-[var(--border-line)] pb-4 gap-2">
        <div>
          <h2 className="font-serif-title text-lg md:text-xl text-[var(--text-primary)] uppercase tracking-wide">
            {isEn ? 'CHRONO CONTROL CENTER' : isTW ? '時空中樞與檔案控制台' : '时空中枢与档案控制台'}
          </h2>
          <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
            {isEn ? 'SYSTEM IDENTITY & TEMPORAL ARCHIVES' : '场域密钥安全、生命痕迹沉淀与 P2P 访问权限'}
          </p>
        </div>
        <div className="text-xs font-mono px-2.5 py-1 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)]">
          {isEn ? `ID: ${userEmail}` : `场域锚点：${userEmail}`}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 左侧：原点密钥重构（密码修改）与权限控制 */}
        <div className="space-y-6">
          {/* A. 密码修改/密钥重构 */}
          <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-medium">
                {isEn ? 'Security Key Calibration' : '原点密钥重构 (密码修改)'}
              </h3>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">AES-256 ENCRYPTED</span>
            </div>

            <form onSubmit={handlePasswordReset} className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">
                  {isEn ? 'Current Key / Password' : '当前原点密钥'}
                </label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-1.5 text-xs font-mono bg-[var(--bg-card)] border border-[var(--border-line)] rounded-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--cinnabar)] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">
                  {isEn ? 'New High-Dimension Key' : '重构高维密钥'}
                </label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-1.5 text-xs font-mono bg-[var(--bg-card)] border border-[var(--border-line)] rounded-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--cinnabar)] transition-colors"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <button
                  type="submit"
                  className="px-4 py-1.5 bg-[var(--text-primary)] text-[var(--bg-card)] hover:opacity-90 transition-all text-xs font-mono rounded-sm"
                >
                  {isEn ? 'RECALIBRATE KEY' : '执行密钥重构'}
                </button>
                {keyResetStatus === 'success' && (
                  <span className="text-xs font-mono text-emerald-400">
                    {isEn ? 'Key re-encrypted successfully.' : '密钥已重构，场域安全级别已提升。'}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* B. 场域访问门票与 P2P 窥视授权 */}
          <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-medium">
                {isEn ? 'P2P Access & Gatekeeper' : '场域访问门票与 P2P 共振许可'}
              </h3>
              <span className="text-[10px] font-mono px-1.5 py-0.5 border border-[var(--border-line)] text-[var(--cinnabar)] rounded">
                P2P MONETIZATION
              </span>
            </div>

            <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
              {isEn
                ? 'Control whether third-party exploration seekers can request vector alignment with your field.'
                : '控制其他特定时空的探索者是否能向您的场域发起矢量对齐或请求解锁您的隐秘暗面图谱。'}
            </p>

            <div className="space-y-3 pt-2 border-t border-[var(--border-line)]/50">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-primary)]">
                  {isEn ? 'Allow P2P Alignment Requests' : '允许外部发起场域共振对齐'}
                </span>
                <input
                  type="checkbox"
                  checked={p2pAllow}
                  onChange={(e) => setP2pAllow(e.target.checked)}
                  className="accent-[var(--cinnabar)] cursor-pointer"
                />
              </div>

              {p2pAllow && (
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {isEn ? 'Unlock Ticket Fee (USD)' : '设定对齐门票消耗 (USD)'}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-mono text-[var(--text-primary)]">$</span>
                    <input
                      type="text"
                      value={p2pTicketPrice}
                      onChange={(e) => setP2pTicketPrice(e.target.value)}
                      className="w-16 px-2 py-0.5 text-xs font-mono bg-[var(--bg-card)] border border-[var(--border-line)] rounded text-right text-[var(--text-primary)]"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* 右侧：52周重力真迹（黑历史与历史痕迹档案） */}
        <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border-line)]/50 pb-2">
              <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-medium">
                {isEn ? 'Temporal Archive Ledger' : '52 周重力真迹 (历史痕迹档案)'}
              </h3>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                {archiveRecords.length} RECORDS STORED
              </span>
            </div>

            <p className="text-xs text-[var(--text-secondary)] font-sans leading-relaxed">
              {isEn
                ? 'Every daily pack and friction event is recorded into your lifelong spatiotemporal archive.'
                : '您每一次触发的时空碰撞、阻力解包与微观对谈，均已完整沉淀为不可篡改的场域图谱。'}
            </p>

            {/* 历史记录列表 */}
            <div className="space-y-2.5 pt-2">
              {archiveRecords.map((rec, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedArchive(rec)}
                  className="p-3 border border-[var(--border-line)] bg-[var(--bg-card)] hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-card-hover)] cursor-pointer transition-all rounded-sm flex items-center justify-between group"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[var(--cinnabar)]">{rec.date}</span>
                      <span className="text-[10px] font-mono px-1 border border-[var(--border-line)] text-[var(--text-muted)] rounded">
                        {rec.phase}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-primary)] font-sans">{rec.dominantFactor}</p>
                  </div>

                  <div className="text-right space-y-0.5">
                    <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
                      {rec.resistance}
                    </div>
                    <span className="text-[9px] font-mono text-[var(--text-muted)] group-hover:text-[var(--cinnabar)] transition-colors">
                      {isEn ? 'VIEW ARCHIVE →' : '展开调阅 →'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[var(--border-line)]/50 text-right">
            <button className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] underline transition-colors">
              {isEn ? 'EXPORT FULL CHRONO DATA (JSON/PDF)' : '导出完整场域历史数据 (JSON/PDF)'}
            </button>
          </div>
        </div>
      </div>

      {/* 历史档案详情 Modal 弹窗 */}
      {selectedArchive && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-line)] max-w-md w-full p-6 rounded-lg space-y-4 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
              <span className="text-xs font-mono text-[var(--cinnabar)]">
                {selectedArchive.date} · {selectedArchive.phase}
              </span>
              <button
                onClick={() => setSelectedArchive(null)}
                className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                [ ESC / CLOSE ]
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  {isEn ? 'Entropy Resistance' : '当日能量阻力'}
                </span>
                <p className="text-lg font-mono font-bold text-[var(--text-primary)]">
                  {selectedArchive.resistance}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  {isEn ? 'Primary Vector State' : '主导因子状态'}
                </span>
                <p className="text-xs font-medium text-[var(--text-primary)]">
                  {selectedArchive.dominantFactor}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  {isEn ? 'Event Journal & Vector Reflection' : '事件归因与复盘真迹'}
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans mt-1 p-2.5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/40 rounded-sm">
                  {selectedArchive.note}
                </p>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setSelectedArchive(null)}
                className="px-4 py-1.5 bg-[var(--cinnabar)] text-white text-xs font-mono rounded-sm"
              >
                {isEn ? 'CONFIRM' : '确认关理'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}