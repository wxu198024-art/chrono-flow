import InkBackground from '@/components/InkBackground'
import BirthForm from '@/components/BirthForm'

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] overflow-x-clip bg-background text-foreground">
      {/* 2D Canvas 动态双圈与鼠标跟随 */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <InkBackground />
      </div>

      {/* 主体卡片容器 */}
      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 py-10">
        <BirthForm />
      </main>
    </div>
  )
}
