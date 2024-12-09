import type { IVideo } from '@/types/video.types'

import { axiosClassic } from '@/api/axios'

class VideoService {
  private _VIDEOS = '/videos'

  getAll(searchTerm?: string | null) {
    return axiosClassic.get<IVideo[]>(
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
    return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/games`)
  }

  getTrendingVideos() {
    return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
  }

  getExploreVideos() {
    return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/explore`)
  }
}

export const videoService = new VideoService()
