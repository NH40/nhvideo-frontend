'use client'

import { useQuery } from '@tanstack/react-query'
import dynamic from 'next/dynamic'

import type { ISingleVideoResponse } from '@/types/video.types'

import { CommentItem } from './CommentItem'
import { commentService } from '@/services/comment.service'

const DynamicAddCommentsForm = dynamic(
  () => import('./AddCommentsForm').then(mod => mod.AddCommentsForm),
  { ssr: false }
)

interface Props {
  video: ISingleVideoResponse
}

export function Comments({ video }: Props) {
  const { data, refetch } = useQuery({
    queryKey: ['comments', video.id],
    queryFn: () => commentService.byVideoPublicId(video.publicId),
    initialData: video.comments
  })

  return (
    <div className='border-t border-t-border pt-7 mt-7'>
      <DynamicAddCommentsForm
        videoId={video.id}
        refetch={refetch}
      />

      {!!data &&
        data.map(comment => (
          <CommentItem
            key={comment.id}
            comment={comment}
            refetch={refetch}
          />
        ))}
    </div>
  )
}
