import cn from 'clsx'
import { useAtom } from 'jotai'
import Link from 'next/link'

import { isShowedSidebarAtom } from '@/store/jotai.store'

import type { IMenuItemProps } from './menu.types'

export function MenuItem({ item, isActive }: IMenuItemProps) {
  const [isShowedSidebar] = useAtom(isShowedSidebarAtom)

  return (
    <li>
      <Link
        href={item.link}
        className={'group py-3 flex items-center gap-5'}
      >
        <item.icon
          className={cn('min-w-6', {
            'group-hover:text-primary transition group-hover:rotate-6': !isActive,
            'text-red-500': isActive && !isShowedSidebar
          })}
        />
        <span
          className={cn('border-b', {
            'border-primary': isActive,
            'border-transparent': !isActive
          })}
        >
          {item.label}
        </span>
      </Link>
      {item.isBottomBorder && <span className='h-[0.5px] bg-border my-5 w-full block' />}
    </li>
  )
}
