'use client'

import { useQuery } from '@tanstack/react-query'
import cn from 'clsx'
import { useAtom } from 'jotai'
import { Flame } from 'lucide-react'
import type { FC } from 'react'

import { VideoItem } from '@/ui/video-item/VideoItem'

import { isShowedSidebarAtom } from '@/store/jotai.store'

import { videoService } from '@/services/video.service'

export const Explore: FC = () => {
  const [isShowedSidebar] = useAtom(isShowedSidebarAtom)

  const { data, isLoading } = useQuery({
    queryKey: ['explores'],
    queryFn: () => videoService.getExploreVideos()
  })

  //@ts-ignore
  const videos = data?.data?.videos || []
  console.log(videos)

  return (
    <div
      className={cn('grid  transition-all duration-300', {
        'max-w-[1300px] grid-cols-5 gap-6': isShowedSidebar,
        'grid-cols-6 gap-6': !isShowedSidebar
      })}
    >
      {isLoading
        ? 'Loading...'
        : (videos.length &&
            //@ts-ignore
            videos.map(video => (
              <VideoItem
                key={video.id}
                video={video}
                Icon={Flame}
              />
            ))) ||
          'No videos'}
    </div>
  )
}
