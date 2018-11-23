<template>
  <div class="flex flex-column padding-row-30 margin-top-20">
    <div class="flex justify-between item-center">
      <el-select v-model="platform" clearable placeholder="请选择渠道名称">
        <el-option
       v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input clearable placeholder="渠道应答名称" style="width: 200px;">
        <i slot="suffix"  class="el-icon-edit el-input__icon"></i>
      </el-input>
      <el-input clearable placeholder="渠道应答码" style="width: 200px;">
        <i slot="suffix"  class="el-icon-edit el-input__icon"></i>
      </el-input>
     <el-select clearable placeholder="状态">
        <el-option>
           vv
        </el-option>
     </el-select>
      <div class="flex flex-nowrap">
        <el-button type="primary">查询</el-button>
        <el-button type="primary">新建</el-button>
        <el-button type="primary">配置应用</el-button>
      </div>
    </div>
    <div class="margin-top-20">
      <table-comp :tableData="tableData"></table-comp>
    </div>
    <div class="flex margin-top-10">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        :total="400"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import tableComp from '@/components/TableComponent'
  import sdk from '@/api/sdk'
export default {
  data() {
    return {
      dialogVisible: false,
      appTypeOptions: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      appName: '',
      platform: '',
      appSataus: '',
      appType: '',
      currentPage: 1,
      tableData: {
        stripe: true,
        maxHeight: '100%',
        border: true,
        rowClassName: false,
        tHeader: {
          id: {
            label: 'ID',
            width: 40,
            fixed: '',
            sortable: false
          },
          name: {
            label: '应用名称',
            width: null,
            fixed: '',
            sortable: false
          },
          createdTime: {
            label: '应用创建时间',
            width: null,
            fixed: '',
            sortable: false
          },
          appType: {
            label: '应用分类',
            width: null,
            fixed: '',
            sortable: false
          },
          platform: {
            label: '应用平台',
            width: null,
            fixed: '',
            sortable: false
          },
          vbaoId: {
            label: '微保AppID',
            width: null,
            fixed: '',
            sortable: false
          },
          thirdNumber: {
            label: '第三方应用数',
            width: null,
            fixed: '',
            sortable: false
          },
          relationConfig: {
            label: '关联配置',
            width: null,
            fixed: '',
            sortable: false
          },
          responsibility: {
            label: '负责人',
            width: null,
            fixed: '',
            sortable: false
          },
          status: {
            label: '应用状态',
            width: null,
            fixed: '',
            sortable: false
          },
          operation: {
            label: '操作',
            buttons: [{
              label: '编辑',
              type: 'primary',
              fn: function(param) {
                console.log(param, '++7777++')
              }
            }, {
              label: '删除',
              type: 'primary',
              fn: function(param) {
                console.log(param, '++7777++')
              }
            }],
            width: 180,
            fixed: '',
            sortable: false
          }
        },
        tableDatas: [{
          rowStatus: 'warning',
          id: 3,
          createdTime: '2016-05-02',
          name: '王小虎',
          appType: '-',
          platform: '微信小程序',
          vbaoId: '121232',
          thirdNumber: 4,
          relationConfig: 9,
          responsibility: '特朗普',
          status: '开启',
          operation: '待定',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          rowStatus: 'warning',
          id: 3,
          createdTime: '2016-05-02',
          name: '王小虎',
          appType: '-',
          platform: '微信小程序',
          vbaoId: '121232',
          thirdNumber: 4,
          relationConfig: 9,
          responsibility: '特朗普',
          status: '开启',
          operation: '待定',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          rowStatus: 'warning',
          id: 3,
          createdTime: '2016-05-02',
          name: '王小虎',
          appType: '-',
          platform: '微信小程序',
          vbaoId: '121232',
          thirdNumber: 4,
          relationConfig: 9,
          responsibility: '特朗普',
          status: '开启',
          operation: '待定',
          address: '上海市普陀区金沙江路 1518 弄'
        }]
      }
    }
  },
 components: {
   tableComp
 }
}
</script>

<style scoped>

</style>


