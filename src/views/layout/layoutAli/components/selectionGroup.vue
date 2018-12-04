<template>
  <div class="selection-group">
    <div class="padding-left-40 padding-bottom-20" style="color: #ccc;">
      <i v-if="groupData.title.icon" :class="groupData.title.icon"></i>
      <span v-if="groupData.title.text">{{ groupData.title.text }}</span>
    </div>
    <div>
      <selection-item v-for="(item, index) in groupData.items" :key="index" :itemData="item"></selection-item>
    </div>
  </div>
</template>

<script>
import selectionItem from './selectionItem'
export default {
  props: ['selectionData'],
  name: 'selectionGroup',
  components: {
    selectionItem
  },
  computed: {
    groupData() {
      return this.selectionData
    }
  }
}
</script>

<style scoped>

</style>
