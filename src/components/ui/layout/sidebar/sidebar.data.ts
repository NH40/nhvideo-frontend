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

import { PUBLIC_PAGE } from '@/config/public-page.config'

import type { ISidebarItem } from './sidebar.types'

export const SIDEBAR_DATA: ISidebarItem[] = [
  {
    icon: Compass,
    label: 'Главная',
    path: PUBLIC_PAGE.HOME_PAGE
  },
  {
    icon: Flame,
    label: 'Тренды',
    path: PUBLIC_PAGE.TRENDING_PAGE
  },
  {
    icon: Gamepad2,
    label: 'Видео игры',
    path: PUBLIC_PAGE.VIDEO_GAMES_PAGE,
    isBottomBorder: true
  },
  {
    icon: TvMinimalPlay,
    label: 'Мои каналы',
    path: PUBLIC_PAGE.MY_CHANNEL_PAGE
  },
  {
    icon: CirclePlay,
    label: 'Подписки',
    path: PUBLIC_PAGE.SUBSCRIPTIONS_PAGE
  },
  {
    icon: History,
    label: 'История',
    path: PUBLIC_PAGE.HISTORY_PAGE
  },
  {
    icon: FolderHeart,
    label: 'Понравившиеся',
    path: PUBLIC_PAGE.LIKED_VIDEOS_PAGE,
    isBottomBorder: true
  }
]

export const MORE_SIDEBAR_DATA: ISidebarItem[] = [
  {
    icon: Settings,
    label: 'Настройки',
    path: PUBLIC_PAGE.SETTINGS_PAGE
  },
  {
    icon: CircleAlert,
    label: 'Отзывы',
    path: PUBLIC_PAGE.FEEDBACK_PAGE
  }
]
