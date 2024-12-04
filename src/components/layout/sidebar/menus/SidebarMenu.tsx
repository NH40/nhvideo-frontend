import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { Themes } from '@/ui/Themes'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
  title?: string
  menu: ISidebarItem[]
  isTheme?: boolean
}

export function SidebarMenu({ menu, title, isTheme }: Props) {
  const pathname = usePathname()

  return (
    <nav>
      {title && (
        <div className='opacity-40 uppercase font-medium text-xs mb-3'>{title}</div>
      )}
      <ul>
        {menu.map(menuItem => (
          <MenuItem
            key={menuItem.label}
            item={menuItem}
            isActive={!!match(menuItem.link)(pathname)}
          />
        ))}
        {isTheme && <Themes />}
      </ul>
    </nav>
  )
}
