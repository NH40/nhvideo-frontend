import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { type SubmitHandler, type UseFormReturn } from 'react-hook-form'

import { Button } from '@/ui/button/Button'

import type { IVideoFormData } from '@/types/studio-video.types'

import { STUDIO_PAGE } from '@/config/studio-page'

import { VideoForm } from './VideoForm'
import { studioVideoService } from '@/services/studio/studio-video.service'

interface Props {
  form: UseFormReturn<IVideoFormData, any, undefined>
  isReadyToPublish: boolean
}

export function CreateVideoForm({ form, isReadyToPublish }: Props) {
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationKey: ['create a video'],
    mutationFn: (data: IVideoFormData) => studioVideoService.create(data),
    async onSuccess() {
      form.reset()
      const { toast } = await import('react-hot-toast')
      toast.success('Video successfully published!')
      router.push(STUDIO_PAGE.HOME)
    },
    async onError() {
      const { toast } = await import('react-hot-toast')
      toast.error('Video creating has error!')
    }
  })

  const onSubmit: SubmitHandler<IVideoFormData> = data => {
    mutate(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <VideoForm form={form} />
      <div className='text-right mt-4'>
        <Button
          type='submit'
          disabled={!isReadyToPublish}
          isLoading={isPending}
        >
          {isReadyToPublish ? 'Публиковать' : 'Публикуем...'}
        </Button>
      </div>
    </form>
  )
}
