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
        <el-button type="primary" @click="getStorageConfigList">查询</el-button>
        <el-button type="primary" @click="storageConfigEdite">添加存储配置</el-button>
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
      title="云存储业务配置"
      :visible.sync="dialogVisible"
      width="70%"
      center>
      <dialog-content v-model="storageConfigItemData"></dialog-content>
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
        <el-button type="primary" @click="storageConfigRemove(currentRow)">确 定</el-button>
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
  data() {
    let that = this
    return {
      dialogVisible: false,
      queryParam: {
        page: 1,
        pageSize: 10
      },
      storageConfigItemData: {
        title:'',
        bizName: '',
        businessTitle: '',
        bucketName: '',
        isGroup: false,
        groupType: ''
      },
      total: 1,
      currentRow: '',
      isStorageConfigUpdate: false,
      removeDialogVisible: false,
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
            label: '存储名称',
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
            label: '存储提供方',
            width: null,
            fixed: '',
            sortable: false
          },
          platform: {
            label: '存储应用ID',
            width: null,
            fixed: '',
            sortable: false
          },
          vbaoId: {
            label: 'accessKeyId',
            width: null,
            fixed: '',
            sortable: false
          },
          thirdNumber: {
            label: 'AccessKeySecret',
            width: null,
            fixed: '',
            sortable: false
          },
          relationConfig: {
            label: '域名',
            width: null,
            fixed: '',
            sortable: false
          },
          responsibility: {
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
              fn: that.storageConfigEdite
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
    getStorageConfigList(){
      let obj = {}
      let that = this
      sdk.admin_cloud_disk_config_list(obj)
        .then(res => {
         /* that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))*/
         // console.log(res, '++getStorageConfigList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    storageConfigEdite(data) {
      for(let item in this.storageConfigItemData) {
        this.storageConfigItemData[item] = (data[item] === undefined) ? null : data[item]
      }
      if(data && data.id) {
        this.isStorageConfigUpdate = true
        this.storageConfigItemData.id = data.id
      }
      else {
        delete this.storageConfigItemData.id
      }
      this.dialogVisible = true
    },
    storageConfigCreate(){
      let that = this
      console.log(this.storageConfigItemData, '++storageConfigItemData++')
      sdk.admin_cloud_disk_config_list_create(this.storageConfigItemData)
        .then(res => {
          console.log(res);
          console.log('***********')
          /*  console.log(res, '++storageConfigCreate++')
          that.dialogVisible = false
           that.getStorageConfigList()
           that.isStorageConfigUpdate = false*/
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    storageConfigUpdate() {
      let that = this
      sdk.admin_tenant_third_app_update_by_id(this.storageConfigItemData)
        .then(res => {
          that.dialogVisible = false
          that.getStorageConfigList()
          that.storageConfigUpdate = false
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
    storageConfigRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_cloud_disk_config_remove_by_id({ id: row.id })
          .then(res => {
            that.removeDialogVisible = false
            that.getStorageConfigList()
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
    /*  if (this.storageConfigUpdate()) {
        this.storageConfigUpdate()
      }
      else {*/
        this.storageConfigCreate()
     // }
    },
    handleSizeChange() {
      console.log('handleSizeChange')
    },
    handleCurrentChange() {
      console.log('handleCurrentChange')
    }
  },
  mounted() {
    this.getStorageConfigList()
  },
  components: {
    tableComp,
    dialogContent
  }
}
</script>

<style scoped>

</style>
