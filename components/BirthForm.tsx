'use client';

import React, { useState } from 'react';

export default function BirthForm() {
  const [formData, setFormData] = useState({
    name: '',
    gender: 'male',
    birthDate: '',
    birthTime: '12:00',
    calendarType: 'solar', // solar | lunar
    location: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Spatiotemporal Parameters Submitted:', formData);
    // 后续接入四柱排盘逻辑
  };

  return (
    <form 
      onSubmit={handleSubmit}
      className="p-6 md:p-8 border border-[var(--border-line)] bg-[var(--bg-card)] backdrop-blur-xl rounded-sm space-y-6 text-left shadow-2xl relative transition-all duration-300"
    >
      {/* 顶部极细装饰线 */}
      <div className="absolute top-0 left-0 right-0 yao-yang"></div>

      {/* 1. 姓名与性别 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-[11px] tracking-widest text-[var(--text-secondary)] uppercase font-medium">
            Subject Identifier / 标识
          </label>
          <input
            type="text"
            name="name"
            placeholder="e.g. 齐渊"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[11px] tracking-widest text-[var(--text-secondary)] uppercase font-medium">
            Polarity / 极性
          </label>
          <div className="grid grid-cols-2 gap-2 pt-0.5">
            {[
              { id: 'male', label: 'YANG • 乾 / 男' },
              { id: 'female', label: 'YIN • 坤 / 女' },
            ].map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setFormData((prev) => ({ ...prev, gender: g.id }))}
                className={`py-2 text-[10px] tracking-wider rounded-sm border transition-all ${
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

      {/* 2. 历法选择器 (公历 / 农历) */}
      <div className="space-y-2">
        <label className="block text-[11px] tracking-widest text-[var(--text-secondary)] uppercase font-medium">
          Temporal Calendar System / 历法
        </label>
        <div className="flex space-x-4 text-xs text-[var(--text-secondary)] pt-1">
          <label className="flex items-center space-x-2 cursor-pointer group">
            <input
              type="radio"
              name="calendarType"
              value="solar"
              checked={formData.calendarType === 'solar'}
              onChange={handleChange}
              className="accent-[var(--cinnabar)] cursor-pointer"
            />
            <span className="group-hover:text-[var(--text-primary)] transition-colors">
              Solar Calendar / 公历 (阳历)
            </span>
          </label>
          <label className="flex items-center space-x-2 cursor-pointer group">
            <input
              type="radio"
              name="calendarType"
              value="lunar"
              checked={formData.calendarType === 'lunar'}
              onChange={handleChange}
              className="accent-[var(--cinnabar)] cursor-pointer"
            />
            <span className="group-hover:text-[var(--text-primary)] transition-colors">
              Lunar Calendar / 农历 (阴历)
            </span>
          </label>
        </div>
      </div>

      {/* 3. 出生日期与准确时间 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-[11px] tracking-widest text-[var(--text-secondary)] uppercase font-medium">
            Birth Date / 日期
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-[11px] tracking-widest text-[var(--text-secondary)] uppercase font-medium">
            Birth Time / 时辰 (UTC Local)
          </label>
          <input
            type="time"
            name="birthTime"
            value={formData.birthTime}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
            required
          />
        </div>
      </div>

      {/* 4. 出生地点 (用于真太阳时校准) */}
      <div className="space-y-2">
        <label className="block text-[11px] tracking-widest text-[var(--text-secondary)] uppercase font-medium flex justify-between">
          <span>Birth Location / 出生地点</span>
          <span className="text-[var(--text-muted)] italic font-normal text-[10px]">
            True Solar Time Correction • 真太阳时校正
          </span>
        </label>
        <input
          type="text"
          name="location"
          placeholder="e.g. 上海市 (Shanghai) / 121.47° E"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 bg-[var(--input-bg)] border border-[var(--input-border)] text-[var(--text-primary)] placeholder-[var(--text-muted)] text-xs rounded-sm focus:outline-none focus:border-[var(--yao-light)] transition-colors"
        />
      </div>

      {/* 提交按钮 */}
      <div className="pt-2">
        <button
          type="submit"
          className="w-full py-3.5 border border-[var(--border-line-hover)] bg-[var(--bg-card-hover)] hover:bg-[var(--cinnabar)] hover:text-white text-[var(--text-primary)] text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 rounded-sm shadow-md flex items-center justify-center space-x-2 group"
        >
          <span className="cinnabar-dot group-hover:bg-white transition-colors"></span>
          <span>Initiate Spatiotemporal Alignment • 开启时空对齐</span>
        </button>
      </div>

    </form>
  );
}
