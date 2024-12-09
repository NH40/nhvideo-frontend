import { HeaderLinks } from './HeaderLinks'
import { SearchField } from './SearchField'
import { HeaderProfile } from './profile/HeaderProfile'

export function Header() {
  return (
    <header className='p-layout border-b border-border flex items-center justify-between'>
      <SearchField />
      <div className='flex items-center gap-8'>
        <HeaderLinks />
        <HeaderProfile />
      </div>
    </header>
  )
}
