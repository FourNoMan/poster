<template>
  <div class="navbar">
    <hamburger :toggle-click="toggleSideBar" :is-active="sidebar.opened" class="hamburger-container"/>

    <breadcrumb class="breadcrumb-container"/>

    <!--<div class="right-mechanism">-->
      <!--<template v-if="device!=='mobile'">-->
        <!--<error-log class="errLog-container right-mechanism-item"/>-->

        <!--<el-tooltip :content="$t('navbar.screenfull')" effect="dark" placement="bottom">-->
          <!--<screenfull class="screenfull right-mechanism-item"/>-->
        <!--</el-tooltip>-->

        <!--&lt;!&ndash;<el-tooltip :content="$t('navbar.size')" effect="dark" placement="bottom">&ndash;&gt;-->
          <!--&lt;!&ndash;<size-select class="international right-mechanism-item"/>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-tooltip>&ndash;&gt;-->

        <!--&lt;!&ndash;<lang-select class="international right-mechanism-item"/>&ndash;&gt;-->

        <!--&lt;!&ndash;<el-tooltip :content="$t('navbar.theme')" effect="dark" placement="bottom">&ndash;&gt;-->
          <!--&lt;!&ndash;<theme-picker class="theme-switch right-mechanism-item"/>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-tooltip>&ndash;&gt;-->
      <!--</template>-->

      <!--<el-dropdown class="avatar-container right-mechanism-item" trigger="click">-->
        <!--<div class="avatar-wrapper">-->
          <!--<img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">-->
          <!--<i class="el-icon-caret-bottom"/>-->
        <!--</div>-->
        <!--<el-dropdown-mechanism slot="dropdown">-->
          <!--<router-link to="/">-->
            <!--<el-dropdown-item>-->
              <!--{{ $t('navbar.dashboard') }}-->
            <!--</el-dropdown-item>-->
          <!--</router-link>-->
          <!--&lt;!&ndash;<a target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">&ndash;&gt;-->
            <!--&lt;!&ndash;<el-dropdown-item>&ndash;&gt;-->
              <!--&lt;!&ndash;{{ $t('navbar.github') }}&ndash;&gt;-->
            <!--&lt;!&ndash;</el-dropdown-item>&ndash;&gt;-->
          <!--&lt;!&ndash;</a>&ndash;&gt;-->
          <!--<el-dropdown-item divided>-->
            <!--<span style="display:block;" @click="logout">{{ $t('navbar.logOut') }}</span>-->
          <!--</el-dropdown-item>-->
        <!--</el-dropdown-mechanism>-->
      <!--</el-dropdown>-->
    <!--</div>-->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Breadcrumb from '@/components/Breadcrumb'
import Hamburger from '@/components/Hamburger'
import ErrorLog from '@/components/ErrorLog'
import Screenfull from '@/components/Screenfull'
import SizeSelect from '@/components/SizeSelect'
import LangSelect from '@/components/LangSelect'
import ThemePicker from '@/components/ThemePicker'

export default {
  components: {
    Breadcrumb,
    Hamburger,
    ErrorLog,
    Screenfull,
    SizeSelect,
    LangSelect,
    ThemePicker
  },
  computed: {
    ...mapGetters([
      'sidebar',
      'name',
      'avatar',
      'device'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('toggleSideBar')
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
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .hamburger-container {
    line-height: 58px;
    height: 50px;
    float: left;
    padding: 0 10px;
  }
  .breadcrumb-container{
    float: left;
  }
  .errLog-container {
    display: inline-block;
    vertical-align: top;
  }
  .right-menu {
    float: right;
    height: 100%;
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
          width: 40px;
          height: 40px;
          border-radius: 10px;
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
}
</style>
