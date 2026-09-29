'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/app/layout';

interface OriginCoordinates {
  name?: string;
  gender?: string;
  birthDate?: string;
  birthTime?: string;
}

interface FieldHeaderProps {
  userRole?: 'guest' | 'member' | string;
  onReCalibrate?: () => void;
}

export default function FieldHeader({ userRole = 'guest', onReCalibrate }: FieldHeaderProps) {
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  const [origin, setOrigin] = useState<OriginCoordinates | null>(null);

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

  const displayName = origin?.name || (isEn ? 'SEEKER' : isTW ? '探索者' : '探索者');
  const displayDate = origin?.birthDate || '1995-08-18';
  const displayTime = origin?.birthTime || '14:30';

  // 根据用户角色定义重新校准的权限/提示
  const handleRecalibrateClick = () => {
    if (onReCalibrate) {
      onReCalibrate();
    } else {
      // 默认清除坐标并触发重填或提示
      if (confirm(isEn ? 'Recalibrate origin coordinates?' : '是否重新输入并校准您的时空原点坐标？')) {
        localStorage.removeItem('chrono_origin_coordinates');
        window.location.reload();
      }
    }
  };

  return (
    <section className="p-6 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-md rounded-lg space-y-4 transition-colors duration-300 relative overflow-hidden">
      {/* 顶部极细爻线 */}
      <div className="absolute top-0 left-0 right-0 yao-yang"></div>

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="text-[10px] font-mono text-[var(--cinnabar)] uppercase tracking-widest mb-1">
            {isEn ? 'CHRONO COORDINATES' : isTW ? '時空坐標' : '时空坐标'}
          </div>
          <h1 className="font-serif-title text-xl md:text-2xl text-[var(--text-primary)] font-semibold tracking-wide">
            {displayName}
          </h1>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
          <div className="px-3 py-1.5 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] flex items-center gap-2">
            <span className="text-[var(--text-muted)]">{isEn ? 'ORIGIN DATE' : isTW ? '原點日期' : '原点日期'}:</span>
            <span className="text-[var(--text-primary)]">{displayDate}</span>
          </div>
          <div className="px-3 py-1.5 rounded border border-[var(--border-line)] bg-[var(--bg-card-hover)] flex items-center gap-2">
            <span className="text-[var(--text-muted)]">{isEn ? 'TRUE SOLAR TIME' : isTW ? '真太陽時' : '真太阳时'}:</span>
            <span className="text-[var(--text-primary)]">{displayTime}</span>
          </div>

          {/* 重新校准/重置按钮 */}
          <button
            onClick={handleRecalibrateClick}
            className="px-3 py-1.5 rounded border border-[var(--border-line-hover)] bg-[var(--bg-primary)] hover:border-[var(--cinnabar)] hover:text-[var(--cinnabar)] text-[var(--text-secondary)] transition-all duration-200 text-xs font-mono flex items-center gap-1 cursor-pointer"
            title={userRole === 'guest' ? '访客用户支持重新输入' : '正式用户校准'}
          >
            <span>{isEn ? 'RECALIBRATE' : isTW ? '重新校準' : '重新校准'}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
