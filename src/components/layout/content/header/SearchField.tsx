import { useSearch } from '@/hooks/useSearch'

interface Props {}

export function SearchField({}: Props) {
  const { searchTerm, setSearchTerm, handleKeyDown } = useSearch()

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
