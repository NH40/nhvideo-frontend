import type { TPageIdProp } from '@/types/page.types'

import { SinglePl } from './SinglePl'

export default async function Page({ params }: TPageIdProp) {
  const id = (await params).id

  return <SinglePl id={id} />
}
