'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'
import type { FC } from 'react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export const Explore: FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['explores'],
    queryFn: () => videoService.getExploreVideos()
  })

  //@ts-ignore
  const videos = data?.data?.videos || []
  console.log(videos)

  return (
    <section>
      <Heading Icon={Compass}>Рекомендации</Heading>
      <div className='max-w-screen-2xl grid grid-cols-6 gap-6'>
        {isLoading ? (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        ) : (
          videos.length &&
          //@ts-ignore
          videos.map(video => (
            <VideoItem
              key={video.id}
              video={video}
            />
          ))
        )}
      </div>
    </section>
  )
}
