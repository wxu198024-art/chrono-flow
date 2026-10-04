'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/theme-toggle'
import { LanguageSelect } from '@/components/language-select'
import { useLocale } from '@/components/providers'

export function SiteHeader() {
  const { t } = useLocale()

  return (
    <header className="glass sticky top-0 z-50 border-b border-border/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        {/* 点击 Logo 全局返回首页 */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80" aria-label={t.nav.home}>
          <span className="relative flex size-5 items-center justify-center rounded-[5px] bg-foreground dark:bg-primary dark:shadow-[0_0_14px_-2px_var(--primary)]">
            <span className="size-1.5 rounded-full bg-background" />
          </span>
          <span className="text-sm font-bold tracking-tight">{'CHRONO–FLOW'}</span>
        </Link>

        {/* 右侧：主题切换 + 语言选择器 */}
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <LanguageSelect />
        </div>
      </div>
    </header>
  )
}