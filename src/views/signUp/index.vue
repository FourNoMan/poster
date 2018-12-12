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
        欢迎加入Vsaas云平台
      </div>
      <div class="padding-50 full-width" style="background-color: #FFFFFF;margin: auto;min-width: 616px">
        <div class="margin-bottom-40" style="font-size: 18px;color: #333333;">
          <div class="flex justify-center">
            <div style="width: 240px;">
              <el-steps :active="steps" align-center>
                <el-step title="创建账户"></el-step>
                <el-step title="信息登记"></el-step>
              </el-steps>
            </div>
          </div>
          <div style="border-bottom: 1px solid rgba(238,238,238,1);"></div>
        </div>
        <account v-if="steps === 1" v-model="steps"></account>
        <info v-if="steps === 2" v-model="steps"></info>
      </div>
    </div>
  </div>
</template>

<script>
  import account from './components/account'
  import info from './components/info'
  export default {
    name: 'index',
    data() {
      return {
        steps: 1,
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
    },
    components: {
      account,
      info
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
.item-description{
  top: 30px;
  left: 1em;
  color: #999999;
  font-size: 12px;
}
.el-form-item {
  margin-bottom: 20px;
}
  .el-form .margin-bottom-40{
    margin-bottom: 40px;
  }
</style>
