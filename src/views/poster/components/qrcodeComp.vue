<template>
  <div style="width: 250px;padding: 10px;border-right: 1px solid gainsboro;">
    <h1 class="text-center" style="border-bottom: 1px solid gainsboro;padding-bottom: 15px;">二维码</h1>
    <div class="flex flex-wrap justify-between">
      <div v-for="i in 4" :key="i + 1" style="width: 105px;margin-bottom: 10px;" class="flex flex-column item-center" @click="addQrcode({value: 'static/images/qrcode.png', label: 'qrcode' + i + '.png'})">
        <img :src="'static/images/qrcode.png'" style="width: 100%;" alt="">
        <span style="margin-top: 10px;">qrcode{{ i }}.png</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QrcodeComp',
  data() {
    return {
      newQrcode: {
        label: '',
        value: '',
        style: {
          x: 300,
          y: 0,
          id: '',
          type: 'QRCODE',
          url: '',
          width: 100,
          height: 100,
          borderRadius: 0,
          borderWidth: 0,
          borderColor: '#fff',
          zIndex: 0,
          params: []
        }
      }
    }
  },
  methods: {
    addQrcode(qrcode) {
      this.newQrcode.label = qrcode.label
      this.newQrcode.value = qrcode.value
      this.newQrcode.style.url = qrcode.value
      this.$emit('qrcodeAdd', this.newQrcode)
    }
  }
}
</script>

<style scoped>

</style>
