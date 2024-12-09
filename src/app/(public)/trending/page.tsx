import { Flame } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

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

export default async function TrendingPage() {
  const videos = await videoService.getTrendingVideos()

  return (
    <section>
      <Heading Icon={Flame}>Тренды</Heading>
      <div className='max-w-screen-2xl grid-6-cols'>
        {videos.data.length ? (
          videos.data.map(video => (
            <VideoItem
              key={video.id}
              video={video}
              Icon={Flame}
            />
          ))
        ) : (
          <div>Trends are temporarily unavailable</div>
        )}
      </div>
    </section>
  )
}
