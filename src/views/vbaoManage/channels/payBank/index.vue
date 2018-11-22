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
              <el-form-item label="支付方式:">
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
            <el-col :span="6" :offset="2">
              <el-form-item label="银行名称:">
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
      <table-comp :tableData="tableData" style="margin-top: 20px;"></table-comp>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="100">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  import tableComp from '@/components/TableComponent'
  export default {
    data() {
      return {
        dialogVisible: false,
        currentPage:1,
        pagesize:10,
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
            appType: {
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
            thirdNumber: {
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
            responsibility: {
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
              width: null,
              fixed: '',
              sortable: false
            }
          },
          tableDatas: [{
            rowStatus: 'warning',
            id: 3,
            createdTime: '2016-05-02',
            name: '王小虎',
            appType: '全新',
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
        },
      }
    },
    methods: {
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(pagesize);
      },
      handleCurrentChange: function (currentPage) {
        this.currentPage = currentPage;
        console.log(currentPage);
      }
    },
    components: {
      tableComp
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
