'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/layout';

export default function BirthForm() {
  const router = useRouter();
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  // 1. 原始表单状态（保持完全一致）
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    birthDate: '',
    birthTime: '12:00',
    location: '',
  });

  // 2. 新增：分析过度态控制与动态提示文案
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  const stepsZh = [
    '正在锚定时空坐标与场域相位...',
    '正在解构未显之己与潜意识阻力...',
    '时空频率对齐完成，即将显化诊断报告...',
  ];

  const stepsEn = [
    'Aligning spatiotemporal coordinates & field phase...',
    'Deconstructing the unseen self & unconscious friction...',
    'Frequency alignment complete. Manifesting chart...',
  ];

  const currentSteps = lang === 'en' ? stepsEn : stepsZh;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 3. 提交事件处理（加入极光卡片过渡动效，不改动原有逻辑）
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Spatiotemporal Parameters Submitted:', formData);

    // 开启极光演化过渡态
    setIsAnalyzing(true);
  };

  // 4. 过渡态定时器：步进播放分析文案并平滑跳转
  useEffect(() => {
    if (!isAnalyzing) return;

    // 文案自动切换节奏
    const stepInterval = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev < currentSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 900);

    // 动画播放完成后执行原有的跳转逻辑
    const jumpTimer = setTimeout(() => {
      const targetScenario = lang === 'en' ? 'SCENARIO_A_EN' : 'SCENARIO_A_ZH';

      const query = new URLSearchParams({
        name: formData.name || 'Seeker',
        gender: formData.gender,
        date: formData.birthDate || '1995-11-03',
        time: formData.birthTime || '21:15',
        location: formData.location || '',
      }).toString();

      router.push(`/chart/${targetScenario}?${query}`);
    }, 2800);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(jumpTimer);
    };
  }, [isAnalyzing, formData, lang, router, currentSteps.length]);

  return (
    <div className="relative overflow-hidden rounded-sm border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-xl p-6 md:p-8 shadow-2xl transition-all duration-500">
      {/* 顶部极细 1px 爻线装饰 */}
      <div className="absolute top-0 left-0 right-0 yao-yang z-20"></div>

      {/* ==================== 1. 默认输入表单态 ==================== */}
      <form
        onSubmit={handleSubmit}
        className={`space-y-5 text-left transition-all duration-700 ${
          isAnalyzing
            ? 'opacity-0 scale-95 pointer-events-none absolute inset-0 p-6 md:p-8'
            : 'opacity-100 scale-100 relative z-10'
        }`}
      >
        {/* 表单顶部标题与说明文案 */}
        <div className="border-b border-[var(--border-line)] pb-4 mb-2">
          <h2 className="text-xs tracking-[0.2em] font-medium text-[var(--text-primary)] uppercase">
            {dict?.formTitle || 'SPATIOTEMPORAL MATRIX INPUT'}
          </h2>
          <p className="text-[11px] text-[var(--text-muted)] mt-1 font-normal">
            {dict?.formNotice || 'Enter coordinates to align your temporal field.'}
          </p>
        </div>

        {/* 姓名与性别 (二列等高对齐) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          {/* 姓名 */}
          <div className="space-y-1.5">
            <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
              {dict?.identifierLabel || 'IDENTIFIER / NAME'}
            </label>
            <input
              type="text"
              name="name"
              placeholder={dict?.identifierPlaceholder || 'Enter full name'}
              value={formData.name}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
              required
            />
          </div>

          {/* 性别 */}
          <div className="space-y-1.5">
            <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
              {dict?.polarityLabel || 'POLARITY / GENDER'}
            </label>
            <div className="grid grid-cols-2 gap-2 h-11">
              {[
                { id: 'male', label: dict?.polarityMale || 'Male' },
                { id: 'female', label: dict?.polarityFemale || 'Female' },
              ].map((g) => (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setFormData((prev) => ({ ...prev, gender: g.id }))}
                  className={`h-full text-xs tracking-wider rounded-sm border transition-all flex items-center justify-center ${
                    formData.gender === g.id
                      ? 'border-[var(--cinnabar)] bg-[var(--accent-glow)] text-[var(--text-primary)] font-medium'
                      : 'border-[var(--input-border)] bg-[var(--input-bg)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  {g.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 出生日期与出生时间 (二列等高对齐) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          {/* 出生日期 */}
          <div className="space-y-1.5">
            <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
              {dict?.birthDateLabel || 'BIRTH DATE'}
            </label>
            <input
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
              required
            />
          </div>

          {/* 出生时间 */}
          <div className="space-y-1.5">
            <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
              {dict?.birthTimeLabel || 'BIRTH TIME'}
            </label>
            <input
              type="time"
              name="birthTime"
              value={formData.birthTime}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
              required
            />
          </div>
        </div>

        {/* 出生地点 (单列对齐) */}
        <div className="space-y-1.5">
          <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium flex justify-between items-center">
            <span>{dict?.locationLabel || 'ORIGIN CITY'}</span>
            <span className="text-[var(--text-muted)] italic font-normal text-[10px]">
              {dict?.locationHint || 'For spatial shift calculation'}
            </span>
          </label>
          <input
            type="text"
            name="location"
            placeholder={dict?.locationPlaceholder || 'e.g. Chengdu / London'}
            value={formData.location}
            onChange={handleChange}
            className="w-full h-11 px-3.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
          />
        </div>

        {/* 提交按钮 */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full h-12 border border-[var(--border-line-hover)] bg-[var(--bg-card-hover)] hover:bg-[var(--cinnabar)] hover:text-white text-[var(--text-primary)] text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 rounded-sm shadow-md flex items-center justify-center space-x-2 group"
          >
            <span className="cinnabar-dot group-hover:bg-white transition-colors"></span>
            <span>{dict?.submitButton || 'ALIGN SPATIOTEMPORAL FREQUENCY'}</span>
          </button>
        </div>
      </form>

      {/* ==================== 2. 极光演化 / 超现代分析卡片态 ==================== */}
      {isAnalyzing && (
        <div className="relative z-10 py-6 my-auto animate-fade-in flex flex-col items-center justify-center text-center space-y-6">
          {/* 背景极光微尘高光 */}
          <div className="absolute -inset-10 bg-radial-gradient from-[var(--cinnabar)]/10 via-transparent to-transparent blur-2xl animate-pulse pointer-events-none" />

          {/* 顶部科技感 Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--cinnabar)]/40 bg-[var(--accent-glow)] text-[10px] font-mono text-[var(--cinnabar)] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--cinnabar)] animate-ping" />
            <span>FIELD ALIGNMENT IN PROGRESS</span>
          </div>

          {/* 中央罗盘与粒子微光核心 */}
          <div className="relative w-24 h-24 my-2 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border-line-hover)] animate-spin-slow opacity-60" />
            <div className="absolute inset-2 rounded-full border border-[var(--cinnabar)]/30 animate-ping opacity-20" />
            <div className="w-12 h-12 rounded-full border border-[var(--yao-light)] bg-[var(--bg-card)] shadow-lg flex items-center justify-center relative z-10">
              <span className="cinnabar-dot scale-125" />
            </div>
          </div>

          {/* 时空印记卡片 - 展现在场坐标参数 */}
          <div className="w-full max-w-md p-4 rounded-md border border-[var(--border-line)] bg-[var(--input-bg)]/80 backdrop-blur-md space-y-2 text-left font-mono text-[11px] shadow-inner">
            <div className="text-[10px] text-[var(--text-muted)] uppercase border-b border-[var(--border-line)] pb-1 mb-2 tracking-wider flex justify-between">
              <span>TEMPORAL VECTOR MATRIX</span>
              <span className="text-[var(--cinnabar)]">ACTIVE</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[var(--text-secondary)]">
              <div>
                <span className="text-[var(--text-muted)]">SEEKER:</span>{' '}
                <span className="text-[var(--text-primary)] font-bold">{formData.name || 'Seeker'}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">POLARITY:</span>{' '}
                <span className="text-[var(--text-primary)] font-bold uppercase">{formData.gender}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">CHRONO:</span>{' '}
                <span className="text-[var(--text-primary)]">{formData.birthDate || '1995-11-03'}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">ORIGIN:</span>{' '}
                <span className="text-[var(--text-primary)]">{formData.location || 'GLOBAL'}</span>
              </div>
            </div>
          </div>

          {/* 底部动态推演文本 */}
          <div className="h-6 flex items-center justify-center">
            <p className="text-xs font-mono text-[var(--text-primary)] tracking-wider animate-pulse">
              &gt; {currentSteps[analysisStep]}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
