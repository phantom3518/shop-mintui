<template>
    <div class="goods-bg" >
      <!--小球-->
      <!--<transition-->
        <!--@before-enter="beforeEnter"-->
        <!--@enter="enter"-->
        <!--@after-enter="afterEnter">-->
        <!--<div class="ball" v-show="ballFlag" ref="ball"></div>-->
      <!--</transition>-->
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
        <div class="mui-card-header">{{goodsInfo.title}}</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p class="price">
              市场价：
              <del>￥{{goodsInfo.market_price}}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{goodsInfo.sell_price}}</span>
            </p>
            <p>购买数量：
              <number-box @getcount="getSelectedCount" :max="goodsInfo.stock_quantity"></number-box>
            </p>
            <p>
              <mt-button type="primary" size="small">立即购买</mt-button>&nbsp;
              <mt-button type="danger" size="small" @click="addShop">加入购物车</mt-button>
            </p>
          </div>
        </div>
      </div>
      <!--参数-->
      <div class="mui-card">
        <div class="mui-card-header">商品参数</div>
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <p>商品货号：{{goodsInfo.goods_no}}</p>
            <p>库存情况：{{goodsInfo.stock_quantity}}件</p>
            <p>上架时间：{{goodsInfo.add_time | dataFormat}}</p>
          </div>
        </div>
        <div class="mui-card-footer">
          <mt-button type="primary" size="large" plain @click="goGoodsDesc(id)">图文介绍</mt-button>
          <mt-button type="danger" size="large" plain @click="goGoodsComment(id)">商品评论</mt-button>
        </div>
      </div>
      <!--end-->
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
        goodsInfo:{},
        ballFlag:false,
        ballFlag2:false,
        selectedCount:1
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
            this.goodsInfo = res.data.message[0]
            console.log(this.goodsInfo)
          })
      },
      goGoodsDesc(id){
        this.$router.push('/home/goodsdesc/'+id)
      },
      goGoodsComment(id){
        this.$router.push('/home/goodscomment /'+id)
        // this.$router.push({name:'goodscomment',params:{id}})
      },
      addShop() {
        //添加到购物车
        // this.ballFlag = !this.ballFlag
        //商品id，商品数量，商品价格，商品是否选中
        var goodsinfo = {
          id:this.id,
          count:this.selectedCount,
          price:this.goodsInfo.sell_price,
          selected:true
        }
        this.$store.commit('addToCat',goodsinfo)
      },
      getSelectedCount(count) {
        console.log(count)
        this.selectedCount = count
      }
      // beforeEnter(el) {
      //   el.style.transform = "translate(0, 0)";
      // },
      // enter(el,done) {
      //   el.offsetWidth;
      //   el.style.transform = "translate(90px,230px)";
      //   el.style.transition = "all 1s ease";
      //   done()
      // },
      // afterEnter(el) {
      //   this.ballFlag = !this.ballFlag
      //   console.log( this.ballFlag)
      // }
    }
  }
</script>

<style lang="scss" scoped>
.goods-bg {
  background: #eee;
  overflow: hidden;

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
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    z-index:99;
    background: red;
    position: absolute;
    top: 390px;
    left: 150px;
  }
}




</style>
