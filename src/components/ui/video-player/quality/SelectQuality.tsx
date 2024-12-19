'use client'

import { AnimatePresence, m } from 'framer-motion'

import { useOutside } from '@/hooks/useOutside'

import { EnumVideoPlayerQuality } from '../video-player.types'

import { VIDEO_QUALITIES } from './qualities.data'

interface Props {
  currentValue: EnumVideoPlayerQuality
  onChange: (quality: EnumVideoPlayerQuality) => void
}

export function SelectQuality({ currentValue, onChange }: Props) {
  const { isShow, ref, setIsShow } = useOutside(false)

  return (
    <div
      className='relative'
      ref={ref}
    >
      <button
        onClick={() => setIsShow(!isShow)}
        className='transition-colors hover:text-primary'
      >
        {currentValue}
      </button>

      <AnimatePresence>
        {isShow && (
          <m.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className='bg-white/10 py-2 px-4 rounded absolute bottom-full right-0 z-10 shadow'
          >
            {VIDEO_QUALITIES.map(quality =>
              quality === currentValue ? null : (
                <li
                  key={quality}
                  className='mb-1'
                >
                  <button
                    onClick={() => {
                      onChange(quality)
                      setIsShow(false)
                    }}
                    className='transition-colors hover:text-primary'
                  >
                    {quality}
                  </button>
                </li>
              )
            )}
          </m.ul>
        )}
      </AnimatePresence>
    </div>
  )
}
