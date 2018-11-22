<template>
  <el-table
    v-if="dataFetch"
    :data="dataFetch.tableItems || dataFetch.tableDatas"
    :stripe="dataFetch.stripe"
    :max-height="dataFetch.maxHeight"
    :row-class-name="tableRowClassName"
    :border="dataFetch.border"
    class="full-width"
    style="margin-top: 1px;margin-left: 1px;">
    <template v-for="(item, key) in dataFetch.tHeader">
      <el-table-column
        v-if="item.buttons"
        :label="item.label"
        :prop="key"
        :fixed="item.fixed"
        :sortable="item.sortable"
        :width="item.width"
        :key="key">
        <template slot-scope="scope">
          <el-button
            size="mini"
            :type="button.type"
            @click="button.fn(scope.row)" v-for="button in item.buttons">{{ button.label }}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        v-else
        :prop="key"
        :key="key"
        :sortable="item.sortable"
        :fixed="item.fixed"
        :label="item.label"
        :width="item.width">
      </el-table-column>
    </template>
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
