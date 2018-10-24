<template>
  <div>
    <home v-if="isHome" @jumpToConfig="jumpToConfig"/>
    <config v-else :canvas-data="canvasData" @componentChange="componentChange"/>
  </div>
</template>

<script>
import home from './components/home'
import config from './components/config'
export default {
  name: 'Index',
  components: {
    home,
    config
  },
  data() {
    return {
      isHome: true,
      canvasData: {},
      styleGroupss: [{
        label: 'text文本',
        name: 'texts',
        options: []
      }, {
        label: '图片',
        name: 'images',
        options: []
      }, {
        label: '块元素',
        name: 'blocks',
        options: []
      }, {
        label: '线条',
        name: 'lines',
        options: []
      }, {
        label: '扩展',
        name: 'components',
        options: []
      }],
      styleGroups: [{
        label: 'text文本',
        name: 'texts',
        options: [
          {
            label: '头部',
            value: '头部',
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
            value: '底部',
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
      }]
    }
  },
  methods: {
    jumpToConfig(canvasData) {
      if (!canvasData.canvasStyle) {
        canvasData.canvasStyle = this.styleGroups
      } else { // 暂时使用，修改后删除else代码块
        this.styleGroups.map((item) => {
          const options = []
          canvasData.canvasStyle[item.name].map((style, index) => {
            options.push({
              label: item.name + index,
              value: item.name + index,
              style: style
            })
          })
          item.options = options
        })
        canvasData.canvasStyle = this.styleGroups
      }
      this.canvasData = canvasData
      this.componentChange()
    },
    componentChange() {
      this.isHome = !this.isHome
    }
  }
}
</script>

<style scoped>

</style>
