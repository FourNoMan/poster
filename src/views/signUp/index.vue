<template>
  <div class="full-height flex flex-column">
    <div class="full-width shrink-none flex item-center justify-between"
         style="height: 60px;background: rgba(36,42,48,1);padding:0 22px;">
      <div class="flex item-center">
        <!--<img style="height: 50px;" :src="'static/images/log.png'" alt="">-->
        <span style="color: #FFFFFF;" class="font-size-16 margin-left-10 pointer" @click="routerLink('/')">VBAO(新重构)交易系统</span>
      </div>
    </div>
    <div class="flex-1 flex flex-column main-bgcolor overflow-auto padding-bottom-30 padding-row-138">
      <div class="" style="margin: 34px auto 28px;font-size: 18px;color: #333333;">
        欢迎加入Vbao开放平台
      </div>
      <div class="padding-50 full-width" style="background-color: #FFFFFF;margin: auto;min-width: 616px">
        <div class="margin-bottom-25" style="font-size: 18px;color: #333333;">
          <span style="border-right: 4px solid #333333;">&nbsp;</span>
          <span>设置信息</span>
        </div>
        <div class="padding-left-15">
          <el-form ref="form" :model="form" :rules="signupRules" label-width="145px" label-position="left">
            <el-form-item>
              <template slot="label">
                <i class="color-red">*</i>
                <span class="font-size-12">公司全称</span>
              </template>
              <el-input v-model="form.company" class="signup-input"></el-input>
            </el-form-item>
            <el-form-item>
              <template slot="label">
                <i class="color-red">*</i>
                <span class="font-size-12">行业类型</span>
              </template>
              <div class="signup-input flex">
                <el-select v-model="form.cate" placeholder="请选择第一行业">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
                <el-select v-model="form.cateTo" class="margin-left-20" placeholder="请选择第二行业">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </div>
            </el-form-item>
            <el-form-item>
              <template slot="label">
                <i class="color-red">&nbsp;</i>
                <span class="font-size-12">公司规模</span>
              </template>
              <el-select v-model="form.scale" class="signup-input" placeholder="公司规模（可选）">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item>
              <template slot="label">
                <i class="color-red">*</i>
                <span class="font-size-12">办公地址</span>
              </template>
              <el-input v-model="form.adress" class="signup-input"></el-input>
            </el-form-item>
            <el-form-item>
              <template slot="label">
                <i class="color-red">*</i>
                <span class="font-size-12">联系人姓名</span>
              </template>
              <el-input v-model="form.name" class="signup-input"></el-input>
            </el-form-item>
            <el-form-item>
              <template slot="label">
                <i class="color-red">*</i>
                <span class="font-size-12">联系人邮箱</span>
              </template>
              <el-input v-model="form.email" class="signup-input"></el-input>
            </el-form-item>
            <el-form-item>
              <template slot="label">
                <i class="color-red">*</i>
                <span class="font-size-12">联系人手机</span>
              </template>
              <el-input v-model="form.mobile" class="signup-input"></el-input>
            </el-form-item>
            <el-form-item>
              <template slot="label">
                <i class="color-red"></i>
                <span></span>
              </template>
              <div class="flex item-center signup-input">
                <el-input v-model="form.code" class="flex-1"></el-input>
                <el-button class="margin-left-20 font-size-12" size="mini">发送验证码</el-button>
              </div>
            </el-form-item>
            <el-form-item>
              <template slot="label">
                <i class="color-red">*</i>
                <span class="font-size-12">设置密码</span>
              </template>
              <el-input v-model="form.password" class="signup-input"></el-input>
            </el-form-item>
            <el-form-item>
              <template slot="label">
                <i class="color-red">*</i>
                <span class="font-size-12">确认密码</span>
              </template>
              <el-input v-model="form.repassword" class="signup-input"></el-input>
            </el-form-item>
          </el-form>
          <div class="full-width padding-row-20 padding-column-30 margin-bottom-25" style="background-color: rgba(247,247,247,1);">
            <div class="font-size-12 margin-bottom-20" style="color: #666666;">
              与Vb开放平台签署协议以后，我们将为您提供多种服务能力，包括.......................，您将正式成为蚂蚁金服官方许可的服务商，开展业务。
            </div>
            <div>
              <el-checkbox v-model="checked">
                <span class="font-size-12">同意</span>
                <span class="font-size-12" style="color: #409EFF;">《开发平台服务协议》</span>
              </el-checkbox>
            </div>
          </div>
          <div>
            <el-button type="primary" size="mini" :disabled="!checked" @click="onSubmit">提交入住申请</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import sdk from '@/api/sdk'
  export default {
    name: 'index',
    data() {
      return {
        checked: false,
        form: {
          // realname: 'realname',
          // mobile: 'mobile',
          // email: 'email',
          // password: 'password',
          // avatarUrl: 'avatarUrl',
          // nickname: 'nickname',
          // idCardNO: 'idCardNO',
          // salt: 'salt',
          // algorithm: 'algorithm',
          realname:"幻宝",
          mobile:"110",
          password:"123456",
          email:"huanba0@vbao.com",
          nickname:"情场幻宝"
        },
        signupRules: {
          // username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          // password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        }
      }
    },
    methods: {
      routerLink(route) {
        this.$router.push(route)
      },
      onSubmit() {
        let that = this
        sdk.admin_staff_create(this.form)
          .then(res => {
            that.$router.replace('/')
          })
          .catch(error => {
            console.log(error)
          })
      }
    }
  }
</script>

<style>
.signup-input{
  width: 356px;
}
.signup-input .el-input--medium .el-input__inner,.signup-input .el-input__inner{
  height: 30px;
  line-height: 30px;
  font-size: 12px;
}
.el-form-item {
  margin-bottom: 20px;
}
</style>
