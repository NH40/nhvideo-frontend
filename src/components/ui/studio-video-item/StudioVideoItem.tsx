import dayjs from 'dayjs'
import parse from 'html-react-parser'
import Image from 'next/image'
import Link from 'next/link'

import type { IFullVideo } from '@/types/video.types'

import { PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page'

import { formatViews } from '@/utils/format-views'
import { processHtmlContent } from '@/utils/process-html-content'

import { StudioActions } from './StudioActions'

interface Props {
  video: IFullVideo
}

export function StudioVideoItem({ video }: Props) {
  const { initialContent } = processHtmlContent(video.description, 1)

  return (
    <div className='grid grid-cols-[.49fr_1.1fr_0.3fr_0.3fr_0.3fr_0.2fr_0.5fr] gap-6 mb-6 border-b border-b-border pb-6 last:border-none'>
      <Link
        href={PAGE.VIDEO(video.publicId)}
        target='_blank'
        className='flex-shrink-0'
      >
        <Image
          src={video.thumbnailUrl}
          width={206}
          height={116}
          alt={video.title}
          className='rounded-md'
        />
      </Link>

      <div>
        <Link
          href={STUDIO_PAGE.EDIT_VIDEO(video.id)}
          className='line-clamp-1 text-lg mb-1'
        >
          {video.title}
        </Link>

        <div className='opacity-50'>{parse(initialContent)}</div>
      </div>

      <div>
        <div className='text-gray-400'>
          {dayjs(video.createdAt).format('DD MMM YYYY')}
        </div>
        <div className='text-gray-600'>Опубликовано</div>
      </div>

      <div>
        <div className='text-gray-400'>{formatViews(video.viewsCount)}</div>
      </div>

      <div>
        <div className='text-gray-400'>
          {video.comments.length.toLocaleString('ru-RU')} комментариев
        </div>
      </div>

      <div>
        <div className='text-gray-400'>
          {video.likes.length.toLocaleString('ru-RU')} лайков
        </div>
      </div>

      <StudioActions video={video} />
    </div>
  )
}
