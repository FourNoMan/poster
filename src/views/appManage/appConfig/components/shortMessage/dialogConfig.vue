<template>
  <div class="padding-row-30">
    <div class="flex item-center">
      <span class="width-150">
        服务提供商
      </span>
      <el-select v-model="serviceProvider" clearable placeholder="请选择服务提供商">
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
        短信AppID
      </span>
      <el-input
        clearable
        placeholder="输入短信AppID"
        style="width: 500px;"
        v-model="messageId">
      </el-input>
    </div>
    <div class="margin-top-20 flex">
      <span class="width-150">
        accessKeyId
      </span>
      <el-input
        clearable
        placeholder="输入accessKeyId"
        type="textarea"
        v-model="accessKeyId"
        style="max-width: 500px;">
      </el-input>
    </div>
    <div class="margin-top-20 flex">
      <span class="width-150">
        accessKeySecre
      </span>
      <el-input
        clearable
        placeholder="输入accessKeySecre"
        type="textarea"
        v-model="accessKeySecre"
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
        style="width: 500px;"
        v-model="domainName">
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      accessKeyId: '',
      accessKeySecre: '',
      serviceProvider: '',
      messageId: '',
      domainName: '',
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
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
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
