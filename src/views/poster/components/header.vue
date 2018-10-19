<template>
  <div class="flex justify-between item-center" style="box-shadow: 0 0 10px darkgrey;">
    <div>
      <h1>海报生成工具</h1>
    </div>
    <div v-if="!hideButtons">
      <el-button type="primary" @click="parentEvent('save')">保存</el-button>
    </div>
    <div v-if="!hideButtons">
      <el-button type="primary" @click="parentEvent('preview')">预览</el-button>
      <el-button type="primary" @click="parentEvent('download')">下载</el-button>
      <el-button @click="routerLink('home')">我的设计</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headers',
  props: ['hideButtons'],
  methods: {
    routerLink(str) {
      this.$router.push(str)
    },
    parentEvent(param) {
      this.$emit(param)
    }
  }
}
</script>

<style scoped>

</style>
