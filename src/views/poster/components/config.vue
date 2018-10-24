<template>
  <div class="flex flex-column" style="height: calc(100vh - 84px);">
    <header-component @preview="previewCanvas" @viewCode="saveCanvas(true)" @save="saveCanvas" @download="downloadImage" @componentChange="componentChange"/>
    <div class="flex flex-1" style="overflow-y: auto;">
      <!--左边item-->
      <div class="flex">
        <div class="flex flex-column" style="padding: 10px;">
          <el-menu
            :default-active="activeValue"
            class="el-menu-vertical-demo full-height"
            @select="menuSelect">
            <el-menu-item index="0">
              <i class="el-icon-tickets"/>
              <span slot="title">文本</span>
            </el-menu-item>
            <el-menu-item index="1">
              <i class="el-icon-minus"/>
              <span slot="title">线条</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-rank"/>
              <span slot="title">块状</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-picture"/>
              <span slot="title">图片</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-upload"/>
              <span slot="title">上传</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-menu"/>
              <span slot="title">二维码</span>
            </el-menu-item>
          </el-menu>
        </div>
        <text-comp v-if="activeValue === '0'" :texts-prop="styleGroups[0].options" @textsChange="textsChange"/>
        <line-comp v-else-if="activeValue === '1'" @lineAdd="lineAdd"/>
        <image-comp v-else-if="activeValue === '2'" @imageAdd="imageAdd"/>
        <upload-comp v-else-if="activeValue === '3'"/>
        <qrcode-comp v-else-if="activeValue === '4'" @qrcodeAdd="qrcodeAdd"/>
        <block-comp v-else-if="activeValue === '5'" @blockAdd="blockAdd"/>
      </div>
      <!--中间render部分-->
      <div class="flex-1 flex justify-center item-center" style="background: rgb(242, 242, 242);">
        <div id="html12Canvas" :style="styleCanvas" class="relative overflow-hidden">
          <!--文字-->
          <div v-for="(text, index) in styleGroups[0].options" :key="index + 'text'" :style="styleText(text.style)" class="ellipsis-x absolute">
            {{ text.style.text }}
          </div>
          <!--图片-->
          <div v-for="(image, index) in styleGroups[1].options" :key="index + 'image'" :style="styleImage(image.style)" style="border-style: solid;" class="absolute overflow-hidden">
            <img :src="image.style.url" class="full-width full-height" alt="">
          </div>
          <!--block-->
          <div v-for="(block, index) in styleGroups[2].options" :key="index + 'block'" :style="styleBlock(block.style)" style="border-style: solid;" class="absolute overflow-hidden"/>
          <!--线条-->
          <div v-for="(line, index) in styleGroups[3].options" v-if="styleLine(line.style, 'canvas' + index)" :key="index + 1" :style="styleLine(line.style, 'canvas' + index)" class="absolute overflow-hidden">
            <canvas :id="'canvas' + index" :width="canvasStyle.width" :height="canvasStyle.height"/>
          </div>
          <!--扩展----二维码-->
          <div v-for="(qrcode, index) in styleGroups[4].options" :key="index + 'qrcode'" :style="styleQrcode(qrcode.style)" style="border-style: solid;" class="absolute overflow-hidden">
            <img :src="qrcode.style.url" class="full-width full-height" alt="">
          </div>
        </div>
      </div>
      <!--右边config-->
      <div style="width: 370px;padding: 10px;overflow-y: auto;" class="full-height">
        <div class="text-center" style="margin-bottom: 20px;">
          <el-radio-group v-model="activeName">
            <el-radio-button label="样式"/>
            <el-radio-button label="画布"/>
          </el-radio-group>
        </div>
        <div v-if="activeName === '样式'" class="full-width">
          <el-select v-model="styleContent" class="full-width" style="margin-bottom: 15px;" placeholder="请选择">
            <el-option-group
              v-for="group in styleGroups"
              :key="group.label"
              :label="group.label">
              <el-option
                v-for="item in group.options"
                :key="item.value"
                :label="item.label"
                :value="item"/>
            </el-option-group>
          </el-select>
          <style-config :style-prop="styleContent" @styleChange="styleChange" @contentDelete="contentDelete"/>
        </div>
        <canvas-config v-if="activeName === '画布'" :canvas-style="canvasStyle" @styleChange="canvasStyleChange"/>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogPreview"
      class="child-private"
      title="效果预览"
      center
      width="60%">
      <div id="previewBox" class="text-center" style="background: #cccccc;padding: 15px;">
        <!--这里是可预览的图片位置-->
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="downloadImage">下 载</el-button>
        <el-button type="primary" @click="dialogPreview = false">返 回</el-button>
      </span>
    </el-dialog>
    <el-dialog
      :visible.sync="dialogJson"
      title="json数据结构"
      center
      width="60%">
      <div class="text-center" style="background: white;padding: 15px;">
        {{ JSON.stringify(rpxData, undefined, 4) }}
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogJson = false">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import headerComponent from './header'
import textComp from './textComp'
import imageComp from './imageComp'
import lineComp from './lineComp'
import uploadComp from './uploadComp'
import styleConfig from './styleConfig'
import canvasConfig from './canvasConfig'
import blockComp from './blockComp'
import qrcodeComp from './qrcodeComp'
export default {
  components: {
    headerComponent,
    textComp,
    styleConfig,
    canvasConfig,
    imageComp,
    lineComp,
    uploadComp,
    blockComp,
    qrcodeComp
  },
  props: ['canvasData'],
  data() {
    return {
      dialogPreview: false,
      dialogJson: false,
      isMounted: false,
      canvasStyle: {
        width: 400,
        height: 600,
        backgroundColor: '#fff'
      },
      rpxData: {},
      styleGroups: [{
        label: 'text文本',
        name: 'texts',
        options: [
          {
            label: '头部',
            value: '这里是海报的头部文字',
            style: {
              x: 0,
              y: 0,
              text: '这里是海报的头部文字',
              fontSize: 16,
              color: '#000',
              opacity: 1,
              lineHeight: 20,
              lineNum: 1,
              width: 400,
              marginLeft: 0,
              marginRight: 0,
              textDecoration: 'none',
              baseLine: 'middle',
              textAlign: 'center',
              zIndex: 0
            }
          },
          {
            label: '底部',
            value: '底部底部底部底部底部底部底部底部底部底部底部底部',
            style: {
              x: 0,
              y: 0,
              text: '底部底部底部底部底部底部底部底部底部底部底部底部',
              fontSize: 16,
              color: '#000',
              opacity: 1,
              lineHeight: 20,
              lineNum: 1,
              width: 400,
              marginLeft: 0,
              marginRight: 0,
              textDecoration: 'none',
              baseLine: 'middle',
              textAlign: 'center',
              zIndex: 0
            }
          }
        ]
      }, {
        label: '图片',
        name: 'images',
        options: [
          {
            label: 'rng.png',
            value: 'static/images/rng.png',
            style: {
              x: 0,
              y: 0,
              url: 'static/images/rng.png',
              width: 100,
              height: 100,
              borderRadius: 0,
              borderWidth: 0,
              borderColor: '#fff',
              zIndex: 0
            }
          }
        ]
      }, {
        label: '块元素',
        name: 'blocks',
        options: [{
          label: '矩形',
          value: 'rectangle',
          style: {
            x: 100,
            y: 100,
            width: 200,
            height: 200,
            paddingLeft: 0,
            paddingRight: 0,
            borderRadius: 0,
            backgroundColor: '#ccc',
            borderWidth: 0,
            borderColor: '#000',
            zIndex: 0
          }
        }]
      }, {
        label: '线条',
        name: 'lines',
        options: [{
          label: '直线',
          value: 'straightLine',
          style: {
            startX: 0,
            startY: 100,
            endX: 400,
            endY: 600,
            width: 5,
            color: 'green',
            zIndex: 0
          }
        }]
      }, {
        label: '扩展',
        name: 'components',
        options: [{
          label: '二维码',
          value: 'qrcode',
          style: {
            x: 0,
            y: 400,
            id: '',
            type: 'QRCODE',
            url: 'static/images/qrcode.png',
            width: 100,
            height: 100,
            borderRadius: 0,
            borderWidth: 0,
            borderColor: '#fff',
            zIndex: 0,
            params: []
          }
        }]
      }],
      activeValue: '0',
      styleContent: {},
      activeName: '样式'
    }
  },
  computed: {
    styleCanvas() {
      return {
        width: this.canvasStyle.width + 'px',
        height: this.canvasStyle.height + 'px',
        backgroundColor: this.canvasStyle.backgroundColor
      }
    },
    styleText() {
      return function(style) {
        return {
          left: style.x + 'px',
          top: style.y + 'px',
          fontSize: style.fontSize + 'px',
          color: style.color,
          opacity: style.opacity,
          lineHeight: style.lineHeight + 'px',
          lineClamp: style.lineNum,
          width: style.width + 'px',
          marginLeft: style.marginLeft + 'px',
          marginRight: style.marginRight + 'px',
          textDecoration: style.textDecoration,
          baseLine: style.baseLine,
          textAlign: style.textAlign,
          zIndex: style.zIndex
        }
      }
    },
    styleImage() {
      return function(style) {
        return {
          left: style.x + 'px',
          top: style.y + 'px',
          width: style.width + 'px',
          height: style.height + 'px',
          borderRadius: style.borderRadius + 'px',
          borderWidth: style.borderWidth + 'px',
          borderColor: style.borderColor,
          zIndex: style.zIndex
        }
      }
    },
    styleQrcode() {
      return function(style) {
        return {
          left: style.x + 'px',
          top: style.y + 'px',
          width: style.width + 'px',
          height: style.height + 'px',
          borderRadius: style.borderRadius + 'px',
          borderWidth: style.borderWidth + 'px',
          borderColor: style.borderColor,
          zIndex: style.zIndex
        }
      }
    },
    styleBlock() {
      return function(style) {
        return {
          left: style.x + 'px',
          top: style.y + 'px',
          width: style.width + 'px',
          height: style.height + 'px',
          paddingLeft: style.paddingLeft + 'px',
          paddingRight: style.paddingRight + 'px',
          borderRadius: style.borderRadius + 'px',
          borderWidth: style.borderWidth + 'px',
          borderColor: style.borderColor,
          backgroundColor: style.backgroundColor,
          zIndex: style.zIndex
        }
      }
    },
    styleLine() {
      return function(style, id) {
        // if(this.isMounted) {  //添加line后第一时间获取不到dom，
        //   var poster = document.getElementById(id)
        //   var ctx = poster.getContext('2d')
        //   poster.height = poster.height
        //   ctx.moveTo(style.startX, style.startY)
        //   ctx.lineTo(style.endX, style.endY)
        //   ctx.lineWidth = style.width
        //   ctx.strokeStyle = style.color
        //   ctx.stroke()
        // }
        // setTimeout后computed检测不到没有return的属性，style中非法属性无效但不报错，故出现stylestartX
        setTimeout(function() {
          var canvas = document.getElementById(id)
          var ctx = canvas.getContext('2d')
          canvas.height = canvas.height
          ctx.moveTo(style.startX, style.startY)
          ctx.lineTo(style.endX, style.endY)
          ctx.lineWidth = style.width
          ctx.strokeStyle = style.color
          ctx.stroke()
        }, 10)
        return {
          zIndex: style.zIndex,
          stylestartX: style.startX,
          stylestartY: style.startY,
          styleendX: style.endX,
          styleendY: style.endY,
          stylewidth: style.width,
          stylecolor: style.color
        }
      }
    }
  },
  beforeMount() {
    this.initCanvasData()
    this.initStyleContent()
  },
  mounted() {
    this.isMounted = true
  },
  methods: {
    componentChange() {
      this.$emit('componentChange')
    },
    previewCanvas() {
      const that = this
      html2canvas(document.getElementById('html12Canvas')).then(function(canvas) {
        that.dialogPreview = true
        setTimeout(function() {
          const dom = document.getElementById('previewBox')
          dom.innerHTML = ''
          dom.appendChild(canvas)
        }, 10)
      })
    },
    saveCanvas(isCode) {
      let posterData = {}
      this.styleGroups.map((item) => {
        const styles = []
        item.options.map((option) => {
          styles.push(JSON.parse(JSON.stringify(option.style)))
        })
        this.canvasStyle[item.name] = styles
      })
      this.rpxData = JSON.parse(JSON.stringify(this.canvasStyle))
      for(let item in this.rpxData) {
        if(typeof(this.rpxData[item]) === 'object') {
          this.rpxData[item].map(option => {
            for(let key in option) {
              let rpxValue = option[key] * 1
              option[key] = isNaN(rpxValue) ? option[key] : rpxValue
            }
          })
        }
        else {
          let rpxValue = this.rpxData[item] * 1
          this.rpxData[item] = isNaN(rpxValue) ? this.rpxData[item] : rpxValue
        }
      }
      if(isCode) {
        this.dialogJson = true
      }
      else {
        posterData = JSON.parse(JSON.stringify(this.canvasData))
        posterData.canvasStyle = this.rpxData
        // localStorage.setItem('posterData', JSON.stringify(posterData))
      }
    },
    downloadImage() {
      html2canvas(document.getElementById('html12Canvas')).then(function(canvas) {
        setTimeout(function() {
          var image = new Image()
          image.src = canvas.toDataURL()
          var a = document.createElement('a')
          a.href = image.src
          a.download = '海报.jpg'
          a.click()
        }, 10)
      })
    },
    initCanvasData() {
      this.canvasStyle.width = this.canvasData.width
      this.canvasStyle.height = this.canvasData.height
      this.styleGroups = JSON.parse(JSON.stringify(this.canvasData.canvasStyle))
    },
    initStyleContent() {
      this.styleContent = {
        style: {}
      }
      for (const i in this.styleGroups) {
        const length = this.styleGroups[i].options.length
        if (length > 0) {
          this.styleContent = this.styleGroups[i].options[0]
          break
        }
      }
    },
    valueChange() {
      console.log(this.value)
    },
    menuSelect(index) {
      this.activeValue = index
    },
    canvasStyleChange(config) {
      if (config) {
        for (const item in config) {
          this.canvasStyle[item] = config[item]
        }
      }
    },
    textsChange(texts) {
      this.styleGroups[0].options = texts
    },
    styleChange(styleContent) {
      console.log(styleContent, '++++++++++222222', this.styleGroups)
      this.styleContent.style = styleContent.style
    },
    contentDelete(content) {
      this.styleGroups.map((item) => {
        if (item.options.indexOf(content) !== -1) {
          let arr = []
          arr = item.options.filter((option) => {
            return option !== content
          })
          item.options = arr
          this.initStyleContent()
        }
      })
    },
    imageAdd(image) {
      const index = this.styleGroups[1].options.length
      image.value = image.value + index
      this.styleGroups[1].options.push(JSON.parse(JSON.stringify(image)))
    },
    blockAdd(block) {
      const index = this.styleGroups[2].options.length
      block.value = block.value + index
      this.styleGroups[2].options.push(JSON.parse(JSON.stringify(block)))
    },
    lineAdd(line) {
      const index = this.styleGroups[3].options.length
      line.value = line.value + index
      this.styleGroups[3].options.push(JSON.parse(JSON.stringify(line)))
    },
    qrcodeAdd(qrcode) {
      const index = this.styleGroups[4].options.length
      qrcode.value = qrcode.value + index
      this.styleGroups[4].options.push(JSON.parse(JSON.stringify(qrcode)))
    }
  }
}
</script>

<style>
  .child-private > div{
    height: 100%;
    margin-top: 0!important;
    overflow-y: auto;
  }
</style>
