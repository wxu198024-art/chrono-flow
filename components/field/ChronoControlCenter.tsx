'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/layout';

interface ChronoControlCenterProps {
  userEmail?: string;
  userRole?: 'guest' | 'free' | 'subscribed' | string;
  subPlan?: 'none' | 'monthly' | 'quarterly' | 'annual' | string;
}

export default function ChronoControlCenter({
  userEmail = 'NODE-8F92',
  userRole = 'free',
  subPlan = 'none',
}: ChronoControlCenterProps) {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  // 1. 四语言精准解析：en, zh-TW, ja, zh-CN (zh)
  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isJa = currentLang === 'ja';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  // 2. 密码修改/密钥重构状态
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [keyResetStatus, setKeyResetStatus] = useState<'idle' | 'success'>('idle');

  // 3. P2P 场域授权门票与共振状态
  const [p2pAllow, setP2pAllow] = useState(true);
  const [p2pTicketPrice, setP2pTicketPrice] = useState('1.99');
  const [activeNodes, setActiveNodes] = useState([
    { id: 'NODE-3041', status: 'RESONATING', date: '2026-09-20' },
    { id: 'NODE-9982', status: 'PENDING', date: '2026-09-28' },
  ]);

  // 4. 历史记录弹窗查看
  const [selectedArchive, setSelectedArchive] = useState<any | null>(null);

  // 模拟【52周重力真迹】历史解包存档 (包含 者·局·域 分级属性)
  const archiveRecords = [
    {
      date: '2026-09-28',
      tier: 'REALM', // 域
      tierLabel: isEn ? '[REALM] Field Tension' : isJa ? '【域】時空位相' : isTW ? '【域】時空場域' : '【域】时空场域',
      phase: isEn ? 'High Refraction' : isJa ? '高屈折位相' : isTW ? '強壓強折射' : '强压强折射',
      resistance: '78%',
      dominantFactor: isEn ? 'Precision Deficit' : isJa ? '裁定因子の不足' : isTW ? '裁決因子極度匱乏' : '裁决因子极度匮乏',
      note: isEn
        ? 'High entropy detected in macro environment. Field operations paused.'
        : isJa
        ? '高エントロピー環境を検知。マクロ位相の意思決定を一時保留。'
        : isTW
        ? '檢測到高熵環境，完成了阻力事件掛起。'
        : '检测到高熵环境，完成了阻力事件挂起。',
      isLocked: subPlan === 'none' && userRole === 'free',
    },
    {
      date: '2026-09-15',
      tier: 'GAME', // 局
      tierLabel: isEn ? '[GAME] Dynamic Matrix' : isJa ? '【局】対峙マトリクス' : isTW ? '【局】關係博弈' : '【局】关系博弈',
      phase: isEn ? 'Zero-Point Convergence' : isJa ? '零点収束相' : isTW ? '零點收斂相' : '零点收敛相',
      resistance: '32%',
      dominantFactor: isEn ? 'Expansion Peak' : isJa ? '拡大因子の過負荷' : isTW ? '蔓延因子過載' : '蔓延因子过载',
      note: isEn
        ? 'Interpersonal force alignment complete. Core architecture deployed.'
        : isJa
        ? '対人ベクトルの同期完了。中核アーキテクチャを展開。'
        : isTW
        ? '場域張力處於擴張區間，完成了一項核心架構部署。'
        : '场域张力处于扩张区间，完成了一项核心架构部署。',
      isLocked: subPlan === 'none' && userRole === 'free',
    },
    {
      date: '2026-08-30',
      tier: 'SELF', // 者
      tierLabel: isEn ? '[SELF] Core Anchor' : isJa ? '【者】核心アンカー' : isTW ? '【者】自我主控' : '【者】自我主控',
      phase: isEn ? 'Tidal Dislocation' : isJa ? '潮汐離相' : isTW ? '潮汐離相' : '潮汐离相',
      resistance: '64%',
      dominantFactor: isEn ? 'Anchoring Offset' : isJa ? '恒常性オフセット' : isTW ? '錨定內穩態偏移' : '锚定内稳态偏移',
      note: isEn
        ? 'Internal equilibrium fluctuated. Underlying logic re-ordered.'
        : isJa
        ? '内部秩序の微動を感知。基底ロジックを再整理。'
        : isTW
        ? '內部秩序微幅波動，進行了底層邏輯整理。'
        : '内部秩序微幅波动，进行了底层逻辑整理。',
      isLocked: false, // 者·阶对所有用户开放
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
            {isEn
              ? 'CHRONO CONTROL CENTER'
              : isJa
              ? '時空統括・アーカイブセンター'
              : isTW
              ? '時空中樞與檔案控制台'
              : '时空中枢与档案控制台'}
          </h2>
          <p className="text-xs text-[var(--text-muted)] font-mono mt-0.5">
            {isEn
              ? 'KEY SECURITY, ARCHIVE DECRYPTION & P2P ALIGNMENT'
              : isJa
              ? 'セキュリティ・時空痕跡・P2P共鳴権限'
              : isTW
              ? '場域金鑰安全、生命痕跡沉澱與 P2P 訪問權限'
              : '场域密钥安全、生命痕迹沉淀与 P2P 访问权限'}
          </p>
        </div>
        <div className="text-xs font-mono px-2.5 py-1 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)]">
          {isEn
            ? `NODE: ${userEmail}`
            : isJa
            ? `ノード: ${userEmail}`
            : `场域锚点：${userEmail}`}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* 左侧：原点密钥重构与 P2P 共振大厅 */}
        <div className="space-y-6">
          {/* A. 密钥重构 */}
          <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-medium">
                {isEn
                  ? 'Security Key Calibration'
                  : isJa
                  ? '原点キーの再キャリブレーション'
                  : isTW
                  ? '原點金鑰重構 (密碼修改)'
                  : '原点密钥重构 (密码修改)'}
              </h3>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">AES-256 ENCRYPTED</span>
            </div>

            <form onSubmit={handlePasswordReset} className="space-y-3">
              <div>
                <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">
                  {isEn ? 'Current Key' : isJa ? '現在の原点キー' : isTW ? '當前原點金鑰' : '当前原点密钥'}
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
                  {isEn ? 'New Key' : isJa ? '再構築キー' : isTW ? '重構高維金鑰' : '重构高维密钥'}
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
                  {isEn ? 'RECALIBRATE' : isJa ? 'キー再構築実行' : isTW ? '執行金鑰重構' : '执行密钥重构'}
                </button>
                {keyResetStatus === 'success' && (
                  <span className="text-xs font-mono text-emerald-400">
                    {isEn
                      ? 'Key calibrated.'
                      : isJa
                      ? 'キーが正常に再構築されました。'
                      : isTW
                      ? '金鑰已重構，場域安全級別已提升。'
                      : '密钥已重构，场域安全级别已提升。'}
                  </span>
                )}
              </div>
            </form>
          </div>

          {/* B. P2P 门票与共振节点大厅 */}
          <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded-sm space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-medium">
                {isEn
                  ? 'P2P Resonance & Gatekeeper'
                  : isJa
                  ? 'P2P共鳴権限・ゲートキーパー'
                  : isTW
                  ? '場域訪問門票與 P2P 共振許可'
                  : '场域访问门票与 P2P 共振许可'}
              </h3>
              <span className="text-[10px] font-mono px-1.5 py-0.5 border border-[var(--border-line)] text-[var(--cinnabar)] rounded">
                P2P MATRIX
              </span>
            </div>

            <div className="space-y-3 pt-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-primary)]">
                  {isEn
                    ? 'Allow Vector Alignment Requests'
                    : isJa
                    ? '外部からの共鳴リクエストを許可'
                    : isTW
                    ? '允許外部發起場域共振對齊'
                    : '允许外部发起场域共振对齐'}
                </span>
                <input
                  type="checkbox"
                  checked={p2pAllow}
                  onChange={(e) => setP2pAllow(e.target.checked)}
                  className="accent-[var(--cinnabar)] cursor-pointer"
                />
              </div>

              {p2pAllow && (
                <div className="flex items-center justify-between pt-2 border-t border-[var(--border-line)]/50">
                  <span className="text-xs font-mono text-[var(--text-muted)]">
                    {isEn ? 'Access Ticket Fee (USD)' : isJa ? 'アクセスチケット料金 (USD)' : '设定对齐门票消耗 (USD)'}
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

            {/* 共振节点列表 */}
            <div className="pt-3 border-t border-[var(--border-line)]/50 space-y-2">
              <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                {isEn ? 'Active Resonant Nodes' : isJa ? 'アクティブな共鳴ノード' : '已对齐共振节点'}
              </span>
              <div className="space-y-1.5">
                {activeNodes.map((node, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2 rounded bg-[var(--bg-card)] border border-[var(--border-line)] text-xs font-mono"
                  >
                    <span className="text-[var(--text-primary)]">{node.id}</span>
                    <span className="text-[10px] text-[var(--cinnabar)]">{node.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 右侧：52周重力真迹（黑历史与历史痕迹档案） */}
        <div className="p-5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/30 rounded-sm space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-[var(--border-line)]/50 pb-2">
              <h3 className="font-serif-title text-sm text-[var(--text-primary)] font-medium">
                {isEn
                  ? 'Temporal Archive Ledger'
                  : isJa
                  ? '52週 重力真跡・アーカイブ'
                  : isTW
                  ? '52 週重力真跡 (歷史痕跡檔案)'
                  : '52 周重力真迹 (历史痕迹档案)'}
              </h3>
              <span className="text-[10px] font-mono text-[var(--text-muted)]">
                {archiveRecords.length} ARCHIVES
              </span>
            </div>

            {/* 历史记录列表 (带 者·局·域 分级解锁) */}
            <div className="space-y-2.5 pt-1">
              {archiveRecords.map((rec, index) => (
                <div
                  key={index}
                  onClick={() => !rec.isLocked && setSelectedArchive(rec)}
                  className={`p-3 border border-[var(--border-line)] bg-[var(--bg-card)] rounded-sm flex items-center justify-between transition-all ${
                    rec.isLocked
                      ? 'opacity-60 cursor-not-allowed bg-[var(--bg-card-hover)]/20'
                      : 'hover:border-[var(--border-line-hover)] hover:bg-[var(--bg-card-hover)] cursor-pointer group'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono text-[var(--cinnabar)]">{rec.date}</span>
                      <span className="text-[9px] font-mono px-1 border border-[var(--border-line)] text-[var(--text-muted)] rounded">
                        {rec.tierLabel}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--text-primary)] font-sans">
                      {rec.isLocked ? (isEn ? '•••••• [SUBSCRIBE TO UNLOCK]' : isJa ? '•••••• [ロック解除には購読が必要です]' : '•••••• [需订阅解锁高维档案]') : rec.dominantFactor}
                    </p>
                  </div>

                  <div className="text-right space-y-0.5">
                    <div className="text-xs font-mono font-bold text-[var(--text-primary)]">
                      {rec.isLocked ? '🔒' : rec.resistance}
                    </div>
                    {!rec.isLocked && (
                      <span className="text-[9px] font-mono text-[var(--text-muted)] group-hover:text-[var(--cinnabar)] transition-colors">
                        {isEn ? 'UNPACK →' : isJa ? '展開 →' : '展开调阅 →'}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 导出按钮与唯一合规标识 */}
          <div className="pt-4 border-t border-[var(--border-line)]/50 space-y-3 text-right">
            <button className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)] underline transition-colors">
              {isEn
                ? 'EXPORT CHRONO DATA (JSON/PDF)'
                : isJa
                ? '時空データの全出力 (JSON/PDF)'
                : isTW
                ? '導出完整場域歷史數據 (JSON/PDF)'
                : '导出完整场域历史数据 (JSON/PDF)'}
            </button>
            <div className="text-[10px] font-mono text-[var(--text-muted)] opacity-60 tracking-widest text-center pt-2">
              GetChronoFlow
            </div>
          </div>
        </div>
      </div>

      {/* 历史档案详情 Modal 弹窗 */}
      {selectedArchive && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-line)] max-w-md w-full p-6 rounded-lg space-y-4 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
              <span className="text-xs font-mono text-[var(--cinnabar)]">
                {selectedArchive.date} · {selectedArchive.phase}
              </span>
              <button
                onClick={() => setSelectedArchive(null)}
                className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                [ CLOSE ]
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  {isEn ? 'Tension Resistance' : isJa ? 'エネルギー抵抗値' : '能量阻力指标'}
                </span>
                <p className="text-lg font-mono font-bold text-[var(--text-primary)]">
                  {selectedArchive.resistance}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  {isEn ? 'Primary Vector' : isJa ? '主導因子' : '主导因子状态'}
                </span>
                <p className="text-xs font-medium text-[var(--text-primary)]">
                  {selectedArchive.dominantFactor}
                </p>
              </div>

              <div>
                <span className="text-[10px] font-mono text-[var(--text-muted)] uppercase">
                  {isEn ? 'Vector Reflection' : isJa ? '時空省察ログ' : '事件归因与复盘真迹'}
                </span>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans mt-1 p-2.5 border border-[var(--border-line)] bg-[var(--bg-card-hover)]/40 rounded-sm">
                  {selectedArchive.note}
                </p>
              </div>
            </div>

            <div className="pt-2 text-right">
              <button
                onClick={() => setSelectedArchive(null)}
                className="px-4 py-1.5 bg-[var(--cinnabar)] text-white text-xs font-mono rounded-sm hover:opacity-90"
              >
                {isEn ? 'CONFIRM' : isJa ? '確認' : '确认关理'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
