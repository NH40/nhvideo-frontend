import Image from 'next/image'
import type { UseFormWatch } from 'react-hook-form'

import type { IVideoFormData } from '@/types/studio-video.types'

interface Props {
  watch: UseFormWatch<IVideoFormData>
}

export function VideoFormRightSide({ watch }: Props) {
  return (
    <div>
      <div className='bg-description rounded-md overflow-hidden'>
        {watch('thumbnailUrl') ? (
          <Image
            alt='Uploaded thumbnail'
            src={watch('thumbnailUrl')}
            width={249}
            height={140}
            className='w-full'
          />
        ) : (
          <div className='w-[249] h-[140] bg-gray-900 font-medium text-sm flex items-center justify-center'>
            Ожидаем загрузку миниатюры...
          </div>
        )}
        <div className='text-sm p-2'>
          <span className='text-gray-400 text-[0.9rem] block mb-0.5'>
            Название видео:
          </span>
          <span>{watch('videoFileName')}</span>
        </div>
      </div>
    </div>
  )
}
