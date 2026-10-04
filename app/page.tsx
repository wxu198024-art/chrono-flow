import Header from '@/components/Header'
import Footer from '@/components/Footer'
import InkBackground from '@/components/InkBackground'
import BirthForm from '@/components/BirthForm'

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-background text-foreground">
      {/* 底层：你原有的 2D Canvas 动态物理双圈与鼠标跟随 */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <InkBackground />
      </div>

      {/* 顶层：v0 现代极简布局 */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main className="relative mx-auto w-full max-w-5xl flex-1 px-6 py-12">
          {/* 表单或已锚定卡片容器 */}
          <BirthForm />
        </main>

        <Footer />
      </div>
    </div>
  )
}
