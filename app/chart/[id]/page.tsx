'use client';

import { useSearchParams, useParams } from 'next/navigation';
import { useMemo, useState } from 'react';
import { calculateChart } from '@/lib/astrology';
import { MOCK_REPORTS } from '@/lib/mockData';
import PaywallOverlay from '@/components/PaywallOverlay';
import PillarsUnlocked from '@/components/PillarsUnlocked';
import SubscriptionCard from '@/components/SubscriptionCard';
import { useLanguage } from '@/app/layout';
import { isLevelUnlocked } from '@/lib/lexicon';

export default function ChartResultPage() {
  const params = useParams();
  const searchParams = useSearchParams();

  // 1. 全局语言 Provider 获取
  const { lang: globalLang } = useLanguage?.() || { lang: 'zh' };
  const currentLang = globalLang || 'zh';
  const isEn = currentLang === 'en';
  const isJa = currentLang === 'ja';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  const rawScenarioId = (params?.id as string) || '';

  // 动态匹配场景 Mock 数据
  const scenarioId =
    rawScenarioId && MOCK_REPORTS[rawScenarioId]
      ? rawScenarioId
      : isEn
      ? 'SCENARIO_A_EN'
      : 'SCENARIO_A_ZH';

  const mockReport = MOCK_REPORTS[scenarioId] || MOCK_REPORTS['SCENARIO_A_ZH'];

  const name = searchParams.get('name') || mockReport.meta?.name || 'NODE-8F92';
  const birthDate = searchParams.get('date') || '1995-11-03';
  const birthTime = searchParams.get('time') || '21:15';

  const [isPaid, setIsPaid] = useState<boolean>(() => isLevelUnlocked(6));
  const [showResonanceModal, setShowResonanceModal] = useState(false);
  const [resonanceSent, setResonanceSent] = useState(false);
  const [showPosterModal, setShowPosterModal] = useState(false);

  // 时空物理演算
  const chartData = useMemo(() => {
    try {
      return calculateChart(birthDate, birthTime);
    } catch {
      return null;
    }
  }, [birthDate, birthTime]);

  const { free_tier, locked_tier, subscription_tier } = mockReport as any;

  const handleSubscribe = (plan: string, priceId: string) => {
    alert(
      isEn
        ? `Redirecting to Temporal Checkout... [Plan: ${plan}]`
        : isJa
        ? `位相チェックアウトへ移動中... [プラン: ${plan}]`
        : isTW
        ? `正在調諧相位支付... [方案: ${plan}]`
        : `正在调谐相位支付... [方案: ${plan}]`
    );
  };

  const handleSendResonance = (e: React.FormEvent) => {
    e.preventDefault();
    setResonanceSent(true);
    setTimeout(() => {
      setShowResonanceModal(false);
      setResonanceSent(false);
    }, 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-8 font-sans antialiased text-[var(--text-primary)]">
      
      {/* 1. 顶部 Header (脱敏公开视角) */}
      <div className="text-center space-y-3 border-b border-[var(--border-line)] pb-6">
        <div className="inline-block text-[10px] font-mono px-3 py-1 rounded-full border border-[var(--border-line)] bg-[var(--bg-card)] text-[var(--text-secondary)]">
          {isEn ? 'PUBLIC FIELD PROFILE' : isJa ? '公開時空位相' : isTW ? '公開場域檔案' : '公开场域档案'}
        </div>
        
        <h1 className="font-serif-title text-2xl md:text-3xl text-[var(--text-primary)] tracking-wide">
          {name.toUpperCase()}
        </h1>
        
        <p className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-widest">
          {chartData?.dayPillar
            ? `${chartData.dayPillar} · CORE VECTOR ANCHOR`
            : free_tier?.chrono_sigil?.dominant_phase}
        </p>

        {/* 2. 行动栏：发起双向共振 / 生成客户端海报 */}
        <div className="pt-2 flex items-center justify-center gap-4">
          <button
            onClick={() => setShowResonanceModal(true)}
            className="px-4 py-2 text-xs font-mono bg-[var(--cinnabar)] text-white rounded shadow hover:opacity-90 transition-all uppercase tracking-wider"
          >
            {isEn ? 'INITIATE CO-RESONANCE' : isJa ? '共鳴リクエスト送信' : isTW ? '發起雙向共振' : '发起双向共振'}
          </button>
          
          <button
            onClick={() => setShowPosterModal(true)}
            className="px-4 py-2 text-xs font-mono border border-[var(--border-line)] bg-[var(--bg-card)] hover:bg-[var(--bg-card-hover)] text-[var(--text-primary)] rounded transition-all uppercase tracking-wider"
          >
            {isEn ? 'GENERATE SIGIL CARD' : isJa ? 'カード生成' : isTW ? '生成高維海報' : '生成高维海报'}
          </button>
        </div>
      </div>

      {/* SECTION 1: 时空场域定格 */}
      <section className="p-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border-line)] space-y-3 backdrop-blur-md">
        <div className="text-[10px] tracking-[0.25em] text-[var(--cinnabar)] uppercase font-mono">
          SECTION 1: {isEn ? 'CHRONO-SIGIL' : isJa ? '時空位相定格 · CHRONO-SIGIL' : isTW ? '時空場域定格 · CHRONO-SIGIL' : '时空场域定格 · CHRONO-SIGIL'}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs font-mono text-[var(--text-secondary)] pt-1">
          <p>
            <span className="text-[var(--text-muted)]">{isEn ? 'Dominant Phase:' : isJa ? '主導位相:' : '主导相位:'}</span>{' '}
            {free_tier?.chrono_sigil?.dominant_phase}
          </p>
          <p>
            <span className="text-[var(--text-muted)]">{isEn ? 'Spatial Tension:' : isJa ? '空間張力:' : '空间张力:'}</span>{' '}
            {free_tier?.chrono_sigil?.spatial_tension}
          </p>
          <p>
            <span className="text-[var(--text-muted)]">{isEn ? 'Nomenclature Anchor:' : isJa ? '名証アンカー:' : '姓名符号:'}</span>{' '}
            {free_tier?.chrono_sigil?.nomenclature_anchor}
          </p>
          <p>
            <span className="text-[var(--text-muted)]">{isEn ? 'Entropy Index:' : isJa ? 'エントロピー指標:' : '内稳态熵值:'}</span>{' '}
            {free_tier?.chrono_sigil?.entropy_index}%
          </p>
        </div>
      </section>

      {/* SECTION 2: 境象解构 */}
      <section className="p-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border-line)] space-y-4">
        <div className="text-[10px] tracking-[0.25em] text-[var(--cinnabar)] uppercase font-mono">
          SECTION 2: {isEn ? 'THE UNSEEN SELF' : isJa ? '不可視の自己 · THE UNSEEN SELF' : isTW ? '境象與靈魂解構 · THE UNSEEN SELF' : '境象与灵魂解构 · THE UNSEEN SELF'}
        </div>
        <p className="text-sm italic text-[var(--text-primary)] leading-relaxed font-serif">
          “{free_tier?.unseen_self?.unseen_image}”
        </p>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-sans">
          {free_tier?.unseen_self?.deconstruction}
        </p>
      </section>

      {/* SECTION 3: 临界点警告 */}
      <section className="p-6 rounded-lg bg-[var(--bg-card)] border border-[var(--border-line)] space-y-3">
        <div className="text-[10px] tracking-[0.25em] text-[var(--cinnabar)] uppercase font-mono">
          SECTION 3: {isEn ? 'PIVOT COUNTDOWN' : isJa ? '臨界点カウントダウン · PIVOT COUNTDOWN' : isTW ? '臨界點與阻力警告 · PIVOT COUNTDOWN' : '临界点与阻力警告 · PIVOT COUNTDOWN'}
        </div>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {free_tier?.pivot_countdown?.resistance_analysis}
        </p>
        <div className="p-3 rounded bg-[var(--cinnabar)]/10 border border-[var(--cinnabar)]/30 text-xs text-[var(--text-primary)] font-mono">
          <span className="font-bold mr-2 text-[var(--cinnabar)]">
            {isEn
              ? `Pivot in ${free_tier?.pivot_countdown?.days_remaining} Days:`
              : isJa
              ? `臨界点まで ${free_tier?.pivot_countdown?.days_remaining} 日:`
              : `倒计时 ${free_tier?.pivot_countdown?.days_remaining} 天:`}
          </span>
          {free_tier?.pivot_countdown?.field_warning}
        </div>
      </section>

      {/* SECTION 4: 高维解锁与卡片 */}
      <section className="relative pt-4 space-y-8">
        {!isPaid ? (
          <PaywallOverlay onUnlockSuccess={() => setIsPaid(true)} />
        ) : (
          <div className="space-y-6 animate-fade-in">
            <PillarsUnlocked data={locked_tier} lang={currentLang} />
          </div>
        )}

        <div className="pt-6 border-t border-[var(--border-line)]">
          <SubscriptionCard
            data={subscription_tier}
            lang={currentLang}
            tier="T1"
            onSubscribe={handleSubscribe}
          />
        </div>
      </section>

      {/* 页脚唯一标识 */}
      <div className="text-center pt-8 text-[11px] font-mono text-[var(--text-muted)] tracking-widest opacity-60">
        GetChronoFlow
      </div>

      {/* 3. 双向共振 Modal 弹窗 */}
      {showResonanceModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-line)] max-w-md w-full p-6 rounded-lg space-y-5 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-[var(--border-line)] pb-3">
              <h3 className="font-serif-title text-base text-[var(--text-primary)]">
                {isEn ? 'REQUEST CO-RESONANCE' : isJa ? '共鳴リンクを要求' : isTW ? '發起雙向共振請求' : '发起双向共振请求'}
              </h3>
              <button
                onClick={() => setShowResonanceModal(false)}
                className="text-xs font-mono text-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                [ CLOSE ]
              </button>
            </div>

            {resonanceSent ? (
              <div className="py-8 text-center space-y-2">
                <div className="text-emerald-400 font-mono text-sm">✓ {isEn ? 'SIGNAL TRANSMITTED' : isJa ? '信号送信完了' : '共振信号已发射'}</div>
                <p className="text-xs text-[var(--text-muted)]">
                  {isEn ? 'Awaiting node counterpart authorization...' : isJa ? '相手ノードの承認を待機中...' : '等待目标节点授权回应...'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendResonance} className="space-y-4">
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                  {isEn
                    ? 'Dual-authorization resonance creates a unified field matrix. Mutual consent is required.'
                    : isJa
                    ? '双方向承認による共鳴は、統合された位相マトリクスを生成します。相互の同意が必要です。'
                    : '双向授权共振将建立统一的时空场域矩阵，需双方显式授权方可揭幕。'}
                </p>
                <div>
                  <label className="block text-[11px] font-mono text-[var(--text-muted)] mb-1">
                    {isEn ? 'YOUR NODE ID / EMAIL' : isJa ? 'あなたのノードID / メール' : '您的 Node ID / 邮箱'}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="NODE-XXXX"
                    className="w-full px-3 py-2 text-xs font-mono bg-[var(--bg-card-hover)] border border-[var(--border-line)] rounded text-[var(--text-primary)] focus:outline-none focus:border-[var(--cinnabar)]"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-2.5 bg-[var(--cinnabar)] text-white text-xs font-mono font-bold rounded hover:opacity-90 transition-all uppercase tracking-wider"
                >
                  {isEn ? 'TRANSMIT RESONANCE SIGNAL' : isJa ? '共鳴信号を送信' : '发射共振信号'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* 4. 客户端海报 Modal 弹窗 (0 二维码，纯文本标识) */}
      {showPosterModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[var(--bg-card)] border border-[var(--border-line)] max-w-sm w-full p-6 rounded-lg space-y-6 relative shadow-2xl text-center">
            
            {/* 模拟 9:16 长图海报预览 */}
            <div className="p-6 border border-[var(--border-line)] bg-[var(--bg-main)] rounded space-y-4 shadow-inner text-left">
              <div className="flex justify-between items-center text-[10px] font-mono text-[var(--text-muted)]">
                <span>CHRONO-SIGIL</span>
                <span>{name}</span>
              </div>
              <div className="py-4 text-center space-y-1">
                <div className="text-xs font-mono text-[var(--cinnabar)]">
                  {free_tier?.chrono_sigil?.dominant_phase}
                </div>
                <div className="font-serif-title text-lg text-[var(--text-primary)]">
                  ENTROPY: {free_tier?.chrono_sigil?.entropy_index}%
                </div>
              </div>
              <p className="text-[11px] text-[var(--text-secondary)] italic leading-normal border-t border-b border-[var(--border-line)] py-3">
                “{free_tier?.unseen_self?.unseen_image}”
              </p>
              <div className="pt-2 text-center text-[10px] font-mono text-[var(--text-muted)] tracking-widest">
                GetChronoFlow
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPosterModal(false)}
                className="w-1/2 py-2 text-xs font-mono border border-[var(--border-line)] text-[var(--text-muted)] rounded hover:text-[var(--text-primary)]"
              >
                [ {isEn ? 'CLOSE' : isJa ? '閉じる' : '关闭'} ]
              </button>
              <button
                onClick={() => {
                  alert(isEn ? 'Sigil saved to device.' : isJa ? '画像が保存されました。' : '高维海报已保存至本地');
                  setShowPosterModal(false);
                }}
                className="w-1/2 py-2 text-xs font-mono bg-[var(--cinnabar)] text-white font-bold rounded hover:opacity-90"
              >
                {isEn ? 'SAVE IMAGE' : isJa ? '画像保存' : '保存海报'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
