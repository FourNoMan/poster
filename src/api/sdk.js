import { api_request } from '@/utils/request'
const Api={};
Api['admin_staff_create']={"url":"/admin/staff/create","method":"post",requestBody:true}
Api['admin_user_login_mobile_password']={"url":"/admin/user/login/mobile_password","method":"post",requestBody:true}

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
Api['admin_tenant_app_cate_remove_children_all']={"url":"/admin/tenant_app_cate/remove_children_all","method":"get"}

Api['admin_tenant_app_remove_by_id']={"url":"/admin/tenant_app/remove_by_id","method":"get"}
Api['admin_tenant_app_update_by_id']={"url":"/admin/tenant_app/update_by_id","method":"post",requestBody: true }
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
/*存储*/
Api['admin_cloud_disk_config_list']={"url":"/admin/cloud_disk_config/list","method":"post",requestBody:true}
Api['admin_cloud_disk_config_list_create']={"url":"/admin/cloud_disk_config/create","method":"post",requestBody:true}
Api['admin_cloud_disk_config_remove_by_id']={"url":"/admin/cloud_disk_config/remove_by_id","method":"post",requestBody:true}

Api['admin_tenant_third_app_create']={"url":"/admin/tenant_third_app/create","method":"post",requestBody:true}
Api['admin_tenant_third_app_remove_by_id']={"url":"/admin/tenant_third_app/remove_by_id","method":"get"}
/*编辑更新指定Id记录*/
Api['admin_tenant_third_app_update_by_id']={"url":"/admin/tenant_third_app/update_by_id","method":"post",requestBody:true}
/*查询（分页） */
Api['admin_tenant_third_app_list']={"url":"/admin/tenant_third_app/list","method":"post",requestBody:true}
/* 获取指定Id记录的数据*/
Api['admin_tenant_third_app_get_by_id']={"url":"/admin/tenant_third_app/get_by_id","method":"get"}
/*查询（不分页） */
Api['admin_tenant_third_app_list_all']={"url":"/admin/tenant_third_app/list_all","method":"get"}
/* 获取某条数据（不一定通过Id）*/
Api['admin_tenant_third_app_get_one']={"url":"/admin/tenant_third_app/get_one","method":"get"}

Api['admin_app_pay_channel_config_list']={"url":"/admin/app_pay_channel_config/list","method":"post",requestBody:true}


Api['admin_sms_channel_template_list']={"url":"/admin/sms_channel_template/list","method":"post",requestBody:true}
Api['admin_sms_channel_template_create']={"url":"/admin/sms_channel_template/create","method":"post",requestBody:true}
Api['admin_sms_channel_template_update_by_id']={"url":"/admin/sms_channel_template/update_by_id","method":"post",requestBody:true}
Api['admin_sms_channel_template_remove_by_id']={"url":"/admin/sms_channel_template/remove_by_id","method":"get"}
Api['admin_sms_channel_template_add_template']={"url":"/admin/sms_channel_template/add_template","method":"get"}

Api['admin_sms_template_list']={"url":"/admin/sms_template/list","method":"post",requestBody:true}
Api['admin_sms_template_create']={"url":"/admin/sms_template/create","method":"post",requestBody:true}
Api['admin_sms_template_update_by_id']={"url":"/admin/sms_template/update_by_id","method":"post",requestBody:true}
Api['admin_sms_template_remove_by_id']={"url":"/admin/sms_template/remove_by_id","method":"get"}

Api['admin_sms_account_config_list']={"url":"/admin/sms_account_config/list","method":"post",requestBody:true}
Api['admin_sms_account_config_create']={"url":"/admin/sms_account_config/create","method":"post",requestBody:true}
Api['admin_sms_account_config_update_by_id']={"url":"/admin/sms_account_config/update_by_id","method":"post",requestBody:true}
Api['admin_sms_account_config_remove_by_id']={"url":"/admin/sms_account_config/remove_by_id","method":"get"}

Api['admin_notify_template_list']={"url":"/admin/notify_template/list","method":"post",requestBody:true}
Api['admin_notify_template_create']={"url":"/admin/notify_template/create","method":"post",requestBody:true}
Api['admin_notify_template_update_by_id']={"url":"/admin/notify_template/update_by_id","method":"post",requestBody:true}
Api['admin_notify_template_remove_by_id']={"url":"/admin/notify_template/remove_by_id","method":"get"}

Api['admin_tenant_notify_template_list']={"url":"/admin/tenant_notify_template/list","method":"post",requestBody:true}
Api['admin_tenant_notify_template_create']={"url":"/admin/tenant_notify_template/create","method":"post",requestBody:true}
Api['admin_tenant_notify_template_update_by_id']={"url":"/admin/tenant_notify_template/update_by_id","method":"post",requestBody:true}
Api['admin_tenant_notify_template_remove_by_id']={"url":"/admin/tenant_notify_template/remove_by_id","method":"get"}


Api['admin_tenant_app_cate_download']={"url":"/admin/tenant_app_cate/download","method":"get","download":true}
Api['admin_tenant_app_cate_get_by_id']={"url":"/admin/tenant_app_cate/get_by_id","method":"get"}
Api['admin_tenant_app_cate_get_one']={"url":"/admin/tenant_app_cate/get_one","method":"get"}
Api['admin_tenant_app_download']={"url":"/admin/tenant_app/download","method":"get","download":true}
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
Api['admin_tenant_third_app_get_by_id']={"url":"/admin/tenant_third_app/get_by_id","method":"get"}
Api['admin_tenant_third_app_get_one']={"url":"/admin/tenant_third_app/get_one","method":"get"}

//  应用管理

const APISDK={};
for(const name in Api){
  APISDK[name]=(options)=>{
    return  api_request(Api[name],options);
  }
}
export default APISDK;
