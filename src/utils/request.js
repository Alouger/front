import axios from 'axios'
import { getSecret } from '@/utils'

const service = axios.create({
  // 根据项目的状态，自动切换请求的服务地址
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 5000
})

service.interceptors.request.use(
  (config) => {
    const headers = config.headers || {}
    config.headers = {
      // Authorization: `Bearer ${store.getters.token}`, // 请求头中携带token
      ...headers,
      ...getSecret()
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器：
 * 服务端返回数据之后，前端 。then 之前被调用
 */
service.interceptors.response.use(
  (response) => {
    const { success, message, data } = response.data
    if (success) {
      return data
    } else {
      return Promise.reject(message)
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
