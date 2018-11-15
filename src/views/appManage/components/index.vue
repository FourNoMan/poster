<template>
  <div class="full-height flex flex-column">
    <el-steps :active="currentStep" finish-status="success" align-center>
      <el-step title="步骤1" description="录入应用基础信息"></el-step>
      <el-step title="步骤2" description="应用基础信息配置"></el-step>
      <el-step title="步骤3" description="关联资源配置"></el-step>
    </el-steps>
    <app-add class="padding-left-100 margin-top-50" v-if="currentStep === 0"></app-add>
    <app-config class="padding-left-100 margin-top-50" v-else-if="currentStep === 1"></app-config>
    <relation-config class="padding-left-100 margin-top-50" v-else-if="currentStep === 2"></relation-config>
    <div class="flex justify-center margin-top-50 flex-1 flex-column justify-end">
      <div class="margin-bottom-25 text-center">
        <el-button type="primary" v-if="currentStep > 0" @click="preStep">上一步</el-button>
        <el-button>完成</el-button>
        <el-button type="primary" v-if="currentStep < 2" @click="nextStep">下一步</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import appAdd from './appAdd'
import appConfig from './appConfig'
import relationConfig from './relationConfig'
export default {
  components: {
    appAdd,
    appConfig,
    relationConfig
  },
  data() {
    return {
      currentStep: 0
    }
  },
  methods: {
    nextStep() {
      this.currentStep = this.currentStep >= 1  ? 2 : this.currentStep + 1
    },
    preStep() {
      this.currentStep = this.currentStep > 0 ? this.currentStep - 1 : 0
    }
  }
}
</script>

<style>

</style>
