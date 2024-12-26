import { Video } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { HorizontalVideoItem } from '@/ui/video-item/HorizontalVideoItem'

import type { IChannel } from '@/types/channel.types'

export function ChannelVideos({ videos }: { videos: IChannel['videos'] }) {
  return (
    <section className='mb-10'>
      <Heading Icon={Video}>Видео</Heading>
      <div>
        {videos.map(video => (
          <HorizontalVideoItem
            key={video.id}
            video={video}
          />
        ))}
      </div>
    </section>
  )
}
