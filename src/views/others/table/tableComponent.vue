<template>
  <div>
    <table-com :tableData="tableDatass"></table-com>
  </div>
</template>

<script>
import tableCom from '@/components/TableComponent'
export default {
  name: 'tableComponent',
  components: { tableCom },
  data() {
    return {
      tableDatass: {
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
            sortable: false
          },
          address: {
            label: '地址',
            width: null,
            fixed: '',
            sortable: false
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
