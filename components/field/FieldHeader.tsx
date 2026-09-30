'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

interface OriginCoordinates {
  name: string;
  gender: string;
  birthDate: string;
  birthTime: string;
  location: string;
}

interface FieldHeaderProps {
  userRole: 'guest' | 'registered' | 'subscribed';
  onRoleChange: (role: 'guest' | 'registered' | 'subscribed') => void;
  onTriggerRegister: () => void;
}

export default function FieldHeader({ userRole, onRoleChange, onTriggerRegister }: FieldHeaderProps) {
  const { lang } = useLanguage?.() || { lang: 'zh' };
  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  const [coordinates, setCoordinates] = useState<OriginCoordinates>({
    name: isEn ? 'Unbound Origin' : isTW ? '未綁定原點' : '未绑定原点',
    gender: 'male',
    birthDate: '1995-11-03',
    birthTime: '21:15',
    location: isEn ? 'Chengdu' : '成都',
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem('chrono_origin_coordinates');
      if (stored) {
        const parsed = JSON.parse(stored);
        setCoordinates({
          name: parsed.name || (isEn ? 'Seeker' : '探索者'),
          gender: parsed.gender || 'male',
          birthDate: parsed.birthDate || '1995-11-03',
          birthTime: parsed.birthTime || '21:15',
          location: parsed.location || (isEn ? 'Chengdu' : '成都'),
        });
        return;
      }

      const params = new URLSearchParams(window.location.search);
      if (params.get('name') || params.get('date')) {
        setCoordinates({
          name: params.get('name') || (isEn ? 'Seeker' : '探索者'),
          gender: params.get('gender') || 'male',
          birthDate: params.get('date') || '1995-11-03',
          birthTime: params.get('time') || '21:15',
          location: params.get('location') || (isEn ? 'Chengdu' : '成都'),
        });
      }
    } catch (e) {
      console.error('FieldHeader failed to parse origin data:', e);
    }
  }, [isEn]);

  const driftDistance = Math.abs((coordinates.location.length * 370) % 1800) + 420;

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-card)]/95 backdrop-blur-md border-b border-[var(--border-line)] px-4 py-3.5 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* 左侧：场域原点依据 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--cinnabar)] animate-ping" />
            <span className="text-[var(--text-muted)] uppercase tracking-wider text-[11px]">
              {isEn ? 'CHRONO ANCHOR:' : isTW ? '場域原點依據:' : '场域原点依据:'}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 bg-[var(--bg-card-hover)] px-3 py-1.5 rounded border border-[var(--border-line)]">
            <span className="text-[var(--text-primary)] font-bold tracking-wide">
              {coordinates.name}
            </span>
            <span className="text-[var(--text-muted)]">|</span>
            <span className="text-[var(--text-secondary)]">
              {coordinates.birthDate} {coordinates.birthTime}
            </span>
            <span className="text-[var(--text-muted)]">|</span>
            <span className="text-[var(--text-muted)] text-[11px]">
              {coordinates.location || (isEn ? 'Global' : '未指定')} ➔ Shanghai ({driftDistance} km)
            </span>
          </div>
        </div>

        {/* 右侧：身份状态与测试切换按键 */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
          
          <div className="text-[10px] font-mono px-2.5 py-1 rounded border border-[var(--border-line)] bg-[var(--bg-card)]">
            {userRole === 'guest' && (
              <span className="text-amber-400 font-medium">
                {isEn ? 'GUEST FIELD (FREE ACCESS)' : isTW ? '遊客場域 (微觀體驗)' : '游客场域 (微观体验)'}
              </span>
            )}
            {userRole === 'registered' && (
              <span className="text-blue-400 font-medium">
                {isEn ? 'REGISTERED (PILLARS UNLOCKED)' : isTW ? '已註冊 (四柱已解鎖)' : '已注册 (四柱已解锁)'}
              </span>
            )}
            {userRole === 'subscribed' && (
              <span className="text-emerald-400 font-medium">
                {isEn ? 'FULL ORBIT UNLOCKED' : isTW ? '已解鎖全景動態矩陣' : '已解锁全景动态矩阵'}
              </span>
            )}
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px]">
            {userRole === 'guest' && (
              <button
                onClick={onTriggerRegister}
                className="px-2.5 py-1 bg-[var(--cinnabar)] text-white rounded text-[10px] font-medium hover:opacity-90 transition-all uppercase tracking-wider"
              >
                {isEn ? 'Lock Origin' : isTW ? '鎖定原點' : '锁定原点'}
              </button>
            )}

            <Link
              href="/"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] underline underline-offset-2 transition-colors text-[10px]"
            >
              {isEn ? 'Re-align' : isTW ? '重新對齊' : '重新对齐'}
            </Link>
          </div>

          {/* 开发者测试按钮 */}
          <div className="hidden sm:flex items-center gap-1 bg-[var(--bg-card-hover)] p-0.5 rounded border border-[var(--border-line)] text-[10px] font-mono">
            <button
              onClick={() => onRoleChange('guest')}
              className={`px-1.5 py-0.5 rounded transition-colors ${userRole === 'guest' ? 'bg-[var(--cinnabar)] text-white' : 'text-[var(--text-muted)]'}`}
            >
              {isEn ? 'Guest' : '游客'}
            </button>
            <button
              onClick={() => onRoleChange('registered')}
              className={`px-1.5 py-0.5 rounded transition-colors ${userRole === 'registered' ? 'bg-blue-600 text-white' : 'text-[var(--text-muted)]'}`}
            >
              {isEn ? 'Reg' : '已注册'}
            </button>
            <button
              onClick={() => onRoleChange('subscribed')}
              className={`px-1.5 py-0.5 rounded transition-colors ${userRole === 'subscribed' ? 'bg-amber-500 text-black font-bold' : 'text-[var(--text-muted)]'}`}
            >
              {isEn ? 'Paid' : '已解锁'}
            </button>
          </div>

        </div>

      </div>

      {/* 纯科学心理学语汇，禁用陈旧命理词汇 */}
      <div className="max-w-6xl mx-auto mt-2.5 pt-2.5 border-t border-[var(--border-line)]/50 grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] text-[var(--text-secondary)] font-mono">
        <div>
          <span className="text-[var(--text-muted)]">{isEn ? 'DOMINANT VECTOR:' : isTW ? '主導重力因子:' : '主导重力因子:'}</span>{' '}
          <span className="text-[var(--text-primary)]">
            {isEn ? 'Visibility (78%) / Expansion (62%)' : '显化因子 (78%) / 蔓延因子 (62%)'}
          </span>
        </div>
        <div>
          <span className="text-[var(--text-muted)]">{isEn ? 'SPATIAL SHIFT:' : isTW ? '空間張力與無根係數:' : '空间张力与无根系数:'}</span>{' '}
          <span className="text-[var(--text-primary)]">
            {driftDistance} km {isEn ? '(High Tension Field)' : '(异地秩序构建中)'}
          </span>
        </div>
        <div>
          <span className="text-[var(--text-muted)]">{isEn ? 'SOCIAL MASK:' : isTW ? '社會盔甲與內耗:' : '社会盔甲与内耗:'}</span>{' '}
          <span className="text-[var(--cinnabar)] italic">
            {isEn ? 'Over-constructed Control & Frozen Decisions' : '外在强撑理性秩序，内部决策力被封印'}
          </span>
        </div>
      </div>
    </header>
  );
}
