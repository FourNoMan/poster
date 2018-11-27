<template>
  <div>
    <div class="flex item-center">
      <el-input
        clearable
        placeholder="输入模板关键词"
        style="width: 400px;"
        v-model="businessName">
        <!--<i slot="suffix" class="el-icon-edit el-input__icon"></i>-->
      </el-input>
      <div class="flex flex-nowrap margin-left-20">
        <el-button type="primary">搜索</el-button>
      </div>
    </div>
    <div class="margin-top-20">
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
    <el-dialog
      title="选择通知模板"
      :visible.sync="dialogVisible"
      width="70%"
      center>
      <dialog-content></dialog-content>
      <span slot="footer" class="dialog-footer text-center">
        <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
        <el-button type="primary" @click="dialogSubmit">确定</el-button>
      </span>
    </el-dialog>
    <el-dialog
      title="删除操作"
      :visible.sync="removeDialogVisible"
      width="30%"
      center>
      <span>删除后不可以恢复，确认删除？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="removeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="noticeTemplateRemove(currentRow)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import dialogContent from './dialogTemplate'
import sdk from '@/api/sdk'
export default {
  name: 'noticeTemplate',
  data() {
    let that = this
    return {
      queryParam: {
        page: 1,
        pageSize: 10
      },
      noticeTemplateItemData: {
        bizName: '',
        businessTitle: '',
        bucketName: '',
        isGroup: false,
        groupType: ''
      },
      total: 1,
      currentRow: '',
      isNoticeTemplateUpdate: false,
      removeDialogVisible: false,
      dialogVisible: false,
      businessName: '',
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
            label: '通知标题',
            width: null,
            fixed: '',
            sortable: false
          },
          createdTime: {
            label: '通知模板ID',
            width: null,
            fixed: '',
            sortable: false
          },
          appType: {
            label: '第三方平台',
            width: null,
            fixed: '',
            sortable: false
          },
          platform: {
            label: '创建时间',
            width: null,
            fixed: '',
            sortable: false
          },
          vbaoId: {
            label: '通知模板内容',
            width: null,
            fixed: '',
            sortable: false
          },
          thirdNumber: {
            label: '模板描述',
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
          operation: {
            label: '操作',
            width: 160,
            buttons: [{
              label: '选用',
              type: 'primary',
              fn: that.noticeTemplateEdite
            }, {
              label: '删除',
              type: 'primary',
              fn: that.isRemove
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
    getNoticeTemplateList() {
      let obj = {}
      let that = this
      sdk.admin_sms_account_config_list(obj)
        .then(res => {
          that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++getNoticeTemplateList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    noticeTemplateEdite(data) {
      for(let item in this.noticeTemplateItemData) {
        this.noticeTemplateItemData[item] = (data[item] === undefined) ? null : data[item]
      }
      if(data && data.id) {
        this.isNoticeTemplateUpdate = true
        this.noticeTemplateItemData.id = data.id
      }
      else {
        delete this.noticeTemplateItemData.id
      }
      this.dialogVisible = true
    },
    noticeTemplateCreate() {
      let that = this
      console.log(this.noticeTemplateItemData, '++noticeTemplateItemData++')
      sdk.admin_tenant_third_app_create(this.noticeTemplateItemData)
        .then(res => {
          console.log(res, '++noticeTemplateCreate++')
          that.dialogVisible = false
          that.getNoticeTemplateList()
          that.isNoticeTemplateUpdate = false
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    noticeTemplateUpdate() {
      let that = this
      sdk.admin_tenant_third_app_update_by_id(this.noticeTemplateItemData)
        .then(res => {
          that.dialogVisible = false
          that.getNoticeTemplateList()
          that.noticeTemplateUpdate = false
          that.$message({
            message: '修改成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    isRemove(row) {
      this.currentRow = row
      this.removeDialogVisible = true
    },
    noticeTemplateRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_tenant_third_app_remove_by_id({ id: row.id })
          .then(res => {
            that.removeDialogVisible = false
            that.getNoticeTemplateList()
            that.$message({
              message: '删除成功！',
              type: 'success'
            })
          })
          .catch(error => {
            console.log(error)
          })
      }
    },
    dialogSubmit() {
      if (this.noticeTemplateUpdate()) {
        this.noticeTemplateUpdate()
      }
      else {
        this.noticeTemplateCreate()
      }
    },
    handleSizeChange() {
      console.log(534588685)
    },
    handleCurrentChange() {
      console.log(121215263)
    }
  },
  components: {
    tableComp,
    dialogContent
  }
}
</script>

<style scoped>

</style>
