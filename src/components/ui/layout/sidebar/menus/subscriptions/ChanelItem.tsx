import { Dot, Radio } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import type { FC } from 'react'

import type { ISidebarChanelItem } from '../../sidebar.types'

interface Props {
  item: ISidebarChanelItem
}

export const ChanelItem: FC<Props> = ({ item }) => {
  return (
    <li>
      <Link href={item.path}>
        {item.avatar && (
          <Image
            src={item.avatar}
            alt={item.label}
            width={30}
            height={30}
          />
        )}
        <span>
          <span>{item.label}</span>
          {item.isLiveNow && <Radio />}
          {item.isRecentUpload && <Dot />}
        </span>
      </Link>
    </li>
  )
}
