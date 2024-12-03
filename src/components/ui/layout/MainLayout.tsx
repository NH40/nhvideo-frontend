'use client'

import cn from 'clsx'
import { useAtom } from 'jotai'
import { type PropsWithChildren } from 'react'

import { isShowedSidebarAtom } from '@/store/jotai.store'

import { Content } from './content/Content'
import Sidebar from './sidebar/Sidebar'

import styles from './MainLayout.module.scss'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
  const [isShowedSidebar, setIsShowedSidebar] = useAtom(isShowedSidebarAtom)
  // const [isShowedSidebar, setIsShowedSidebar] = useState<boolean>(true)

  const toggleSidebar = () => {
    setIsShowedSidebar(!isShowedSidebar)
  }

  return (
    <main
      className={cn(
        'flex min-h-screen',
        isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
      )}
    >
      <Sidebar toggleSidebar={toggleSidebar} />
      <Content> {children}</Content>
    </main>
  )
}
