<template>
  <div class="padding-row-30">
    <div class="flex item-center">
      <span class="width-120">
        应用名称
      </span>
      <el-input
        clearable
        placeholder="输入应用名称"
        style="width: 200px;"
        @input="valueChange"
        v-model="appData.name">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-120">
        应用分类
      </span>
      <el-select v-model="appData.cateId" @change="valueChange" clearable placeholder="请选择应用类别">
        <el-option
          v-for="item in parentOptions"
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
        @input="valueChange"
        v-model="appData.ownerName"
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
        <img v-if="appData.iconUrl" :src="appData.iconUrl" class="avatar">
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
        @input="valueChange"
        v-model="appData.description"
        style="max-width: 700px;">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'parentIds'],
  data() {
    return {}
  },
  methods: {
    valueChange() {
      this.$emit('input', this.appData)
    },
    handleAvatarSuccess(res, file) {
      this.appData.description = URL.createObjectURL(file.raw)
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
  },
  mounted() {
    console.log(this.appData, '++3333333333++')
  },
  computed: {
    appData() {
      return this.value
    },
    parentOptions() {
      return this.parentIds || []
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
