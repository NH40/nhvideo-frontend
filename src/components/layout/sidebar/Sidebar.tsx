import { useAtom } from 'jotai'
import dynamic from 'next/dynamic'

import { Themes } from '@/ui/Themes'

import { isShowedSidebarAtom } from '@/store/jotai.store'

import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarSubscriptions } from './menus/subscriptions/SidebarSubscriptions'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

const DynamicLogout = dynamic(() => import('./Logout').then(mod => mod.Logout), {
  ssr: false
})

export function Sidebar() {
  const [isShowedSidebar] = useAtom(isShowedSidebarAtom)
  return (
    <aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
      <SidebarHeader />
      <SidebarMenu menu={SIDEBAR_DATA} />
      <SidebarSubscriptions />
      <SidebarMenu
        title='Узнать больше о NH Video'
        menu={MORE_SIDEBAR_DATA}
      />
      <DynamicLogout />
      {isShowedSidebar && <Themes />}
    </aside>
  )
}
