<template>
  <div class="home" >

    <swiper-list :list="list" :isfull="true"></swiper-list>
    <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newslist">
          <img src="../../img/menu1.png" alt="">
          <div class="mui-media-body">新闻资讯</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/photolist">
          <img src="../../img/menu2.png" alt="">
          <div class="mui-media-body">图片分享</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/goodslist">
          <img src="../../img/menu3.png" alt="">
          <div class="mui-media-body">商品购买</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../img/menu4.png" alt="">
          <div class="mui-media-body">留言反馈</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../img/menu5.png" alt="">
          <div class="mui-media-body">视频专区</div></a></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
          <img src="../../img/menu6.png" alt="">
          <div class="mui-media-body">联系我们</div></a></li>

      </ul>
  </div>
</template>

<script>
// import axios from 'axios'
// import { postTest } from '@/api/api'
import { getSwiperList } from '@/api/api'
import SwiperList from '../subcomponents/swiper'
export default {
  name: 'home',
  components: {
    SwiperList
  },
  data () {
    return {
      list: [],
    }
  },
  methods: {
    getSwipe () {
      getSwiperList()
        .then(res => {
          this.list = res.data.message
          // console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
      // postTest(1)
      //   .then(res => {
      //     console.log(res)
      //   }).catch(error => {
      //     console.log(error)
      //   })
    }
  },
  created () {
    this.getSwipe()
  }
}
</script>
<style lang="scss" scoped>

  .mui-grid-view.mui-grid-9 {
    background-color: #fff;
    border: none;
    img {
      width: 60px;
      height: 60px;
    }

  }
  .mui-grid-view.mui-grid-9 .mui-table-view-cell {
    border: none;
    .mui-media-body {
      font-size: 13px;
    }
  }
</style>
