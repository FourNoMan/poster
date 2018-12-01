<template>
  <div>
    <div class="flex item-center">
      <el-input
        clearable
        placeholder="输入应用名称"
        style="width: 200px;"
        v-model="appName">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
      <el-select v-model="platform" class="margin-left-20" clearable placeholder="请选择应用平台">
        <el-option
          v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="flex flex-nowrap margin-left-20">
        <el-button type="primary" @click="getNoticeList">查询</el-button>
        <el-button type="primary" @click="noticeEdite">添加</el-button>
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
      title="通知详情"
      :visible.sync="dialogVisible"
      width="70%"
      center>
      <dialog-content v-model="noticeItemData"></dialog-content>
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
        <el-button type="primary" @click="noticeRemove(currentRow)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import dialogContent from './dialogDetail'
import sdk from '@/api/sdk'
export default {
  components: {
    tableComp,
    dialogContent
  },
  name: 'noticeList',
  data() {
    let that = this
    return {
      queryParam: {
        page: 1,
        pageSize: 10
      },
      noticeItemData: {
        bizName: '',
        businessTitle: '',
        bucketName: '',
        isGroup: false,
        groupType: ''
      },
      total: 1,
      currentRow: '',
      isNoticeUpdate: false,
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
            label: '模板ID',
            width: null,
            fixed: '',
            sortable: false
          },
          appType: {
            label: '第三方应用',
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
            label: '通知内容模板',
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
              label: '详情',
              type: 'primary',
              fn: that.noticeEdite
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
    getNoticeList() {
      let obj = {}
      let that = this
      sdk.admin_tenant_notify_template_list(obj)
        .then(res => {
          that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++getNoticeList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    noticeEdite(data) {
      for(let item in this.noticeItemData) {
        this.noticeItemData[item] = (data[item] === undefined) ? null : data[item]
      }
      if(data && data.id) {
        this.isNoticeUpdate = true
        this.noticeItemData.id = data.id
      }
      else {
        delete this.noticeItemData.id
      }
      this.dialogVisible = true
    },
    noticeCreate() {
      let that = this
      console.log(this.noticeItemData, '++noticeItemData++')
      sdk.admin_tenant_third_app_create(this.noticeItemData)
        .then(res => {
          console.log(res, '++noticeCreate++')
          that.dialogVisible = false
          that.getNoticeList()
          that.isNoticeUpdate = false
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    noticeUpdate() {
      let that = this
      sdk.admin_tenant_third_app_update_by_id(this.noticeItemData)
        .then(res => {
          that.dialogVisible = false
          that.getNoticeList()
          that.noticeUpdate = false
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
    noticeRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_tenant_third_app_remove_by_id({ id: row.id })
          .then(res => {
            that.removeDialogVisible = false
            that.getNoticeList()
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
      if (this.noticeUpdate()) {
        this.noticeUpdate()
      }
      else {
        this.noticeCreate()
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
    // this.getNoticeList()
  }
}
</script>

<style scoped>

</style>
