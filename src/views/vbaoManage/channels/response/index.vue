<template>
  <div class="flex flex-column padding-row-30 margin-top-20">
    <div class="flex justify-between item-center">
      <el-select v-model="platform" clearable placeholder="请选择渠道名称">
        <el-option
       v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input clearable placeholder="渠道应答名称" style="width: 200px;">
        <i slot="suffix"  class="el-icon-edit el-input__icon"></i>
      </el-input>
      <el-input clearable placeholder="渠道应答码" style="width: 200px;">
        <i slot="suffix"  class="el-icon-edit el-input__icon"></i>
      </el-input>
     <el-select clearable placeholder="状态">
       <el-option>
         vv
       </el-option>
     </el-select>
      <div class="flex flex-nowrap">
        <el-button type="primary" @click="getCateList">查询</el-button>
        <el-button type="primary" @click="cateEdite">新建</el-button>
        <el-button type="primary">配置应用</el-button>
      </div>
    </div>
    <div class="margin-top-20">
      <table-comp :tableData="tableData" :parentIds="parentOptions"></table-comp>
    </div>
    <div class="flex margin-top-10">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="10"
        :total="400"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
    </div>
    <el-dialog title="渠道应答码信息" width="80%" :visible.sync="dialogVisible"
        :close-on-click-modal="false" center style="margin-top: -10vh">
      <app-edit v-model="cateData" >
     <!--   <div class="flex item-center">-->
        <el-row :gutter="20">
          <el-col :span="6">
        <span class="width-120 margin-left-20">
          渠道名称
        </span>
        <el-input
          clearable
          placeholder="渠道名称"
          style="width: 200px;" @input="valueChange"  v-model="cateData.name">
          <i slot="suffix" class="el-icon-edit el-input__icon"></i>
        </el-input>
          </el-col>
          <el-col :span="6">
        <span class="width-120 margin-left-20">
          渠道应答码
        </span>
        <el-input
          clearable
          placeholder="渠道应答码"
          style="width: 200px;" @input="valueChange"  v-model="cateData.name">
          <i slot="suffix" class="el-icon-edit el-input__icon"></i>
        </el-input>
          </el-col>
          <el-col :span="6">
        <span class="width-120  margin-left-20">
        渠道应答信息
        </span>
        <el-select clearable placeholder="请选择分类"  v-model="cateData.parentId">
          <el-option
            v-for="item in parentOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          </el-col>
          <el-col :span="6">
        <span class="width-120  margin-left-20">
        平台应答信息
        </span>
        <el-select clearable placeholder="请选择"  v-model="cateData.parentId">
          <el-option
            v-for="item in parentOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          </el-col>
        </el-row>
       <!-- <el-row :gutter="20">
          <el-col :span="6">
        <span class="width-120 margin-left-20">

        </span>
       <el-select clearable placeholder="请选择"  v-model="cateData.parentId">
          <el-option
            v-for="item in parentOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
          </el-col>
        </el-row>-->
      <!--  </div>-->
      </app-edit>
      <span slot="footer" class="dialog-footer text-center">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogSubmit">确认</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import tableComp from '@/components/TableComponent'
  import sdk from '@/api/sdk'
export default {
  data() {
    let that = this
    return {
      dialogVisible:false,
      prop:['value','parentIds'],
      parentOptions:[],
      cateData: {
        parentId: 0,
        name: '',
        iconUrl: ''
      },
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
        },{
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      appName: '',
      platform: '',
      appSataus: '',
      appType: '',
      currentPage: 1,
      isCateUpdate: false,
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
          iconUrl: {
            label: '应用分类',
            width: null,
            fixed: '',
            sortable: false
          },
          level: {
            label: '应用平台',
            width: null,
            fixed: '',
            sortable: false
          },
          operatorId: {
            label: '微保AppID',
            width: null,
            fixed: '',
            sortable: false
          },
          parentName: {
            label: '第三方应用数',
            width: null,
            fixed: '',
            sortable: false
          },
          parentId: {
            label: '关联配置',
            width: null,
            fixed: '',
            sortable: false
          },
          parentPath: {
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
              fn: that.cateEdite
            }, {
              label: '删除',
              type: 'primary',
              fn:that.cateRemove
            }],
            width: 180,
            fixed: '',
            sortable: false
          }
        },
        tableItems:[]
      }
    }
  },
  methods: {
    getCateList(){
      let obj={}
      let that = this
      sdk.admin_tenant_app_cate_list(obj).then(res=>{
/*        console.log(res.data.data.dataList);*/
        that.parentOptions = []
        that.tableData.tableItems = JSON.parse(JSON.stringify(res.data.data.dataList));
        console.log(that.tableData.tableItems);
        that.tableData.tableItems.forEach(item=>{
          /*console.log(item)*/
           that.parentOptions.push({
              label:item.name,
             value:item.id
           })
          console.log(that.parentOptions);
        })
      })
    },
    cateCreate() {
      let that = this
      sdk.admin_tenant_app_cate_create(this.cateData)
        .then(res => {
          console.log(res);
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
    },cateEdite(data){
      for(let item in this.cateData){
        this.cateData[item] = (data === undefined) ? null : data[item]
      }
      this.dialogVisible = true
    },dialogSubmit(){
      if(this.isCateUpdate){
        this.getCateList();
      }else{
        this.cateCreate();
      }
    },cateRemove(row){
    let that = this
      if((row !== undefined) && (row !== null) && row.id) {
        console.log(row);
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
    },
    handleSizeChange() {
    },
    handleCurrentChange() {
      console.log(10032);
    },
    valueChange() {
      this.$emit('input', this.cateData)
    }
  },
 components: {
   tableComp
 },
  created(){
    this.getCateList();
  },
  computed: {
    cateData() {
      return this.value
    },
    parentOptions() {
      return this.parentIds || []
    }
  }
}
</script>

<style scoped>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>


