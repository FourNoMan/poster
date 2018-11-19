<template>
  <div class="padding-row-30">
    <div class="flex item-center margin-bottom-50">
      <span class="width-150">
        模板ID
      </span>
      <div class="relative flex-1">
        <span class="block">{{ templateId }}</span>
        <span class="absolute bottom--25" style="color: #999999;">开发者调用模板消息接口时需提供模板ID</span>
      </div>
    </div>
    <div class="margin-top-20 flex item-center margin-bottom-50">
      <span class="width-150">
        详细内容
      </span>
      <div class="relative flex-1">
        <span class="block">{{ noticeCode }}</span>
        <span class="absolute bottom--25" style="color: #999999;">在发送时，需要将内容中的参数({first.value}内为参数)赋值替换为需要的信息</span>
      </div>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        内容示例
      </span>
      <span class="block">{{ noticeText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templateId: '1212121212',
      noticeCode: '支付成功通知',
      noticeText: '支付宝小程序'
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
