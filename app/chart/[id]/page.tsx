'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo, useState, useEffect } from 'react';
import { calculateChart } from '@/lib/astrology';
import PaywallOverlay from '@/components/PaywallOverlay';

export default function ChartResultPage() {
  const searchParams = useSearchParams();
  const name = searchParams.get('name') || 'Seeker';
  const birthDate = searchParams.get('date') || '2000-01-01';
  const birthTime = searchParams.get('time') || '12:00';

  const [isPaid, setIsPaid] = useState(false);
  const [aiReport, setAiReport] = useState<any>(null);
  const [loadingAi, setLoadingAi] = useState(true);

  const chartData = useMemo(() => {
    try {
      return calculateChart(birthDate, birthTime);
    } catch {
      return null;
    }
  }, [birthDate, birthTime]);

  // 请求 Gemini API 获取 AI 解盘
  useEffect(() => {
    if (!chartData) return;

    setLoadingAi(true);
    fetch('/api/diagnose', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        ...chartData,
        isPaid,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setAiReport(data);
        setLoadingAi(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingAi(false);
      });
  }, [chartData, isPaid]);

  if (!chartData) return null;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-12">
      {/* 头部与四柱信息展示 */}
      <div className="text-center space-y-2">
        <h1 className="font-serif-title text-3xl text-neutral-100">{name.toUpperCase()}&apos;S DIAGNOSIS</h1>
        <p className="text-xs text-neutral-500 uppercase tracking-widest">{chartData.dayPillar} Day Pillar Core Ego</p>
      </div>

      {/* AI 诊断结果展示区 */}
      <div className="bg-neutral-900/40 border border-neutral-800 rounded-2xl p-8 space-y-6">
        {loadingAi ? (
          <div className="text-center py-8 text-xs tracking-widest text-neutral-500 animate-pulse">
            Querying Gemini Archetype Diagnostic Engine...
          </div>
        ) : (
          <>
            <div className="space-y-2 border-b border-neutral-800 pb-6">
              <span className="text-[10px] tracking-[0.25em] text-red-500 uppercase font-mono">PRIMARY ARCHETYPE</span>
              <h2 className="font-serif-title text-2xl text-neutral-100">{aiReport?.archetype_title}</h2>
              <p className="text-xs italic text-neutral-400">&ldquo;{aiReport?.core_quote}&rdquo;</p>
            </div>

            {/* 免费 Hook：Core Ego Reading */}
            <div className="space-y-2">
              <h3 className="text-xs tracking-widest text-neutral-300 uppercase font-medium">CORE EGO DIAGNOSTIC</h3>
              <p className="text-xs text-neutral-400 leading-relaxed">{aiReport?.core_ego_reading}</p>
            </div>
          </>
        )}
      </div>

      {/* Paywall 拦截或付费完整内容 */}
      {!isPaid ? (
        <PaywallOverlay onUnlockSuccess={() => setIsPaid(true)} />
      ) : (
        <div className="bg-neutral-900/80 border border-neutral-700 rounded-2xl p-8 space-y-6">
          <div className="text-xs tracking-widest text-green-400 uppercase font-mono">UNLOCKED FULL MATRIX REPORT</div>
          <div className="space-y-4 text-xs text-neutral-300 leading-relaxed">
            <div><strong>Social Mask (Month Pillar):</strong> {aiReport?.full_report?.social_mask_insight}</div>
            <div><strong>Origin Gravity (Year Pillar):</strong> {aiReport?.full_report?.origin_insight}</div>
            <div><strong>Hidden Horizon (Hour Pillar):</strong> {aiReport?.full_report?.hidden_horizon_insight}</div>
          </div>
        </div>
      )}
    </div>
  );
}