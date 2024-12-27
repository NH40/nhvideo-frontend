class PUBLIC_PAGE_CONFIG {
  AUTH = '/auth'

  HOME = '/'
  TRENDING = '/trending'
  VIDEO_GAMES = '/video-games'

  MY_CHANNEL = '/my-channel'
  SUBSCRIPTIONS = '/subscriptions'
  HISTORY = '/history'
  LIKED_VIDEOS = '/liked-videos'

  FEEDBACK = '/feedback'

  VIDEO(path: string) {
    return `/v/${path}`
  }

  CHANNEL(path: string) {
    return `/c/${path}`
  }

  PLAYLISTS(path?: string) {
    return `/playlists${path ? `/${path}` : ''}`
  }

  SEARCH(searchTerm: string) {
    return `/s?term=${searchTerm}`
  }
}

export const PAGE = new PUBLIC_PAGE_CONFIG()
