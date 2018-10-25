<template>
  <div style="width: 250px;padding: 10px;border-right: 1px solid gainsboro;">
    <h1 class="text-center" style="border-bottom: 1px solid gainsboro;padding-bottom: 15px;">文本</h1>
    <p>编辑·添加文本段落</p>
    <el-select v-model="selectValue" value-key="value" style="margin-bottom: 15px;" placeholder="请选择" @change="selectValueChange">
      <el-option
        v-for="item in textOptions"
        :key="item.value"
        :label="item.label"
        :value="item"/>
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
      :before-close="dialogHandleCancel"
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
            v-model="newText.style.text"
            style="margin-top: 10px;"
            type="textarea"
            placeholder="请输入内容"/>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogHandleCancel">取 消</el-button>
        <el-button type="primary" @click="dialogHandleSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'TextComp',
  props: {
    textsProp: {
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
            value: '添加新文本',
            style: {
              text: '新文本'
            }
          }
        ]
        arr.map((item) => {
          this.texts.push(item)
        })
      }
      // this.initSelectValu()
      return this.texts
    }
  },
  methods: {
    initSelectValu() {
      const flag = this.texts.some((text) => {
        return text.style.text === this.selectValue
      })
      if (!flag) {
        this.selectValue = {}
        this.selectValueChange()
      }
    },
    selectValueChange(textObj) {
      if (textObj.value === '添加新文本') {
        this.textarea = ''
        this.dialogVisible = true
      } else {
        this.textarea = this.selectValue.style.text
      }
    },
    editText() {
      if(this.selectValue.style) {
        this.selectValue.style.text = this.textarea
        this.$message({
          message: '修改成功！',
          type: 'success'
        })
      }
    },
    dialogHandleCancel() {
      this.selectValue = ''
      this.textarea = ''
      this.newText.label = ''
      this.newText.value = ''
      this.newText.style.text = ''
      this.dialogVisible = false
    },
    dialogHandleSure() {
      let newText = null
      this.newText.value = this.newText.label
      newText = JSON.parse(JSON.stringify(this.newText))
      this.texts.push(newText)
      this.selectValue = newText
      this.selectValueChange(this.selectValue)
      this.newText.label = ''
      this.newText.value = ''
      this.newText.style.text = ''
      this.dialogVisible = false
      this.$emit('textsChange', this.texts.slice(1))
      this.$message({
        message: '添加成功！',
        type: 'success'
      })
    }
  }
}
</script>

<style scoped>

</style>
