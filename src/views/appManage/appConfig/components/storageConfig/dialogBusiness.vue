<template>
  <div class="padding-row-30">
    <div class="flex item-center">
      <span class="width-150">
        业务标题(title)
      </span>
      <el-input
        clearable
        placeholder="业务标题"
        @input="valueChange"
        style="width: 500px;"
        v-model="storageBusinessData.businessTitle">
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        业务的bizName
      </span>
      <el-input
        clearable
        placeholder="默认的bizName"
        @input="valueChange"
        style="width: 500px;"
        v-model="storageBusinessData.bizName">
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        BucketName
      </span>
      <el-input
        clearable
        placeholder="默认的bucketName"
        @input="valueChange"
        style="width: 500px;"
        v-model="storageBusinessData.bucketName">
      </el-input>
    </div>
    <div class="margin-top-20 flex item-center">
      <span class="width-150">
        日期分组
      </span>
      <el-radio-group v-model="storageBusinessData.isGroup" @change="valueChange">
        <el-radio :label="true">是</el-radio>
        <el-radio :label="false">否</el-radio>
      </el-radio-group>
    </div>
    <div class="margin-top-20 flex item-center" v-if="storageBusinessData.isGroup">
      <span class="width-150">
        分组格式
      </span>
      <el-select v-model="storageBusinessData.groupType" @change="valueChange" clearable placeholder="请选择应用类别">
        <el-option
          v-for="item in appTypeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      bizName: '',
      businessTitle: '',
      bucketName: '',
      isGroup: true,
      groupType: '',
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
    valueChange() {
      this.$emit('input', this.storageBusinessData)
    }
  },
  computed: {
    storageBusinessData() {
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
