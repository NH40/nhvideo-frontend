import axios from 'axios'

import type { IVideo } from '@/types/video.types'

class VideoService {
  getTrendingVideos() {
    return axios.get<IVideo[]>('http://localhost:4200/api/videos/trending')
  }

  getExploreVideos() {
    return axios.get<IVideo[]>('http://localhost:4200/api/videos/explore')
  }
}

export const videoService = new VideoService()
