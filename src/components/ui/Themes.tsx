import { Palette } from 'lucide-react'
import { type FC, useEffect, useState } from 'react'

export const Themes: FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme ? savedTheme === 'dark' : true
  })

  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('light-theme', !isDarkTheme)
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light')
  }, [isDarkTheme])

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev)
  }

  return (
    <li>
      <button
        onClick={toggleTheme}
        className='group py-3 flex items-center gap-5'
      >
        <Palette className='min-w-6 group-hover:text-primary transition group-hover:rotate-6' />
        <span>Тема</span>
      </button>
    </li>
  )
}
