import type { IVideoFormData } from '@/types/studio-video.types'
import type { IVideo, IVideosPagination } from '@/types/video.types'

import { instance } from '@/api/axios'

class StudioVideoService {
  private _VIDEOS = '/studio/videos'

  getAll(searchTerm?: string | null, page?: number, limit?: number) {
    return instance.get<IVideosPagination>(this._VIDEOS, {
      params: {
        searchTerm,
        page,
        limit
      }
    })
  }

  byId(id: string) {
    return instance.get<IVideo>(`${this._VIDEOS}/${id}`)
  }

  create(dto: IVideoFormData) {
    return instance.post(this._VIDEOS, dto)
  }

  update(id: string, dto: IVideoFormData) {
    return instance.put(`${this._VIDEOS}/${id}`, dto)
  }

  delete(id: string) {
    return instance.delete(`${this._VIDEOS}/${id}`)
  }
}

export const studioVideoService = new StudioVideoService()
