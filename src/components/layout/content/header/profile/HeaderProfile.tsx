import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import { STUDIO_PAGE } from '@/config/studio-page'

interface Props {}

export const HeaderProfile: FC<Props> = ({}) => {
  return (
    <Link
      href={STUDIO_PAGE.SETTINGS}
      className='shrink-0'
    >
      {/* TODO: AUTH AVATAR */}
      <Image
        src='/uploads/avatars/nhauth.png'
        alt=''
        width={40}
        height={40}
        className='rounded-lg'
      />
    </Link>
  )
}
