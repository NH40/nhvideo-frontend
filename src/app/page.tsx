'use client'

import { useQuery } from '@tanstack/react-query'

import { VideoItem } from '@/ui/video-item/VideoItem'

import { videoService } from '@/services/video.service'

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ['explores'],
    queryFn: () => videoService.getExploreVideos()
  })

  //@ts-ignore
  const videos = data?.data?.videos || []

  return (
    <div>
      {isLoading
        ? 'Loading...'
        : (videos.length &&
            //@ts-ignore
            videos.map(video => (
              <VideoItem
                key={video.id}
                video={video}
              />
            ))) ||
          'No videos'}
    </div>
  )
}
