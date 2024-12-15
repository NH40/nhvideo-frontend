import { useRouter } from 'next/navigation'
import { type KeyboardEvent, useState } from 'react'

import { PAGE } from '@/config/public-page.config'

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return
    e.preventDefault()
    if (searchTerm.trim() !== '') {
      router.push(PAGE.SEARCH(searchTerm))
      setSearchTerm('')
    }
  }

  return { searchTerm, setSearchTerm, handleKeyDown }
}
