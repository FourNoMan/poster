<template>
  <div :class="classObj" class="app-wrapper flex flex-column">
    <div class="full-width shrink-none flex item-center justify-between" style="height: 60px;background: rgba(36,42,48,1);padding:0 22px;">
      <div class="flex item-center">
        <!--<img style="height: 50px;" :src="'static/images/log.png'" alt="">-->
        <span style="color: #FFFFFF;" class="font-size-16 margin-left-10">VBAO(新重构)交易系统</span>
      </div>
      <div class="right-menu">
        <!--<template>-->
          <!--<error-log class="errLog-container right-menu-item"/>-->

          <!--<el-tooltip :content="$t('navbar.screenfull')" effect="dark" placement="bottom">-->
            <!--<screenfull class="screenfull right-menu-item"/>-->
          <!--</el-tooltip>-->
        <!--</template>-->

        <el-dropdown class="right-menu-item" trigger="click">
          <div class="avatar-wrapper">
            <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
            <!--<i class="el-icon-caret-bottom"/>-->
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/">
              <el-dropdown-item>
                {{ $t('navbar.dashboard') }}
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="flex-1 overflow-hidden flex">
      <!--<div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside"/>-->
      <sidebar class="sidebar-container"/>
      <div class="main-container flex-1 flex flex-column" style="background-color: rgba(240,244,247,1)">
        <tags-view/>
        <navbar class="shrink-none"/>
        <!--<el-button type="warning" @click="testSdk">click</el-button>-->
        <app-main class="flex-1"/>
      </div>
    </div>
  </div>
</template>

<script>
import { Navbar, Sidebar, AppMain, TagsView } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import SDK from '@/api/sdk'
import { mapGetters } from 'vuex'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'

export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain,
    TagsView,
    ErrorLog,
    Screenfull
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters([
      'avatar',
      'device'
    ]),
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    testSdk() {
      SDK['test']().then(data => {
        console.log(data, '++60949++')
      })
    },
    handleClickOutside() {
      this.$store.dispatch('closeSideBar', { withoutAnimation: false })
    },
    logout() {
      this.$store.dispatch('LogOut').then(() => {
        location.reload()// In order to re-instantiate the vue-router object to avoid bugs
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .user-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
  .right-menu {
    &:focus{
      outline: none;
    }
    .right-menu-item {
      display: inline-block;
      margin: 0 8px;
    }
    .screenfull {
      height: 20px;
    }
    .international{
      vertical-align: top;
    }
    .theme-switch {
      vertical-align: 15px;
    }
    .avatar-container {
      height: 50px;
      margin-right: 30px;
      .avatar-wrapper {
        cursor: pointer;
        margin-top: 5px;
        position: relative;
        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
        }
        .el-icon-caret-bottom {
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
</style>
