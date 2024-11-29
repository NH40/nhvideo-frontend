import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { MainLayout } from '@/ui/layout/MainLayout'

import './globals.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NH Video',
  icons: {
    icon: '/logo 2.png'
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
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  )
}
