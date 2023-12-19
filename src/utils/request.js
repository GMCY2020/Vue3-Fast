import axios from 'axios'

const baseURL = '/api'

// 相应时间
const instance = axios.create({
  baseURL,
  timeout: 1000
})

// 处理
instance.interceptors.response.use(
  (res) => {
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance
export { baseURL }
