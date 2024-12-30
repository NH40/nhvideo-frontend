import type { PropsWithChildren } from 'react'

import { MainLayout } from '@/components/layout/MainLayout'

export default function UserLayout({ children }: PropsWithChildren<unknown>) {
  return <MainLayout>{children}</MainLayout>
}
