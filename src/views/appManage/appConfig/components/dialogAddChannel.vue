<template>
  <div class="padding-row-30">
    <div class="flex item-center">
      <span class="width-150">
        第三方应用ID
      </span>
      <span>{{ thirdAppId }}</span>
    </div>
    <div class="flex item-center margin-top-20">
      <span class="width-150">
        应用名称
      </span>
      <span>{{ appName }}</span>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        选择支付通道
      </span>
      <el-select v-model="payChannel" clearable placeholder="请选择支付通道">
        <el-option
          v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        支付通道商号
      </span>
      <el-input
        clearable
        v-model="channelFirm"
        placeholder="输入支付通道商号"
        style="width: 200px;">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
    </div>
    <div class="margin-top-20 flex">
      <span class="width-150">
        支付密钥
      </span>
      <el-input
        clearable
        placeholder="输入支付密钥"
        type="textarea"
        v-model="paySecretKey"
        style="max-width: 500px;">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
    </div>
    <div class="margin-top-20 flex">
      <span class="width-150">
        支付公钥
      </span>
      <el-input
        clearable
        placeholder="输入支付公钥"
        type="textarea"
        v-model="payPublicKey"
        style="max-width: 500px;">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        成功通知URL
      </span>
      <el-input
        clearable
        v-model="successNoticeUrl"
        placeholder="可以自定义通知URL，默认由系统生成"
        style="width: 400px;">
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        退款通知URL
      </span>
      <el-input
        clearable
        v-model="refundNoticeUrl"
        placeholder="可以自定义通知URL，默认由系统生成"
        style="width: 400px;">
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150 shrink-none">
        上传证书文件
      </span>
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="uploadPreview"
        :on-remove="uploadRemove"
        :before-remove="uploadBeforeRemove"
        multiple
        :limit="3"
        :on-exceed="uploadExceed"
        :file-list="uploadList">
        <el-button size="small" type="primary">点击上传</el-button>
        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </div>
  </div>
</template>

<script>
export default {
  name: 'addChannel',
  data() {
    return {
      uploadList: [],
      refundNoticeUrl: '',
      successNoticeUrl: '',
      payPublicKey: '',
      paySecretKey: '',
      channelFirm: '',
      appName: '微小保',
      payChannel: '',
      thirdAppId: '第三方应用ID',
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
      ]
    }
  },
  methods: {
    uploadRemove(file, fileList) {
      console.log(file, fileList)
    },
    uploadPreview(file) {
      console.log(file)
    },
    uploadExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    uploadBeforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`)
    }
  }
}
</script>

<style scoped>

</style>
