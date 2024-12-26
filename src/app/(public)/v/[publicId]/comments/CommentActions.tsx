import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'

import type { IComment } from '@/types/comment.types'

import { useAuthStore } from '@/store/auth.store'

import { commentService } from '@/services/comment.service'

interface Props {
  comment: IComment
  refetch: () => void
  newText: string
}

export function CommentActions({ comment, refetch, newText }: Props) {
  const { isLoggedIn, user } = useAuthStore()

  const { mutate: update, isPending } = useMutation({
    mutationKey: ['update comment'],
    mutationFn: () =>
      commentService.update(comment.id, { text: newText, videoId: comment.videoId }),
    onSuccess: () => {
      refetch()
      toast.success('Комментарий успешно обновлен!')
    }
  })

  const { mutate: deleteComment, isPending: isDeletePending } = useMutation({
    mutationKey: ['delete comment'],
    mutationFn: () => commentService.delete(comment.id),
    onSuccess: () => {
      refetch()
      toast.success('Комментарий успешно удален!')
    }
  })

  if (!isLoggedIn) return null
  if (user?.id !== comment.user.id) return null

  return (
    <div className='flex items-center gap-3 mt-3'>
      <button
        className='text-gray-400 text-sm opacity-90 hover:opacity-100 transition-opacity'
        disabled={isPending}
        onClick={() => update()}
      >
        Сохранить
      </button>
      <button
        className='text-gray-400 text-sm opacity-90 hover:opacity-100 transition-opacity'
        disabled={isDeletePending}
        onClick={() => deleteComment()}
      >
        Удалить
      </button>
    </div>
  )
}
