import type { Metadata } from 'next'

import { NO_INDEX_PAGE } from '@/constants/seo.constants'

import { UploadVideoMain } from './UploadVideoMain'

export const metadata: Metadata = {
  title: 'Загрузка видео',
  ...NO_INDEX_PAGE
}

export default function UploadVideoPage() {
  return <UploadVideoMain />
}
