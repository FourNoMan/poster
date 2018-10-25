<template>
  <div class="flex flex-column" style="height: calc(100vh - 84px);">
    <header-component :hide-buttons="true"/>
    <div class="flex flex-1 flex-column" style="background: rgb(242, 242, 242);padding: 30px 50px 50px;overflow-y: auto;">
      <div style="margin-bottom: 30px;">
        <p>
          <span>推荐场景</span>
          <el-button size="mini">自定义尺寸</el-button>
        </p>
        <div class="flex">
          <!--<div style="width: 150px;margin-right: 40px;">-->
          <!--<div style="height: 250px;background: rgb(204, 204, 204);" class="flex justify-center item-center">-->
          <!--180*111-->
          <!--</div>-->
          <!--<p class="text-center">海报</p>-->
          <!--</div>-->
          <!--<div style="width: 400px;margin-right: 40px;">-->
          <!--<div style="height: 250px;background: rgb(204, 204, 204);" class="flex justify-center item-center">-->
          <!--1920*1080-->
          <!--</div>-->
          <!--<p class="text-center">横版海报</p>-->
          <!--</div>-->
          <div style="width: 250px;margin-right: 40px;" class="pointer" @click="dialogCreate = true">
            <div style="height: 250px;border:2px dashed rgb(204, 204, 204);font-size: 100px;font-weight: 900;" class="flex justify-center item-center">
              <i class="el-icon-plus"/>
            </div>
            <p class="text-center">添加模板</p>
          </div>
        </div>
      </div>
      <div>
        <p>
          <span>我的设计</span>
        </p>
        <div class="flex">
          <div v-if="posterData" style="width: 250px;margin-right: 40px;background: #fff;border-radius: 10px;padding: 10px;">
            <div style="height: 300px;background: rgb(204, 204, 204);" class="flex justify-center item-center">
              <img :src="posterData.imageUrl" alt="" style="width: 100%; height: 100%;">
            </div>
            <div class="flex">
              <div class="flex-1">
                <p>{{ posterData.name }}</p>
                <p>{{ posterData.date }}</p>
              </div>
              <div class="flex-1 flex item-center">
                <el-button style="height: 36px;" size="mini" @click="editPoster(posterData)">编辑</el-button>
                <el-button style="height: 36px;" size="mini" @click="deletePoster">删除</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="dialogCreate"
      title="创建模板"
      width="60%">
      <div>
        <div class="flex item-center">
          <span style="width: 80px;">
            尺寸
          </span>
          <div class="flex item-center">
            <el-input v-model="newCanvas.width" placeholder="宽度" style="width: 100px;"/>
            <span style="margin: 0 15px;">X</span>
            <el-input v-model="newCanvas.height" placeholder="高度" style="width: 100px;"/>
          </div>
        </div>
        <div class="flex item-center" style="margin-top: 30px;">
          <span style="width: 80px;">
            模板名称
          </span>
          <el-input v-model="newCanvas.name" placeholder="模板名称" style="width: 200px;"/>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="createCanvas">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import headerComponent from './header'
export default {
  components: {
    headerComponent
  },
  data() {
    return {
      jdData: {
        width: 750,
        height: 1334,
        backgroundColor: '#fff',
        debug: false,
        blocks: [
          {
            width: 690,
            height: 808,
            x: 30,
            y: 183,
            borderWidth: 2,
            borderColor: '#f0c2a0',
            borderRadius: 20,
          },
          {
            width: 634,
            height: 74,
            x: 59,
            y: 770,
            backgroundColor: '#fff',
            opacity: 0.5,
            zIndex: 100,
          },
        ],
        texts: [
          {
            x: 113,
            y: 61,
            baseLine: 'middle',
            text: '伟仔',
            fontSize: 32,
            color: '#8d8d8d',
          },
          {
            x: 30,
            y: 113,
            baseLine: 'top',
            text: '发现一个好物，推荐给你呀',
            fontSize: 38,
            color: '#080808',
          },
          {
            x: 92,
            y: 810,
            fontSize: 38,
            baseLine: 'middle',
            text: '标题标题标题标题标题标题标题标题标题',
            width: 570,
            lineNum: 1,
            color: '#8d8d8d',
            zIndex: 200,
          },
          {
            x: 59,
            y: 895,
            baseLine: 'middle',
            text: [
              {
                text: '2人拼',
                fontSize: 28,
                color: '#ec1731',
              },
              {
                text: '¥99',
                fontSize: 36,
                color: '#ec1731',
                marginLeft: 30,
              }
            ]
          },
          {
            x: 522,
            y: 895,
            baseLine: 'middle',
            text: '已拼2件',
            fontSize: 28,
            color: '#929292',
          },
          {
            x: 59,
            y: 945,
            baseLine: 'middle',
            text: [
              {
                text: '商家发货&售后',
                fontSize: 28,
                color: '#929292',
              },
              {
                text: '七天退货',
                fontSize: 28,
                color: '#929292',
                marginLeft: 50,
              },
              {
                text: '运费险',
                fontSize: 28,
                color: '#929292',
                marginLeft: 50,
              },
            ]
          },
          {
            x: 360,
            y: 1065,
            baseLine: 'top',
            text: '长按识别小程序码',
            fontSize: 38,
            color: '#080808',
          },
          {
            x: 360,
            y: 1123,
            baseLine: 'top',
            text: '超值好货一起拼',
            fontSize: 28,
            color: '#929292',
          }
        ],
        images: [
          {
            width: 62,
            height: 62,
            x: 30,
            y: 30,
            borderRadius: 62,
            url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/02bb99132352b5b5dcea.jpg',
          },
          {
            width: 634,
            height: 634,
            x: 59,
            y: 210,
            url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/193256f45999757701f2.jpeg',
          },
          {
            width: 220,
            height: 220,
            x: 92,
            y: 1020,
            url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/d719fdb289c955627735.jpg',
          },
          {
            width: 750,
            height: 90,
            x: 0,
            y: 1244,
            url: 'https://lc-I0j7ktVK.cn-n1.lcfile.com/67b0a8ad316b44841c69.png',
          }
        ]
      },
      dialogCreate: false,
      newCanvas: {
        width: 400,
        height: 600,
        name: '新建模板',
        date: '2018-10-19',
        imageUrl: 'static/images/poster.jpg'
      },
      posterData: {}
    }
  },
  computed: {
    canvasStyle() {
      return {
        width: 350 + 'px',
        height: 530 + 'px',
        backgroundColor: 'green'
      }
    }
  },
  beforeMount() {
    this.posterData = JSON.parse(localStorage.getItem('posterData'))
    // this.posterData.canvasStyle = this.jdData
    this.posterData.width = this.posterData.canvasStyle.width
    this.posterData.height = this.posterData.canvasStyle.height
  },
  methods: {
    createCanvas() {
      const createTime = new Date()
      this.newCanvas.date = createTime.getFullYear() + '-' + (createTime.getMonth() + 1) + '-' + createTime.getDate()
      this.dialogCreate = false
      this.$emit('jumpToConfig', this.newCanvas)
    },
    editPoster(poster) {
      this.$emit('jumpToConfig', poster)
    },
    deletePoster() {
      localStorage.removeItem('posterData')
      this.posterData = JSON.parse(localStorage.getItem('posterData'))
    }
  }
}
</script>

<style scoped>

</style>
