<template>
  <div class="padding-row-30">
    <div class="flex item-center">
      <span class="width-150">
        服务提供商
      </span>
      <el-select v-model="shortMessageData.channel" @change="valueChange" clearable placeholder="请选择服务提供商">
        <el-option
          v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="flex item-center margin-top-20">
      <span class="width-150">
        短信名称
      </span>
      <el-input
        clearable
        placeholder="输入短信名称"
        @input="valueChange"
        style="width: 500px;"
        v-model="shortMessageData.title">
      </el-input>
    </div>
    <div class="flex item-center margin-top-20">
      <span class="width-150">
        短信AppID
      </span>
      <el-input
        clearable
        placeholder="输入短信AppID"
        @input="valueChange"
        style="width: 500px;"
        v-model="shortMessageData.appid">
      </el-input>
    </div>
    <div class="margin-top-20 flex">
      <span class="width-150">
        accessKeyId
      </span>
      <el-input
        clearable
        placeholder="输入accessKeyId"
        @input="valueChange"
        type="textarea"
        v-model="shortMessageData.accessKeyId"
        style="max-width: 500px;">
      </el-input>
    </div>
    <div class="margin-top-20 flex">
      <span class="width-150">
        accessKeySecret
      </span>
      <el-input
        clearable
        placeholder="输入accessKeySecret"
        @input="valueChange"
        type="textarea"
        v-model="shortMessageData.accessKeySecret"
        style="max-width: 500px;">
      </el-input>
    </div>
    <div class="flex item-center margin-top-20">
      <span class="width-150">
        域名
      </span>
      <el-input
        clearable
        placeholder="公网访问域名"
        @input="valueChange"
        style="width: 500px;"
        v-model="shortMessageData.region">
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      accessKeyId: '',
      accessKeySecre: '',
      serviceProvider: '',
      messageId: '',
      domainName: '',
      appTypeOptions: [
        {
          value: 'ALIYUN',
          label: '阿里云'
        }, {
          value: 'QCLOUD',
          label: '腾讯云'
        }
      ]
    }
  },
  methods: {
    valueChange() {
      this.$emit('input', this.shortMessageData)
    }
  },
  computed: {
    shortMessageData() {
      return this.value
    }
  }
}
</script>

<style>
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
