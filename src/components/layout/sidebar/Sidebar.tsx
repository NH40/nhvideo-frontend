import { useAtom } from 'jotai'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'

import { Themes } from '@/ui/Themes'

import { STUDIO_PAGE } from '@/config/studio-page'

import { isShowedSidebarAtom } from '@/store/jotai.store'

import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA, STUDIO_SIDEBAR_DATA } from './sidebar.data'

const DynamicLogout = dynamic(() => import('./Logout').then(mod => mod.Logout), {
  ssr: false
})

export function Sidebar() {
  const [isShowedSidebar] = useAtom(isShowedSidebarAtom)
  const pathname = usePathname()

  return (
    <aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
      <SidebarHeader />
      <SidebarMenu menu={SIDEBAR_DATA} />

      <SidebarSubscriptions />

      {!!pathname.includes(STUDIO_PAGE.HOME) && (
        <>
          <SidebarMenu
            title='Студия'
            menu={STUDIO_SIDEBAR_DATA}
          />
          <span className='h-[1px] bg-border my-5 w-full block' />
        </>
      )}

      <SidebarMenu
        title='Узнать больше о NH Video'
        menu={MORE_SIDEBAR_DATA}
      />

      <DynamicLogout />

      {isShowedSidebar && <Themes />}
    </aside>
  )
}
