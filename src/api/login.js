import request from '@/utils/request'
import sdk from '@/api/sdk'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: '/login/login',
    method: 'post',
    data
  })
}

export function loginByMobile(mobile, password) {
  const data = {
    mobile,
    password
  }
  return sdk.admin_user_login_mobile_password(data)
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

