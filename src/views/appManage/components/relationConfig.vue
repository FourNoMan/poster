<template>
  <div class="flex">
    <div class="width-120">
      <el-menu :default-active="relationConfig" class="el-menu-demo" @select="relationHandle">
        <el-menu-item index="payConfig">支付配置</el-menu-item>
        <el-menu-item index="storageConfig">存储配置</el-menu-item>
        <el-menu-item index="shortMessageConfig">短信配置</el-menu-item>
        <el-menu-item index="noticeConfig">通知配置</el-menu-item>
      </el-menu>
    </div>
    <div class="margin-left-20 margin-right-50 flex-1">
      <table-comp :tableData="tableData"></table-comp>
      <el-button type="primary" class="margin-top-20" @click="dialogVisible = true">添加支付通道</el-button>
      <el-dialog
        title="添加支付通道"
        :visible.sync="dialogVisible"
        width="70%"
        center
        style="margin-top: -10vh">
        <add-channel></add-channel>
        <span slot="footer" class="dialog-footer text-center">
          <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
          <el-button type="primary" @click="dialogVisible = false">确定上传</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import addChannel from './addChannel'
export default {
  name: 'relationConfig',
  components: {
    tableComp,
    addChannel
  },
  data() {
    return {
      relationConfig: 'payConfig',
      dialogVisible: false,
      tableData: {
        stripe: true,
        maxHeight: '100%',
        border: true,
        rowClassName: false,
        tHeader: {
          name: {
            label: '支付通道',
            width: null,
            fixed: '',
            sortable: false
          },
          createdTime: {
            label: '第三方支付ID',
            width: null,
            fixed: '',
            sortable: false
          },
          appType: {
            label: '第三方应用名称',
            width: null,
            fixed: '',
            sortable: false
          },
          platform: {
            label: '支付通道商户号',
            width: null,
            fixed: '',
            sortable: false
          },
          vbaoId: {
            label: '第三方支付商户号',
            width: null,
            fixed: '',
            sortable: false
          },
          thirdNumber: {
            label: '支付密钥',
            width: null,
            fixed: '',
            sortable: false
          },
          relationConfig: {
            label: '支付证书',
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
    relationHandle(config) {
      console.log(config)
    }
  }
}
</script>

<style scoped>

</style>
