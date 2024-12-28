import { useMutation } from '@tanstack/react-query'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Controller, type SubmitHandler, type UseFormReturn } from 'react-hook-form'
import toast from 'react-hot-toast'

import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'
import { Textarea } from '@/ui/field/Textarea'
import { TagsField } from '@/ui/tags-field/TagsField'
import { UploadField } from '@/ui/upload-field/UploadField'

import type { IVideoFormData } from '@/types/studio-video.types'

import { STUDIO_PAGE } from '@/config/studio-page'

import { UploadSkeleton } from './UploadSkeleton'
import { studioVideoService } from '@/services/studio/studio-video.service'

interface Props {
  form: UseFormReturn<IVideoFormData, any, undefined>
  isReadyToPublish: boolean
}

export function VideoForm({
  form: {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
    watch
  },
  isReadyToPublish
}: Props) {
  const router = useRouter()

  const { mutate, isPending } = useMutation({
    mutationKey: ['create a video'],
    mutationFn: (data: IVideoFormData) => studioVideoService.create(data),
    onSuccess() {
      reset()
      toast.success('Видео успешно опубликовано!')
      router.push(STUDIO_PAGE.HOME)
    },
    onError() {
      toast.error('Видео не удалось опубликовать!')
    }
  })

  const onSubmit: SubmitHandler<IVideoFormData> = data => {
    mutate(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='grid-cols-[2.5fr_1fr] grid gap-10'>
        {isPending ? (
          <UploadSkeleton />
        ) : (
          <>
            <div>
              <Field
                label='Название'
                type='text'
                registration={register('title', {
                  required: 'Название видео обязательно!'
                })}
                error={errors.title?.message}
                placeholder='Введите название:'
              />
              <Textarea
                label='Описание'
                registration={register('description', {
                  required: 'Описание видео обязательно!'
                })}
                error={errors.description?.message}
                placeholder='Введите описание:'
                rows={7}
              />

              <Controller
                control={control}
                name='thumbnailUrl'
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <UploadField
                    label='Миниатюра:'
                    onChange={onChange}
                    value={value}
                    error={error}
                    folder='thumbnails'
                    className='mb-5'
                    sizePreview={[151, 82]}
                  />
                )}
              />

              <Controller
                control={control}
                name='tags'
                render={({ field: { onChange, value }, fieldState: { error } }) => (
                  <TagsField
                    label='Теги:'
                    onTagsChange={onChange}
                    tags={value}
                    error={error?.message}
                  />
                )}
              />
            </div>

            <div>
              <div className='bg-gray-700 rounded-md overflow-hidden'>
                {watch('thumbnailUrl') ? (
                  <Image
                    alt='Uploaded thumbnail'
                    src={watch('thumbnailUrl')}
                    width={249}
                    height={140}
                  />
                ) : (
                  <div className='w-[249] h-[140] bg-gray-900 font-medium text-sm flex items-center justify-center'>
                    Ожидание загрузки миниатюры...
                  </div>
                )}
                <div className='text-sm p-2'>
                  <span className='text-gray-400 text-[0.9rem] block mb-0.5'>
                    Имя файла:
                  </span>
                  <span>{watch('videoFileName')}</span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className='text-right mt-4'>
        <Button
          type='submit'
          disabled={!isReadyToPublish}
          isLoading={isPending}
        >
          {isReadyToPublish ? 'Публиковать' : 'Ожидание обработки...'}
        </Button>
      </div>
    </form>
  )
}
