import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { SubPage } from './SubPage'

export const metadata: Metadata = {
  title: 'Подписки',
  ...NO_INDEX_PAGE
}

export default function SubsPage() {
  return <SubPage />
}
