'use client'

import { useQuery } from '@tanstack/react-query'

import type { ISingleVideoResponse } from '@/types/video.types'

import { commentService } from '@/services/comment.service'

interface Props {
  video: ISingleVideoResponse
}

export function Comments({ video }: Props) {
  const { data, refetch } = useQuery({
    queryKey: ['comments', video.id],
    queryFn: () => commentService.byVideoPublicId(video.publicId),
    initialData: video.comments
  })

  return <div className='border-t border-t-border pt-7 mt-7'>Comments</div>
}
