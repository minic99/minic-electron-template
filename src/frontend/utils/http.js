import AxiosWrapper from '@lite-base/http'
import { Message } from "element-ui"
const isDevelopment = process.env.NODE_ENV !== "production"
const baseURL = isDevelopment ? process.env.VUE_APP_FRONTEND_BASE_URL_DEV : process.env.VUE_APP_FRONTEND_BASE_URL || "http://localhost:3333"
const request = new AxiosWrapper({
  baseURL,
  timeout: 0,
  responseInterceptor(data){
    if (data.code !== 200) {
      return Promise.reject(response.data.message)
    }
    return response
  }
})

const http = (options) => {
  return new Promise((resolve, reject) => {
    request.request(options)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        Message.error(err)
        reject(err)
      })
  })
}

export default http
