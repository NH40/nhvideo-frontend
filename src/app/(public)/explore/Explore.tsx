'use client'

import { useQuery } from '@tanstack/react-query'
import { Compass } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { useAuthStore } from '@/store/auth.store'

import { videoService } from '@/services/video.service'

export function Explore() {
  const { user } = useAuthStore()

  const { data, isLoading } = useQuery({
    queryKey: ['explore'],
    queryFn: () => videoService.getExploreVideos(user?.id)
  })

  const recomendedVideos = data?.data.videos

  return (
    <section>
      <Heading Icon={Compass}>Рекомендации</Heading>
      <div className='grid grid-cols-6 gap-3'>
        {isLoading ? (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        ) : (
          recomendedVideos?.length &&
          recomendedVideos.map(video => (
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
