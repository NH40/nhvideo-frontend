'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LazyMotion, domAnimation } from 'framer-motion'
import { type ReactNode, useState } from 'react'
import { Toaster } from 'react-hot-toast'

import { ThemeProvider } from './ThemeProvider'

export function Providers({ children }: { children: ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1
          },
          mutations: {
            retry: 1
          }
        }
      })
  )

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <LazyMotion features={domAnimation}>
          {children}
          <Toaster />
        </LazyMotion>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
