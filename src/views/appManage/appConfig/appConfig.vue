<template>
  <div class="full-height flex flex-column padding-row-50">
    <div class="flex">
      <img src="../../../../static/images/rng.png" style="width: 135px;height: 110px;" class="margin-right-50" alt="">
      <div>
        <div class="flex item-center">
          <span class="width-120">
            应用ID
          </span>
          <span>{{ appId }}</span>
        </div>
        <div class="flex item-center margin-top-20">
          <span class="width-120">
            应用名称
          </span>
          <span>{{ appName }}</span>
        </div>
        <div class="margin-top-20 flex item-center">
          <span class="width-120">
            登录过期时间
          </span>
          <el-input
            clearable
            v-model="expires"
            placeholder="默认120分钟"
            style="width: 200px;">
          </el-input>
          <span class="margin-left-20">分钟</span>
        </div>
        <div class="margin-top-20 flex item-center">
          <span class="width-120">
            密钥配置
          </span>
          <el-input
            clearable
            v-model="secretKey"
            placeholder="自定义输入32位字符串或系统生成密钥"
            style="width: 500px;">
          </el-input>
          <el-button class="margin-left-20">生成密钥</el-button>
        </div>
      </div>
    </div>
    <el-radio-group v-model="configItem" class="margin-top-50 margin-bottom-25">
      <el-radio-button label="关联第三方应用"></el-radio-button>
      <el-radio-button label="支付配置"></el-radio-button>
      <el-radio-button label="存储配置"></el-radio-button>
      <el-radio-button label="短信配置"></el-radio-button>
      <el-radio-button label="通知中心"></el-radio-button>
    </el-radio-group>
    <div>
      <third-app v-if="configItem === '关联第三方应用'"></third-app>
      <pay-config v-else-if="configItem === '支付配置'"></pay-config>
      <storage-config v-else-if="configItem === '存储配置'"></storage-config>
      <short-message v-else-if="configItem === '短信配置'"></short-message>
      <notice-center v-else-if="configItem === '通知中心'"></notice-center>
    </div>
  </div>
</template>

<script>
import thirdApp from './components/thirdApp'
import payConfig from './components/payConfig'
import storageConfig from './components/storageConfig/index'
import shortMessage from './components/shortMessage/index'
import noticeCenter from './components/noticeCenter/index'
export default {
  name: 'index',
  components: {
    thirdApp,
    payConfig,
    storageConfig,
    shortMessage,
    noticeCenter
  },
  data() {
    return {
      appId: 123232,
      appName: '微小保',
      expires: '',
      secretKey: '',
      configItem: '关联第三方应用'
    }
  }
}
</script>

<style scoped>

</style>
