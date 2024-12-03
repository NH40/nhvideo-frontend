import axios from 'axios'

import type { IVideo } from '@/types/video.types'

import { VIDEO_CONFIG } from '@/config/api-video-service.config'

class VideoService {
  getTrendingVideos() {
    return axios.get<IVideo[]>(VIDEO_CONFIG.VIDEO_TRENDING)
  }

  getExploreVideos() {
    return axios.get<IVideo[]>(VIDEO_CONFIG.VIDEO_EXPLORE)
  }
}

export const videoService = new VideoService()
