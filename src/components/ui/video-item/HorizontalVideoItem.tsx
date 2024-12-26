import * as m from 'framer-motion/m'
import Image from 'next/image'
import Link from 'next/link'

import type { IVideo } from '@/types/video.types'

import { PAGE } from '@/config/public-page.config'

import { formatSubscribers } from '@/utils/format-subscribers'
import { transformCount } from '@/utils/transform-count'
import { transformDate } from '@/utils/transform-date'

import { VideoChannelName } from './VideoChannelName'
import { VideoItemTitle } from './VideoItemTitle'

interface Props {
  video: IVideo
}

export function HorizontalVideoItem({ video }: Props) {
  return (
    <m.div
      whileHover={{
        scale: 1.01,
        y: -5
      }}
      transition={{
        // пружина
        type: 'spring',
        // жесткость
        stiffness: 500,
        // демпфирование
        damping: 30
      }}
    >
      <div className='flex items-stretch gap-4 mb-6'>
        <Link
          href={PAGE.VIDEO(video.publicId)}
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
        <div className='flex flex-col justify-between'>
          <div>
            <div className='mb-1 text-lg'>
              <VideoItemTitle video={video} />
            </div>
            <div className='mb-1'>
              <VideoChannelName
                channel={video.channel}
                spanClassName='text-base mr-0.5'
              />
            </div>
          </div>
          <div className='flex items-center gap-2 pb-1'>
            <span className='text-gray-400 text-lg'>
              {transformCount(video.viewsCount)} {formatSubscribers(video.viewsCount)}
            </span>
            <span>•</span>
            <span className='text-gray-400'>{transformDate(video.createdAt)}</span>
          </div>
        </div>
      </div>
    </m.div>
  )
}
