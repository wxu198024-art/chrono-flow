import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full border-b border-neutral-800/60 bg-black/40 backdrop-blur-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-serif-title text-xl tracking-[0.25em] text-neutral-100 hover:opacity-80 transition-opacity">
          CHRONO–FLOW
        </Link>

        {/* 动态干支时刻/理念标语 */}
        <div className="hidden md:flex items-center space-x-2 text-xs tracking-widest text-neutral-400">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-600 animate-pulse"></span>
          <span>SPATIOTEMPORAL RHYTHM • UTC</span>
        </div>

        {/* 右侧导航操作 */}
        <div className="flex items-center space-x-6 text-xs tracking-wider text-neutral-300">
          <Link href="/dictionary/core-ego" className="hover:text-white transition-colors">
            DICTIONARY
          </Link>
          <span className="text-neutral-700">|</span>
          <button className="border border-neutral-700 px-3 py-1 rounded-full text-[10px] tracking-widest uppercase hover:border-neutral-400 transition-colors">
            EN
          </button>
        </div>
      </div>
    </header>
  );
}