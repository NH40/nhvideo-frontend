import type { LucideIcon } from 'lucide-react'

export interface ISidebarItem {
  icon: LucideIcon
  label: string
  path: string
  isBottomBorder?: boolean
}

export interface ISidebarChanelItem {
  avatar: string
  label: string
  path: string
  isLiveNow: boolean
  isRecentUpload: boolean
}
