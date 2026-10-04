import { SiteHeader } from '@/components/site-header'
import { DailyRhythm } from '@/components/daily-rhythm'
import { CoreMatrix } from '@/components/core-matrix'
import { SiteFooter } from '@/components/site-footer'
import InkBackground from '@/components/InkBackground' // 缝合你原有的动态物理双圈与鼠标跟随组件

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background text-foreground">
      {/* 底层动态物理双圈背景：内逆外顺与向心粒子 */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <InkBackground />
      </div>

      {/* 顶部微光高质感 Grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        <div className="bg-dot-grid absolute inset-x-0 top-0 h-[760px] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      </div>

      {/* 上层内容区域 */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader />

        <main className="relative mx-auto w-full max-w-5xl flex-1 px-6">
          <DailyRhythm />
          <CoreMatrix />
        </main>

        <SiteFooter />
      </div>
    </div>
  )
}
