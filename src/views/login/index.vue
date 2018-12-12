<template>
  <div class="login-container">
    <div class="full-width shrink-none flex item-center justify-between" style="height: 50px;background: rgba(36,42,48,1);padding:0 22px;">
      <div class="flex item-center">
        <img src="../../../static/images/vbao_logo.png" alt="">
        <span style="color: #FFFFFF;" class="font-size-16 margin-left-10">Vsass云</span>
      </div>
      <div class="right-menu">
        <button class="channelBut">商户入驻</button>
      </div>
    </div>
    <div class="box">
    <el-card class="box-card">
        <span>微保sass云端平台支持支付、营销、保险、电商等行业一站式管理</span>
        <br/>
       <!-- <br/>-->
        <el-button type="primary" class="vbaoBtn">成为vbao商户 >></el-button>
    </el-card>
    <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" auto-complete="on" label-position="left">
      <div class="title-container">
        <h3 class="title">{{ $t('login.title') }}</h3>
        <!--<lang-select class="set-language"/>-->
      </div>
      <el-form-item prop="username">
        <span class="svg-container">
          <svg-icon icon-class="user" />
        </span>
        <el-input
          v-model="loginForm.username"
          :placeholder="$t('login.username')"
          name="username"
          type="text"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item prop="password">
        <span class="svg-container">
          <svg-icon icon-class="password" />
        </span>
        <el-input
          :type="passwordType"
          v-model="loginForm.password"
          :placeholder="$t('login.password')"
          name="password"
          auto-complete="on"
          @keyup.enter.native="handleLogin" />
        <span class="show-pwd" @click="showPwd">
          <svg-icon icon-class="eye" />
        </span>
      </el-form-item>
      <el-button :loading="loading" type="primary" style="width:100%;" @click.native.prevent="handleLogin">{{ $t('login.logIn') }}</el-button>
      <div class="flex justify-between">
        <el-checkbox class="flex justify-flex-end item-center margin-bottom-10" v-model="accountInfo.remember">记住密码</el-checkbox>
        <el-button class="flex justify-flex-end item-center margin-bottom-10" type="text" style="color: #FFFFFF;" @click="routerLink('/signup')">
          <span>去注册</span>
          <i class="el-icon-back" style="transform: rotate(180deg)"></i>
        </el-button>
      </div>

      <!--<div class="tips">-->
      <!--<span>{{ $t('login.username') }} : admin</span>-->
      <!--<span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>-->
      <!--</div>-->
      <!--<div class="tips">-->
      <!--<span style="margin-right:18px;">{{ $t('login.username') }} : editor</span>-->
      <!--<span>{{ $t('login.password') }} : {{ $t('login.any') }}</span>-->
      <!--</div>-->

      <!--<el-button class="thirdparty-button" type="primary" @click="showDialog=true">{{ $t('login.thirdparty') }}</el-button>-->
    </el-form>
    <el-dialog :title="$t('login.thirdparty')" :visible.sync="showDialog" append-to-body>
      {{ $t('login.thirdpartyTips') }}
      <br>
      <br>
      <br>
      <social-sign />
    </el-dialog>
    </div>
  </div>
</template>

<script>
  import { isvalidUsername } from '@/utils/validate'
  import Cookie from 'js-cookie'
  import LangSelect from '@/components/LangSelect'
  import SocialSign from './socialsignin'

  export default {
    name: 'Login',
    components: { LangSelect, SocialSign },
    data() {
      const validateUsername = (rule, value, callback) => {
        if (!isvalidUsername(value)) {
          callback(new Error('Please enter the correct user name'))
        } else {
          callback()
        }
      }
      const validatePassword = (rule, value, callback) => {
        if (value.length < 6) {
          callback(new Error('The password can not be less than 6 digits'))
        } else {
          callback()
        }
      }
      return {
        loginForm: {
          username: 'admin',
          password: '1111111'
        },
        loginRules: {
          username: [{ required: true, trigger: 'blur', validator: validateUsername }],
          password: [{ required: true, trigger: 'blur', validator: validatePassword }]
        },
        passwordType: 'password',
        loading: false,
        showDialog: false,
        redirect: undefined,
        accountInfo: {
          cookieName: 'accoutInfo',
          remember: false,
          time: 7
        }
      }
    },
    watch: {
      $route: {
        handler: function(route) {
          this.redirect = route.query && route.query.redirect
        },
        immediate: true
      }

    },
    created() {
      this.getAccountCookie()
      // window.addEventListener('hashchange', this.afterQRScan)
    },
    destroyed() {
      // window.removeEventListener('hashchange', this.afterQRScan)
    },
    methods: {
      routerLink(route) {
        this.$router.push(route)
      },
      showPwd() {
        if (this.passwordType === 'password') {
          this.passwordType = ''
        } else {
          this.passwordType = 'password'
        }
      },
      getAccountCookie() {
        let accountStr = Cookie.get(this.accountInfo.cookieName)
        if(accountStr) {
          let account = JSON.parse(accountStr)
          this.loginForm.username = (account && account.username) || this.loginForm.username
          this.loginForm.password = (account && account.password) || this.loginForm.password
          this.accountInfo.remember = true
        }
        else{
          this.accountInfo.remember = false
        }
      },
      handleLogin() {
        this.$refs.loginForm.validate(valid => {
          if (valid) {
            this.loading = true
            this.$store.dispatch('LoginByUsername', this.loginForm).then(() => {
              console.log('登陆成功！！！！')
              this.loading = false
              if(this.accountInfo.remember) {
                Cookie.set(this.accountInfo.cookieName, this.loginForm, { expires: this.accountInfo.time })
              }
              else {
                Cookie.remove(this.accountInfo.cookieName)
              }
              this.$router.push({ path: this.redirect || '/' })
            }).catch(() => {
              this.loading = false
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      afterQRScan() {
        // const hash = window.location.hash.slice(1)
        // const hashObj = getQueryObject(hash)
        // const originUrl = window.location.origin
        // history.replaceState({}, '', originUrl)
        // const codeMap = {
        //   wechat: 'code',
        //   tencent: 'code'
        // }
        // const codeName = hashObj[codeMap[this.auth_type]]
        // if (!codeName) {
        //   alert('第三方登录失败')
        // } else {
        //   this.$store.dispatch('LoginByThirdparty', codeName).then(() => {
        //     this.$router.push({ path: '/' })
        //   })
        // }
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  /* 修复input 背景不协调 和光标变色 */
  /* Detail see https://github.com/PanJiaChen/vue-element-admin/pull/927 */

  $bg:#283443;
  $light_gray:#999;
  $cursor: #999;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input{
      color: $cursor;
      &::first-line {
        color: $light_gray;
      }
    }
  }
  .box{
    width:80%;
    margin: 0 auto;
  }
  .channelBut{
    width:80px;
    height:30px;
    border:1px solid rgba(255,255,255,1);
    border-radius:4px;
    background: rgba(19, 25, 44, 1);
    color: #fff;
  }
  .vbaoBtn{
    margin-top: 20px;
  }
  .box-card {
    background:none;
    width:418px;
    font-size:25px;
    font-family:SourceHanSansCN-Normal;
    font-weight:400;
    color:rgba(255,255,255,1);
    padding: 6px;
    margin-top: 10px;
    margin-left: 100px;
    float: left;
    border: none;
    line-height: 45px;
  }
  /* reset element-ui css */
  .login-container {
    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0px 1000px $bg inset !important;
          -webkit-text-fill-color: $cursor !important;
        }
      }
    }
    .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: #ffffff;
      border-radius: 5px;
      color:rgba(153,153,153,1);
      height:44px;
    }
  }
</style>

<style rel="stylesheet/scss" lang="scss" scoped>
  $bg:#2d3a4b;
  $dark_gray:#889aa4;
  $light_gray:#eee;

  .login-container {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: $bg;
    background-size: cover;
    background-image: url(../../../static/images/banner.png);
    background-position: bottom;
    background-repeat:no-repeat;
    .login-form {
      /*position: absolute;
      left: 0;
      right: 0;*/
      width: 400px;
      max-width: 100%;
      padding: 35px 50px 35px 50px;
      margin-top: 150px;
      margin-left:60%;
      background-color: rgba(0, 0, 0, 0.49);
      opacity: 1;
    }
    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;
      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }
    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }
    .title-container {
      position: relative;
      .title {
        margin: 0px auto 40px auto;
        text-align: center;
        font-size:20px;
        font-family:SourceHanSansCN-Normal;
        font-weight:400;
        color:rgba(255,255,255,1);
      }
      .set-language {
        color: #fff;
        position: absolute;
        top: 5px;
        right: 0px;
      }
    }
    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .thirdparty-button {
      position: absolute;
      right: 35px;
      bottom: 28px;
    }
  }
</style>
