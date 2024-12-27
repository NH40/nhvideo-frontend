import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { PPage } from './PPage'

export const metadata: Metadata = {
  title: 'Плейлисты',
  ...NO_INDEX_PAGE
}

export default function PLPage() {
  return <PPage />
}
