<template>
  <div>
    <li class="list-style-none selection-item flex item-center justify-between">
      <div>
        <span v-if="selectionData">{{ selectionData.title.text }}</span>
        <span>{{ selectionData.description }}</span>
      </div>
      <i class="el-icon-arrow-right icon"></i>
    </li>
  </div>
</template>

<script>
export default {
  props: ['itemData'],
  name: 'selectionItem',
  computed: {
    selectionData() {
      return this.itemData
    }
  }
}
</script>

<style scoped>

</style>
