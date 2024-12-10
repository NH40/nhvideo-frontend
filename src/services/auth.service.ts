import Cookies from 'js-cookie'

import { EnumTokens } from '@/types/auth.types'
import type { IUser } from '@/types/user.types'

import { clearAuthData, setAuthData } from '@/store/auth.slice'

import { axiosClassic } from '@/api/axios'

import type { IAuthData } from '@/app/auth/auth-form.types'
import { store } from '@/store'

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
      store.dispatch(setAuthData(response.data))
    }

    return response
  }

  async initializeAuth() {
    const accessToken = Cookies.get(EnumTokens.ACCESS_TOKEN)
    if (accessToken) return

    try {
      await this.getNewTokens()
    } catch (error) {
      store.dispatch(clearAuthData())
    }
  }

  // CLIENT
  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(`${this._AUTH}/access-token`)

    if (response.data.accessToken) {
      this._saveTokenStorage(response.data.accessToken)
      store.dispatch(setAuthData(response.data))
    }

    return response
  }

  // SERVER
  async getNewTokensByRefresh(refreshToken: string) {
    const response = await axiosClassic.post<IAuthResponse>(
      `${this._AUTH}/access-token`,
      {},
      {
        headers: {
          Cookie: `refreshToken=${refreshToken}`
        }
      }
    )

    return response.data
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
      domain: 'localhost',
      //1h
      expires: 1 / 24,
      sameSite: 'strict',
      secure: true
    })
  }

  removeFromStorage() {
    Cookies.remove(EnumTokens.ACCESS_TOKEN)
    store.dispatch(clearAuthData())
  }
}

export const authService = new AuthService()
