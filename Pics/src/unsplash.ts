import axios from 'axios'

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization:
      'Client-ID 97a1403756e7aa58b0c721072bac11ac52fabed328745fd7be7928d647a96f84',
  },
})

export default unsplash
