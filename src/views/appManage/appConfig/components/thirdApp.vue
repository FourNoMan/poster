<template>
  <div style="padding-top: 1px">
    <table-comp :tableData="tableData"></table-comp>
    <el-button type="primary" class="margin-top-20" @click="dialogVisible = true">添加第三方应用</el-button>
    <el-dialog
      title="关联第三方应用"
      :visible.sync="dialogVisible"
      width="70%"
      center>
      <dialog-content v-model="thirdAppItemData"></dialog-content>
      <span slot="footer" class="dialog-footer text-center">
        <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
        <el-button type="primary" @click="dialogSubmit">确认</el-button>
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
        <el-button type="primary" @click="thirdAppRemove(currentRow)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import dialogContent from './dialogThirdApp'
import sdk from '@/api/sdk'
export default {
  name: 'thirdApp',
  components: {
    tableComp,
    dialogContent
  },
  data() {
    let that = this
    return {
      removeDialogVisible: false,
      currentRow: '',
      queryParam: {
        page: 1,
        pageSize: 10
      },
      total: 0,
      isThirdAppUpdate: false,
      thirdAppItemData: {
        thirdPlatform: '',
        appid: '',
        secret: '',
        notifyUrl: '',
        ownerName: ''
      },
      dialogVisible: false,
      tableData: {
        stripe: true,
        maxHeight: '100%',
        border: true,
        rowClassName: false,
        tHeader: {
          id: {
            label: 'ID',
            width: 80,
            fixed: '',
            sortable: false
          },
          appid: {
            label: '第三方应用ID',
            width: null,
            fixed: '',
            sortable: false
          },
          name: {
            label: '第三方应用名称',
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
          channelName: {
            label: '支付通道',
            width: null,
            fixed: '',
            sortable: false
          },
          description: {
            label: '应用描述',
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
          ownerName: {
            label: '负责人',
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
              fn: that.thirdAppEdite
            }, {
              label: '删除',
              type: 'primary',
              fn: that.isRemove
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
    getThirdAppList() {
      let obj = {}
      let that = this
      sdk.admin_tenant_third_app_list(obj)
        .then(res => {
          that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++getThirdAppList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    thirdAppEdite(data) {
      for(let item in this.thirdAppItemData) {
        this.thirdAppItemData[item] = (data[item] === undefined) ? null : data[item]
      }
      if(data && data.id) {
        this.isThirdAppUpdate = true
        this.thirdAppItemData.id = data.id
      }
      else {
        delete this.thirdAppItemData.id
      }
      this.dialogVisible = true
    },
    thirdAppCreate() {
      let that = this
      console.log(this.thirdAppItemData, '++thirdAppItemData++')
      sdk.admin_tenant_third_app_create(this.thirdAppItemData)
        .then(res => {
          console.log(res, '++thirdAppCreate++')
          that.dialogVisible = false
          that.getThirdAppList()
          that.isThirdAppUpdate = false
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    thirdAppUpdate() {
      let that = this
      sdk.admin_tenant_third_app_update_by_id(this.thirdAppItemData)
        .then(res => {
          that.dialogVisible = false
          that.getThirdAppList()
          that.isThirdAppUpdate = false
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
    thirdAppRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_tenant_third_app_remove_by_id({ id: row.id })
          .then(res => {
            that.removeDialogVisible = false
            that.getThirdAppList()
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
      if (this.isThirdAppUpdate) {
        this.thirdAppUpdate()
      }
      else {
        this.thirdAppCreate()
      }
    }
  },
  mounted() {
    this.getThirdAppList()
  }
}
</script>

<style scoped>

</style>
