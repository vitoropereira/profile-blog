import axios from 'axios'

export const ghUsername = 'vitoropereira'
export const ghRepo = 'profile'

export const api = axios.create({
  baseURL: 'https://api.github.com',
})
