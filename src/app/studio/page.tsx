import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { StudioVideoListPage } from './StudioVideoListPage'

export const metadata: Metadata = {
  title: 'Студия',
  ...NO_INDEX_PAGE
}

export default function StudioPage() {
  return <StudioVideoListPage />
}
