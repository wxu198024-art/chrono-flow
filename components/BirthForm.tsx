'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/app/layout';

export default function BirthForm() {
  const router = useRouter();
  const { dict, lang } = useLanguage?.() || { dict: {}, lang: 'zh' };

  // 1. 原始表单状态
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    birthDate: '',
    birthTime: '12:00',
    location: '',
  });

  // 2. 过渡态控制与多语言 steps
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisStep, setAnalysisStep] = useState(0);

  // 简体中文
  const stepsZh = [
    '正在锚定时空坐标与场域相位...',
    '正在解构未显之己与潜意识阻力...',
    '时空频率对齐完成，即将显化诊断报告...',
  ];

  // 繁体中文
  const stepsZhTW = [
    '正在錨定時空坐標與場域相位...',
    '正在解構未顯之己與潛意識阻力...',
    '時空頻率對齊完成，即將顯化診斷報告...',
  ];

  // 纯英文
  const stepsEn = [
    'Aligning spatiotemporal coordinates & field phase...',
    'Deconstructing the unseen self & unconscious friction...',
    'Frequency alignment complete. Manifesting chart...',
  ];

  // 安全转换为 string 进行比较，规避 TS2367 类型报错
  const currentLang = (lang as string) || 'zh';
  const isEn = currentLang === 'en';
  const isTW = currentLang === 'zh-TW' || currentLang === 'zh-HK' || currentLang === 'tw';

  const currentSteps = isEn ? stepsEn : isTW ? stepsZhTW : stepsZh;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Spatiotemporal Parameters Submitted:', formData);
    setIsAnalyzing(true);
  };

  // 3. 延长过渡时长与步骤播放
  useEffect(() => {
    if (!isAnalyzing) return;

    // 每 1.4 秒切换一步文案（总共 3 步，约 4.2 秒）
    const stepInterval = setInterval(() => {
      setAnalysisStep((prev) => {
        if (prev < currentSteps.length - 1) {
          return prev + 1;
        }
        return prev;
      });
    }, 1400);

    // 4.8 秒后平滑跳转
    const jumpTimer = setTimeout(() => {
      const targetScenario = isEn ? 'SCENARIO_A_EN' : 'SCENARIO_A_ZH';

      const query = new URLSearchParams({
        name: formData.name || 'Seeker',
        gender: formData.gender,
        date: formData.birthDate || '1995-11-03',
        time: formData.birthTime || '21:15',
        location: formData.location || '',
      }).toString();

      router.push(`/chart/${targetScenario}?${query}`);
    }, 4800);

    return () => {
      clearInterval(stepInterval);
      clearTimeout(jumpTimer);
    };
  }, [isAnalyzing, formData, isEn, router, currentSteps.length]);

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
        <div className="border-b border-[var(--border-line)] pb-4 mb-2">
          <h2 className="text-xs tracking-[0.2em] font-medium text-[var(--text-primary)] uppercase">
            {dict?.formTitle || (isEn ? 'SPATIOTEMPORAL MATRIX INPUT' : isTW ? '時空矩陣輸入' : '时空矩阵输入')}
          </h2>
          <p className="text-[11px] text-[var(--text-muted)] mt-1 font-normal">
            {dict?.formNotice || (isEn ? 'Enter coordinates to align your temporal field.' : isTW ? '輸入坐標以對齊您的時空場域。' : '输入坐标以对齐您的时空场域。')}
          </p>
        </div>

        {/* 姓名与性别 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div className="space-y-1.5">
            <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
              {dict?.identifierLabel || (isEn ? 'IDENTIFIER / NAME' : isTW ? '標識 / 姓名' : '标识 / 姓名')}
            </label>
            <input
              type="text"
              name="name"
              placeholder={dict?.identifierPlaceholder || (isEn ? 'Enter full name' : isTW ? '輸入姓名' : '输入姓名')}
              value={formData.name}
              onChange={handleChange}
              className="w-full h-11 px-3.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
              required
            />
          </div>

          <div className="space-y-1.5">
            <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
              {dict?.polarityLabel || (isEn ? 'POLARITY / GENDER' : isTW ? '極性 / 性別' : '极性 / 性别')}
            </label>
            <div className="grid grid-cols-2 gap-2 h-11">
              {[
                { id: 'male', label: dict?.polarityMale || (isEn ? 'Male' : isTW ? '男' : '男') },
                { id: 'female', label: dict?.polarityFemale || (isEn ? 'Female' : isTW ? '女' : '女') },
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

        {/* 出生日期与时间 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
          <div className="space-y-1.5">
            <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
              {dict?.birthDateLabel || (isEn ? 'BIRTH DATE' : isTW ? '出生日期' : '出生日期')}
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

          <div className="space-y-1.5">
            <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
              {dict?.birthTimeLabel || (isEn ? 'BIRTH TIME' : isTW ? '出生時間' : '出生时间')}
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

        {/* 出生地点 */}
        <div className="space-y-1.5">
          <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium flex justify-between items-center">
            <span>{dict?.locationLabel || (isEn ? 'ORIGIN CITY' : isTW ? '出生地點' : '出生地点')}</span>
            <span className="text-[var(--text-muted)] italic font-normal text-[10px]">
              {dict?.locationHint || (isEn ? 'For spatial shift calculation' : isTW ? '用於空間偏差計算' : '用于空间偏差计算')}
            </span>
          </label>
          <input
            type="text"
            name="location"
            placeholder={dict?.locationPlaceholder || (isEn ? 'e.g. Chengdu / London' : isTW ? '例如：成都 / 倫敦' : '例如：成都 / 伦敦')}
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
            <span>{dict?.submitButton || (isEn ? 'ALIGN SPATIOTEMPORAL FREQUENCY' : isTW ? '對齊時空頻率' : '对齐时空频率')}</span>
          </button>
        </div>
      </form>

      {/* ==================== 2. 极光演化 / 超现代分析卡片态 ==================== */}
      {isAnalyzing && (
        <div className="relative z-10 py-4 my-auto flex flex-col items-center justify-center text-center space-y-5 animate-fade-in">
          {/* 背景极光微尘高光 */}
          <div className="absolute -inset-10 bg-radial-gradient from-[var(--cinnabar)]/10 via-transparent to-transparent blur-2xl animate-pulse pointer-events-none" />

          {/* 顶部科技感 Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--cinnabar)]/40 bg-[var(--accent-glow)] text-[10px] font-mono text-[var(--cinnabar)] uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--cinnabar)] animate-ping" />
            <span>{isEn ? 'FIELD ALIGNMENT IN PROGRESS' : isTW ? '場域對齊解析中' : '场域对齐解析中'}</span>
          </div>

          {/* 中央罗盘与粒子微光核心 */}
          <div className="relative w-20 h-20 my-1 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-dashed border-[var(--border-line-hover)] animate-spin-slow opacity-60" />
            <div className="absolute inset-2 rounded-full border border-[var(--cinnabar)]/30 animate-ping opacity-20" />
            <div className="w-10 h-10 rounded-full border border-[var(--yao-light)] bg-[var(--bg-card)] shadow-lg flex items-center justify-center relative z-10">
              <span className="cinnabar-dot scale-125" />
            </div>
          </div>

          {/* 时空印记卡片 - 展示当前信息 */}
          <div className="w-full max-w-md p-4 rounded-md border border-[var(--border-line)] bg-[var(--input-bg)]/80 backdrop-blur-md space-y-2.5 text-left font-mono text-[11px] shadow-inner">
            <div className="text-[10px] text-[var(--text-muted)] uppercase border-b border-[var(--border-line)] pb-1.5 mb-2 tracking-wider flex justify-between items-center">
              <span>{isEn ? 'SPATIOTEMPORAL VECTOR MATRIX' : isTW ? '時空矢量矩陣' : '时空矢量矩阵'}</span>
              <span className="text-[var(--cinnabar)] font-bold animate-pulse">
                {isEn ? 'ANALYZING' : isTW ? '解析中' : '解析中'}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-[var(--text-secondary)]">
              <div>
                <span className="text-[var(--text-muted)]">{isEn ? 'SEEKER:' : isTW ? '探索者:' : '探索者:'}</span>{' '}
                <span className="text-[var(--text-primary)] font-bold">{formData.name || (isEn ? 'Seeker' : isTW ? '探索者' : '探索者')}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">{isEn ? 'POLARITY:' : isTW ? '極性:' : '极性:'}</span>{' '}
                <span className="text-[var(--text-primary)] font-bold uppercase">
                  {formData.gender === 'female' 
                    ? (isEn ? 'FEMALE' : isTW ? '陰 / 女' : '阴 / 女') 
                    : (isEn ? 'MALE' : isTW ? '陽 / 男' : '阳 / 男')}
                </span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">{isEn ? 'CHRONO:' : isTW ? '時空時間:' : '时空时间:'}</span>{' '}
                <span className="text-[var(--text-primary)]">{formData.birthDate || '1995-11-03'} {formData.birthTime}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)]">{isEn ? 'ORIGIN:' : isTW ? '出生地點:' : '出生地点:'}</span>{' '}
                <span className="text-[var(--text-primary)]">{formData.location || (isEn ? 'GLOBAL' : '未指定')}</span>
              </div>
            </div>
          </div>

          {/* 底部动态推演文本 */}
          <div className="h-6 flex items-center justify-center">
            <p className="text-xs font-mono text-[var(--text-primary)] tracking-wider animate-pulse">
              &gt; {currentSteps[analysisStep]}
            </p>
          </div>

          {/* 下方查看分析引导文字 */}
          <div className="pt-2 flex items-center justify-center space-x-1.5 text-[11px] text-[var(--text-muted)] tracking-widest animate-bounce">
            <span>↓</span>
            <span>
              {isEn 
                ? 'GENERATING DIAGNOSTIC REPORT BELOW...' 
                : isTW 
                ? '正在生成下方診斷報告，請稍候...' 
                : '正在生成下方诊断报告，请稍候...'}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
