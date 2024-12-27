import { useMutation } from '@tanstack/react-query'
import * as m from 'framer-motion/m'
import { X } from 'lucide-react'
import type { RefObject } from 'react'
import { type SubmitHandler, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { useHotkeys } from 'react-hotkeys-hook'

import { Heading } from '@/ui/Heading'
import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { Button } from '@/ui/button/Button'
import { Field } from '@/ui/field/Field'

import type { IPlaylistData } from '@/types/playlist.types'

import { playlistService } from '@/services/playlist.service'

interface Props {
  refetch: () => void
  onClose: () => void
  ref: RefObject<any | null>
}

export function CreatePlaylist({ refetch, onClose, ref }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<IPlaylistData>({
    mode: 'onChange'
  })

  useHotkeys('esc', e => {
    e.preventDefault()
    onClose()
  })

  const { mutate, isPending } = useMutation({
    mutationKey: ['create a playlist'],
    mutationFn: (data: IPlaylistData) => playlistService.createPlaylist(data),
    onSuccess() {
      refetch()
      reset()
      onClose()
      toast.success('Плейлист успешно создан!')
    },
    onError() {
      toast.error('Плейлист имеет ошибку!')
    }
  })

  const onSubmit: SubmitHandler<IPlaylistData> = data => {
    mutate(data)
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 50
      }}
    >
      <m.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'relative',
          width: '26rem'
        }}
      >
        <div
          className='bg-description rounded-lg p-6'
          ref={ref}
        >
          <button
            onClick={onClose}
            className='absolute top-2 right-2 text-text'
            title='Закрыть окно'
          >
            <X />
          </button>
          <Heading classNameHeading='text-xl'>Создание плейлиста</Heading>
          <form onSubmit={handleSubmit(onSubmit)}>
            {isPending ? (
              <SkeletonLoader count={2} />
            ) : (
              <>
                <Field
                  label='Название'
                  type='text'
                  registration={register('title', {
                    required: 'Название обязательное поле!'
                  })}
                  error={errors.title?.message}
                  placeholder='Введите название:'
                />
                <Field
                  label='Введите видео public id (из url)'
                  type='text'
                  registration={register('videoPublicId', {
                    required: 'Ненайденное видео public id!',
                    minLength: {
                      value: 10,
                      message: 'Видео public id должен быть не менее 10 символов!'
                    },
                    maxLength: {
                      value: 10,
                      message: 'Видео public id должен быть не более 10 символов!'
                    }
                  })}
                  error={errors.videoPublicId?.message}
                  placeholder='Введите public id видео:'
                />
              </>
            )}
            <div className='text-center mt-4'>
              <Button
                type='submit'
                isLoading={isPending}
              >
                Создать
              </Button>
            </div>
          </form>
        </div>
      </m.div>
    </div>
  )
}
