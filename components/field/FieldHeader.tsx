'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/app/layout';

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
    birthTime: '12:00',
    location: isEn ? 'Chengdu' : '成都',
  });

  // 读取首页锁定数据 (localStorage 或 URL query)
  useEffect(() => {
    try {
      const stored = localStorage.getItem('chrono_origin_coordinates');
      if (stored) {
        const parsed = JSON.parse(stored);
        setCoordinates({
          name: parsed.name || (isEn ? 'Seeker' : '探索者'),
          gender: parsed.gender || 'male',
          birthDate: parsed.birthDate || '1995-11-03',
          birthTime: parsed.birthTime || '12:00',
          location: parsed.location || (isEn ? 'Chengdu' : '成都'),
        });
        return;
      }

      // fallback 尝试读取 url search params
      const params = new URLSearchParams(window.location.search);
      if (params.get('name') || params.get('date')) {
        setCoordinates({
          name: params.get('name') || (isEn ? 'Seeker' : '探索者'),
          gender: params.get('gender') || 'male',
          birthDate: params.get('date') || '1995-11-03',
          birthTime: params.get('time') || '12:00',
          location: params.get('location') || (isEn ? 'Chengdu' : '成都'),
        });
      }
    } catch (e) {
      console.error('FieldHeader failed to parse origin data:', e);
    }
  }, [isEn]);

  // 根据出生地与模拟 IP 估算物理漂移公里数 (Spatial Drift)
  const driftDistance = Math.abs((coordinates.location.length * 370) % 1800) + 420; // 模拟漂移公里数

  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-card)]/95 backdrop-blur-md border-b border-[var(--border-line)] px-4 py-3.5 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        
        {/* 左侧：场域原点依据与碰撞因子 */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-xs font-mono">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[var(--cinnabar)] animate-ping" />
            <span className="text-[var(--text-muted)] uppercase tracking-wider text-[11px]">
              {isEn ? 'FIELD ORIGIN ANCHOR:' : isTW ? '場域原點依據:' : '场域原点依据:'}
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

        {/* 右侧：身份状态与快速调试开关 */}
        <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
          
          {/* 当前身份 Badge */}
          <div className="text-[10px] font-mono px-2.5 py-1 rounded border border-[var(--border-line)] bg-[var(--bg-card)]">
            {userRole === 'guest' && (
              <span className="text-amber-400 font-medium">
                {isEn ? 'GUEST FIELD (TEMPORARY)' : isTW ? '遊客場域 (微觀解剖)' : '游客场域 (微观解剖)'}
              </span>
            )}
            {userRole === 'registered' && (
              <span className="text-blue-400 font-medium">
                {isEn ? 'REGISTERED ANCHOR' : isTW ? '已註冊原點' : '已注册原点'}
              </span>
            )}
            {userRole === 'subscribed' && (
              <span className="text-emerald-400 font-medium">
                {isEn ? 'FULL ORBIT UNLOCKED' : isTW ? '已解鎖 52 週全景' : '已解锁 52 周全景'}
              </span>
            )}
          </div>

          {/* 交互按键：注册引导与重校准 */}
          <div className="flex items-center gap-2 font-mono text-[11px]">
            {userRole === 'guest' && (
              <button
                onClick={onTriggerRegister}
                className="px-2.5 py-1 bg-[var(--cinnabar)] text-white rounded text-[10px] font-medium hover:opacity-90 transition-all uppercase tracking-wider"
              >
                {isEn ? 'Save Origin' : isTW ? '鎖定原點' : '锁定原点'}
              </button>
            )}

            <Link
              href="/"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] underline underline-offset-2 transition-colors text-[10px]"
            >
              {isEn ? 'Re-align' : isTW ? '重新對齊' : '重新对齐'}
            </Link>
          </div>

          {/* 开发者/测试快捷状态切换按键 */}
          <div className="hidden sm:flex items-center gap-1 bg-[var(--bg-card-hover)] p-0.5 rounded border border-[var(--border-line)] text-[10px] font-mono">
            <button
              onClick={() => onRoleChange('guest')}
              className={`px-1.5 py-0.5 rounded transition-colors ${userRole === 'guest' ? 'bg-[var(--cinnabar)] text-white' : 'text-[var(--text-muted)]'}`}
            >
              {isEn ? 'Guest' : '游客'}
            </button>
            <button
              onClick={() => onRoleChange('registered')}
              className={`px-1.5 py-0.5 rounded transition-colors ${userRole === 'registered' ? 'bg-[var(--text-primary)] text-[var(--bg-card)]' : 'text-[var(--text-muted)]'}`}
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

      {/* 千人千面：场域原点与社会盔甲解构面板 */}
      <div className="max-w-6xl mx-auto mt-2.5 pt-2.5 border-t border-[var(--border-line)]/50 grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] text-[var(--text-secondary)] font-mono">
        <div>
          <span className="text-[var(--text-muted)]">{isEn ? 'CHRONO ANCHOR:' : isTW ? '时间重力锚点:' : '时间重力锚点:'}</span>{' '}
          <span className="text-[var(--text-primary)]">丙火主导 / 戊土生发 (水火互冲 28%)</span>
        </div>
        <div>
          <span className="text-[var(--text-muted)]">{isEn ? 'SPATIAL DRIFT:' : isTW ? '空间漂移与无根系数:' : '空间漂移与无根系数:'}</span>{' '}
          <span className="text-[var(--text-primary)]">{driftDistance} km (漂移张力高 / 破局欲强)</span>
        </div>
        <div>
          <span className="text-[var(--text-muted)]">{isEn ? 'SOCIAL MASK:' : isTW ? '社会盔甲与解构:' : '社会盔甲与解构:'}</span>{' '}
          <span className="text-[var(--cinnabar)] italic">强撑理性秩序，内部潜藏内耗焦虑</span>
        </div>
      </div>
    </header>
  );
}
