<template>
  <div>
    <div class="flex item-center">
      <span class="width-120">
        应用名称
      </span>
      <el-input
        clearable
        placeholder="输入应用名称"
        style="width: 200px;"
        v-model="appName">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-120">
        应用分类
      </span>
      <el-select v-model="appType" clearable placeholder="请选择应用类别">
        <el-option
          v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-120">
        应用负责人
      </span>
      <el-input
        clearable
        v-model="responsibility"
        placeholder="输入应用负责人"
        style="width: 200px;">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
    </div>
    <div class="margin-top-20 flex">
      <span class="width-120">
        应用图标
      </span>
      <el-upload
        class="avatar-uploader inline-block"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    <div class="margin-top-20 flex">
      <span class="width-120">
        应用描述
      </span>
      <el-input
        clearable
        placeholder="输入应用名称"
        type="textarea"
        v-model="appDescription"
        style="max-width: 700px;">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appAdd',
  data() {
    return {
      appType: '',
      appName: '',
      appDescription: '',
      imageUrl: '',
      responsibility: '',
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
