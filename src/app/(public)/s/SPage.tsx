'use client'

import dynamic from 'next/dynamic'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

const DynamicSearchPage = dynamic(
  () => import('./SearchPage').then(mod => mod.SearchPage),
  {
    ssr: false,
    loading: () => (
      <div className='grid grid-cols-6 gap-6'>
        <SkeletonLoader
          count={3}
          className='h-36 rounded-md'
        />
      </div>
    )
  }
)

export function SPage() {
  return <DynamicSearchPage />
}
