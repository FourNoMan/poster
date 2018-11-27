<template>
  <div class="padding-row-30">
    <div class="flex item-center">
      <el-input
        clearable
        placeholder="输入关键词搜索模板"
        style="width: 400px;"
        v-model="temlateSearch">
      </el-input>
      <div class="flex flex-nowrap margin-left-20">
        <el-button type="primary">搜索模板</el-button>
      </div>
    </div>
    <div class="margin-top-20" style="padding-top: 1px;">
      <table-comp :tableData="tableData"></table-comp>
    </div>
    <div class="flex margin-top-20">
      <el-pagination
        :current-page="queryParam.page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="queryParam.pageSize"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
export default {
  props: ['value'],
  components: {
    tableComp
  },
  data() {
    return {
      queryParam: {
        page: 1,
        pageSize: 10
      },
      total: 1,
      temlateSearch: '',
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
            width: 80,
            buttons: [{
              label: '选用',
              type: 'primary',
              fn: function() {
                //  这里写“选用”函数处理逻辑
                console.log('已经被选用了')
              }
            }],
            fixed: '',
            sortable: false
          }
        },
        tableItems: [{
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
  methods: {
    handleSizeChange() {
      console.log('handleSizeChange')
    },
    handleCurrentChange() {
      console.log('handleCurrentChange')
    }
  },
  computed: {
    smsTemplateData() {
      return this.value
    }
  }
}
</script>

<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
