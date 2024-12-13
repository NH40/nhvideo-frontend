import type { PropsWithChildren } from 'react'
import { createContext, useContext, useEffect, useState } from 'react'

import type { ThemeType } from '@/types/theme.types'

type ThemeContextType = {
  theme: ThemeType
  setTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: PropsWithChildren) {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState<ThemeType>('dark')

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('theme')
      if (savedTheme && (savedTheme === 'dark' || savedTheme === 'light' || savedTheme === 'new')) {
        setTheme(savedTheme as ThemeType)
      }
    } catch (error) {
      console.error('Error reading theme from localStorage:', error)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    try {
      const root = document.documentElement
      root.classList.remove('light-theme', 'new-theme')
      if (theme !== 'dark') {
        root.classList.add(`${theme}-theme`)
      }
      localStorage.setItem('theme', theme)
    } catch (error) {
      console.error('Error applying theme:', error)
    }
  }, [theme, mounted])

  if (!mounted) {
    return null
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
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
