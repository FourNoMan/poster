<template>
  <div>
    <div class="flex item-center">
      <span class="width-120">
        应用名称
      </span>
      <el-input
        clearable
        :disabled="true"
        style="width: 200px;"
        v-model="appName">
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-120">
        应用ID
      </span>
      <el-input
        clearable
        :disabled="true"
        style="width: 200px;"
        v-model="appID">
      </el-input>
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
      <span class="margin-left-20">
        分钟
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appConfig',
  data() {
    return {
      appID: '609494499',
      appName: '微小宝',
      expires: '',
      secretKey: ''
    }
  },
  methods: {
    routerLink(router) {
      this.$router.push(router)
    }
  }
}
</script>

<style scoped>

</style>
