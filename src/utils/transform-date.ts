import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.locale('ru')
dayjs.extend(relativeTime)

export function transformDate(createdAt: string): string {
  return dayjs(createdAt).fromNow()
}
