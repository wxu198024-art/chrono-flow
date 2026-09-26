import './globals.css';
import Link from 'next/link';
import Header from '@/components/Header';
import InkBackground from '@/components/InkBackground';

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
    <html lang="en" data-theme="dark">
      <body className="min-h-screen flex flex-col justify-between selection:bg-[var(--cinnabar)] selection:text-white relative bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        
        {/* 全局 Canvas 动态背景 (1px 几何爻线 + 双场域粒子) */}
        <InkBackground />

        {/* 顶部统一 Header (包含 Void/Form 阴阳切换与 LOCALE 多语言 Popover) */}
        <Header />

        {/* 页面主内容区域 */}
        <main className="flex-grow relative z-10 pt-20 pb-12">
          {children}
        </main>

        {/* 极简页脚 */}
        <footer className="border-t border-[var(--border-line)] py-8 text-center text-[10px] text-[var(--text-muted)] uppercase tracking-widest bg-[var(--bg-card)] backdrop-blur-md relative z-10 transition-colors duration-300">
          <div className="max-w-md mx-auto mb-6 yao-yang opacity-40"></div>
          
          {/* 概念与合规导航入口 */}
          <div className="flex justify-center items-center space-x-6 mb-6 text-[var(--text-secondary)] text-[11px]">
            <Link href="/dictionary" className="hover:text-[var(--text-primary)] transition-colors">
              概念词典 / Dictionary
            </Link>
            <span className="text-[var(--border-line)]">•</span>
            <Link href="/terms" className="hover:text-[var(--text-primary)] transition-colors">
              服务条款 / Terms
            </Link>
            <span className="text-[var(--border-line)]">•</span>
            <Link href="/privacy" className="hover:text-[var(--text-primary)] transition-colors">
              隐私政策 / Privacy
            </Link>
          </div>

          <p>© 2026 CHRONO–FLOW. ORIENTAL SPATIOTEMPORAL MECHANICS & JUNGIAN ARCHETYPES.</p>
        </footer>

      </body>
    </html>
  );
}
