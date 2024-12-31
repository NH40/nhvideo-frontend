import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'

import { Providers } from '@/providers/Providers'

import { APP_URL } from '@/constants/api.constants'
import { SITE_NAME } from '@/constants/seo.constants'

import './globals.scss'

export const fetchCache = 'default-cache'

const notoSans = Noto_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(APP_URL),
  title: {
    absolute: `${SITE_NAME}`,
    template: `%s | ${SITE_NAME}`
  },
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/256.png',
    other: {
      rel: 'touch-icons',
      url: '/images/256.png',
      sizes: '256x256',
      type: 'image/png'
    }
  },
  description:
    'Платформа созданная для размещения видео NH для замены полноценной замены YouTube',

  openGraph: {
    type: 'website',
    siteName: 'localhost',
    emails: [`nevedomyj4@gmail.com`],
    images: [
      {
        url: '/images/op.png',
        width: 1918,
        height: 1036,
        alt: `${SITE_NAME}`
      }
    ]
  },

  // metadataBase: new URL(APP_URL),
  applicationName: `${SITE_NAME}`,
  authors: {
    name: 'NH Team'
  },
  manifest: '/manifest.json',
  publisher: 'NH Team',
  formatDetection: {
    telephone: false
  }
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
