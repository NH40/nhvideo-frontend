'use client'

import { Heart } from 'lucide-react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { useProfile } from '@/hooks/useProfile'

export function SubscriptionsPage() {
  const { profile, isLoading } = useProfile()

  return (
    <section>
      <Heading
        isPageHeading
        Icon={Heart}
      >
        Подписки - видео
      </Heading>
      <div className='grid grid-cols-6 gap-6'>
        {isLoading ? (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        ) : profile?.subscribedVideos?.length ? (
          profile?.subscribedVideos?.map(video => (
            <VideoItem
              key={video.id}
              video={video}
            />
          ))
        ) : (
          <p>У вас нет подписок</p>
        )}
      </div>
    </section>
  )
}
