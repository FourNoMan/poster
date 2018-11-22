import { api_request } from '@/utils/request'
const Api={};
Api['admin_tenant_app_cate_create']={"url":"/admin/tenant_app_cate/create","method":"post",requestBody:true}
Api['admin_tenant_app_cate_remove_by_id']={"url":"/admin/tenant_app_cate/remove_by_id","method":"get"}
Api['admin_tenant_app_cate_update_by_id']={"url":"/admin/tenant_app_cate/update_by_id","method":"post",requestBody:true}
Api['admin_tenant_app_cate_list']={"url":"/admin/tenant_app_cate/list","method":"post",requestBody:true}
Api['admin_tenant_app_cate_get_by_id']={"url":"/admin/tenant_app_cate/get_by_id","method":"get"}
Api['admin_tenant_app_cate_list_children']={"url":"/admin/tenant_app_cate/list_children","method":"get"}
Api['admin_tenant_app_cate_list_parent']={"url":"/admin/tenant_app_cate/list_parent","method":"get"}
Api['admin_tenant_app_cate_list_all']={"url":"/admin/tenant_app_cate/list_all","method":"get"}
Api['admin_tenant_app_cate_get_one']={"url":"/admin/tenant_app_cate/get_one","method":"post",requestBody:true}
Api['admin_tenant_app_create']={"url":"/admin/tenant_app/create","method":"post",requestBody:true}
Api['admin_tenant_app_remove_by_id']={"url":"/admin/tenant_app/remove_by_id","method":"get"}
Api['admin_tenant_app_update_by_id']={"url":"/admin/tenant_app/update_by_id","method":"get"}
Api['admin_tenant_app_createSecret']={"url":"/admin/tenant_app/createSecret","method":"get"}
Api['admin_tenant_app_list']={"url":"/admin/tenant_app/list","method":"post",requestBody:true}
Api['admin_tenant_app_get_by_id']={"url":"/admin/tenant_app/get_by_id","method":"get"}
Api['admin_tenant_app_list_all']={"url":"/admin/tenant_app/list_all","method":"get"}
Api['admin_tenant_app_get_one']={"url":"/admin/tenant_app/get_one","method":"get"}
Api['admin_tenant_create']={"url":"/admin/tenant/create","method":"get"}
Api['admin_tenant_remove_by_id']={"url":"/admin/tenant/remove_by_id","method":"get"}
Api['admin_tenant_update_by_id']={"url":"/admin/tenant/update_by_id","method":"get"}
Api['admin_tenant_list']={"url":"/admin/tenant/list","method":"get"}
Api['admin_tenant_get_by_id']={"url":"/admin/tenant/get_by_id","method":"get"}
Api['admin_tenant_list_all']={"url":"/admin/tenant/list_all","method":"get"}
Api['admin_tenant_get_one']={"url":"/admin/tenant/get_one","method":"get"}
Api['admin_tenant_third_app_create']={"url":"/admin/tenant_third_app/create","method":"get"}
Api['admin_tenant_third_app_remove_by_id']={"url":"/admin/tenant_third_app/remove_by_id","method":"get"}
Api['admin_tenant_third_app_update_by_id']={"url":"/admin/tenant_third_app/update_by_id","method":"get"}
Api['admin_tenant_third_app_list']={"url":"/admin/tenant_third_app/list","method":"get"}
Api['admin_tenant_third_app_get_by_id']={"url":"/admin/tenant_third_app/get_by_id","method":"get"}
Api['admin_tenant_third_app_list_all']={"url":"/admin/tenant_third_app/list_all","method":"get"}
Api['admin_tenant_third_app_get_one']={"url":"/admin/tenant_third_app/get_one","method":"get"}
Api['admin_tenant_app_cate_download']={"url":"/admin/tenant_app_cate/download","method":"get","download":true}
Api['admin_tenant_app_cate_get_by_id']={"url":"/admin/tenant_app_cate/get_by_id","method":"get"}
Api['admin_tenant_app_cate_get_one']={"url":"/admin/tenant_app_cate/get_one","method":"get"}
Api['admin_tenant_app_download']={"url":"/admin/tenant_app/download","method":"get","download":true}
Api['admin_tenant_app_remove_by_id']={"url":"/admin/tenant_app/remove_by_id","method":"get"}
Api['admin_tenant_app_update_by_id']={"url":"/admin/tenant_app/update_by_id","method":"get"}
Api['admin_tenant_app_get_by_id']={"url":"/admin/tenant_app/get_by_id","method":"get"}
Api['admin_tenant_app_get_one']={"url":"/admin/tenant_app/get_one","method":"get"}
Api['admin_tenant_download']={"url":"/admin/tenant/download","method":"get","download":true}
Api['admin_tenant_create']={"url":"/admin/tenant/create","method":"get"}
Api['admin_tenant_remove_by_id']={"url":"/admin/tenant/remove_by_id","method":"get"}
Api['admin_tenant_update_by_id']={"url":"/admin/tenant/update_by_id","method":"get"}
Api['admin_tenant_list']={"url":"/admin/tenant/list","method":"get"}
Api['admin_tenant_get_by_id']={"url":"/admin/tenant/get_by_id","method":"get"}
Api['admin_tenant_list_all']={"url":"/admin/tenant/list_all","method":"get"}
Api['admin_tenant_get_one']={"url":"/admin/tenant/get_one","method":"get"}
Api['admin_tenant_third_app_download']={"url":"/admin/tenant_third_app/download","method":"get","download":true}
Api['admin_tenant_third_app_create']={"url":"/admin/tenant_third_app/create","method":"get"}
Api['admin_tenant_third_app_remove_by_id']={"url":"/admin/tenant_third_app/remove_by_id","method":"get"}
Api['admin_tenant_third_app_update_by_id']={"url":"/admin/tenant_third_app/update_by_id","method":"get"}
Api['admin_tenant_third_app_list']={"url":"/admin/tenant_third_app/list","method":"get"}
Api['admin_tenant_third_app_get_by_id']={"url":"/admin/tenant_third_app/get_by_id","method":"get"}
Api['admin_tenant_third_app_list_all']={"url":"/admin/tenant_third_app/list_all","method":"get"}
Api['admin_tenant_third_app_get_one']={"url":"/admin/tenant_third_app/get_one","method":"get"}


//  应用管理

const APISDK={};
for(const name in Api){
  APISDK[name]=(options)=>{
    return  api_request(Api[name],options);
  }
}
export default APISDK;