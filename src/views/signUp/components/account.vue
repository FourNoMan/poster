<template>
  <div>
    <div class="padding-left-15">
      <el-form ref="form" :model="form" :rules="signupRules" label-width="145px" label-position="left">
        <!--<el-form-item>-->
        <!--<template slot="label">-->
        <!--<i class="color-red">*</i>-->
        <!--<span class="font-size-12">公司全称</span>-->
        <!--</template>-->
        <!--<el-input v-model="form.company" class="signup-input"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <!--<template slot="label">-->
        <!--<i class="color-red">*</i>-->
        <!--<span class="font-size-12">行业类型</span>-->
        <!--</template>-->
        <!--<div class="signup-input flex">-->
        <!--<el-select v-model="form.cate" placeholder="请选择第一行业">-->
        <!--<el-option label="区域一" value="shanghai"></el-option>-->
        <!--<el-option label="区域二" value="beijing"></el-option>-->
        <!--</el-select>-->
        <!--<el-select v-model="form.cateTo" class="margin-left-20" placeholder="请选择第二行业">-->
        <!--<el-option label="区域一" value="shanghai"></el-option>-->
        <!--<el-option label="区域二" value="beijing"></el-option>-->
        <!--</el-select>-->
        <!--</div>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <!--<template slot="label">-->
        <!--<i class="color-red">&nbsp;</i>-->
        <!--<span class="font-size-12">公司规模</span>-->
        <!--</template>-->
        <!--<el-select v-model="form.scale" class="signup-input" placeholder="公司规模（可选）">-->
        <!--<el-option label="区域一" value="shanghai"></el-option>-->
        <!--<el-option label="区域二" value="beijing"></el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <!--<template slot="label">-->
        <!--<i class="color-red">*</i>-->
        <!--<span class="font-size-12">办公地址</span>-->
        <!--</template>-->
        <!--<el-input v-model="form.adress" class="signup-input"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <!--<template slot="label">-->
        <!--<i class="color-red">*</i>-->
        <!--<span class="font-size-12">联系人姓名</span>-->
        <!--</template>-->
        <!--<el-input v-model="form.name" class="signup-input"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item>-->
        <!--<template slot="label">-->
        <!--<i class="color-red">*</i>-->
        <!--<span class="font-size-12">联系人邮箱</span>-->
        <!--</template>-->
        <!--<el-input v-model="form.email" class="signup-input"></el-input>-->
        <!--</el-form-item>-->
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span class="font-size-12">手机号</span>
          </template>
          <div class="relative">
            <el-input v-model="form.mobile" class="signup-input"></el-input>
            <span class="absolute item-description text-ellipsis">作为登录账号，请填写未被微保平台注册的手机号码</span>
          </div>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span>验证码</span>
          </template>
          <div class="flex item-center signup-input relative">
            <el-input v-model="form.code" class="flex-1"></el-input>
            <el-button class="margin-left-20 font-size-12" size="mini">验证码</el-button>
            <el-button class="margin-left-20 font-size-12" type="text" size="mini">换一张</el-button>
            <span class="absolute item-description text-ellipsis">需与企业注册证上的企业名称完全一致，信息审核成功后，企业名称不可修改</span>
          </div>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span>短信验证码</span>
          </template>
          <div class="flex item-center signup-input relative">
            <el-input v-model="form.code" class="flex-1"></el-input>
            <el-button class="margin-left-20 font-size-12" size="mini">发送验证码</el-button>
            <span class="absolute item-description text-ellipsis">6位短信验证码</span>
          </div>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span class="font-size-12">设置密码</span>
          </template>
          <div class="relative">
            <el-input v-model="form.password" class="signup-input"></el-input>
            <span class="absolute item-description text-ellipsis">字母、数字或者英文符号，最短8位，区分大小写</span>
          </div>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span class="font-size-12">确认密码</span>
          </template>
          <el-input v-model="form.repassword" class="signup-input"></el-input>
        </el-form-item>
      </el-form>
      <div class="margin-bottom-50">
        <el-checkbox v-model="checked">
          <span class="font-size-12">同意</span>
          <span class="font-size-12" style="color: #409EFF;">《Vsaas云平台服务协议》</span>
        </el-checkbox>
      </div>
      <div>
        <el-button type="primary" size="mini" :disabled="!checked" @click="onSubmit">创建账户</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import sdk from '@/api/sdk'
export default {
  name: 'account',
  props: ['value'],
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
      that.$emit('input', that.stepValue + 1)
      // sdk.admin_staff_create(this.form)
      //   .then(res => {
      //     that.$emit('input', that.stepValue + 1)
      //   })
      //   .catch(error => {
      //     console.log(error)
      //   })
    }
  },
  computed: {
    stepValue() {
      return this.value
    }
  }
}
</script>

<style scoped>

</style>
