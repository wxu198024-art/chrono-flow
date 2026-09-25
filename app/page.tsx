import InkBackground from '@/components/InkBackground';
import BirthForm from '@/components/BirthForm';

export default function HomePage() {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center px-6 py-12">
      
      {/* 水墨/爻线 Canvas 背景 */}
      <InkBackground />

      {/* Hero 区域：高冷极简标题 */}
      <div className="relative z-10 text-center max-w-3xl mx-auto space-y-6 mb-10">
        <div className="inline-block border border-neutral-800 bg-neutral-950/80 px-4 py-1.5 rounded-full text-[10px] tracking-[0.3em] uppercase text-neutral-400">
          Oriental Spatiotemporal Mechanics • Jungian Archetypes
        </div>

        <h1 className="font-serif-title text-4xl sm:text-6xl font-normal tracking-[0.15em] leading-tight text-neutral-100">
          DECODE YOUR <br />
          <span className="italic font-light text-neutral-400">INNER MATRIX</span>
        </h1>

        <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto leading-relaxed tracking-wide">
          Not astrology. Not divination. A precise alignment of ancient time mechanics and modern archetypal psychology to uncover your psychological anchor.
        </p>
      </div>

      {/* 生辰表单 */}
      <BirthForm />

      {/* 底部极细爻线装饰 */}
      <div className="mt-16 w-32 h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent"></div>
    </div>
  );
}