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
    link: PAGE.VIDEO_GAMES,
    isBottomBorder: true
  },
  {
    icon: TvMinimalPlay,
    label: 'Мой канал',
    link: PAGE.MY_CHANNEL
  },
  {
    icon: CirclePlay,
    label: 'Подписки',
    link: PAGE.SUBSCRIPTIONS
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
    icon: Settings,
    label: 'Настройки',
    link: PAGE.SETTINGS
  },
  {
    icon: CircleAlert,
    label: 'Обратная связь',
    link: PAGE.FEEDBACK
  }
]
