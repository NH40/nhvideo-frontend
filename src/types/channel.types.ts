import type { IVideo } from './video.types'

export interface IChannel {
  id: string
  name: string
  slug: string
  description: string
  isVerified: boolean
  avatarUrl: string
  bannerUrl: number
  videos: IVideo[]
  subscribers: []
  createdAt: string
  // user:
}
