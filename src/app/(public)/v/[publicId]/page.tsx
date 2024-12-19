import type { Metadata } from 'next'

import { Heading } from '@/ui/Heading'
import { VideoPlayer } from '@/ui/video-player/VideoPlayer'

import type { TPagePublicIdProp } from '@/types/page.types'

import { formatViews } from '@/utils/format-views'
import { stripHtml } from '@/utils/strip-html'

import { SimilarVideos } from './SimilarVideos'
import { VideoDescription } from './description/VideoDescription'
import { VideoActions } from './video-actions/VideoActions'
import { VideoChannel } from './video-channel/VideoChannel'
import { videoService } from '@/services/video.service'

export const revalidate = 100
export const dynamic = 'force-static'

export async function generateMetadata({
  params: { publicId }
}: TPagePublicIdProp): Promise<Metadata> {
  const data = await videoService.byPublicId(publicId)
  const video = data.data

  return {
    title: video.title,
    description: stripHtml(video.description).slice(0, 150),
    openGraph: {
      type: 'video.other',
      images: [video.thumbnailUrl]
    }
  }
}

export async function generateStaticParams() {
  const data = await videoService.getAll()

  return data.data.videos.map(video => ({
    publicId: video.publicId
  }))
}

export default async function VideoPage({ params: { publicId } }: TPagePublicIdProp) {
  const data = await videoService.byPublicId(publicId)
  const video = data.data

  return (
    <section className='grid grid-cols-[3fr_.8fr] gap-20'>
      <div>
        <div className='relative w-full rounded-2xl overflow-hidden shadow-md-video mb-6 '>
          <VideoPlayer fileName={video.videoFileName} />
        </div>
        <div className='flex justify-between items-start pb-6 mb-6 border-b border-border'>
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
        {/* TODO: Comments */}
      </div>
      {!!video.similarVideos.length && <SimilarVideos videos={video.similarVideos} />}
    </section>
  )
}
