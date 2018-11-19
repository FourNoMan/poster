<template>
  <div>
    <el-radio-group v-model="messageManage" class="margin-bottom-20">
      <el-radio-button label="配置管理"></el-radio-button>
      <el-radio-button label="模板管理"></el-radio-button>
    </el-radio-group>
    <config-manage v-if="messageManage==='配置管理'"></config-manage>
    <message-template v-else-if="messageManage==='模板管理'"></message-template>
  </div>
</template>

<script>
import configManage from './configManage'
import messageTemplate from './messageTemplate'
export default {
  name: 'shortMessage',
  data() {
    return {
      messageManage: '配置管理'
    }
  },
  components: {
    configManage,
    messageTemplate
  }
}
</script>

<style scoped>

</style>
