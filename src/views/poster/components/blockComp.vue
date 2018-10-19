<template>
  <div style="width: 250px;padding: 10px;border-right: 1px solid gainsboro;">
    <h1 class="text-center" style="border-bottom: 1px solid gainsboro;padding-bottom: 15px;">块状</h1>
    <div class="flex flex-wrap justify-between">
      <div style="width: 105px;margin-bottom: 10px;" class="flex flex-column item-center pointer" @click="addBlock(newRect)">
        <div style="width: 50px;height: 50px;background: #cccccc;"/>
        <span style="margin-top: 10px;">矩形</span>
      </div>
      <div style="width: 105px;margin-bottom: 10px;" class="flex flex-column item-center pointer" @click="addBlock(newCircle)">
        <div style="width: 50px;height: 50px;background: #cccccc;border-radius: 50%;"/>
        <span style="margin-top: 10px;">圆</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageComp',
  data() {
    return {
      newRect: {
        label: '矩形',
        value: 'rect',
        style: {
          x: 100,
          y: 100,
          width: 200,
          height: 200,
          paddingLeft: 0,
          paddingRight: 0,
          borderRadius: 0,
          backgroundColor: '#ccc',
          borderWidth: 0,
          borderColor: '#000',
          zIndex: 0
        }
      },
      newCircle: {
        label: '圆',
        value: 'circle',
        style: {
          x: 100,
          y: 100,
          width: 200,
          height: 200,
          paddingLeft: 0,
          paddingRight: 0,
          borderRadius: 100,
          backgroundColor: '#ccc',
          borderWidth: 0,
          borderColor: '#000',
          zIndex: 0
        }
      }
    }
  },
  methods: {
    addBlock(block) {
      this.$emit('blockAdd', block)
    }
  }
}
</script>

<style scoped>

</style>
