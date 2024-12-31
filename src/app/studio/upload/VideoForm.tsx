import { Controller, type UseFormReturn } from 'react-hook-form'

import { Field } from '@/ui/field/Field'
import { Textarea } from '@/ui/field/Textarea'
import { TagsField } from '@/ui/tags-field/TagsField'
import { UploadField } from '@/ui/upload-field/UploadField'

import type { IVideoFormData } from '@/types/studio-video.types'

import { stripHtmlWithBreak } from '@/utils/strip-html'

import { UploadSkeleton } from './UploadSkeleton'
import { VideoFormRightSide } from './VideoFormRightSide'

interface Props {
  isPending?: boolean
  isReadyToPublish?: boolean
  form: UseFormReturn<IVideoFormData, any, undefined>
}

export function VideoForm({
  form: {
    formState: { errors },
    control,
    register,
    watch
  },
  isPending,
  isReadyToPublish
}: Props) {
  return (
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

            <Controller
              control={control}
              name='description'
              render={({ field: { onChange, value }, fieldState: { error } }) => (
                <Textarea
                  label='Описание'
                  value={stripHtmlWithBreak(value || '')}
                  onChange={e => onChange(e.target.value)}
                  error={error?.message}
                  placeholder='Введите описание:'
                  rows={7}
                />
              )}
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

          <VideoFormRightSide watch={watch} />
        </>
      )}
    </div>
  )
}
