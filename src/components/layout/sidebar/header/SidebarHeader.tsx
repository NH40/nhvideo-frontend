import { useAtom } from 'jotai'
import { Menu } from 'lucide-react'

import { isShowedSidebarAtom } from '@/store/jotai.store'

import { Logo } from './Logo'

export function SidebarHeader() {
  const [isShowedSidebar, setIsShowedSidebar] = useAtom(isShowedSidebarAtom)
  return (
    <div className='flex items-center gap-6 mb-12'>
      <button
        className='opacity-85 hover:opacity-100 transition-opacity'
        onClick={() => setIsShowedSidebar(!isShowedSidebar)}
        title={isShowedSidebar ? 'Скрыть сайдбар' : 'Показать сайдбар'}
      >
        <Menu />
      </button>

      <Logo />
    </div>
  )
}
