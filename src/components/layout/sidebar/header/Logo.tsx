import { Youtube } from 'lucide-react'
import Link from 'next/link'

import { COLORS } from '@/constants/color.constants'

import { PAGE } from '@/config/public-page.config'

export function Logo() {
  return (
    <Link
      href={PAGE.HOME}
      className='inline-flex items-center gap-1.5'
    >
      <Youtube
        color={COLORS.primary}
        size={29}
      />
      <span className='font-medium text-xl'>NH Video</span>
    </Link>
  )
}
