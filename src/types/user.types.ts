import type { IChannel } from './channel.types'

export interface IUser {
  id: String
  name: String
  email: String
  password: String
  channel?: IChannel
  subscriptions: IChannel[]
  createdAt: Date
  updatedAt: Date
}
