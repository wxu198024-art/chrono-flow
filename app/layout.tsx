import './globals.css';

export const metadata = {
  title: 'CHRONO–FLOW | Oriental Spatiotemporal Diagnostics',
  description: 'Unveil your Jungian archetype through ancient Oriental temporal mechanics.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen flex flex-col justify-between selection:bg-[#C8322B] selection:text-white">
        
        {/* 顶部极简导航与实时干支历法栏 */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-[#262626] px-6 py-4 flex justify-between items-center text-xs tracking-widest uppercase">
          <div className="flex items-center space-x-3 font-serif-title font-bold text-sm">
            <span className="cinnabar-dot"></span>
            <span>CHRONO–FLOW</span>
            <span className="text-neutral-600 font-normal">/ 循</span>
          </div>

          {/* 实时干支 Cosmic Clock */}
          <div className="hidden md:flex items-center space-x-2 stems-matrix text-[11px]">
            <span>2026.09.26</span>
            <span className="text-[#C8322B]">/</span>
            <span>BING-WU YEAR</span>
            <span className="text-neutral-500">丙午年</span>
            <span>DING-YOU MONTH</span>
            <span className="text-neutral-500">丁酉月</span>
          </div>

          {/* 多语言/状态 */}
          <div className="flex items-center space-x-4 text-neutral-400">
            <button className="hover:text-white transition-colors">EN</button>
            <span className="text-neutral-700">/</span>
            <button className="hover:text-white transition-colors">中文</button>
          </div>
        </header>

        {/* 页面核心内容区 */}
        <main className="flex-grow pt-24 pb-12">
          {children}
        </main>

        {/* 极简页脚 */}
        <footer className="border-t border-[#262626] py-8 text-center text-[10px] text-neutral-500 uppercase tracking-widest">
          <div className="max-w-md mx-auto mb-4 yao-yang opacity-30"></div>
          <p>© 2026 CHRONO–FLOW. ORIENTAL SPATIOTEMPORAL MECHANICS & JUNGIAN ARCHETYPES.</p>
        </footer>

      </body>
    </html>
  );
}
