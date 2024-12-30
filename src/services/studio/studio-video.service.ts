import type { IPaginationParams } from '@/types/pagination.types'
import type { IVideoFormData } from '@/types/studio-video.types'
import type { IStudioVideoResponse, IVideosPagination } from '@/types/video.types'

import { instance } from '@/api/axios'

class StudioVideoService {
  private _VIDEOS = '/studio/videos'

  getAll(params?: IPaginationParams) {
    return instance
      .get<IVideosPagination>(this._VIDEOS, {
        params
      })
      .then(data => data.data)
  }

  byId(id: string) {
    return instance.get<IStudioVideoResponse>(`${this._VIDEOS}/${id}`)
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
