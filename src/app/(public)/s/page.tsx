import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { SPage } from './SPage'

export const metadata: Metadata = {
  title: 'Поиск',
  ...NO_INDEX_PAGE
}

export default function Page() {
  return <SPage />
}
