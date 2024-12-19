export const SERVER_URL: string = process.env.SERVER_URL || 'http://localhost:4200'

export const API_URL: string = `${SERVER_URL}/api` || 'http://localhost:4200/api'

export const APP_URL: string =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000/'

export const IS_CLIENT = typeof window !== 'undefined'
