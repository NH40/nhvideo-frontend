import { createContext, useContext, useEffect, useState } from 'react'
import type { ThemeType } from '@/types/theme.types'
import type { PropsWithChildren } from 'react'

type ThemeContextType = {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<ThemeType>('dark')

  // Only run on client side
  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem('theme') as ThemeType
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = document.documentElement
    root.classList.remove('light-theme', 'new-theme')
    if (theme !== 'dark') {
      root.classList.add(`${theme}-theme`)
    }
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div suppressHydrationWarning>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
