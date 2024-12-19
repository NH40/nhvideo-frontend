'use client'

import parse from 'html-react-parser'
import { useState } from 'react'

import { processHtmlContent } from '@/utils/process-html-content'

import styles from './VideoDescription.module.scss'

export function VideoDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const { initialContent, isShouldShowToggle } = processHtmlContent(description, 3)

  return (
    <div className='relative mb-4 bg-description py-1.5 px-3 rounded-lg'>
      <article className={styles.article}>
        {parse(isExpanded ? description : initialContent)}
      </article>

      {isShouldShowToggle && (
        <button
          onClick={() => setIsExpanded(prev => !prev)}
          className='text-description uppercase transition-colors text-hover-description mt-2'
          aria-expanded={isExpanded}
        >
          {isExpanded ? 'скрыть' : 'показать еще'}
        </button>
      )}
    </div>
  )
}
