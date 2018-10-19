<template>
  <div class="full-width">
    <div v-if="styleContentCuputed.style !== undefined" class="flex flex-column text-left full-width" style="border-top: 1px solid gainsboro;padding: 15px 0;">
      <span>位置·尺寸</span>
      <div style="margin-top: 20px;">
        <div class="flex" style="margin-bottom: 15px;">
          <div v-if="styleContent.style.x !== undefined" class="flex flex-column" style="margin-left: 20px;">
            <el-input
              v-model="styleContent.style.x"
              style="width: 60px;margin-bottom: 10px;"
              placeholder="x坐标"
              @change="styleChange"/>
            <span>X轴坐标</span>
          </div>
          <div v-if="styleContent.style.y !== undefined" class="flex flex-column" style="margin-left: 20px;">
            <el-input
              v-model="styleContent.style.y"
              style="width: 60px;margin-bottom: 10px;"
              placeholder="y坐标"
              @change="styleChange"/>
            <span>Y轴坐标</span>
          </div>
          <div v-if="styleContent.style.width !== undefined" class="flex flex-column" style="margin-left: 20px;">
            <el-input
              v-model="styleContent.style.width"
              style="width: 60px;margin-bottom: 10px;"
              placeholder="宽度"
              @change="styleChange"/>
            <span>宽度</span>
          </div>
          <div v-if="styleContent.style.height !== undefined" class="flex flex-column" style="margin-left: 20px;">
            <el-input
              v-model="styleContent.style.height"
              style="width: 60px;margin-bottom: 10px;"
              placeholder=""
              @change="styleChange"/>
            <span>高度</span>
          </div>
        </div>

        <div class="flex" style="margin-bottom: 15px;">
          <div v-if="styleContent.style.startX !== undefined" class="flex flex-column" style="margin-left: 20px;">
            <el-input
              v-model="styleContent.style.startX"
              style="width: 60px;margin-bottom: 10px;"
              placeholder="x坐标"
              @change="styleChange"/>
            <span>X轴起点</span>
          </div>
          <div v-if="styleContent.style.startY !== undefined" class="flex flex-column" style="margin-left: 20px;">
            <el-input
              v-model="styleContent.style.startY"
              style="width: 60px;margin-bottom: 10px;"
              placeholder="y坐标"
              @change="styleChange"/>
            <span>Y轴起点</span>
          </div>
          <div v-if="styleContent.style.endX !== undefined" class="flex flex-column" style="margin-left: 20px;">
            <el-input
              v-model="styleContent.style.endX"
              style="width: 60px;margin-bottom: 10px;"
              placeholder="宽度"
              @change="styleChange"/>
            <span>X轴终点</span>
          </div>
          <div v-if="styleContent.style.endY !== undefined" class="flex flex-column" style="margin-left: 20px;">
            <el-input
              v-model="styleContent.style.endY"
              style="width: 60px;margin-bottom: 10px;"
              placeholder=""
              @change="styleChange"/>
            <span>Y轴终点</span>
          </div>
        </div>

        <div style="padding: 0 20px;">
          <div v-if="styleContent.style.marginLeft !== undefined" class="flex item-center justify-between" style="margin-bottom: 10px;">
            <span style="margin-right: 10px;">marginLeft</span>
            <el-input-number v-model="styleContent.style.marginLeft" :min="0" :max="500" size="small" controls-position="right" label="marginLeft" @change="styleChange"/>
          </div>
          <div v-if="styleContent.style.marginRight !== undefined" class="flex item-center justify-between" style="margin-bottom: 10px;">
            <span style="margin-right: 10px;">marginRight</span>
            <el-input-number v-model="styleContent.style.marginRight" :min="0" :max="500" size="small" controls-position="right" label="marginRight" @change="styleChange"/>
          </div>
          <div v-if="styleContent.style.paddingLeft !== undefined" class="flex item-center justify-between" style="margin-bottom: 10px;">
            <span style="margin-right: 10px;">paddingLeft</span>
            <el-input-number v-model="styleContent.style.paddingLeft" :min="0" :max="500" size="small" controls-position="right" label="paddingLeft" @change="styleChange"/>
          </div>
          <div v-if="styleContent.style.paddingRight !== undefined" class="flex item-center justify-between" style="margin-bottom: 10px;">
            <span style="margin-right: 10px;">paddingRight</span>
            <el-input-number v-model="styleContent.style.paddingRight" :min="0" :max="500" size="small" controls-position="right" label="paddingRight" @change="styleChange"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="styleContent.style.backgroundColor !== undefined" class="flex justify-between full-width item-center" style="border-top: 1px solid gainsboro;padding: 15px 0;">
      <span>背景色</span>
      <el-color-picker v-model="styleContent.style.backgroundColor" show-alpha @change="styleChange"/>
    </div>
    <div v-if="styleContent.style.borderWidth !== undefined" class="flex justify-between full-width item-center" style="border-top: 1px solid gainsboro;padding: 15px 0;">
      <span>边框</span>
      <div class="flex item-center">
        <el-select v-model="styleContent.style.borderWidth" style="margin-right: 20px;width: 100px;" placeholder="请选择" @change="styleChange">
          <el-option
            v-for="item in borderWidths"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <el-color-picker v-model="styleContent.style.borderColor" @change="styleChange"/>
      </div>
    </div>
    <div v-if="styleContent.style.startX !== undefined" class="flex justify-between full-width item-center" style="border-top: 1px solid gainsboro;padding: 15px 0;">
      <span>线条颜色</span>
      <div class="flex item-center">
        <el-color-picker v-model="styleContent.style.color" @change="styleChange"/>
      </div>
    </div>
    <div v-if="styleContent.style.borderRadius !== undefined" class="flex justify-between full-width item-center" style="border-top: 1px solid gainsboro;padding: 15px 0;">
      <span>圆角半径</span>
      <el-input
        v-model="styleContent.style.borderRadius"
        style="width: 60px;"
        placeholder=""
        @change="styleChange"/>
    </div>
    <div v-if="styleContent.style.fontSize !== undefined" class="flex justify-between full-width" style="border-top: 1px solid gainsboro;padding:15px 0;">
      <span>字体</span>
      <div class="flex flex-column">
        <div class="flex item-center justify-between" style="margin-bottom: 10px;">
          <span style="margin-right: 10px;">字体大小</span>
          <el-input-number v-model="styleContent.style.fontSize" :min="1" :max="100" size="small" controls-position="right" label="字体大小" @change="styleChange"/>
        </div>
        <div v-if="styleContent.style.lineHeight !== undefined" class="flex item-center justify-between" style="margin-bottom: 10px;">
          <span style="margin-right: 10px;">行高</span>
          <el-input-number v-model="styleContent.style.lineHeight" :min="1" :max="100" size="small" controls-position="right" label="行高" @change="styleChange"/>
        </div>
        <div v-if="styleContent.style.lineNum !== undefined" class="flex item-center justify-between" style="margin-bottom: 10px;">
          <span style="margin-right: 10px;">最大行数</span>
          <el-input-number v-model="styleContent.style.lineNum" :min="1" :max="100" size="small" controls-position="right" label="最大行数" @change="styleChange"/>
        </div>
        <div v-if="styleContent.style.textDecoration !== undefined" class="flex item-center justify-between" style="margin-bottom: 10px;">
          <span style="margin-right: 10px;">文本修饰</span>
          <el-select v-model="styleContent.style.textDecoration" class="full-width " style="width: 100px;margin-right: 15px;" placeholder="请选择" @change="styleChange">
            <el-option
              v-for="item in textDecoration"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </div>
        <div v-if="styleContent.style.color !== undefined" class="flex item-center justify-between" style="margin-bottom: 10px;">
          <span style="margin-right: 10px;">颜色</span>
          <el-color-picker v-model="styleContent.style.color" @change="styleChange"/>
        </div>
      </div>
    </div>
    <div v-if="styleContent.style.textAlign !== undefined" class="flex justify-between item-center full-width" style="border-top: 1px solid gainsboro;padding:15px 0;">
      <span>对齐</span>
      <div class="flex">
        <el-select v-model="styleContent.style.textAlign" class="full-width " style="width: 100px;margin-right: 15px;" placeholder="请选择" @change="styleChange">
          <el-option
            v-for="item in textAlign"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
        <el-select v-if="styleContent.style.verticalAlign !== undefined" v-model="styleContent.style.verticalAlign" class="full-width " style="width: 100px;" placeholder="请选择" @change="styleChange">
          <el-option
            v-for="item in textAlign"
            :key="item.value"
            :label="item.label"
            :value="item.value"/>
        </el-select>
      </div>
    </div>
    <div v-if="styleContent.style.opacity !== undefined" class="flex justify-between full-width item-center" style="border-top: 1px solid gainsboro;padding:15px 0;">
      <span>透明度</span>
      <div class="flex item-center">
        <span>0</span>
        <el-slider :step="0.01" :max="1" :format-tooltip="formatTooltip" v-model="styleContent.style.opacity" style="width: 150px;margin: 0 10px;" @change="styleChange"/>
        <span>100%</span>
      </div>
    </div>
    <div v-if="styleContent.style.zIndex !== undefined" class="flex justify-between full-width item-center" style="border-top: 1px solid gainsboro;padding:15px 0;">
      <span>层级</span>
      <div class="flex item-center">
        <span>0</span>
        <el-slider v-model="styleContent.style.zIndex" style="width: 150px;margin: 0 10px;" @change="styleChange"/>
        <span>100</span>
      </div>
    </div>
    <div style="margin-top: 20px;">
      <el-button type="primary" style="margin-bottom: 20px;" @click="deleteData">删除</el-button>
    </div>
    <el-dialog
      :visible.sync="deleteDialog"
      :before-close="deleteDataCancel"
      width="50%">
      <span slot="title" style="color: #F56C6C;"><i class="el-icon-warning"/>   这是一个危险的操作</span>
      <span>删除后不可恢复，确定要删除{{ styleContent.label ? '“' + styleContent.label + '”' : '' }}吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="deleteDataCancel">取 消</el-button>
        <el-button type="primary" @click="deleteDataSure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'StyleConfig',
  props: ['styleProp'],
  data() {
    return {
      deleteDialog: false,
      styleContent: {},
      textDecoration: [{
        label: '无',
        value: 'none'
      }, {
        label: '下划线',
        value: 'underline'
      }, {
        label: '贯穿线',
        value: 'line-through'
      }],
      textAlign: [{
        label: '左对齐',
        value: 'left'
      }, {
        label: '居中',
        value: 'center'
      }, {
        label: '右对齐',
        value: 'right'
      }],
      borderWidths: [{
        label: '无',
        value: 0
      }, {
        label: '细',
        value: 1
      }, {
        label: '中',
        value: 3
      }, {
        label: '粗',
        value: 5
      }]
    }
  },
  computed: {
    styleContentCuputed() {
      this.styleContent = this.styleProp
      return this.styleProp
    }
  },
  beforeMount() {
    this.styleContent = this.styleProp
  },
  methods: {
    styleChange() {
      console.log(this.styleContent)
      this.$emit('styleChange', this.styleContent)
    },
    formatTooltip(val) {
      return val * 100
    },
    deleteData() {
      this.deleteDialog = true
    },
    deleteDataCancel() {
      this.deleteDialog = false
    },
    deleteDataSure() {
      this.$emit('contentDelete', this.styleContent)
      this.deleteDialog = false
    }
  }
}
</script>

<style scoped>

</style>
