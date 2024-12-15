import type { IVideo } from '@/types/video.types'

import { axiosClassic } from '@/api/axios'

interface IVideoResponse {
  videos: IVideo[]
}

class VideoService {
  private _VIDEOS = '/videos'

  getAll(searchTerm?: string | null) {
    return axiosClassic.get<IVideoResponse>(
      this._VIDEOS,
      searchTerm
        ? {
            params: {
              searchTerm
            }
          }
        : {}
    )
  }

  getVideoGames() {
    return axiosClassic.get<IVideoResponse>(`${this._VIDEOS}/games`)
  }

  getTrendingVideos() {
    return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
  }

  getExploreVideos() {
    return axiosClassic.get<IVideoResponse>(`${this._VIDEOS}/explore`)
  }
}

export const videoService = new VideoService()
