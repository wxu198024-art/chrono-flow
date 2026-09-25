import './globals.css';
import Link from 'next/link';

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
        
        {/* 顶部极简导航栏 */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/85 backdrop-blur-md border-b border-[#262626] px-6 py-4 flex justify-between items-center text-xs tracking-widest uppercase">
          
          {/* Logo 区域：点击可顺畅返回首页 */}
          <Link href="/" className="flex items-center space-x-3 font-serif-title font-bold text-sm text-[#F5F4F0] hover:opacity-80 transition-opacity">
            <span className="cinnabar-dot"></span>
            <span>CHRONO–FLOW</span>
            <span className="text-neutral-500 font-normal">/ 循</span>
          </Link>

          {/* 实时干支 Cosmic Clock */}
          <div className="hidden md:flex items-center space-x-2 stems-matrix text-[11px]">
            <span>2026.09.26</span>
            <span className="text-[#C8322B]">/</span>
            <span>BING-WU YEAR</span>
            <span className="text-neutral-400">丙午年</span>
            <span>DING-YOU MONTH</span>
            <span className="text-neutral-400">丁酉月</span>
          </div>

          {/* 多语言切换 */}
          <div className="flex items-center space-x-4 text-neutral-400">
            <button className="hover:text-white transition-colors">EN</button>
            <span className="text-neutral-700">/</span>
            <button className="hover:text-white transition-colors">中文</button>
          </div>
        </header>

        {/* 页面主内容区域 (其他核心内容完全不受影响) */}
        <main className="flex-grow pt-24 pb-12">
          {children}
        </main>

        {/* 极简页脚与增加的合规/概念导航入口 */}
        <footer className="border-t border-[#262626] py-8 text-center text-[10px] text-neutral-400 uppercase tracking-widest bg-[#0e0e10]">
          <div className="max-w-md mx-auto mb-6 yao-yang opacity-40"></div>
          
          {/* 增加的功能与合规链接 */}
          <div className="flex justify-center items-center space-x-6 mb-6 text-neutral-400 text-[11px]">
            <Link href="/dictionary" className="hover:text-[#F5F4F0] transition-colors">
              概念词典 / Dictionary
            </Link>
            <span className="text-neutral-700">•</span>
            <Link href="/terms" className="hover:text-[#F5F4F0] transition-colors">
              服务条款 / Terms
            </Link>
            <span className="text-neutral-700">•</span>
            <Link href="/privacy" className="hover:text-[#F5F4F0] transition-colors">
              隐私政策 / Privacy
            </Link>
          </div>

          <p>© 2026 CHRONO–FLOW. ORIENTAL SPATIOTEMPORAL MECHANICS & JUNGIAN ARCHETYPES.</p>
        </footer>

      </body>
    </html>
  );
}
