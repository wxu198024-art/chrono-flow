import InkBackground from '@/components/InkBackground'
import BirthForm from '@/components/BirthForm'

export default function Home() {
  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] overflow-x-clip bg-black text-white">
      {/* 2D Canvas 动态双圈/墨迹 */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <InkBackground />
      </div>

      {/* 居中渲染原组件 BirthForm */}
      <main className="relative z-10 mx-auto w-full max-w-xl px-4 py-12">
        <BirthForm />
      </main>
    </div>
  )
}
