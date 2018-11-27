<template>
  <div>
    <div class="flex item-center">
      <el-input
        clearable
        placeholder="输入应用名称"
        style="width: 400px;"
        v-model="businessName">
        <!--<i slot="suffix" class="el-icon-edit el-input__icon"></i>-->
      </el-input>
      <div class="flex flex-nowrap margin-left-20">
        <el-button type="primary" @click="getStorageBusinessList">查询</el-button>
        <el-button type="primary" @click="storageBusinessEdite">添加业务配置</el-button>
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
      title="业务配置"
      :visible.sync="dialogVisible"
      width="70%"
      center>
      <dialog-content v-model="storageBusinessItemData"></dialog-content>
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
        <el-button type="primary" @click="storageBusinessRemove(currentRow)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import dialogContent from './dialogBusiness'
export default {
  name: 'businessManage',
  data() {
    let that = this
    return {
      queryParam: {
        page: 1,
        pageSize: 10
      },
      storageBusinessItemData: {
        bizName: '',
        businessTitle: '',
        bucketName: '',
        isGroup: false,
        groupType: ''
      },
      total: 1,
      currentRow: '',
      isStorageBusinessUpdate: false,
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
            label: '业务名称',
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
          bizName: {
            label: '业务名称(bizName)',
            width: null,
            fixed: '',
            sortable: false
          },
          appType: {
            label: '存储提供方',
            width: null,
            fixed: '',
            sortable: false
          },
          platform: {
            label: '日期分组',
            width: null,
            fixed: '',
            sortable: false
          },
          vbaoId: {
            label: '日期分组格式',
            width: null,
            fixed: '',
            sortable: false
          },
          thirdNumber: {
            label: '目录名称',
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
              fn: that.storageBusinessEdite
            }, {
              label: '删除',
              type: 'primary',
              fn: that.isRemove
            }],
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
  methods: {
    getStorageBusinessList() {
      let obj = {}
      let that = this
      sdk.admin_app_pay_channel_config_list(obj)
        .then(res => {
          that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++getStorageBusinessList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    storageBusinessEdite(data) {
      for(let item in this.storageBusinessItemData) {
        this.storageBusinessItemData[item] = (data[item] === undefined) ? null : data[item]
      }
      if(data && data.id) {
        this.isStorageBusinessUpdate = true
        this.storageBusinessItemData.id = data.id
      }
      else {
        delete this.storageBusinessItemData.id
      }
      this.dialogVisible = true
    },
    storageBusinessCreate() {
      let that = this
      console.log(this.storageBusinessItemData, '++storageBusinessItemData++')
      sdk.admin_tenant_third_app_create(this.storageBusinessItemData)
        .then(res => {
          console.log(res, '++storageBusinessCreate++')
          that.dialogVisible = false
          that.getStorageBusinessList()
          that.isStorageBusinessUpdate = false
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    storageBusinessUpdate() {
      let that = this
      sdk.admin_tenant_third_app_update_by_id(this.storageBusinessItemData)
        .then(res => {
          that.dialogVisible = false
          that.getStorageBusinessList()
          that.storageBusinessUpdate = false
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
    storageBusinessRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_tenant_third_app_remove_by_id({ id: row.id })
          .then(res => {
            that.removeDialogVisible = false
            that.getStorageBusinessList()
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
      if (this.storageBusinessUpdate()) {
        this.storageBusinessUpdate()
      }
      else {
        this.storageBusinessCreate()
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
  },
  mounted() {
    this.getStorageBusinessList()
  }
}
</script>

<style scoped>

</style>
