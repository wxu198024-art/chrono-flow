'use client';

import React, { useState } from 'react';

interface PaywallOverlayProps {
  onUnlockSuccess: () => void;
  lang?: 'zh' | 'en';
}

export default function PaywallOverlay({ onUnlockSuccess, lang = 'zh' }: PaywallOverlayProps) {
  const isZh = lang === 'zh';
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onUnlockSuccess();
    }, 600);
  };

  return (
    <div className="w-full my-6 p-4 md:p-5 rounded-xl bg-gradient-to-r from-amber-950/20 via-neutral-900/60 to-amber-950/20 border border-amber-500/40 shadow-lg backdrop-blur-md transition-all duration-300">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* 左侧：醒目提示文案 */}
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-xs font-mono tracking-widest text-amber-300 font-bold uppercase">
              {isZh ? '✦ 免费注册即可解锁【四柱五行完整拓扑场域】' : '✦ FREE REGISTRATION TO UNLOCK FULL PILLARS & FIVE ELEMENTS FIELD'}
            </span>
          </div>
          <p className="text-xs text-neutral-300 leading-snug">
            {isZh
              ? '包含：四柱干支能量坍缩占比、五行相互作用图谱及终身大运临界点解析。'
              : 'Includes: 4-Pillar energy density, 5-Element dynamics map & existential pivot timeline.'}
          </p>
        </div>

        {/* 右侧：单行极简输入框 + 一键解锁按钮 */}
        <form onSubmit={handleSubmit} className="flex items-center w-full md:w-auto gap-2">
          <input
            type="email"
            required
            placeholder={isZh ? '输入邮箱即刻解锁...' : 'Enter your email...'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-3 py-2 text-xs rounded-lg bg-neutral-950/80 border border-neutral-700 text-neutral-100 placeholder-neutral-500 focus:outline-none focus:border-amber-400 w-full md:w-60"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-5 py-2 whitespace-nowrap text-xs font-bold rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 transition-all shadow-md active:scale-95"
          >
            {loading ? (isZh ? '解锁中...' : 'Unlocking...') : isZh ? '免费解锁' : 'Unlock Now'}
          </button>
        </form>

      </div>
    </div>
  );
}
