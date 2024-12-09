import { useRouter } from 'next/navigation'
import { type KeyboardEvent, useState } from 'react'

import { PAGE } from '@/config/public-page.config'

interface Props {}

export function SearchField({}: Props) {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    if (searchTerm.trim() !== '') {
      router.push(PAGE.SEARCH(searchTerm))
    }
  }

  return (
    <div className='w-3/12'>
      <input
        type='text'
        placeholder='Поиск видео...'
        className='py-2 px-4 w-full bg-transparent outline-none border-none shadow-none'
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}
