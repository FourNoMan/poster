<template>
  <div style="width: 250px;padding: 10px;border-right: 1px solid gainsboro;">
    <h1 class="text-center" style="border-bottom: 1px solid gainsboro;padding-bottom: 15px;">线条</h1>
    <div class="flex flex-wrap justify-between">
      <div style="width: 65px;margin-bottom: 10px;" class="flex flex-column item-center pointer" @click="addLine(straightLine)">
        <div style="width: 100%;border-bottom: 3px solid #ccc;margin-bottom: 10px;margin-top: 10px;"/>
        <span style="margin-top: 10px;">直线</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LineComp',
  data() {
    return {
      straightLine: {
        label: '直线',
        value: 'straightLine',
        style: {
          startX: 0,
          startY: 100,
          endX: 0,
          endY: 600,
          width: 5,
          color: 'green',
          zIndex: 0
        }
      }
    }
  },
  methods: {
    addLine(line) {
      this.$emit('lineAdd', line)
    }
  }
}
</script>

<style scoped>

</style>
