<template>
  <div class="flex flex-column full-height full-width">
    <div class="full-width flex item-center shrink-none" style="height: 60px;background: #171a21;">
      <!--左侧logo部分-->
      <div>
        <span style="color: #FFFFFF;" class="font-size-16 padding-left-30 padding-right-15 pointer">VBAO交易系统</span>
        <span style="color: #999999;">|</span>
        <span class="padding-left-15 padding-right-30 pointer" style="color: #FFF;">小程序</span>
      </div>
      <!--左侧menu部分-->
      <menu-list :menuData="menuData"></menu-list>
      <!--右侧功能-->
      <div class="flex-1 flex justify-end full-height">
        <menu-list :menuData="menuRightData"></menu-list>
      </div>
    </div>
    <!--navbar-->
    <!--<div>-->
      <!--<navbar class="shrink-none" style="background-color: #FFFFFF;border-bottom: 1px solid #999999;"/>-->
    <!--</div>-->
    <div class="flex-1 flex overflow-hidden">
      <!--<div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>-->
      <!--<sidebar class="sidebar-container"/>-->
      <div class="main-container flex-1 flex flex-column main-bgcolor main-padding">
     <!--<tags-view/>-->
        <navbar class="shrink-none" style="background-color: #FFFFFF;" :menu="menuValue"/>
        <app-main class="flex-1 overflow-auto"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from '../components'
import { mapGetters } from 'vuex'
import menuList from './components/menu'
import sdk from '@/api/sdk'
export default {
  name: 'newLook',
  data() {
    return {
      activeIndex: '1-1',
      menuValue:false,
      menuData: [
        {
          title: {
            text: '运营中心',
            icon: 'el-icon-caret-bottom',
            rotate: true
          },
          selections: [
            {
              title: {
                text: '流量运营',
                icon: 'el-icon-news'
              },
              items: [
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                },
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                }
              ]
            },
            {
              title: {
                text: '流量运营',
                icon: 'el-icon-news'
              },
              items: [
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                }
              ]
            }
          ]
        },
        {
          title: {
            text: '开发中心',
            icon: 'el-icon-caret-bottom',
            rotate: true
          },
          selections: [
            {
              title: {
                text: '流量运营',
                icon: 'el-icon-news'
              },
              items: [
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                },
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                }
              ]
            },
            {
              title: {
                text: '流量运营',
                icon: 'el-icon-news'
              },
              items: [
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                }
              ]
            }
          ]
        },
        {
          title: {
            text: '数据中心',
            icon: 'el-icon-caret-bottom',
            rotate: true
          },
          selections: [
            {
              title: {
                text: '流量运营',
                icon: 'el-icon-news'
              },
              items: [
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                },
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                }
              ]
            },
            {
              title: {
                text: '流量运营',
                icon: 'el-icon-news'
              },
              items: [
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                }
              ]
            }
          ]
        },
        {
          title: {
            text: '产品中心',
            icon: 'el-icon-caret-bottom',
            rotate: true
          },
          selections: [
            {
              title: {
                text: '流量运营',
                icon: 'el-icon-news'
              },
              items: [
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                },
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                }
              ]
            },
            {
              title: {
                text: '流量运营',
                icon: 'el-icon-news'
              },
              items: [
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持',
                  arrowRight: true
                }
              ]
            }
          ]
        }
      ],
      menuRightData: [
        {
          title: {
            text: '',
            icon: 'el-icon-bell',
            badge: 12
          },
          position:['right'],
          selections: [
            {
              title: {
                text: '五条未读消息',
                icon: ''
              },
              items: [
                {
                  title: {
                    text: '身份扩展成功了',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                },
                {
                  title: {
                    text: '小程序名称释放通知',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                },
                {
                  title: {
                    text: '小程序名称释放提醒',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                }
              ]
            }
          ]
        },
        {
          title: {
            text: '',
            icon: 'el-icon-date'
          },
          position:['right'],
          selections: [
            {
              title: {
                text: '五条未读消息',
                icon: ''
              },
              items: [
                {
                  title: {
                    text: '身份扩展成功了',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                },
                {
                  title: {
                    text: '小程序名称释放通知',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                },
                {
                  title: {
                    text: '小程序名称释放提醒',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                },
                {
                  title: {
                    text: '小程序名称释放提醒',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                },
                {
                  title: {
                    text: '小程序名称释放提醒',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                }
              ]
            }
          ]
        },
        {
          title: {
            text: '',
            icon: 'el-icon-question'
          },
          position:['right'],
          selections: [
            {
              title: {
                text: '五条未读消息',
                icon: ''
              },
              items: [
                {
                  title: {
                    text: '身份扩展成功了',
                    icon: ''
                  },
                  description: '2018-11-30  21：39'
                },
                {
                  title: {
                    text: '小程序名称释放通知',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                },
                {
                  title: {
                    text: '小程序名称释放提醒',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                }
              ]
            }
          ]
        },
        {
          title: {
            text: '18633422116[子账号]',
            icon: '',
            userIcon: '../../../../../static/images/rng.png'
          },
          position:['right'],
          selections: [
            {
              title: {
                text: '五条未读消息',
                icon: ''
              },
              items: [
                {
                  title: {
                    text: '身份扩展成功了',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                },
                {
                  title: {
                    text: '小程序名称释放通知',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                },
                {
                  title: {
                    text: '小程序名称释放提醒',
                    icon: ''
                  },
                  description: '2018-11-30  21：39',
                  hover: 'black-blue'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    Navbar,
    menuList,
    Sidebar,
    AppMain,
    TagsView
  },
  computed: {
    ...mapGetters([
      'avatar'
    ])
  },
  methods: {
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    },
    handleSelect() {
      console.log('handleSelect')
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
  .user-avatar {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  .menu-item{
    color: hsla(0, 0%, 100%, .5);
    background-color: transparent;
    font-size: 14px;
    .rotate{
      transition: all 0.3s ease;
    }
    .right{
      right: 0;
    }
    .left{
      left: 0;
    }
    .top{
      top: 0;
    }
    .bottom{
      bottom: 0;
    }
    .absolute{
      display: none;
      height: 322px;
      overflow-y: auto;
      padding: 30px 0;
      background-color: #1a1c30;
      .selection-group{
        flex: 1;
        width: 242px;
        .selection-item{
          padding: 10px 40px;
          font-size: 14px;
          line-height: 16px;
          color: #fff;
          cursor: pointer;
          span{
            font-size: 14px;
            display: block;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            color: #fff;
            padding-top: 7px;
            min-height: 23px;
          }
          span:last-child{
            font-size: 12px;
            opacity: .4;
          }
          .icon{
            margin-right: -25px;
            font-size: 30px;
            color: transparent;
          }
        }
        .selection-item:hover{
          background-color: #108EE9;
          span:last-child{
            opacity: 1;
          }
          .icon{
            color: #FFFFFF;
          }
        }
        .black-blue:hover{
          background-color: #000000;
          span:first-child{
            color: #107CAD;
          }
        }
      }
      .line{
        border-right: 1px solid #313345;
      }
      .line:last-child{
        display: none;
      }
    }
  }
  .menu-item:hover, .menu-item-active{
    color: #FFFFFF;
    background-color: #1a1c30;
    .rotate{
      transform: rotate(180deg);
    }
    .absolute{
      display: block;
    }
  }
</style>
