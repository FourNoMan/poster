<template>
  <div class="padding-row-30">
    <div class="flex item-center">
      <span class="width-120">
        分类名称
      </span>
      <el-input
        clearable
        placeholder="输入分类名称"
        style="width: 200px;"
        @input="valueChange"
        v-model="cateData.name">
        <i slot="suffix" class="el-icon-edit el-input__icon"></i>
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-120">
        应用上级分类
      </span>
      <el-select v-model="cateData.parentId" @change="valueChange" clearable placeholder="请选择上级分类">
        <el-option
          v-for="item in parentOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="margin-top-20 flex">
      <span class="width-120">
        上传分类图片
      </span>
      <el-upload
        class="avatar-uploader inline-block"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload">
        <img v-if="cateData.iconUrl" :src="cateData.iconUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
  </div>
</template>

<script>
import sdk from '@/api/sdk'
export default {
  props: ['value', 'parentIds'],
  data() {
    return {}
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.cateData.iconUrl = URL.createObjectURL(file.raw)
      this.valueChange()
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
    },
    valueChange() {
      this.$emit('input', this.cateData)
    }
  },
  computed: {
    cateData() {
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
