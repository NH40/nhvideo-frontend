import { Menu, Youtube } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'
import { SITE_NAME } from '@/constants/seo.constants'

import { PAGE } from '@/config/public-page.config'

export function SidebarHeader({ toggleSidebar }: { toggleSidebar: () => void }) {
  return (
    <div className='flex items-center gap-6 mb-12'>
      <button
        className='opacity-85 hover:opacity-100 transition-opacity'
        onClick={toggleSidebar}
      >
        <Menu />
      </button>

      <Link
        href={PAGE.HOME}
        className='flex items-center gap-1.5'
      >
        <Youtube
          color={COLORS.primary}
          size={29}
        />
        <span className=' text-xl font-semibold'>{SITE_NAME}</span>
      </Link>
    </div>
  )
}
