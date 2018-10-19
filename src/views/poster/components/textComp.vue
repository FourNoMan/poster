<template>
  <div style="width: 250px;padding: 10px;border-right: 1px solid gainsboro;">
    <h1 class="text-center" style="border-bottom: 1px solid gainsboro;padding-bottom: 15px;">文本</h1>
    <p>编辑·添加文本段落</p>
    <el-select v-model="selectValue" style="margin-bottom: 15px;" placeholder="请选择" @change="valueChange">
      <el-option
        v-for="item in textOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"/>
    </el-select>
    <el-input
      :rows="2"
      v-model="textarea"
      style="margin-bottom: 15px;"
      type="textarea"
      placeholder="请输入内容"/>
    <el-button type="primary" style="margin-bottom: 20px;" @click="editText">确定</el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      :before-close="handleCancel"
      title="添加新文本"
      width="50%">
      <div>
        <div class="flex" style="margin-bottom: 20px;">
          <span>文本名称：</span>
          <el-input
            v-model="newText.label"
            style="width: 150px;"
            placeholder="请输入名称"/>
        </div>
        <div>
          <span>文本内容：</span>
          <el-input
            :rows="3"
            v-model="newText.value"
            style="margin-top: 10px;"
            type="textarea"
            placeholder="请输入内容"/>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleCancel">取 消</el-button>
        <el-button type="primary" @click="handleSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TextComp',
  props: {
    textProp: {
      type: null,
      default: []
    }
  },
  data() {
    return {
      dialogVisible: false,
      newText: {
        label: '',
        value: '',
        style: {
          x: 0,
          y: 0,
          text: '',
          fontSize: 16,
          color: '#000',
          opacity: 1,
          lineHeight: 20,
          lineNum: 1,
          width: 300,
          marginLeft: 0,
          marginRight: 0,
          textDecoration: 'none',
          baseLine: 'middle',
          textAlign: 'center',
          zIndex: 0
        }
      },
      textarea: '',
      selectValue: '',
      texts: []
    }
  },
  computed: {
    textOptions() {
      if (this.textsProp.length >= 0) {
        const arr = this.textsProp.slice()
        this.texts = [
          {
            label: '添加新文本',
            value: '新文本'
          }
        ]
        arr.map((item) => {
          this.texts.push(item)
        })
      }
      this.initSelectValu()
      return this.texts
    }
  },
  methods: {
    initSelectValu() {
      const flag = this.texts.some((text) => {
        return text.value === this.selectValue
      })
      if (!flag) {
        this.selectValue = ''
        this.valueChange()
      }
    },
    valueChange(text) {
      if (text === '新文本') {
        this.textarea = ''
        this.dialogVisible = true
      } else {
        this.textarea = this.selectValue
      }
    },
    editText() {
      this.texts.map(item => {
        if (item.value === this.selectValue) {
          item.style.text = this.textarea
          item.value = this.textarea
        }
      })
    },
    handleCancel() {
      this.selectValue = ''
      this.valueChange(this.selectValue)
      this.newText.label = ''
      this.newText.value = ''
      this.dialogVisible = false
    },
    handleSure() {
      this.newText.style.text = this.newText.value
      this.texts.push(JSON.parse(JSON.stringify(this.newText)))
      this.selectValue = this.newText.value
      this.valueChange(this.selectValue)
      this.newText.label = ''
      this.newText.value = ''
      this.newText.style.text = ''
      this.dialogVisible = false
      this.$emit('textsChange', this.texts.slice(1))
    }
  }
}
</script>

<style scoped>

</style>
