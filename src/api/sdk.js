import { api_request } from '@/utils/request'

const Api = {}


Api['test'] = { 'url': '/express/test', 'methods': 'get' }






const APISDK = {}
for (const name in Api) {
  APISDK[name] = options => {
    return api_request(Api[name], options)
  }
}

export default APISDK

