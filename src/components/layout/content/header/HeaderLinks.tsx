import { LayoutGrid, PlusSquare } from 'lucide-react'
import Link from 'next/link'

import { STUDIO_PAGE } from '@/config/studio-page'

export function HeaderLinks() {
  return (
    <div className='flex items-center gap-1'>
      <Link
        href={STUDIO_PAGE.UPLOAD_VIDEO}
        className='transition-opacity hover:opacity-100 opacity-50 p-2'
        title='Загрузить видео'
        aria-label='Загрузить видео'
      >
        <PlusSquare size={20} />
      </Link>
      <Link
        href={STUDIO_PAGE.HOME}
        className='transition-opacity hover:opacity-100 opacity-50 p-2'
        title='Моя Студия'
        aria-label='Моя Студия'
      >
        <LayoutGrid size={20} />
      </Link>
      {/* <Link
        href={STUDIO_PAGE.HOME}
        className='transition-opacity hover:opacity-100 opacity-50'
      >
        <Bell size={20} />
      </Link> */}
    </div>
  )
}
