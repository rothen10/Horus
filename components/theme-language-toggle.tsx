'use client'

import { useTheme } from '@/lib/theme-context'
import { useLanguage } from '@/lib/language-context'
import { Moon, Sun, Globe } from 'lucide-react'

export default function ThemeLanguageToggle() {
  const { theme, toggleTheme } = useTheme()
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="flex items-center gap-2">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2.5 rounded-lg hover:bg-secondary transition-colors relative group"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-accent" />
        ) : (
          <Moon className="w-5 h-5 text-accent" />
        )}
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-secondary text-foreground text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </span>
      </button>

      {/* Language Toggle */}
      <button
        onClick={toggleLanguage}
        className="p-2.5 rounded-lg hover:bg-secondary transition-colors relative group flex items-center gap-1"
        aria-label="Toggle language"
      >
        <Globe className="w-5 h-5 text-accent" />
        <span className="text-sm font-medium text-foreground">
          {language === 'fr' ? 'EN' : 'FR'}
        </span>
        <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-secondary text-foreground text-xs rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          {language === 'fr' ? 'English' : 'Français'}
        </span>
      </button>
    </div>
  )
}
