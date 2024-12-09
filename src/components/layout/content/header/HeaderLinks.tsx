import { Bell, LayoutGrid, PlusSquare } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import { STUDIO_PAGE } from '@/config/studio-page'

interface Props {}

export const HeaderLinks: FC<Props> = ({}) => {
  return (
    <div className='flex items-center gap-5'>
      <Link
        href={STUDIO_PAGE.UPLOAD_VIDEO}
        className='transition-opacity hover:opacity-100 opacity-50'
      >
        <PlusSquare size={20} />
      </Link>
      <Link
        href={STUDIO_PAGE.HOME}
        className='transition-opacity hover:opacity-100 opacity-50'
      >
        <LayoutGrid size={20} />
      </Link>
      <Link
        href={STUDIO_PAGE.HOME}
        className='transition-opacity hover:opacity-100 opacity-50'
      >
        <Bell size={20} />
      </Link>
    </div>
  )
}
