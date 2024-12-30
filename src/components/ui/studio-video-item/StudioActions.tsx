'use client'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Edit, ExternalLink, Trash2 } from 'lucide-react'
import Link from 'next/link'
import { type Toast, toast } from 'react-hot-toast'

import type { IVideo } from '@/types/video.types'

import { PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page'

import { studioVideoService } from '@/services/studio/studio-video.service'

interface Props {
  video: IVideo
}

export function StudioActions({ video }: Props) {
  const queryClient = useQueryClient()

  const { mutate: deleteVideo, isPending: isDeletePending } = useMutation({
    mutationKey: ['delete a video'],
    mutationFn: () => studioVideoService.delete(video.id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['studioVideoList']
      })
      toast.success('Видео успешно удалено!')
    }
  })

  const handleDelete = () => {
    toast((t: Toast) => (
      <div>
        <p>Вы уверены, что хотите удалить это видео?</p>
        <div className='flex justify-end gap-4 mt-2'>
          <button
            onClick={() => {
              deleteVideo()
              toast.dismiss(t.id)
            }}
            className='text-red-600'
          >
            Удалить
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className='text-gray-400'
          >
            Отмена
          </button>
        </div>
      </div>
    ))
  }

  return (
    <div className='flex justify-center items-start gap-5'>
      <Link
        href={PAGE.VIDEO(video.publicId)}
        className='text-blue-600 transition-opacity opacity-70 hover:opacity-100'
        target='_blank'
        title='Открыть в новой вкладке'
      >
        <ExternalLink size={22} />
      </Link>
      <Link
        href={STUDIO_PAGE.EDIT_VIDEO(video.id)}
        className='text-orange-500 transition-opacity opacity-70 hover:opacity-100'
        title='Редактировать видео'
      >
        <Edit size={22} />
      </Link>
      <button
        onClick={handleDelete}
        className='text-red-600 transition-opacity opacity-70 hover:opacity-100'
        title='Удалить видео'
        disabled={isDeletePending}
      >
        <Trash2 size={22} />
      </button>
    </div>
  )
}
