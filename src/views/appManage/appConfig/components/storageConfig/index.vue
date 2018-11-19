<template>
  <div>
    <el-radio-group v-model="storageManage" class="margin-bottom-20">
      <el-radio-button label="配置管理"></el-radio-button>
      <el-radio-button label="业务管理"></el-radio-button>
    </el-radio-group>
    <config-manage v-if="storageManage === '配置管理'"></config-manage>
    <business-manage v-else-if="storageManage === '业务管理'"></business-manage>
  </div>
</template>

<script>
import configManage from './configManage'
import businessManage from './businessManage'
export default {
  name: 'storageConfig',
  data() {
    return {
      storageManage: '配置管理'
    }
  },
  components: {
    configManage,
    businessManage
  }
}
</script>

<style scoped>

</style>
