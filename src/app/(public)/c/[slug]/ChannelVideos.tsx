import { Video } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { VideoItem } from '@/ui/video-item/VideoItem'

import type { IChannel } from '@/types/channel.types'

export function ChannelVideos({ videos }: { videos: IChannel['videos'] }) {
  return (
    <section className='mb-10'>
      <Heading Icon={Video}>Видео</Heading>
      <div className='grid-6-cols'>
        {videos.map(video => (
          <VideoItem
            key={video.id}
            video={video}
          />
        ))}
      </div>
    </section>
  )
}
