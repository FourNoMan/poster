import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import { getAccessToken } from '@/utils/access_token'
import Qs from 'qs'
import download from 'downloadjs'

// create an axios instance
const axiosInstance = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (store.getters.token) {
      // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
      config.headers['Auth-Token'] = getToken()
      config.headers['Access-Token'] = getAccessToken()
    }
    else {
    //   console.log(getAccessToken(), '++1212212++')
      config.headers['Access-Token'] = getAccessToken()
    }
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response interceptor
axiosInstance.interceptors.response.use(
  response => response,
  /**
   * 下面的注释为通过在response里，自定义code来标示请求状态
   * 当code返回如下情况则说明权限有问题，登出并返回到登录页
   * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
   * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
   */
  // response => {
  //   const res = response.data
  //   if (res.code !== 20000) {
  //     Message({
  //       message: res.message,
  //       type: 'error',
  //       duration: 5 * 1000
  //     })
  //     // 50008:非法的token; 50012:其他客户端登录了;  50014:Token 过期了;
  //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
  //       // 请自行在引入 MessageBox
  //       // import { Message, MessageBox } from 'element-ui'
  //       MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
  //         confirmButtonText: '重新登录',
  //         cancelButtonText: '取消',
  //         type: 'warning'
  //       }).then(() => {
  //         store.dispatch('FedLogOut').then(() => {
  //           location.reload() // 为了重新实例化vue-router对象 避免bug
  //         })
  //       })
  //     }
  //     return Promise.reject('error')
  //   } else {
  //     return response.data
  //   }
  // },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default axiosInstance

export function api_request(config, options) {
  const pars = { ...config }
  if (config.download) {
    pars.responseType = 'blob'
    switch (config.method) {
      case 'get':
        pars.params = options
        return axiosInstance(pars).then(response => {
          console.log('response======================', response)
          const disposition = response.headers['Content-Disposition'] || response.request.getResponseHeader('Content-Disposition')
          let fileName = 'file_' + new Date().getTime()
          if (disposition) {
            fileName = decodeURI(disposition.match(/filename=(.*)/)[1])
          }
          download(response.data, fileName)
        })
      case 'post':
        if (options['download_template']) {
          delete options['download_template']
          pars.params = { download_template: true }
        }
        pars.data = options
        return axiosInstance.post(config.url, Qs.stringify(options)).then(response => {
          console.log('response======================', response)
          const disposition = response.headers['Content-Disposition'] || response.request.getResponseHeader('Content-Disposition')

          let fileName = 'file_' + new Date().getTime()
          if (disposition) {
            fileName = decodeURI(disposition.match(/filename=(.*)/)[1])
          }
          download(response.data, fileName)
        })
      default:
        pars.params = options
        return axiosInstance(pars).then(response => {
          console.log('response======================', response)
          const disposition = response.headers['Content-Disposition'] || response.request.getResponseHeader('Content-Disposition')
          let fileName = 'file_' + new Date().getTime()
          if (disposition) {
            fileName = decodeURI(disposition.match(/filename=(.*)/)[1])
          }
          download(response.data, fileName)
        })
    }
  }
  if (config.requestBody) {
    pars.data = options
    pars.method = 'post'
    console.log('request body=====',pars)
    return axiosInstance(pars)
  }
  switch (config.method) {
    case 'get':
      pars.params = options
      return axiosInstance(pars)
    case 'post':
      pars.data = options
      console.log('url======================', config.url)
      return axiosInstance.post(config.url, Qs.stringify(options))
    default:
      pars.params = options
      return axiosInstance(pars)
  }
}
