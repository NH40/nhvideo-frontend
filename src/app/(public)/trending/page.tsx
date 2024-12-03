import type { Metadata } from 'next'

import { PAGE } from '@/config/public-page.config'

export const metadata: Metadata = {
  title: 'Тренды',
  description: 'Тренды на платформе NH Video',
  alternates: {
    canonical: PAGE.TRENDING
  },
  openGraph: {
    type: 'website',
    url: PAGE.TRENDING,
    title: 'Тренды'
  }
}

export default function TrendingPage() {
  return <div>Trending</div>
}
