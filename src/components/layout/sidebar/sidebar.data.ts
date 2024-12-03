import {
  CircleAlert,
  CirclePlay,
  Compass,
  Flame,
  FolderHeart,
  Gamepad2,
  History,
  Settings,
  TvMinimalPlay
} from 'lucide-react'

import { PAGE } from '@/config/public-page.config'

import type { ISidebarItem } from './sidebar.types'

export const SIDEBAR_DATA: ISidebarItem[] = [
  {
    icon: Compass,
    label: 'Главная',
    path: PAGE.HOME
  },
  {
    icon: Flame,
    label: 'Тренды',
    path: PAGE.TRENDING
  },
  {
    icon: Gamepad2,
    label: 'Видео игры',
    path: PAGE.VIDEO_GAMES,
    isBottomBorder: true
  },
  {
    icon: TvMinimalPlay,
    label: 'Мои каналы',
    path: PAGE.MY_CHANNEL
  },
  {
    icon: CirclePlay,
    label: 'Подписки',
    path: PAGE.SUBSCRIPTIONS
  },
  {
    icon: History,
    label: 'История',
    path: PAGE.HISTORY
  },
  {
    icon: FolderHeart,
    label: 'Понравившиеся',
    path: PAGE.LIKED_VIDEOS,
    isBottomBorder: true
  }
]

export const MORE_SIDEBAR_DATA: ISidebarItem[] = [
  {
    icon: Settings,
    label: 'Настройки',
    path: PAGE.SETTINGS
  },
  {
    icon: CircleAlert,
    label: 'Отзывы',
    path: PAGE.FEEDBACK
  }
]
