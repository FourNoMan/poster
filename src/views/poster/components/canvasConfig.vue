<template>
  <div>
    <div class="flex flex-column text-left full-width" style="border-top: 1px solid gainsboro;padding: 15px 0;">
      <span>画布尺寸(单位：px)</span>
      <div class="flex" style="margin-top: 20px;">
        <div class="flex flex-column" style="margin-left: 20px;">
          <el-input
            v-model="config.width"
            style="width: 60px;margin-bottom: 10px;"
            placeholder=""
            @change="styleChange"/>
          <span>宽度</span>
        </div>
        <div class="flex flex-column" style="margin-left: 20px;">
          <el-input
            v-model="config.height"
            style="width: 60px;margin-bottom: 10px;"
            placeholder=""
            @change="styleChange"/>
          <span>高度</span>
        </div>
      </div>
    </div>
    <div class="flex item-center justify-between" style="padding: 15px 0;border-top: 1px solid gainsboro;">
      <span style="margin-right: 10px;">画布颜色</span>
      <el-color-picker v-model="config.backgroundColor" @change="styleChange"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CanvasConfig',
  props: ['canvasStyle'],
  data() {
    return {
      config: {}
    }
  },
  beforeMount() {
    if (this.canvasStyle) {
      for (const item in this.canvasStyle) {
        this.config[item] = this.canvasStyle[item]
      }
    }
  },
  methods: {
    styleChange() {
      console.log(this.config)
      this.$emit('styleChange', this.config)
    }
  }
}
</script>

<style scoped>

</style>
