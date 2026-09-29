'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/layout';

interface OriginCoordinates {
  name?: string;
  gender?: string;
  birthDate?: string;
  birthTime?: string;
  location?: string;
}

export default function FieldHeader() {
  const router = useRouter();
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  const chronoDict = dict?.chronoField?.header || {
    fieldStatus: isEn ? 'FIELD STATUS' : isTW ? '場域狀態' : '场域状态',
    statusCalibrated: isEn ? 'CALIBRATED' : isTW ? '已校準' : '已校准',
    recalibrateAction: isEn ? 'RE-CALIBRATE' : isTW ? '重校準坐標' : '重校准坐标',
  };

  const [origin, setOrigin] = useState<OriginCoordinates | null>(null);

  // 1. 从 localStorage 动态读取真实的生辰原点数据
  useEffect(() => {
    try {
      const stored = localStorage.getItem('chrono_origin_coordinates');
      if (stored) {
        setOrigin(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Failed to parse chrono origin coordinates:', e);
    }
  }, []);

  // 2. 重新校准：平滑跳转回首页
  const handleRecalibrate = () => {
    router.push('/');
  };

  // 格式化展示日期与时间
  const displayDate = origin?.birthDate ? origin.birthDate.replace(/-/g, '.') : '1995.11.03';
  const displayTime = origin?.birthTime || '12:00';
  const displayName = origin?.name || (isEn ? 'SEEKER' : '探索者');

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all duration-300 relative overflow-hidden">
      {/* 顶部极细爻线装饰 */}
      <div className="absolute top-0 left-0 right-0 yao-yang"></div>

      <div>
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <span className="text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-[var(--border-line)] bg-[var(--bg-card-hover)] text-[var(--text-secondary)]">
            [ {chronoDict.fieldStatus} ]
          </span>
          <span className="text-[10px] uppercase tracking-[0.15em] px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{chronoDict.statusCalibrated}</span>
          </span>
        </div>
        
        <h1 className="font-serif-title text-xl md:text-2xl text-[var(--text-primary)] tracking-wide uppercase">
          {dict?.chronoField?.title || (isEn ? 'PERSONAL SPATIOTEMPORAL FIELD' : isTW ? '個人時空場域' : '个人时空场域')}
        </h1>
        <p className="text-xs text-[var(--text-muted)] mt-1">
          {dict?.chronoField?.subtitle || (isEn ? 'Spatiotemporal state and homeostatic analysis dashboard' : isTW ? '時空狀態與內穩態解析控制台' : '时空状态与内稳态解析控制台')}
        </p>
      </div>

      {/* 右侧：动态生辰原点坐标与重校准操作 */}
      <div className="flex flex-col md:items-end gap-2">
        <div className="text-xs text-[var(--text-secondary)] border-l-2 md:border-l-0 md:border-r-2 border-[var(--cinnabar)] pl-3 md:pl-0 md:pr-3 space-y-1 md:text-right">
          <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-mono">
            {displayName} / CHRONO COORDINATES
          </p>
          <p className="font-mono text-[var(--text-primary)] text-sm tracking-wide">
            {displayDate} — {displayTime} (TRUE SOLAR)
          </p>
        </div>

        <button
          type="button"
          onClick={handleRecalibrate}
          className="text-[10px] font-mono text-[var(--text-muted)] hover:text-[var(--cinnabar)] transition-colors uppercase tracking-widest underline underline-offset-4 self-start md:self-end mt-1"
        >
          &gt; {chronoDict.recalibrateAction}
        </button>
      </div>
    </section>
  );
}
