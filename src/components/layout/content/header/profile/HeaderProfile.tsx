import { LogIn } from 'lucide-react'

import { LinkButton } from '@/ui/button/LinkButton'

import { PAGE } from '@/config/public-page.config'

import { HeaderAvatar } from './HeaderAvatar'
import { useAuthStore } from '@/store/auth.store'

export function HeaderProfile() {
  const { isLoggedIn } = useAuthStore()

  return isLoggedIn ? (
    <HeaderAvatar />
  ) : (
    <LinkButton href={PAGE.AUTH}>
      <LogIn size={20} /> Авторизоваться
    </LinkButton>
  )
}
