import { BadgeCheck, type LucideIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { IVideo } from '@/types/video.types'

import { PAGE } from '@/config/public-page.config'

import { transformDate } from '@/utils/transform-date'
import { transformViews } from '@/utils/transform-views'

interface Props {
  video: IVideo
  Icon?: LucideIcon
}

export const VideoItem: FC<Props> = ({ video, Icon }) => {
  return (
    <div>
      <div>
        <Link href={PAGE.VIDEO(video.slug)}>
          <Image
            src={video.thumbnailUrl}
            width={250}
            height={140}
            alt={video.title || ''}
          />
        </Link>
        <Link href={PAGE.VIDEO(video.channel.slug)}>
          <Image
            src={video.channel.avatarUrl}
            width={30}
            height={30}
            alt={video.channel.name || ''}
          />
        </Link>
      </div>
      <div>
        <div>
          {Icon && <Icon />}
          <span>{transformViews(video.viewsCount)}</span>
        </div>
        <div>
          <span>{transformDate(video.createAt)}</span>
        </div>
      </div>
      <div>
        <Link href={PAGE.VIDEO(video.slug)}>{video.title}</Link>
      </div>
      <div>
        <Link href={PAGE.CHANNEL(video.channel.slug)}>
          <span className='text-gray-400 text-sm'>{video.channel.name}</span>
          <span>
            <BadgeCheck
              className='text-green-500'
              size={15}
            />
          </span>
        </Link>
      </div>
    </div>
  )
}
