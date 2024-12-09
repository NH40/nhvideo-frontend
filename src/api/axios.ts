import type { CreateAxiosDefaults } from 'axios'
import axios from 'axios'

import { API_URL } from '@/constants/api.constants'

const options: CreateAxiosDefaults = {
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}

export const axiosClassic = axios.create(options)
