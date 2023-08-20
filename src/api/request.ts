import axios from 'axios'

const request = axios.create({
  baseURL: import.meta.env.SWAPI_BASE_URL
})

request.interceptors.response.use(
  response => response.data
)

export default request
