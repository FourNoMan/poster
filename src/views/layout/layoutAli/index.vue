<template>
  <div class="felx flex-column full-height full-width">
    <!--顶部栏-->
    <!--<div class="full-width flex item-center" style="height: 60px;background: #171a21;">-->
      <!--&lt;!&ndash;左侧logo部分&ndash;&gt;-->
      <!--<div>-->
        <!--<span style="color: #FFFFFF;" class="font-size-16 padding-left-30 padding-right-15 pointer">VBAO交易系统</span>-->
        <!--<span style="color: #999999;">|</span>-->
        <!--<span class="padding-left-15 padding-right-30 pointer" style="color: #FFF;">小程序</span>-->
      <!--</div>-->
      <!--&lt;!&ndash;左侧menu部分&ndash;&gt;-->
      <!--<div>-->
        <!--<el-menu-->
          <!--:default-active="activeIndex"-->
          <!--class="el-menu-demo"-->
          <!--mode="horizontal"-->
          <!--@select="handleSelect"-->
          <!--background-color="#171a21"-->
          <!--text-color="#fff"-->
          <!--active-text-color="#ffd04b">-->
          <!--<el-submenu index="1">-->
            <!--<template slot="title">运营中心</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span>开发管理</span>-->
              <!--</template>-->
              <!--<el-menu-item index="1-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="1-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-service"></i>-->
                <!--<span>开发服务</span>-->
              <!--</template>-->
              <!--<el-menu-item index="1-3">选项3</el-menu-item>-->
              <!--<el-menu-item index="1-4">选项4</el-menu-item>-->
            <!--</el-menu-item-group>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="2">-->
            <!--<template slot="title">开发中心</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span>开发管理</span>-->
              <!--</template>-->
              <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-service"></i>-->
                <!--<span>开发服务</span>-->
              <!--</template>-->
              <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
              <!--<el-menu-item index="2-4">选项4</el-menu-item>-->
            <!--</el-menu-item-group>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="3">-->
            <!--<template slot="title">数据中心</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span>开发管理</span>-->
              <!--</template>-->
              <!--<el-menu-item index="3-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="3-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
          <!--</el-submenu>-->
          <!--<el-submenu index="4">-->
            <!--<template slot="title">产品中心</template>-->
            <!--<el-menu-item-group>-->
              <!--<template slot="title">-->
                <!--<i class="el-icon-menu"></i>-->
                <!--<span>开发管理</span>-->
              <!--</template>-->
              <!--<el-menu-item index="4-1">选项1</el-menu-item>-->
              <!--<el-menu-item index="4-2">选项2</el-menu-item>-->
            <!--</el-menu-item-group>-->
          <!--</el-submenu>-->
        <!--</el-menu>-->
      <!--</div>-->
      <!--&lt;!&ndash;右侧功能&ndash;&gt;-->
      <!--<div class="flex-1 flex justify-end">-->
        <!--<el-dropdown class="pointer padding-row-15">-->
          <!--<span class="el-dropdown-link">-->
            <!--<el-badge :value="12" class="item" type="primary">-->
              <!--<i class="el-icon-bell" style="font-size: 24px;color: #999;margin-right: 4px;"></i>-->
            <!--</el-badge>-->
          <!--</span>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--<el-dropdown class="pointer padding-row-15">-->
          <!--<span class="el-dropdown-link">-->
            <!--<i class="el-icon-tickets" style="font-size: 24px;color: #999;margin-right: 4px;"></i>-->
          <!--</span>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--<el-dropdown class="pointer padding-row-15">-->
          <!--<span class="el-dropdown-link">-->
            <!--<i class="el-icon-question" style="font-size: 24px;color: #999;margin-right: 4px;"></i>-->
          <!--</span>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--<el-dropdown class="pointer padding-row-15" trigger="click">-->
          <!--<div class="flex item-center">-->
            <!--<img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
            <!--<span>18633422116[子账号]</span>-->
          <!--</div>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<router-link to="/">-->
              <!--<el-dropdown-item>-->
                <!--{{ $t('navbar.dashboard') }}-->
              <!--</el-dropdown-item>-->
            <!--</router-link>-->
            <!--<el-dropdown-item divided>-->
              <!--<span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>-->
            <!--</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
      <!--</div>-->
    <!--</div>-->
    <!--原生手写-->
    <div class="full-width flex item-center margin-top-20" style="height: 60px;background: #171a21;">
      <!--左侧logo部分-->
      <div>
        <span style="color: #FFFFFF;" class="font-size-16 padding-left-30 padding-right-15 pointer">VBAO交易系统</span>
        <span style="color: #999999;">|</span>
        <span class="padding-left-15 padding-right-30 pointer" style="color: #FFF;">小程序</span>
      </div>
      <!--左侧menu部分-->
      <menu-list :menuData="menuData"></menu-list>
      <!--右侧功能-->
      <div class="flex-1 flex justify-end">
        <menu-list :menuData="menuRightData"></menu-list>
        <!--<el-dropdown class="pointer padding-row-15">-->
          <!--<span class="el-dropdown-link">-->
            <!--<el-badge :value="12" class="item" type="primary">-->
              <!--<i class="el-icon-bell" style="font-size: 24px;color: #999;margin-right: 4px;"></i>-->
            <!--</el-badge>-->
          <!--</span>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--<el-dropdown class="pointer padding-row-15">-->
          <!--<span class="el-dropdown-link">-->
            <!--<i class="el-icon-tickets" style="font-size: 24px;color: #999;margin-right: 4px;"></i>-->
          <!--</span>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--<el-dropdown class="pointer padding-row-15">-->
          <!--<span class="el-dropdown-link">-->
            <!--<i class="el-icon-question" style="font-size: 24px;color: #999;margin-right: 4px;"></i>-->
          <!--</span>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<el-dropdown-item>黄金糕</el-dropdown-item>-->
            <!--<el-dropdown-item>狮子头</el-dropdown-item>-->
            <!--<el-dropdown-item>螺蛳粉</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
        <!--<el-dropdown class="pointer padding-row-15" trigger="click">-->
          <!--<div class="flex item-center">-->
            <!--<img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
            <!--<span>18633422116[子账号]</span>-->
          <!--</div>-->
          <!--<el-dropdown-menu slot="dropdown">-->
            <!--<router-link to="/">-->
              <!--<el-dropdown-item>-->
                <!--{{ $t('navbar.dashboard') }}-->
              <!--</el-dropdown-item>-->
            <!--</router-link>-->
            <!--<el-dropdown-item divided>-->
              <!--<span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>-->
            <!--</el-dropdown-item>-->
          <!--</el-dropdown-menu>-->
        <!--</el-dropdown>-->
      </div>
    </div>
    <!--navbar-->
    <div>
      <navbar class="shrink-none" style="background-color: #FFFFFF;border-bottom: 1px solid #999999;"/>
    </div>
    <div>
      app main
    </div>
  </div>
</template>

<script>
import { Navbar } from '../components'
import { mapGetters } from 'vuex'
import menuList from './components/menu'
export default {
  name: 'newLook',
  data() {
    return {
      activeIndex: '1-1',
      menuData: [
        {
          title: {
            text: '运营中心',
            icon: 'el-icon-caret-bottom'
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
                  description: '帮你获取官方流量支持'
                },
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持'
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
                  description: '帮你获取官方流量支持'
                }
              ]
            }
          ]
        },
        {
          title: {
            text: '开发中心',
            icon: 'el-icon-caret-bottom'
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
                  description: '帮你获取官方流量支持'
                },
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持'
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
                  description: '帮你获取官方流量支持'
                }
              ]
            }
          ]
        },
        {
          title: {
            text: '数据中心',
            icon: 'el-icon-caret-bottom'
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
                  description: '帮你获取官方流量支持'
                },
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持'
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
                  description: '帮你获取官方流量支持'
                }
              ]
            }
          ]
        },
        {
          title: {
            text: '产品中心',
            icon: 'el-icon-caret-bottom'
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
                  description: '帮你获取官方流量支持'
                },
                {
                  title: {
                    text: '官方活动',
                    icon: ''
                  },
                  description: '帮你获取官方流量支持'
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
                  description: '帮你获取官方流量支持'
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
            icon: 'el-icon-bell'
          },
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
                  description: '2018-11-30  21：39'
                },
                {
                  title: {
                    text: '小程序名称释放提醒',
                    icon: ''
                  },
                  description: '2018-11-30  21：39'
                },
                {
                  title: {
                    text: '小程序名称释放提醒',
                    icon: ''
                  },
                  description: '2018-11-30  21：39'
                },
                {
                  title: {
                    text: '小程序名称释放提醒',
                    icon: ''
                  },
                  description: '2018-11-30  21：39'
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
    menuList
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
    .rotate{
      transition: all 0.3s ease;
    }
    .absolute{
      display: none;
      width: 484px;
      height: 322px;
      padding: 30px 0;
      background-color: #1a1c30;
      .selection-group{
        flex: 1;
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
