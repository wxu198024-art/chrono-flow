'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/app/layout';

export default function BirthForm() {
  const { dict } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    birthDate: '',
    birthTime: '12:00',
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Spatiotemporal Parameters Submitted:', formData);
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-6 md:p-8 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-xl rounded-sm space-y-5 text-left shadow-2xl relative transition-all duration-300"
    >
      {/* 顶部极细 1px 爻线装饰 */}
      <div className="absolute top-0 left-0 right-0 yao-yang"></div>

      {/* 表单顶部标题与说明文案 */}
      <div className="border-b border-[var(--border-line)] pb-4 mb-2">
        <h2 className="text-xs tracking-[0.2em] font-medium text-[var(--text-primary)] uppercase">
          {dict.formTitle}
        </h2>
        <p className="text-[11px] text-[var(--text-muted)] mt-1 font-normal">
          {dict.formNotice}
        </p>
      </div>

      {/* 姓名与性别 (二列等高对齐) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
        {/* 姓名 */}
        <div className="space-y-1.5">
          <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
            {dict.identifierLabel}
          </label>
          <input
            type="text"
            name="name"
            placeholder={dict.identifierPlaceholder}
            value={formData.name}
            onChange={handleChange}
            className="w-full h-11 px-3.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
            required
          />
        </div>

        {/* 性别 */}
        <div className="space-y-1.5">
          <label className="block text-[11px] h-4 leading-4 tracking-widest text-[var(--text-secondary)] uppercase font-medium">
            {dict.polarityLabel}
          </label>
          <div className="grid grid-cols-2 gap-2 h-11">
            {[
              { id: 'male', label: dict.polarityMale },
              { id: 'female', label: dict.polarityFemale },
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
            {dict.birthDateLabel}
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
            {dict.birthTimeLabel}
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
          <span>{dict.locationLabel}</span>
          <span className="text-[var(--text-muted)] italic font-normal text-[10px]">
            {dict.locationHint}
          </span>
        </label>
        <input
          type="text"
          name="location"
          placeholder={dict.locationPlaceholder}
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
          <span>{dict.submitButton}</span>
        </button>
      </div>
    </form>
  );
}
