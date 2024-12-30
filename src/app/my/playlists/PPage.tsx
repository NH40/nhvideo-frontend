'use client'

import dynamic from 'next/dynamic'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

const DynamicPlaylistsPage = dynamic(
  () => import('./PlaylistsPage').then(mod => mod.PlaylistsPage),
  {
    ssr: false,
    loading: () => (
      <div className='grid grid-cols-5 gap-6 mt-20'>
        <SkeletonLoader
          count={3}
          className='h-44 rounded-md mb-6'
        />
      </div>
    )
  }
)

export function PPage() {
  return <DynamicPlaylistsPage />
}
