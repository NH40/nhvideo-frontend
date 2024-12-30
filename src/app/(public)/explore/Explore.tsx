'use client'

import { useInfiniteQuery } from '@tanstack/react-query'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { VideoItem } from '@/ui/video-item/VideoItem'

import { useEffectScroll } from '@/hooks/useEffectScroll'

import { useAuthStore } from '@/store/auth.store'

import { videoService } from '@/services/video.service'

export function Explore() {
  const { user } = useAuthStore()

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['explore'],
      queryFn: ({ pageParam }) =>
        videoService.getExploreVideos(
          user?.id,
          {
            page: pageParam.page,
            limit: 12
          },
          pageParam.excludeIds
        ),
      initialPageParam: { page: 1, excludeIds: [] as string[] },
      getNextPageParam: (lastPage, allPages) => {
        const { page, totalPages } = lastPage
        const allVideoIds = allPages.flatMap(page => page.videos.map(video => video.id))

        return page < totalPages ? { page: page + 1, excludeIds: allVideoIds } : undefined
      }
    })

  useEffectScroll({
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  })

  const allVideos = data?.pages.flatMap(page => page.videos) || []

  return (
    <section className='grid-6-cols pb-5'>
      {isLoading && !allVideos.length ? (
        <SkeletonLoader
          count={6}
          className='h-36 rounded-md'
        />
      ) : (
        allVideos.map(video => (
          <VideoItem
            key={video.id}
            video={video}
          />
        ))
      )}

      {isFetchingNextPage && (
        <SkeletonLoader
          count={6}
          className='h-36 rounded-md'
        />
      )}
    </section>
  )
}
