export const API_URL: string = process.env.API_URL || 'http://localhost:4200/api'
export const APP_URL: string = process.env.APP_URL || 'http://localhost:3000/'

export const IS_CLIENT = typeof window !== 'undefined'
