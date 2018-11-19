<template>
  <div>
    <el-radio-group v-model="noticeManage" class="margin-bottom-20">
      <el-radio-button label="通知列表"></el-radio-button>
      <el-radio-button label="模板管理"></el-radio-button>
    </el-radio-group>
    <notice-list v-if="noticeManage==='通知列表'"></notice-list>
    <notice-template v-else-if="noticeManage==='模板管理'"></notice-template>
  </div>
</template>

<script>
import noticeList from './noticeList'
import noticeTemplate from './noticeTemplate'
export default {
  name: 'noticeCenter',
  data() {
    return {
      noticeManage: '通知列表'
    }
  },
  components: {
    noticeList,
    noticeTemplate
  }
}
</script>

<style scoped>

</style>
