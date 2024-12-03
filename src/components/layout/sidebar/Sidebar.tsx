import type { FC } from 'react'

import { SidebarHeader } from './header/SidebarHeader'
import { SidebarMenu } from './menus/SidebarMenu'
import { SidebarChanel } from './menus/subscriptions/SidebarChanel'
import { MORE_SIDEBAR_DATA, SIDEBAR_DATA } from './sidebar.data'

interface Props {
  toggleSidebar: () => void
}

const Sidebar: FC<Props> = ({ toggleSidebar }) => {
  return (
    <aside className='p-layout border-r border-border whitespace-nowrap overflow-hidden'>
      <SidebarHeader toggleSidebar={toggleSidebar} />
      <SidebarMenu menu={SIDEBAR_DATA} />
      <SidebarChanel />
      <SidebarMenu
        title='Больше о NH Video'
        menu={MORE_SIDEBAR_DATA}
      />
    </aside>
  )
}

export default Sidebar
