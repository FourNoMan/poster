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
        <el-button type="primary" @click="getCateList">查询</el-button>
        <el-button type="primary" @click="cateEdite">添加分类</el-button>
      </div>
    </div>
    <div class="margin-top-20">
      <table-comp :tableData="tableData"></table-comp>
    </div>
    <div class="flex margin-top-10">
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
      title="编辑分类"
      :visible.sync="dialogVisible"
      width="70%"
      center
      style="margin-top: -10vh">
      <app-edit v-model="cateData" :parentIds="parentOptions"></app-edit>
      <span slot="footer" class="dialog-footer text-center">
        <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
        <el-button type="primary" @click="dialogSubmit">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import appEdit from './dialogAppEdit'
import sdk from '@/api/sdk'
export default {
  data() {
    let that = this
    return {
      queryParam: {
        page: 1,
        pageSize: 10
      },
      total: 1,
      parentOptions: [],
      cateData: {
        parentId: 0,
        name: '',
        iconUrl: ''
      },
      isCateUpdate: false,
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
            label: '分类名称',
            width: null,
            fixed: '',
            sortable: false
          },
          iconUrl: {
            label: '分类图标',
            width: null,
            fixed: '',
            sortable: false
          },
          parentName: {
            label: '父类目',
            width: null,
            fixed: '',
            sortable: false
          },
          level: {
            label: '类目层级',
            width: null,
            fixed: '',
            sortable: false
          },
          parentPath: {
            label: '父类路径',
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
          operateName: {
            label: '创建人',
            width: null,
            fixed: '',
            sortable: false
          },
          appCount: {
            label: '应用数',
            width: null,
            fixed: '',
            sortable: false
          },
          operation: {
            label: '操作',
            buttons: [{
              label: '编辑',
              type: 'primary',
              fn: that.cateEdite
            }, {
              label: '删除',
              type: 'primary',
              fn: that.cateRemove
            }],
            width: 180,
            fixed: '',
            sortable: false
          }
        },
        tableItems: []
      }
    }
  },
  methods: {
    cateEdite(data) {
      for(let item in this.cateData) {
        this.cateData[item] = (data === undefined) ? null : data[item]
      }
      this.getCateParent(data ? data.id : null)
      this.dialogVisible = true
    },
    dialogSubmit() {
      if (this.isCateUpdate) {
        this.cateUpdate()
      }
      else {
        this.cateCreate()
      }
    },
    cateUpdate() {
      let that = this
      sdk.admin_tenant_app_cate_update_by_id(this.cateData)
        .then(res => {
          that.dialogVisible = false
          that.getCateList()
          that.isCateUpdate = false
          that.$message({
            message: '修改成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cateCreate() {
      let that = this
      sdk.admin_tenant_app_cate_create(this.cateData)
        .then(res => {
          that.dialogVisible = false
          that.getCateList()
          that.isCateUpdate = false
          that.$message({
            message: '创建成功！',
            type: 'success'
          })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cateRemove(row) {
      let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        sdk.admin_tenant_app_cate_remove_children_all({ id: row.id })
          .then(res => {
            that.getCateList()
            that.$message({
              message: '删除成功！',
              type: 'success'
            })
          })
          .catch(error => {
            console.log(error)
          })
      }
      console.log(row, '++44444++')
    },
    getCateParent(id) {
      if((id !== undefined) && (id !== null)) {
        let that = this
        this.isCateUpdate = true
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
    },
    getCateList() {
      let obj = {}
      let that = this
      this.isCateUpdate = false
      sdk.admin_tenant_app_cate_list(obj)
        .then(res => {
          console.log(res, '++66666++')
          that.parentOptions = []
          // that.total = res.data.data.total
          that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList))
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
    appEdit
  },
  created() {
    this.getCateList()
  }
}
</script>

<style scoped>

</style>
