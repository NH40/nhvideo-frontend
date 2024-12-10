import { LogIn } from 'lucide-react'
import { useEffect, useState } from 'react'

import { SkeletonLoader } from '@/ui/SkeletonLoader'
import { LinkButton } from '@/ui/button/LinkButton'

import { PAGE } from '@/config/public-page.config'

import { HeaderAvatar } from './HeaderAvatar'
import { useTypedSelector } from '@/store'

export function HeaderProfile() {
  const [mounted, setMounted] = useState(false)
  const { isLoggedIn } = useTypedSelector(state => state.auth)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <SkeletonLoader className='w-10 mb-0 rounded-md' />
  }

  return isLoggedIn ? (
    <HeaderAvatar />
  ) : (
    <LinkButton href={PAGE.AUTH}>
      <LogIn size={20} /> Auth
    </LinkButton>
  )
}
