import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { Providers } from '@/providers/Providers'

import { APP_URL } from '@/constants/api.constants'
import { SITE_NAME } from '@/constants/seo.constants'

import './globals.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    absolute: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  icons: {
    icon: '/logo.png'
  },
  description:
    'Платформа созданная для размещения видео NH для замены полноценной замены YouTube'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={notoSans.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
