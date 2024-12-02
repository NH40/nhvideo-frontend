import { Menu, Youtube } from 'lucide-react'
import Link from 'next/link'
import type { FC } from 'react'

import { COLORS } from '@/constants/color.constants'

import { PAGE } from '@/config/public-page.config'

interface Props {
  toggleSidebar: () => void
}

export const SidebarHeader: FC<Props> = ({ toggleSidebar }) => {
  return (
    <div className='flex items-center gap-6 mb-12	'>
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
        <span className='font-bold text-xl'>NH Video</span>
      </Link>
    </div>
  )
}
