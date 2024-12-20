import Cookies from 'js-cookie'
import { create } from 'zustand'

import { EnumTokens } from '@/types/auth.types'
import type { IUser } from '@/types/user.types'

interface IAuthState {
  user: IUser | null
  isLoggedIn: boolean
  accessToken: string | null
}

interface IAuthStore extends IAuthState {
  setAuthData: (data: { user: IUser; accessToken: string }) => void
  clearAuthData: () => void
}

export const useAuthStore = create<IAuthStore>(set => ({
  user: null,
  isLoggedIn: !!Cookies.get(EnumTokens.ACCESS_TOKEN),
  accessToken: Cookies.get(EnumTokens.ACCESS_TOKEN) || null,

  setAuthData: data =>
    set({
      user: data.user,
      isLoggedIn: true,
      accessToken: data.accessToken
    }),

  clearAuthData: () =>
    set({
      user: null,
      isLoggedIn: false,
      accessToken: null
    })
}))
