import {
  CircleAlert,
  CirclePlay,
  Compass,
  Flame,
  FolderHeart,
  Gamepad2,
  History,
  LayoutGrid,
  ListVideo,
  Settings,
  TvMinimalPlay,
  Upload
} from 'lucide-react'

import { PAGE } from '@/config/public-page.config'
import { STUDIO_PAGE } from '@/config/studio-page'

import type { ISidebarItem } from './sidebar.types'

export const SIDEBAR_DATA: ISidebarItem[] = [
  {
    icon: Compass,
    label: 'Главная',
    link: PAGE.HOME
  },
  {
    icon: Flame,
    label: 'Тренды',
    link: PAGE.TRENDING
  },
  {
    icon: Gamepad2,
    label: 'Видео игры',
    link: PAGE.VIDEO_GAMES
  },
  {
    icon: CirclePlay,
    label: 'Подписки',
    link: PAGE.SUBSCRIPTIONS,
    isBottomBorder: true
  },
  {
    icon: TvMinimalPlay,
    label: 'Мой канал',
    link: PAGE.MY_CHANNEL
  },
  {
    icon: ListVideo,
    label: 'Плейлисты',
    link: PAGE.PLAYLISTS()
  },

  {
    icon: History,
    label: 'История',
    link: PAGE.HISTORY
  },
  {
    icon: FolderHeart,
    label: 'Понравившиеся',
    link: PAGE.LIKED_VIDEOS,
    isBottomBorder: true
  }
]

export const MORE_SIDEBAR_DATA: ISidebarItem[] = [
  {
    icon: CircleAlert,
    label: 'О нас',
    link: PAGE.FEEDBACK
  }
]

export const STUDIO_SIDEBAR_DATA: ISidebarItem[] = [
  {
    icon: LayoutGrid,
    label: 'Студия',
    link: STUDIO_PAGE.HOME
  },
  {
    icon: Settings,
    label: 'настройки',
    link: STUDIO_PAGE.SETTINGS
  },
  {
    icon: Upload,
    label: 'Загрузить видео',
    link: STUDIO_PAGE.UPLOAD_VIDEO
  }
]
