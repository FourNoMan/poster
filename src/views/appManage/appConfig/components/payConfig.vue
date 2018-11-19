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
      <add-channel></add-channel>
      <span slot="footer" class="dialog-footer text-center">
        <!--<el-button @click="dialogVisible = false">取 消</el-button>-->
        <el-button type="primary" @click="dialogVisible = false">确定上传</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import tableComp from '@/components/TableComponent'
import addChannel from '../../components/addChannel'
export default {
  name: 'payConfig',
  components: {
    tableComp,
    addChannel
  },
  data() {
    return {
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
  }
}
</script>

<style scoped>

</style>
