import { Palette } from 'lucide-react'
import type { FC } from 'react'

export const Themes: FC = () => {
  return (
    <li>
      <button className='group py-3 flex items-center gap-5'>
        <Palette className='min-w-6 group-hover:text-primary transition group-hover:rotate-6' />
        <span>Тема</span>
      </button>
    </li>
  )
}
