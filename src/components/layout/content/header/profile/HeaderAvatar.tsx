import Image from 'next/image'
import type { FC } from 'react'

export const HeaderAvatar: FC = () => {
  return (
    <div className='w-10 h-10 relative'>
      <Image
        src='/uploads/avatars/redgroup.jpg'
        alt='avatar'
        width={40}
        height={40}
        className='rounded-md'
      />
    </div>
  )
}
