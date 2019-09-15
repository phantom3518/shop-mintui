<template>
  <div>
    <div class="goods-bg" v-for="item in goodsInfo" :key="item.id">
      <!--轮播-->
      <div class="mui-card">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <swiper-list :list="thumImages" :isfull="false"></swiper-list>
          </div>
        </div>
      </div>
      <!--购买-->
      <div class="mui-card">
        <div class="mui-card-header">{{item.title}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p class="price">
              市场价：
              <del>￥{{item.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{item.sell_price}}</span>
            </p>
            <p>购买数量：
              <number-box></number-box>
            </p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>&nbsp;
              <mt-button type="danger" size="small">加入购物车</mt-button>
            </p>
          </div>
        </div>
      </div>
      <!--参数-->
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：{{item.goods_no}}</p>
            <p>库存情况：{{item.stock_quantity}}件</p>
            <p>上架时间：{{item.add_time | dataFormat}}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain>图文介绍</mt-button>
          <mt-button type="danger" size="large" plain>商品评论</mt-button>
        </div>
      </div>
      <!--end-->
    </div>
  </div>
</template>

<script>
  import { getThumimages } from '@/api/api'
  import { getInfo } from '@/api/api'

  import SwiperList from '../subcomponents/swiper'
  import NumberBox from '../subcomponents/goodsInfo_numberbox'

  export default {
    name: 'goodInfo',
    components:{
      SwiperList,
      NumberBox
    },
    data() {
      return {
        id:this.$route.params.id,
        thumImages:'',
        list:'',
        goodsInfo:{}
      }
    },
    created () {
      this.createImages();
      this.createInfo();
    },
    methods: {
      createImages() {
        getThumimages(this.id)
          .then( res => {
            this.thumImages = res.data.message
            // console.log(this.thumImages)
            this.list = res.data.message
            this.list.forEach(item=>{
              item.img = item.src
            })
          })
      },
      createInfo() {
        getInfo(this.id)
          .then(res=> {
            this.goodsInfo = res.data.message
            console.log(this.goodsInfo)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
.goods-bg {
  background: #eee;
  overflow: hidden;
}
  .now_price {
    color: red;
    font-size: 16px;
    font-weight: bold;
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
</style>
