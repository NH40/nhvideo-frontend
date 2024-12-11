'use client'

import cn from 'clsx'
import { useAtom } from 'jotai'
import { type PropsWithChildren, useEffect } from 'react'

import { isShowedSidebarAtom } from '@/store/jotai.store'

import { Content } from './content/Content'
import { Sidebar } from './sidebar/Sidebar'
import { authService } from '@/services/auth.service'

import styles from './Layout.module.scss'

export function MainLayout({ children }: PropsWithChildren<unknown>) {
  const [isShowedSidebar] = useAtom(isShowedSidebarAtom)

  useEffect(() => {
    authService.initializeAuth()
  }, [])

  return (
    <main
      className={cn(
        'flex min-h-screen',
        styles.initialSidebar,
        isShowedSidebar ? styles.showedSidebar : styles.hidedSidebar
      )}
    >
      <Sidebar />
      <Content>{children}</Content>
    </main>
  )
}
