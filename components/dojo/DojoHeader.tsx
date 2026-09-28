'use client';

export default function DojoHeader() {
  return (
    <section className="p-6 rounded-2xl bg-[#161920] border border-[#262b36] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#1e293b] text-[#94a3b8] border border-[#334155]">
            Origin Anchor / 时空原点
          </span>
          <span className="text-xs px-2.5 py-1 rounded-full bg-[#1e293b] text-[#38bdf8] border border-[#0284c7]">
            Spatial Drift: 800 km / 空间漂移重力差
          </span>
        </div>
        <h1 className="text-xl md:text-2xl font-light text-[#f8fafc] tracking-wide">
          Chrono-Flow Dojo / 个人时空道场
        </h1>
      </div>
      
      <div className="text-sm text-[#94a3b8] border-l-2 border-[#3b82f6] pl-3">
        <p className="text-xs text-[#64748b]">The Origin Pillar / 原点之柱</p>
        <p className="font-mono text-[#e2e8f0]">1992.07.15 — 14:00</p>
      </div>
    </section>
  );
}
