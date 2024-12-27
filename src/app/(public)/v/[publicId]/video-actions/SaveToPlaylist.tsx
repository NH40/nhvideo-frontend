import { useMutation } from '@tanstack/react-query'
import { AnimatePresence, m } from 'framer-motion'
import { Check, ListVideo } from 'lucide-react'
import toast from 'react-hot-toast'

import { useOutside } from '@/hooks/useOutside'

import type { ISingleVideoResponse } from '@/types/video.types'

import { useUserPlaylists } from '@/app/(user)/playlists/useUserPlaylists'
import { playlistService } from '@/services/playlist.service'

interface Props {
  video: ISingleVideoResponse
}

export function SaveToPlaylist({ video }: Props) {
  const { data, refetch: refetchPlaylists } = useUserPlaylists()

  const { isShow, ref, setIsShow } = useOutside(false)

  const { mutate: togglePlaylist, isPending } = useMutation({
    mutationKey: ['toggle video'],
    mutationFn: (playlistId: string) =>
      playlistService.toggleVideoInPlaylist(playlistId, video.id),
    onSuccess() {
      toast.success('Успешно изменено!', {
        id: 'playlist'
      })
      setIsShow(false)
      refetchPlaylists()
    }
  })

  return (
    <div
      className='relative z-10'
      ref={ref}
    >
      <button
        onClick={() => setIsShow(!isShow)}
        className='flex items-center gap-1 transition-opacity opacity-80 hover:opacity-100'
      >
        <ListVideo size={20} />
        Сохранить
      </button>
      <AnimatePresence>
        {isShow && (
          <m.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            <ul className='bg-description py-2 px-3 rounded absolute bottom-8 right-0 shadow w-max max-w-32'>
              {data?.data.map(playlist => (
                <li
                  key={playlist.id}
                  className='mb-1 text-sm'
                >
                  <button
                    onClick={() => {
                      togglePlaylist(playlist.id)
                    }}
                    className={
                      'border-b border-b-transparent transition-colors hover:text-primary flex items-center gap-1'
                    }
                    disabled={isPending}
                  >
                    {playlist.title}
                    {playlist.videos.some(v => v.id === video.id) && (
                      <Check size={16} />
                    )}{' '}
                  </button>
                </li>
              ))}
            </ul>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  )
}
