'use client'

import dynamic from 'next/dynamic'

import { SkeletonLoader } from '@/ui/SkeletonLoader'

const DynamicSinglePlaylist = dynamic(
	() => import('./SinglePlaylist').then(mod => mod.SinglePlaylist),
	{
		ssr: false,
		loading: () => (
			<div className='grid grid-cols-6 gap-6'>
				<SkeletonLoader
					count={3}
					className='h-28 rounded-md mb-6'
				/>
			</div>
		)
	}
)

export function SinglePl({ id }: { id: string }) {
	return <DynamicSinglePlaylist id={id} />
}
