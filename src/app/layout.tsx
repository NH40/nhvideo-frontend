import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import './globals.scss'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  icons: {
    icon: '/logo 2.png'
  },
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='ru'>
      <body className={notoSans.className}>{children}</body>
    </html>
  )
}
