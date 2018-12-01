<template>
  <div style="padding-top: 1px">
    <table-comp :tableData="tableData"></table-comp>
    <el-button type="primary" class="margin-top-20" @click="dialogVisible = true">添加支付方式</el-button>
    <el-dialog
      title="添加支付通道"
      :visible.sync="dialogVisible"
      width="70%"
      center
      style="margin-top: -10vh">
      <add-channel v-model="channelItemData"></add-channel>
      <span slot="footer" class="dialog-footer text-center">
        <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
        <el-button type="primary" @click="dialogSubmit">确定上传</el-button>
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
        <el-button type="primary" @click="channelRemove(currentRow)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import addChannel from './dialogAddChannel'
import sdk from '@/api/sdk'
export default {
  name: 'payConfig',
  components: {
    tableComp,
    addChannel
  },
  data() {
    let that = this
    return {
      channelItemData: {
        thirdAppId: '',
        name: '',
        channel: '',
        mchId: '',
        privateKey: '',
        publicKey: '',
        notifyUrl: '',
        refundNotifyUrl: '',
        ownerName: '',
        certFile: []
      },
      total: '',
      currentRow: '',
      isChannelUpdate: false,
      removeDialogVisible: false,
      dialogVisible: false,
      tableData: {
        stripe: true,
        maxHeight: '100%',
        border: true,
        rowClassName: false,
        tHeader: {
          id: {
            label: 'ID',
            width: null,
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
          payChannel: {
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
              type: 'text-warning',
              fn: that.thirdAppEdite
            }, {
              label: '删除',
              type: 'text',
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
    getChannelList() {
      let obj = {}
      let that = this
      sdk.admin_app_pay_channel_config_list(obj)
        .then(res => {
          that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++getChannelList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    channelEdite(data) {
      for(let item in this.channelItemData) {
        this.channelItemData[item] = (data[item] === undefined) ? null : data[item]
      }
      if(data && data.id) {
        this.isChannelUpdate = true
        this.channelItemData.id = data.id
      }
      else {
        delete this.channelItemData.id
      }
      this.dialogVisible = true
    },
    channelCreate() {
      let that = this
      console.log(this.channelItemData, '++channelItemData++')
      sdk.admin_tenant_third_app_create(this.channelItemData)
        .then(res => {
          console.log(res, '++channelCreate++')
          that.dialogVisible = false
          that.getChannelList()
          that.isChannelUpdate = false
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    channelUpdate() {
      let that = this
      sdk.admin_tenant_third_app_update_by_id(this.channelItemData)
        .then(res => {
          that.dialogVisible = false
          that.getChannelList()
          that.channelUpdate = false
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
    channelRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_tenant_third_app_remove_by_id({ id: row.id })
          .then(res => {
            that.removeDialogVisible = false
            that.getChannelList()
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
      if (this.channelUpdate()) {
        this.channelUpdate()
      }
      else {
        this.channelCreate()
      }
    }
  },
  mounted() {
    this.getChannelList()
  }
}
</script>

<style scoped>

</style>
