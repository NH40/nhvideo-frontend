import { Flame } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { Explore } from './explore/Explore'
import { videoService } from '@/services/video.service'

export default async function HomePage() {
  const data = await videoService.getTrendingVideos()
  const trendingVideos = data.data.slice(0, 6)

  return (
    <section>
      <section className='mb-10'>
        <Heading Icon={Flame}>Тренды</Heading>
        <div className='max-w-screen-2xl grid grid-cols-6 gap-6'>
          {trendingVideos.length &&
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
