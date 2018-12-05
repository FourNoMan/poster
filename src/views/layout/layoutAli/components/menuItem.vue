<template>
  <div class="full-height">
    <div class="menu-item relative full-height">
      <div class="full-height flex item-center padding-row-20 pointer">
        <span v-if="menuItem.title.text">{{ menuItem.title.text }}</span>
        <i v-if="menuItem.title.icon" class="rotate block" :class="[menuItem.title.icon]"></i>
      </div>
      <div class="absolute">
        <div class="flex full-height">
          <template v-for="(selection, index) in menuItem.selections">
            <selection-group :selectionData="selection" :key="index"></selection-group>
            <span class="line"></span>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import selectionGroup from './selectionGroup'
export default {
  props: ['itemData'],
  name: "menu-item",
  components: {
    selectionGroup
  },
  computed: {
    menuItem() {
      return this.itemData
    }
  }
}
</script>

<style scoped>

</style>
