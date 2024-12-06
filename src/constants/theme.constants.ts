import { Laptop, type LucideIcon, Moon, Sun } from 'lucide-react'

import type { ThemeType } from '@/types/theme.types'

export const THEMES: { name: ThemeType; icon: LucideIcon }[] = [
  { name: 'dark', icon: Moon },
  { name: 'light', icon: Sun },
  { name: 'new', icon: Laptop }
]
