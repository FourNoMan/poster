<template>
  <div>
    <div class="flex justify-between item-center">
      <el-input
        clearable
        placeholder="输入应用名称"
        style="width: 200px;"
        v-model="appName">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
      <el-select v-model="platform" clearable placeholder="请选择应用平台">
        <el-option
          v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-select v-model="appSataus" clearable placeholder="请选择应用状态">
        <el-option
          v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="flex flex-nowrap">
        <el-button type="primary" @click="getShortMessageList">查询</el-button>
        <el-button type="primary" @click="shortMessageEdite">添加短信配置</el-button>
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
      <dialog-content v-model="shortMessageItemData"></dialog-content>
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
        <el-button type="primary" @click="shortMessageRemove(currentRow)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import dialogContent from './dialogConfig'
import sdk from '@/api/sdk'
export default {
  name: 'configManage',
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
      shortMessageItemData: {
        title: '',
        channel: '',
        appid: '',
        accessKeyId: '',
        region: '',
        accessKeySecret: ''
      },
      total: 1,
      currentRow: '',
      isShortMessageUpdate: false,
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
      platform: '',
      appSataus: '',
      appType: '',
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
            label: '短信名称',
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
          channel: {
            label: '短信服务商',
            width: null,
            fixed: '',
            sortable: false
          },
          appid: {
            label: '短信应用ID',
            width: null,
            fixed: '',
            sortable: false
          },
          accessKeyId: {
            label: 'accessKeyId',
            width: null,
            fixed: '',
            sortable: false
          },
          accessKeySecret: {
            label: 'accessKeySecret',
            width: null,
            fixed: '',
            sortable: false
          },
          region: {
            label: '域名',
            width: null,
            fixed: '',
            sortable: false
          },
          operatorId: {
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
              fn: that.shortMessageEdite
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
    getShortMessageList() {
      let obj = {}
      let that = this
      sdk.admin_sms_account_config_list(obj)
        .then(res => {
          that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++getShortMessageList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    shortMessageEdite(data) {
      for(let item in this.shortMessageItemData) {
        this.shortMessageItemData[item] = (data[item] === undefined) ? null : data[item]
      }
      if(data && data.id) {
        this.isShortMessageUpdate = true
        this.shortMessageItemData.id = data.id
      }
      else {
        delete this.shortMessageItemData.id
      }
      this.dialogVisible = true
    },
    shortMessageCreate() {
      let that = this
      console.log(this.shortMessageItemData, '++shortMessageItemData++')
      sdk.admin_sms_account_config_create(this.shortMessageItemData)
        .then(res => {
          console.log(res, '++shortMessageCreate++')
          that.dialogVisible = false
          that.getShortMessageList()
          that.isShortMessageUpdate = false
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    shortMessageUpdate() {
      let that = this
      sdk.admin_sms_account_config_update_by_id(this.shortMessageItemData)
        .then(res => {
          that.dialogVisible = false
          that.getShortMessageList()
          that.shortMessageUpdate = false
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
    shortMessageRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_sms_account_config_remove_by_id({ id: row.id })
          .then(res => {
            that.removeDialogVisible = false
            that.getShortMessageList()
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
      if (this.isShortMessageUpdate) {
        this.shortMessageUpdate()
      }
      else {
        this.shortMessageCreate()
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
    this.getShortMessageList()
  }
}
</script>

<style scoped>

</style>
