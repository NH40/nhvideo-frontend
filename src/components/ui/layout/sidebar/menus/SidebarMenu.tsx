import type { FC } from 'react'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'

interface Props {
  title?: string
  menu: ISidebarItem[]
}

export const SidebarMenu: FC<Props> = ({ menu, title }) => {
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
          />
        ))}
      </ul>
    </nav>
  )
}
