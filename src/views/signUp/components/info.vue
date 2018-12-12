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
            <span class="font-size-12">企业名称</span>
          </template>
          <div class="relative">
            <el-input v-model="form.mobile" class="signup-input"></el-input>
            <span class="absolute item-description text-ellipsis">需与企业注册证上的企业名称完全一致，信息审核成功后，企业名称不可修改</span>
          </div>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span class="font-size-12">营业执照</span>
          </template>
          <div class="relative">
            <el-input v-model="form.mobile" class="signup-input"></el-input>
          </div>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
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
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">&nbsp;</i>
            <span class="font-size-12">公司规模</span>
          </template>
          <el-select v-model="form.scale" class="signup-input" placeholder="公司规模（可选）">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span class="font-size-12">办公地址</span>
          </template>
          <div class="relative">
            <el-input v-model="form.adress" class="signup-input"></el-input>
            <span class="absolute item-description text-ellipsis">企业详细经营地址</span>
          </div>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span class="font-size-12">联系人姓名</span>
          </template>
          <div class="relative">
            <el-input v-model="form.mobile" class="signup-input"></el-input>
            <span class="absolute item-description text-ellipsis">业务对接负责人姓名</span>
          </div>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span class="font-size-12">联系人手机号</span>
          </template>
          <div class="relative">
            <el-input v-model="form.mobile" class="signup-input"></el-input>
            <span class="absolute item-description text-ellipsis">为了确保后续业务对接，请输入负责人正确的联系方式</span>
          </div>
        </el-form-item>
        <el-form-item class="margin-bottom-40">
          <template slot="label">
            <i class="color-red">*</i>
            <span class="font-size-12">联系人邮箱</span>
          </template>
          <div class="relative">
            <el-input v-model="form.mobile" class="signup-input"></el-input>
            <span class="absolute item-description text-ellipsis">负责人邮箱地址</span>
          </div>
        </el-form-item>
      </el-form>
      <div>
        <el-button type="primary" size="mini" @click="onSubmit">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import sdk from '@/api/sdk'
export default {
  name: 'info',
  props: ['value'],
  data() {
    return {
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
