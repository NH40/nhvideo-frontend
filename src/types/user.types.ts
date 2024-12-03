import type { IChannel } from './channel.types'

export interface IUser {
  id: string
  name: string
  email: string
  password: string
  channel?: IChannel
  subscriptions: IChannel[]
  createdAt: Date
  updatedAt: Date
}
