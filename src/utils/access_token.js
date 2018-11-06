import Cookies from 'js-cookie'

const TokenKey = 'AccessToken'

export function getAccessToken() {
  return Cookies.get(TokenKey)
  //return 'j2b2XK3uZJh1h-0SBo_CGNf50uhFYitiFhczuEuikuPMABBNrDZEZpATuToNm0NUBgMVa_raLeRzkK6R_x-GoT1Nm3Ep191sQkgO6lrkor3jZrOG9WVV-g1F-57rzzvK'
}

export function setAccessToken(token) {
  return Cookies.set(TokenKey, token)
}

export function removeAccessToken() {
  return Cookies.remove(TokenKey)
}
