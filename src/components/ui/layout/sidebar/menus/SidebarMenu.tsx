import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'
import type { FC } from 'react'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
  title?: string
  menu: ISidebarItem[]
}

export const SidebarMenu: FC<Props> = ({ menu, title }) => {
  const pathname = usePathname()
  return (
    <nav>
      {title && (
        <div className='opacity-40 uppercase font-medium text-xs mb-3'>{title}</div>
      )}
      <ul>
        {menu.map(item => (
          <MenuItem
            item={item}
            key={item.label}
            isActive={!!match(item.path)(pathname)}
          />
        ))}
      </ul>
    </nav>
  )
}
