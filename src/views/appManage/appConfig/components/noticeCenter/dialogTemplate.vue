<template>
  <div class="padding-row-30">
    <div class="flex item-center">
      <span class="width-150">
        模板ID
      </span>
      <span>{{ templateId }}</span>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        通知模板
      </span>
      <span>{{ templateName }}</span>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        第三方平台
      </span>
      <span>{{ platformName }}</span>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        第三方应用
      </span>
      <el-checkbox-group v-model="relationApps">
        <el-checkbox v-for="item in appTypeOptions" :label="item.label"></el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      templateId: '1212121212',
      templateName: '支付成功通知',
      platformName: '支付宝小程序',
      relationApps: [],
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
