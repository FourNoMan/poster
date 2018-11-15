import { api_request } from '@/utils/request'

const Api = {}


Api['test'] = { 'url': '/express/test', 'methods': 'get' }
Api['addApp'] = { 'url': 'http://172.16.3.128:8080/admin/tenant_app/create', 'methods': 'post' }





const APISDK = {}
for (const name in Api) {
  APISDK[name] = options => {
    return api_request(Api[name], options)
  }
}

export default APISDK

