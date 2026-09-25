import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-800/80 bg-neutral-950/80 py-12 text-neutral-500 text-xs">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* 1. 品牌定义 */}
        <div className="space-y-3 md:col-span-2">
          <div className="font-serif-title text-neutral-200 tracking-widest text-sm">CHRONO–FLOW</div>
          <p className="max-w-sm text-neutral-400 leading-relaxed text-[11px]">
            Translating ancient Oriental spatiotemporal mechanics into modern Jungian archetypal diagnostics.
          </p>
          <div className="text-[10px] text-neutral-600">
            © {new Date().getFullYear()} CHRONO–FLOW. All rights reserved.
          </div>
        </div>

        {/* 2. 导航索引 */}
        <div className="space-y-2">
          <div className="text-neutral-300 font-medium tracking-wider mb-3">EXPLORE</div>
          <div><Link href="/alignment" className="hover:text-neutral-300 transition-colors">Dual Alignment</Link></div>
          <div><Link href="/dictionary/five-elements" className="hover:text-neutral-300 transition-colors">Archetype Dictionary</Link></div>
        </div>

        {/* 3. 合规与免责（Paddle / Stripe 必备） */}
        <div className="space-y-2">
          <div className="text-neutral-300 font-medium tracking-wider mb-3">LEGAL & COMPLIANCE</div>
          <div><Link href="/privacy" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link></div>
          <div><Link href="/terms" className="hover:text-neutral-300 transition-colors">Terms of Service</Link></div>
          <p className="text-[10px] text-neutral-600 pt-2 leading-tight">
            *For self-exploration and psychological entertainment purposes only.
          </p>
        </div>

      </div>
    </footer>
  );
}