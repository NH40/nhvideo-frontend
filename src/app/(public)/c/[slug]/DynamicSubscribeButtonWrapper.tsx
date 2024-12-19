'use client'

import dynamicNext from 'next/dynamic'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

const DynamicSubscribeButton = dynamicNext(
  () => import('@/components/SubscribeButton').then(mod => mod.SubscribeButton),
  { ssr: false, loading: () => <SkeletonLoader className='w-36 h-10 rounded-md' /> }
)

export function DynamicSubscribeButtonWrapper({ slug }: { slug: string }) {
  return <DynamicSubscribeButton slug={slug} />
}
