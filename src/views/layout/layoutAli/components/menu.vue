<template>
<div class="flex full-height">
  <menu-item v-for="(item, index) in menuList" :itemData="item" :key="index"></menu-item>
</div>
</template>

<script>
import menuItem from './menuItem'
export default {
  props: ['menuData'],
  name: 'menu-list',
  data() {
    return {

    }
  },
  components: {
    menuItem
  },
  computed: {
    menuList() {
      return this.menuData
    }
  }
}
</script>

<style scoped>

</style>
