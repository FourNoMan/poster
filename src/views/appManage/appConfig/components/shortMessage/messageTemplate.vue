<template>
  <div>
    <div class="flex item-center">
      <el-input
        clearable
        placeholder="搜索短信模板"
        style="width: 200px;"
        v-model="appName">
      </el-input>
      <el-select v-model="appSataus" class="margin-left-20" clearable placeholder="请选择应用状态">
        <el-option
          v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="flex flex-nowrap margin-left-20">
        <el-button type="primary" @click="getSmsTemplateList">查询</el-button>
        <el-button type="primary" @click="smsTemplateEdite">添加短信模板</el-button>
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
      title="添加短信配置"
      :visible.sync="dialogVisible"
      width="70%"
      center>
      <dialog-content v-model="smsTemplateItemData"></dialog-content>
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
        <el-button type="primary" @click="smsTemplateRemove(currentRow)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import dialogContent from './dialogTemplate'
import sdk from '@/api/sdk'
export default {
  name: 'messageTemplate',
  components: {
    tableComp,
    dialogContent
  },
  data() {
    let that = this
    return {
      queryParam: {
        page: 1,
        pageSize: 10
      },
      smsTemplateItemData: {
        bizName: '',
        businessTitle: '',
        bucketName: '',
        isGroup: false,
        groupType: ''
      },
      total: 1,
      currentRow: '',
      isSmsTemplateUpdate: false,
      removeDialogVisible: false,
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
            label: '短信通道',
            width: null,
            fixed: '',
            sortable: false
          },
          platform: {
            label: '通道模板ID',
            width: null,
            fixed: '',
            sortable: false
          },
          vbaoId: {
            label: '模板内容',
            width: null,
            fixed: '',
            sortable: false
          },
          thirdNumber: {
            label: '说明',
            width: null,
            fixed: '',
            sortable: false
          },
          relationConfig: {
            label: '创建人',
            width: null,
            fixed: '',
            sortable: false
          },
          status: {
            label: '状态',
            width: null,
            fixed: '',
            sortable: false
          },
          operation: {
            label: '操作',
            width: 160,
            buttons: [{
              label: '编辑',
              type: 'primary',
              fn: that.smsTemplateEdite
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
    getSmsTemplateList() {
      let obj = {}
      let that = this
      sdk.admin_sms_account_config_list(obj)
        .then(res => {
          that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++getSmsTemplateList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    smsTemplateEdite(data) {
      for(let item in this.smsTemplateItemData) {
        this.smsTemplateItemData[item] = (data[item] === undefined) ? null : data[item]
      }
      if(data && data.id) {
        this.isSmsTemplateUpdate = true
        this.smsTemplateItemData.id = data.id
      }
      else {
        delete this.smsTemplateItemData.id
      }
      this.dialogVisible = true
    },
    smsTemplateCreate() {
      let that = this
      console.log(this.smsTemplateItemData, '++smsTemplateItemData++')
      sdk.admin_tenant_third_app_create(this.smsTemplateItemData)
        .then(res => {
          console.log(res, '++smsTemplateCreate++')
          that.dialogVisible = false
          that.getSmsTemplateList()
          that.isSmsTemplateUpdate = false
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    smsTemplateUpdate() {
      let that = this
      sdk.admin_tenant_third_app_update_by_id(this.smsTemplateItemData)
        .then(res => {
          that.dialogVisible = false
          that.getSmsTemplateList()
          that.smsTemplateUpdate = false
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
    smsTemplateRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_tenant_third_app_remove_by_id({ id: row.id })
          .then(res => {
            that.removeDialogVisible = false
            that.getSmsTemplateList()
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
      if (this.smsTemplateUpdate()) {
        this.smsTemplateUpdate()
      }
      else {
        this.smsTemplateCreate()
      }
    },
    handleSizeChange() {
      console.log('handleSizeChange')
    },
    handleCurrentChange() {
      console.log('handleCurrentChange')
    }
  },
  mounted() {
    this.getSmsTemplateList()
  }
}
</script>

<style scoped>

</style>
