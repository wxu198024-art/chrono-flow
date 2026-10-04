'use client'

import Link from 'next/link'
import { useLanguage } from '@/context/LanguageContext' // 使用你原有的 LanguageContext
import { useTheme } from '@/context/ThemeContext'      // 使用你原有的 ThemeContext
import { LOCALES, LOCALE_META, type Locale } from '@/types/i18n'

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-6">
        {/* 点击 CHRONO–FLOW Logo 全局返回首页 */}
        <Link href="/" className="flex items-center gap-2.5 transition-opacity hover:opacity-80">
          <span className="relative flex size-5 items-center justify-center rounded-[5px] bg-foreground dark:bg-primary">
            <span className="size-1.5 rounded-full bg-background" />
          </span>
          <span className="text-sm font-bold tracking-tight">{'CHRONO–FLOW'}</span>
        </Link>

        {/* 右侧：风格切换（白底/青黑底） + 语言选择（EN -> JA -> TW -> ZH） */}
        <div className="flex items-center gap-3">
          {/* 风格切换按钮 */}
          <button
            onClick={toggleTheme}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background text-xs hover:bg-muted"
            title="Toggle Theme"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>

          {/* 语言选择下拉菜单 */}
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value as Locale)}
            className="h-8 rounded-full border border-border bg-background px-3 font-mono text-xs font-medium tracking-wider text-foreground outline-none hover:bg-muted cursor-pointer"
          >
            {LOCALES.map((code) => (
              <option key={code} value={code}>
                {LOCALE_META[code].code} - {LOCALE_META[code].label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  )
}
