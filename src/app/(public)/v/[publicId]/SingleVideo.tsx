'use client'

import cn from 'clsx'
import { useAtomValue } from 'jotai'
import { useState } from 'react'

import { Heading } from '@/ui/Heading'
import { VideoPlayer } from '@/ui/video-player/VideoPlayer'

import type { ISingleVideoResponse } from '@/types/video.types'

import { isShowedSidebarAtom } from '@/store/jotai.store'

import { formatViews } from '@/utils/format-views'

import { SimilarVideos } from './SimilarVideos'
import { VideoDescription } from './description/VideoDescription'
import { VideoActions } from './video-actions/VideoActions'
import { VideoChannel } from './video-channel/VideoChannel'
import { Comments } from './сomments/Comments'

interface Props {
  video: ISingleVideoResponse
}

export function SingleVideo({ video }: Props) {
  const [isTheaterMode, setIsTheaterMode] = useState(false)
  const isShowedSidebar = useAtomValue(isShowedSidebarAtom)

  return (
    <section className='grid gap-16 grid-cols-[3fr_.8fr] relative'>
      <div>
        <div className={cn(isTheaterMode ? 'absolute top-0 left-0 w-full' : 'relative')}>
          <VideoPlayer
            fileName={video.videoFileName}
            toggleTheaterMode={() => {
              setIsTheaterMode(!isTheaterMode)
            }}
            maxResolution={video.maxResolution}
          />
        </div>

        <div
          className={cn(
            'flex justify-between items-start pb-6 mb-6 border-b border-border',
            {
              'pt-[45.5rem]': isShowedSidebar && isTheaterMode,
              'pt-[50.5rem]': isTheaterMode
            }
          )}
        >
          <div>
            <Heading
              className='mb-1'
              isH1
              classNameHeading='text-xl'
            >
              {video.title}
            </Heading>
            <div className='text-gray-400'>{formatViews(video.viewsCount)}</div>
          </div>
          <VideoActions video={video} />
        </div>
        <VideoChannel video={video} />

        <VideoDescription description={video.description} />

        <Comments video={video} />
      </div>

      {!!video.similarVideos.length && (
        <div
          className={cn({
            'pt-[45.5rem]': isShowedSidebar && isTheaterMode,
            'pt-[50.5rem]': isTheaterMode
          })}
        >
          <SimilarVideos videos={video.similarVideos} />
        </div>
      )}
    </section>
  )
}
