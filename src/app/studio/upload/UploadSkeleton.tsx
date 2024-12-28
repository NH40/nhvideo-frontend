import { SkeletonLoader } from '@/ui/SkeletonLoader'

export function UploadSkeleton() {
  return (
    <>
      <div>
        <SkeletonLoader
          count={1}
          className='bg-gray-700 h-[74]'
        />
        <SkeletonLoader
          count={1}
          className='bg-gray-700 h-[224]'
        />
        <SkeletonLoader
          count={1}
          className='bg-gray-700'
        />
        <SkeletonLoader
          count={1}
          className='bg-gray-700 h-[85]'
        />
        <SkeletonLoader
          count={1}
          className='bg-gray-700 h-[114]'
        />
      </div>
      <div>
        <SkeletonLoader
          count={1}
          className='bg-gray-700 w-[249] h-[140]'
        />
        <SkeletonLoader
          count={2}
          className='bg-gray-700'
        />
      </div>
    </>
  )
}
