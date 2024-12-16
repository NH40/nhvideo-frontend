import type { Metadata } from 'next'
import Image from 'next/image'

import { SubscribeButton } from '@/components/SubscribeButton'

import { Heading } from '@/ui/Heading'
import { VerifiedBadge } from '@/ui/VerifiedBadge'

import type { TPageSlugProp } from '@/types/page.types'

import { transformCount } from '@/utils/transform-count'

import { ChannelVideos } from './ChannelVideos'
import { channelService } from '@/services/channel.service'

export const revalidate = 100
export const dynamic = 'force-static'

export async function generateMetadata(props: TPageSlugProp): Promise<Metadata> {
  const { slug } = await props.params

  const data = await channelService.bySlug(slug)
  const channel = data.data

  return {
    title: channel.user.name,
    description: channel.description,
    openGraph: {
      type: 'profile',
      images: [channel.bannerUrl]
    }
  }
}

export async function generateStaticParams() {
  const { data } = await channelService.getAll()

  return data.map(channel => ({
    slug: channel.slug
  }))
}

export default async function ChannelPage(props: TPageSlugProp) {
  const { slug } = await props.params
  const data = await channelService.bySlug(slug)
  const channel = data.data

  return (
    <section>
      <div>
        <div className='relative w-full h-[249px] rounded-2xl overflow-hidden shadow-md'>
          <Image
            alt={channel.user.name || ''}
            src={channel.bannerUrl}
            layout='fill'
            objectFit='cover'
            quality={100}
            priority
          />
        </div>
        <div className='flex items-start gap-5 mt-7 mb-12 w-1/2'>
          <Image
            alt={channel.slug}
            src={channel.avatarUrl}
            width={162}
            height={162}
            className='rounded-xl flex-shrink-0 shadow-md'
            quality={100}
            priority
          />
          <div>
            <Heading
              isPageHeading
              className='mb-3'
            >
              <span className='flex items-center gap-2'>
                {channel.user.name}
                {channel.isVerified && <VerifiedBadge size={26} />}
              </span>
            </Heading>
            <div className='mb-2 text-gray-400 text-[0.9rem] flex items-center gap-1'>
              <span>@{channel.slug}</span>
              <span>•</span>
              <span>{transformCount(channel.subscribers.length)} подписчиков</span>
              <span>•</span>
              <span>{channel.videos.length} видео</span>
            </div>
            <article className='mb-4 text-gray-400 text-sm leading-snug w-3/4'>
              {channel.description}
            </article>
            <SubscribeButton slug={channel.slug} />
          </div>
        </div>
      </div>
      {!!channel.videos.length && <ChannelVideos videos={channel.videos} />}
    </section>
  )
}
