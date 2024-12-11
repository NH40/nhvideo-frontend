import type { IFullUser } from '@/types/user.types'

import { instance } from '@/api/axios'

class UserService {
  private _USERS = '/users'

  getProfile() {
    return instance.get<IFullUser>(`${this._USERS}/profile`)
  }

  // updateProfile(data: ISettingsData) {
  //   return instance.put<boolean>(`${this._USERS}/profile`, data)
  // }
}

export const userService = new UserService()