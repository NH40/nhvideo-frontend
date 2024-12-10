import { type FC, useEffect, useState } from 'react'

import { THEMES } from '@/constants/theme.constants'

import type { ThemeType } from '@/types/theme.types'

export const Themes: FC = () => {
  const [theme, setTheme] = useState<ThemeType>('dark')

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as ThemeType
    if (savedTheme) {
      setTheme(savedTheme)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('light-theme', 'new-theme')
    if (theme !== 'dark') {
      root.classList.add(`${theme}-theme`)
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className='flex items-center gap-2 p-layout bg-bg rounded-lg transition-colors duration-300 ml-[1.5rem]'>
      {THEMES.map(({ name, icon: Icon }) => (
        <button
          key={name}
          onClick={() => setTheme(name as ThemeType)}
          className={`p-2 rounded-md transition-colors duration-300 ${
            theme === name
              ? 'bg-primary text-white'
              : 'hover:bg-primary/90 hover:text-white'
          }`}
          title={`${name.charAt(0).toUpperCase() + name.slice(1)} theme`}
        >
          <Icon size={20} />
        </button>
      ))}
    </div>
  )
}
