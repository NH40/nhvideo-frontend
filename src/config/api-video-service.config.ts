import { API_URL } from '@/constants/api.constants'

class VIDEO_SERVICE_CONFIG {
  VIDEO_TRENDING = `${API_URL}/videos/trending`
  VIDEO_EXPLORE = `${API_URL}/videos/explore`
}

export const VIDEO_CONFIG = new VIDEO_SERVICE_CONFIG()
