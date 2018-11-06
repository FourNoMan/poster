<template>
  <div class="flex justify-between item-center" style="background: rgba(66, 185, 131, 0.1);padding-left: 50px;">
    <div>
      <h1>海报生成工具</h1>
    </div>
    <div v-if="!hideButtons">
      <el-button type="primary" @click="parentEvent('viewCode')">查看源码</el-button>
      <el-button type="primary" @click="parentEvent('save')">保存</el-button>
    </div>
    <div v-if="!hideButtons">
      <el-button type="primary" @click="parentEvent('preview')">预览</el-button>
      <el-button type="primary" @click="parentEvent('download')">下载</el-button>
      <el-button @click="componentChange">我的设计</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Headers',
  props: ['hideButtons'],
  methods: {
    componentChange() {
      this.$emit('componentChange')
    },
    parentEvent(param) {
      this.$emit(param)
    }
  }
}
</script>

<style scoped>

</style>
