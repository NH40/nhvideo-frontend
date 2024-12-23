import { Gamepad2 } from 'lucide-react'
import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { PAGE } from '@/config/public-page.config'

import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
  title: 'Видео игры',
  description: 'Лучшие видео игры на платформе NH Video',
  alternates: {
    canonical: PAGE.VIDEO_GAMES
  },
  openGraph: {
    type: 'website',
    url: PAGE.VIDEO_GAMES,
    title: 'Видео игры'
  }
}

export default async function VideoGamesPage() {
  const { data: videos } = await videoService.getVideoGames()

  const sortedVideos = videos.videos

  return (
    <section>
      <Heading Icon={Gamepad2}>Видео игры</Heading>
      <div className='grid-6-cols'>
        {sortedVideos?.length ? (
          sortedVideos.map(video => (
            <VideoItem
              key={video.id}
              video={video}
            />
          ))
        ) : (
          <div>Видео игры временно недоступны или не найдены</div>
        )}
      </div>
    </section>
  )
}
