import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { Explore } from './explore/Explore'
import { videoService } from '@/services/video.service'

export const revalidate = 120
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Главная',
  description: 'Лучшие видео на платформе NH Video',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'NH Video'
  }
}

export default async function HomePage() {
  const data = await videoService.getTrendingVideos()
  const trendingVideos = data.data.slice(0, 6)

  return (
    <section>
      <section className='mb-10'>
        <Heading Icon={Flame}>Тренды</Heading>
        <div className='max-w-screen-2xl grid-6-cols'>
          {!!trendingVideos?.length &&
            trendingVideos.map(video => (
              <VideoItem
                key={video.id}
                video={video}
                Icon={Flame}
              />
            ))}
        </div>
      </section>
      <Explore />
    </section>
  )
}
