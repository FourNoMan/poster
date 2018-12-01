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
import sdk from '@/api/sdk'
export default {
  props: ['value'],
  components: {
    tableComp
  },
  data() {
    let that = this
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
          title: {
            label: '模板名称',
            width: null,
            fixed: '',
            sortable: false
          },
          createdTime: {
            label: '创建时间',
            width: null,
            fixed: '',
            sortable: false
          },
          appType: {
            label: '模板内容',
            width: null,
            fixed: '',
            sortable: false
          },
          relationConfig: {
            label: '说明',
            width: null,
            fixed: '',
            sortable: false
          },
          // responsibility: {
          //   label: '创建人',
          //   width: null,
          //   fixed: '',
          //   sortable: false
          // },
          operation: {
            label: '操作',
            width: 80,
            buttons: [{
              label: '选用',
              type: 'primary',
              fn: that.addTemplateList
            }],
            fixed: '',
            sortable: false
          }
        },
        tableItems: []
      }
    }
  },
  methods: {
    getTemplateList() {
      let obj = {}
      let that = this
      sdk.admin_sms_template_list(obj)
        .then(res => {
          that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++getTemplateList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    addTemplateList(row) {
      let obj = { templateId: row.id }
      console.log(obj, '++obj++')
      let that = this
      sdk.admin_sms_channel_template_add_template(obj)
        .then(res => {
          // that.total = res.data.data.total
          // that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++addTemplateList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
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
  },
  mounted() {
    this.getTemplateList()
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
