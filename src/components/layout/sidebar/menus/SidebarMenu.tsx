import { useAtom } from 'jotai'
import { usePathname } from 'next/navigation'
import { match } from 'path-to-regexp'

import { PAGE } from '@/config/public-page.config'

import { useAuthStore } from '@/store/auth.store'
import { isShowedSidebarAtom } from '@/store/jotai.store'

import type { ISidebarItem } from '../sidebar.types'

import { MenuItem } from './MenuItem'
import { MyChannelMenuItem } from './MyChannelMenuItem'

interface Props {
  title?: string
  menu: ISidebarItem[]
}

export function SidebarMenu({ menu, title }: Props) {
  const pathname = usePathname()
  const { isLoggedIn } = useAuthStore()
  const [isShowedSidebar] = useAtom(isShowedSidebarAtom)

  return (
    <nav>
      {title && isShowedSidebar && (
        <div className='opacity-40 uppercase font-medium text-xs mb-3'>{title}</div>
      )}
      <ul>
        {menu.map(menuItem => {
          const props = {
            item: menuItem,
            isActive: !!match(menuItem.link)(pathname)
          }

          const isMyChannel = menuItem.link === PAGE.MY_CHANNEL
          const isMyChannelItem = isMyChannel && isLoggedIn

          return isMyChannelItem ? (
            <MyChannelMenuItem
              key={menuItem.label}
              {...props}
            />
          ) : isMyChannel ? null : (
            <MenuItem
              key={menuItem.label}
              {...props}
            />
          )
        })}
      </ul>
    </nav>
  )
}
