<template>
  <div class="padding-row-30">
    <div class="flex item-center">
      <span class="width-150">
        第三方应用平台
      </span>
      <el-radio-group v-model="thirdAppData.thirdPlatform" @change="valueChange">
        <el-radio :label="radio.value" v-for="radio in appTypeOptions">{{ radio.label }}</el-radio>
      </el-radio-group>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        应用ID(appID)
      </span>
      <div>
        <el-input
          clearable
          @input="valueChange"
          v-model="thirdAppData.appid"
          placeholder="输入应用ID"
          style="width: 500px;">
        </el-input>
      </div>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        负责人
      </span>
      <div class="relative">
        <el-input
          clearable
          @input="valueChange"
          v-model="thirdAppData.ownerName"
          placeholder="输入负责人姓名"
          style="width: 500px;">
        </el-input>
      </div>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        应用密钥
      </span>
      <div class="relative">
        <el-input
          clearable
          @input="valueChange"
          v-model="thirdAppData.secret"
          placeholder="输入应用密钥"
          style="width: 500px;">
        </el-input>
        <span class="absolute" style="color: #999999;bottom: -25px;">第三方应用的密钥</span>
      </div>
    </div>
    <div class="margin-top-40 flex item-center">
      <span class="width-150">
        消息通知URL
      </span>
      <div class="relative">
        <el-input
          clearable
          @input="valueChange"
          v-model="thirdAppData.notifyUrl"
          placeholder="输入消息通知URL"
          style="width: 500px;">
        </el-input>
        <span class="absolute" style="color: #999999;bottom: -25px;">用于消息接收</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      thirdPlatform: '',
      appId: '',
      secretKey: '',
      noticeUrl: '',
      appTypeOptions: [
        {
          value: 'WX_MINIPROGRAM',
          label: '微信小程序'
        }, {
          value: 'WX_MP',
          label: '微信公众号'
        }, {
          value: 'H5',
          label: 'H5'
        }, {
          value: 'APP',
          label: 'APP'
        }, {
          value: 'DD_MINIPROGRAM',
          label: '滴滴小程序'
        }
      ]
    }
  },
  methods: {
    valueChange() {
      this.$emit('input', this.thirdAppData)
    }
  },
  computed: {
    thirdAppData() {
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
