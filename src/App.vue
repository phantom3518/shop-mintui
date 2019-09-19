<template>
  <div id="app">
    <!--header-->
    <div class="header">
      <mt-header fixed title="黑马程序员-Vue项目">
        <span @click="goBack" slot="left" v-show="flag">
          <mt-button icon="back">返回</mt-button>
        </span>
      </mt-header>
    </div>
    <!--router-view-->
    <transition >
      <router-view></router-view>
    </transition>
    <!--tabbar-->
    <nav class="mui-bar mui-bar-tab">
        <router-link to="/home" class="mui-tab-item-1" >
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link to="/member" class="mui-tab-item-1" >
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </router-link>
      <router-link to="/car" class="mui-tab-item-1" >
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
					<span class="mui-badge">{{$store.getters.getAllCount}}</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </router-link>
      <router-link to="/search" class="mui-tab-item-1">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </router-link>
    </nav>
    <!---->
  </div>
</template>
<script>
  export default {
    data() {
      return {
        flag:false
      }
    },
    created() {
      this.flag = this.$route.path !== "/home"

    },
    methods: {
      goBack() {
        this.$router.go(-1)
      }
    },
    watch: {
      '$route.path':function (newVal) {
        this.flag = newVal !== '/home';
      }
    }
  }
</script>
<style lang="scss">
  .mint-header {
    z-index:99
  }
  #app {
    padding-top: 40px;
    padding-bottom: 50px;
    overflow-x: hidden;
  }
  .v-enter {
    opacity: 0;
    transform: translateX(100%);
  }
  .v-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,.v-leave-active {
    transition: all 0.2s ease;
  }
  .mui-bar-tab .mui-tab-item-1.mui-active {
    color: #007aff;
  }
  .mui-bar-tab .mui-tab-item-1 {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
  }
  .mui-bar-tab .mui-tab-item-1 .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .mui-bar-tab .mui-tab-item-1 .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
