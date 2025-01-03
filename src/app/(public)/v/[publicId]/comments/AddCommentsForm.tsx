import { useMutation } from '@tanstack/react-query'
import { type SubmitHandler, useForm } from 'react-hook-form'

import { Textarea } from '@/ui/field/Textarea'

import type { ICommentData } from '@/types/comment.types'

import { useAuthStore } from '@/store/auth.store'

import { commentService } from '@/services/comment.service'

interface Props {
  videoId: string
  refetch: () => void
}

export function AddCommentsForm({ refetch, videoId }: Props) {
  const { isLoggedIn } = useAuthStore()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ICommentData>({
    mode: 'onChange'
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ['create comment'],
    mutationFn: (data: ICommentData) => commentService.create(data),
    async onSuccess() {
      const { toast } = await import('react-hot-toast')
      refetch()
      reset()
      toast.success('Комментарий успешно добавлен!')
    }
  })

  const onSubmit: SubmitHandler<ICommentData> = ({ text }) => {
    mutate({
      text,
      videoId
    })
  }

  if (!isLoggedIn) return null

  return (
    <div className='mb-4'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='grid grid-cols-[7fr_1fr] gap-14'
      >
        <Textarea
          registration={register('text', {
            required: true
          })}
          placeholder='Введите комментарий:'
          wrapperClassName='mb-0'
          rows={1}
          error={errors.text?.message}
        />

        <button
          className='bg-border rounded font-medium h-max py-2.5'
          disabled={isPending}
        >
          {isPending ? 'Отправляем...' : 'Отправить'}
        </button>
      </form>
    </div>
  )
}
