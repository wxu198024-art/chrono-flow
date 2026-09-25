'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BirthForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    birthDate: '',
    birthTime: '12:00',
    location: '',
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 阶段二：模拟计算并路由跳转到结果页（阶段三/四会接真实 API）
    setTimeout(() => {
      // 生成一个简易测算 ID，跳转到结果页
      const mockId = Date.now().toString(36);
      router.push(`/chart/${mockId}?name=${encodeURIComponent(formData.name)}&date=${formData.birthDate}&time=${formData.birthTime}&location=${encodeURIComponent(formData.location)}`);
    }, 1200);
  };

  return (
    <div className="w-full max-w-lg mx-auto bg-neutral-900/40 border border-neutral-800/80 rounded-2xl p-8 backdrop-blur-xl shadow-2xl relative z-10">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* 名字/代号 */}
        <div className="space-y-2">
          <label className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
            01. Identifier / Your Name
          </label>
          <input
            type="text"
            required
            placeholder="e.g. Alex"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-neutral-950/60 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
          />
        </div>

        {/* 出生日期 */}
        <div className="space-y-2">
          <label className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
            02. Date of Arrival (Birth Date)
          </label>
          <input
            type="date"
            required
            value={formData.birthDate}
            onChange={(e) => setFormData({ ...formData, birthDate: e.target.value })}
            className="w-full bg-neutral-950/60 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:border-neutral-500 transition-colors"
          />
        </div>

        {/* 出生时刻 & 出生地点 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
              03. Precise Time
            </label>
            <input
              type="time"
              required
              value={formData.birthTime}
              onChange={(e) => setFormData({ ...formData, birthTime: e.target.value })}
              className="w-full bg-neutral-950/60 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-100 focus:outline-none focus:border-neutral-500 transition-colors"
            />
          </div>

          <div className="space-y-2">
            <label className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 font-medium block">
              04. Location / City
            </label>
            <input
              type="text"
              required
              placeholder="e.g. New York, USA"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full bg-neutral-950/60 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-neutral-100 placeholder-neutral-600 focus:outline-none focus:border-neutral-500 transition-colors"
            />
          </div>
        </div>

        {/* 提交按钮（带高级爻线动画） */}
        <button
          type="submit"
          disabled={loading}
          className="w-full mt-4 bg-neutral-100 hover:bg-white text-black font-medium py-3.5 px-6 rounded-lg text-xs tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50"
        >
          {loading ? (
            <span className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-black animate-ping"></span>
              <span>Aligning Spatiotemporal Vectors...</span>
            </span>
          ) : (
            <span>Map Your Archetype Matrix</span>
          )}
        </button>

      </form>
    </div>
  );
}