import { useTheme } from '@/providers/ThemeProvider'

import { THEMES } from '@/constants/theme.constants'

import type { ThemeType } from '@/types/theme.types'

export function Themes() {
  const { theme, setTheme } = useTheme()

  return (
    <div className='flex items-center gap-2 p-layout bg-bg rounded-lg transition-colors duration-300 ml-2'>
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
