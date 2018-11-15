<template>
  <el-table
    v-if="dataFetch"
    :data="dataFetch.tableDatas"
    :stripe="dataFetch.stripe"
    :max-height="dataFetch.maxHeight"
    :row-class-name="tableRowClassName"
    :border="dataFetch.border"
    class="full-width"
    style="margin-top: 1px;margin-left: 1px;">
    <el-table-column
      v-for="(item, key) in dataFetch.tHeader"
      :key="key"
      :prop="key"
      :sortable="item.sortable"
      :fixed="item.fixed"
      :label="item.label"
      :width="item.width">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'tableComponent',
  props: ['tableData'],
  data() {
    return {
      stripe: true,
      maxHeight: '100%',
      border: true,
      rowClassName: false,
      tHeader: {
        date: {
          label: '日期',
          width: 180,
          fixed: '',
          sortable: true
        },
        name: {
          label: '姓名',
          width: null,
          fixed: '',
          sortable: true
        },
        address: {
          label: '地址',
          width: null,
          fixed: '',
          sortable: true
        }
      },
      tableDatas: [{
        rowStatus: 'warning',
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        rowStatus: 'warning',
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        rowStatus: 'warning',
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        rowStatus: 'warning',
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if(this.dataFetch.rowClassName) {
        this.dataFetch.stripe = false
        return row.rowStatus
      }
      return ''
    }
  },
  computed: {
    dataFetch() {
      return this.tableData
    }
  }
}
</script>

<style>
  .el-table .warning{
    background: oldlace;
  }

  .el-table .success{
    background: #f0f9eb;
  }
</style>
