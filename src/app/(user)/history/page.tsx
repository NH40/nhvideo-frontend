import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { HPage } from './HPage'

export const metadata: Metadata = {
  title: 'История',
  ...NO_INDEX_PAGE
}

export default function HistPage() {
  return <HPage />
}
