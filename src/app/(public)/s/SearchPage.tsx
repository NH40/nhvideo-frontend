'use client'

import { useQuery } from '@tanstack/react-query'
import { Search } from 'lucide-react'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { HorizontalVideoItem } from '@/ui/video-item/HorizontalVideoItem'

import { videoService } from '@/services/video.service'

export function SearchPage() {
  return (
    <Suspense
      fallback={
        <SkeletonLoader
          count={6}
          className='h-36 rounded-md'
        />
      }
    >
      <SearchContent />
    </Suspense>
  )
}

function SearchContent() {
  const searchParams = useSearchParams()

  const { data, isLoading } = useQuery({
    queryKey: ['search', searchParams.get('term')],
    queryFn: () => videoService.getAll(searchParams.get('term'))
  })

  const videos = data?.data?.videos || []

  return (
    <section>
      <Heading
        isH1
        Icon={Search}
      >
        Поиск: &quot;{searchParams.get('term')}&quot;
      </Heading>
      <div>
        {isLoading ? (
          <SkeletonLoader
            count={6}
            className='h-36 rounded-md'
          />
        ) : videos.length ? (
          videos.map(video => (
            <HorizontalVideoItem
              key={video.id}
              video={video}
            />
          ))
        ) : (
          <p>Видео не найдены</p>
        )}
      </div>
    </section>
  )
}
