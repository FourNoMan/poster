<template>
<div class="flex full-height">
  <menu-item></menu-item>
  <menu-item></menu-item>
  <menu-item></menu-item>
  <menu-item></menu-item>
</div>
</template>

<script>
import menuItem from './menuItem'
export default {
  name: 'menu-list',
  data() {
    return {

    }
  },
  components: {
    menuItem
  }
}
</script>

<style scoped>

</style>
