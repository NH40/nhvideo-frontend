import * as m from 'framer-motion/m'
import Image from 'next/image'
import Link from 'next/link'

import type { IPlaylist } from '@/types/playlist.types'

import { PAGE } from '@/config/public-page.config'

interface Props {
  playlist: IPlaylist
}

export function PlaylistItem({ playlist }: Props) {
  return (
    <m.div
      whileHover={{
        scale: 1.01,
        y: -5
      }}
      transition={{
        type: 'spring',
        stiffness: 500,
        damping: 30
      }}
    >
      <div className='mb-6'>
        <Link
          href={PAGE.PLAYLISTS(playlist.id)}
          className='relative block'
        >
          <div className='rounded-lg shadow-lg absolute w-10/12 h-full left-[8.5%] -top-3 bg-[#666876]' />
          <div className='rounded-lg shadow-lg absolute w-11/12 h-full left-[4.1%] -top-1.5 bg-[#9294a1]' />
          {!!playlist.videos[0]?.thumbnailUrl ? (
            <Image
              src={playlist.videos[0]?.thumbnailUrl}
              width={290}
              height={163}
              alt={playlist.title}
              quality={100}
              className='rounded-lg shadow-lg relative'
            />
          ) : (
            <div className='w-[290] h-[163] rounded-lg shadow-lg relative' />
          )}
          <div className='absolute bottom-1.5 right-1.5 py-0.5 text-xs font-medium bg-black/40 rounded px-1.5'>
            {playlist.videos.length} видео
          </div>
        </Link>

        <div className='mt-2 font-medium'>
          <Link
            href={PAGE.PLAYLISTS(playlist.id)}
            className='line-clamp-2 leading-[1.3]'
          >
            {playlist.title}
          </Link>
        </div>
      </div>
    </m.div>
  )
}
