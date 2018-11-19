<template>
  <div>
    <div class="pmd">
      <el-row>
        <el-col :span="24">
          <el-form ref="form" :model="sizeForm" label-min-width="80px" size="mini">
            <el-col :span="6" :offset="2">
              <el-form-item label="渠道名称:">
                <el-select v-model="value" filterable placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-form-item label="渠道编码:">
                <el-select v-model="value1" filterable placeholder="请选择">
                  <el-option
                    v-for="item in channelNo"
                    :key="item.value1"
                    :label="item.label"
                    :value="item.value1">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="6" :offset="2">
              <el-form-item label="状态:">
                <el-select v-model="value2" filterable placeholder="请选择">
                  <el-option
                    v-for="item in status"
                    :key="item.value2"
                    :label="item.label"
                    :value="item.value2">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="2">
          <el-button type="primary" round>查询</el-button>
          <el-button type="success" round @click="dialogFormVisible = true">新建</el-button>
          <el-button type="warning" round>导入</el-button>
          <el-button type="danger" round>导出</el-button>
        </el-col>
      </el-row>
      <el-table :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)" border
                style="width: 100%;margin-top: 20px;" height="500">
        <el-table-column prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="120">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="300">
        </el-table-column>
        <el-table-column prop="zip" label="邮编" width="150">
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small" @click="dialogFormVisible = true">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="data.length">
      </el-pagination>
    </div>
    <el-dialog title="支付渠道信息添加" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-row>
          <el-col :span="9">
            <el-form-item label="渠道编码" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="9" :offset="2">
            <el-form-item label="渠道名称">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option label="渠道一" value="shanghai"></el-option>
                <el-option label="渠道二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: [{
        date: '2016-05-03',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-02',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-04',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }, {
        date: '2016-05-01',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      currentPage: 1,
      pagesize: 10,
      options: [{
        value: '0',
        label: '通联'
      }, {
        value: '1',
        label: '广发'
      }, {
        value: '2',
        label: '山西中信'
      }, {
        value: '3',
        label: '中国工商'
      }, {
        value: '4',
        label: '广发威富通'
      }],
      value: '',
      status: [{
        value2: '0',
        label: '有效'
      }, {
        value2: '1',
        label: '无效'
      }],
      value2: '',
      channelNo: [{
        value1: '0',
        label: 'ICBA'
      }, {
        value1: '1',
        label: 'ICBC'
      }, {
        value1: '2',
        label: 'ABC'
      }, {
        value1: '3',
        label: 'PLSNK'
      }, {
        value1: '4',
        label: 'GFWFT'
      }],
      value1: '',
      /*tableData: [],*/
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
    }
  },
  methods: {
    handleClick(row) {
      this.$confirm('检测到未保存的内容，是否在离开页面前保存修改？', '渠道基本信息详情', {
        distinguishCancelAndClose: true,
        confirmButtonText: '保存',
        cancelButtonText: '关闭'
      })
        .then(() => {
          this.$message({
            type: 'info',
            message: '保存修改'
          });
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message: action === 'cancel'
              ? '放弃保存并离开页面'
              : '停留在当前页面'
          })
        });
    },
    handleSizeChange: function (size) {
      this.pagesize = size;
    },
    handleCurrentChange: function (currentPage) {
      this.currentPage = currentPage;
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";

  .pmd {
    width: 100%;
    height: auto;
    background: #fff;
    margin-top: 10px;
    padding: 10px 10px 10px 10px;
  }
</style>
