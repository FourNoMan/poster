<template>
  <div class="full-height shrink-none">
    <div class="menu-item relative full-height">
      <div class="full-height flex item-center padding-row-20 pointer">
        <img class="userIcon" v-if="menuItem.title.userIcon" :src="menuItem.title.userIcon">
        <span v-if="menuItem.title.text">{{ menuItem.title.text }}</span>
        <i v-if="menuItem.title.icon" class="block" :class="[menuItem.title.icon, menuItem.title.rotate ? 'rotate' : '']"></i>
        <span class="badge" v-if="menuItem.title.badge">{{ menuItem.title.badge }}</span>
      </div>
      <div class="absolute" :class="menuItem.position" :style="{width:menuItem.title.userIcon? '100%' : null}">
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
  .userIcon{
    width: 19px;
    height: 19px;
    position: relative;
    border-radius: 50%;
  }
  .badge{
    padding: 0 3px;
    margin-left: 0px;
    line-height: 14px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    background: #108ee9;
    border-radius: 8px 8px 8px 0;
    font-family: tahoma;
    color: #fff;
  }
</style>
