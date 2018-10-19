<template>
  <div style="width: 250px;padding: 10px;border-right: 1px solid gainsboro;">
    <h1 class="text-center" style="border-bottom: 1px solid gainsboro;padding-bottom: 15px;">图片</h1>
    <div class="flex flex-wrap justify-between">
      <div v-for="i in 4" :key="i + 1" style="width: 105px;margin-bottom: 10px;" class="flex flex-column item-center" @click="addImage({value: 'static/images/rng.png', label: 'rng' + i + '.png'})">
        <img :src="'static/images/rng.png'" style="width: 100%;" alt="">
        <span style="margin-top: 10px;">rng{{ i }}.png</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageComp',
  data() {
    return {
      newImage: {
        label: '',
        value: '',
        style: {
          x: 0,
          y: 0,
          url: '',
          width: 100,
          height: 100,
          borderRadius: 0,
          borderWidth: 0,
          borderColor: '#fff',
          zIndex: 0
        }
      }
    }
  },
  methods: {
    addImage(image) {
      this.newImage.label = image.label
      this.newImage.value = image.value
      this.newImage.style.url = image.value
      this.$emit('imageAdd', this.newImage)
    }
  }
}
</script>

<style scoped>

</style>
