import Cookies from 'js-cookie'

import { EnumTokens } from '@/types/auth.types'
import type { IUser } from '@/types/user.types'

import { useAuthStore } from '@/store/auth.store'

import { axiosClassic } from '@/api/axios'

import type { IAuthData } from '@/app/auth/auth-form.types'

interface IAuthResponse {
  user: IUser
  accessToken: string
}

class AuthService {
  private _AUTH = '/auth'

  async main(
    type: 'login' | 'register',
    data: IAuthData,
    recaptchaToken?: string | null
  ) {
    const response = await axiosClassic.post<IAuthResponse>(
      `${this._AUTH}/${type}`,
      data,
      {
        headers: {
          recaptcha: recaptchaToken
        }
      }
    )

    if (response.data.accessToken) {
      this._saveTokenStorage(response.data.accessToken)
      useAuthStore.getState().setAuthData(response.data)
    }

    return response
  }

  async initializeAuth() {
    const initialState = useAuthStore.getState()
    if (initialState.user) return

    try {
      await this.getNewTokens()
    } catch (error) {
      useAuthStore.getState().clearAuthData()
    }
  }

  // CLIENT
  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`)

    if (response.data.accessToken) {
      this._saveTokenStorage(response.data.accessToken)
      useAuthStore.getState().setAuthData(response.data)
    }

    return response
  }

  async logout() {
    const response = await axiosClassic.post<boolean>(`${this._AUTH}/logout`)

    if (response.data) {
      this.removeFromStorage()
    }

    return response
  }

  private _saveTokenStorage(accessToken: string) {
    Cookies.set(EnumTokens.ACCESS_TOKEN, accessToken, {
      expires: 1 / 24,
      sameSite: 'strict',
      secure: true
    })
  }

  removeFromStorage() {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
    useAuthStore.getState().clearAuthData()
  }
}

export const authService = new AuthService()
