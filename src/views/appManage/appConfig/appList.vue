<template>
  <div class="flex flex-column padding-row-30">
    <div class="flex justify-between item-center">
      <el-input
        clearable
        placeholder="输入应用名称"
        style="width: 200px;"
        v-model="appName">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
      <el-select v-model="appType" clearable placeholder="请选择应用类别">
        <el-option
          v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
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
        <el-button type="primary" @click="getAppList">查询</el-button>
        <el-button type="primary" @click="appEdite">添加应用</el-button>
      </div>
    </div>
    <div class="margin-top-20">
      <table-comp :tableData="tableData"></table-comp>
    </div>
    <div class="flex margin-top-10">
      <el-pagination
        :current-page="queryParam.page"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="queryParam.page"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    <el-dialog
      title="应用配置"
      :visible.sync="dialogVisible"
      width="70%"
      center
      style="margin-top: -10vh">
      <dialog-content v-model="appItemData" :parentIds="parentOptions"></dialog-content>
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
        <el-button type="primary" @click="appRemove(currentRow)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import dialogContent from './dialogAppEdit'
import sdk from '@/api/sdk'
export default {
  data() {
    let that = this
    return {
      currentRow: '',
      queryParam: {
        page: 1,
        pageSize: 10
      },
      total: 0,
      isAppUpdate: false,
      parentOptions: [],
      appItemData: {
        id: '',
        name: '',
        cateId: '',
        ownerName: '',
        iconUrl: '',
        description: ''
      },
      dialogVisible: false,
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
          cateName: {
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
          thirdAppCount: {
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
          ownerName: {
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
            buttons: [{
              label: '编辑',
              type: 'primary',
              fn: that.appEdite
            }, {
              label: '删除',
              type: 'primary',
              fn: that.isRemove
            }, {
              label: '应用配置',
              type: 'primary',
              fn: function(param) {
                that.$store.commit('SET_APPCONFIGROW', param)
                that.routerLink('appConfig')
              }
            }],
            width: 270,
            fixed: '',
            sortable: false
          }
        },
        tableItems: []
      }
    }
  },
  methods: {
    getAppList() {
      let obj = {}
      let that = this
      this.isAppUpdate = false
      sdk.admin_tenant_app_list(obj)
        .then(res => {
          that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
          console.log(res, '++getAppList++')
        })
        .catch(error => {
          console.log(error)
        })
    },
    appEdite(data) {
      for(let item in this.appItemData) {
        this.appItemData[item] = (data[item] === undefined) ? null : data[item]
      }
      this.getParentCate((data.id !== undefined) ? data.id : null)
      this.dialogVisible = true
    },
    appCreate() {
      let that = this
      console.log('this.appItemData:', this.appItemData)
      sdk.admin_tenant_app_create(this.appItemData)
        .then(res => {
          that.dialogVisible = false
          that.getAppList()
          that.isAppUpdate = false
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    appUpdate() {
      let that = this
      sdk.admin_tenant_app_update_by_id(this.appItemData)
        .then(res => {
          that.dialogVisible = false
          that.getAppList()
          that.isAppUpdate = false
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
    appRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_tenant_app_remove_by_id({ id: row.id })
          .then(res => {
            that.removeDialogVisible = false
            that.getAppList()
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
    getParentCate(id) {
      if((id !== undefined) && (id !== null)) {
        let that = this
        this.isAppUpdate = true
        sdk.admin_tenant_app_cate_list_parent({ id: id })
          .then(res => {
            that.parentOptions = []
            res.data.data.dataList.forEach(item => {
              that.parentOptions.push({
                label: item.name,
                value: item.id
              })
            })
          })
          .catch(error => {
            console.log(error)
          })
      }
      else{
        this.getCateList()
      }
    },
    getCateList() {
      let obj = {}
      let that = this
      this.isAppUpdate = false
      sdk.admin_tenant_app_cate_list(obj)
        .then(res => {
          console.log(res, '++getCateList++')
          that.parentOptions = []
          res.data.data.dataList.forEach(item => {
            that.parentOptions.push({
              label: item.name,
              value: item.id
            })
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    dialogSubmit() {
      if (this.isAppUpdate) {
        this.appUpdate()
      }
      else {
        this.appCreate()
      }
    },
    handleSizeChange() {
      console.log(534588685)
    },
    handleCurrentChange() {
      console.log(121215263)
    },
    routerLink(router) {
      this.$router.push('/appManage/' + router)
    }
  },
  components: {
    tableComp,
    dialogContent
  },
  created() {
    this.getAppList()
    this.getCateList()
  }
}
</script>

<style scoped>

</style>
