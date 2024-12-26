import type { ISingleVideoResponse, IVideo, IVideosPagination } from '@/types/video.types'

import { axiosClassic } from '@/api/axios'

class VideoService {
  private _VIDEOS = '/videos'

  getAll(searchTerm?: string | null) {
    return axiosClassic.get<IVideosPagination>(
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

  byPublicId(publicId?: string | null) {
    return axiosClassic.get<ISingleVideoResponse>(
      `${this._VIDEOS}/by-publicId/${publicId}`
    )
  }

  getVideoGames() {
    return axiosClassic.get<IVideosPagination>(`${this._VIDEOS}/games`)
  }

  getTrendingVideos() {
    return axiosClassic.get<IVideo[]>(`${this._VIDEOS}/trending`)
  }

  getExploreVideos(userId?: string) {
    return axiosClassic.get<IVideosPagination>(`${this._VIDEOS}/explore`, {
      params: {
        userId
      }
    })
  }

  updateViews(publicId: string) {
    return axiosClassic.put(`${this._VIDEOS}/update-views-count/${publicId}`)
  }
}

export const videoService = new VideoService()
