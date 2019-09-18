<template>
  <div class="shopcar-container">
    <div class="goods-list">
      <!--列表-->
      <div class="mui-card" v-for="(item,index) in goodsList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch ></mt-switch>
            <img :src="item.thumb_path">
            <div class="info">
              <h1>{{item.title}}</h1>
              <p>
                <span class="price">￥{{item.sell_price}}</span>
                <numbox :count="$store.getters.getGoodsCount[item.id]" :id="item.id"></numbox>
                <a href="#" @click.prevent="remove(item.id, index)">删除</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--结算-->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner jiesuan">
          <div class="left">
            <p>总计(不含运费)</p>
            <p>已勾选商品 <span class="red">0</span> 件，总价 <span class="red">￥0</span></p>
          </div>
          <mt-button type="danger">去结算</mt-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import numbox from '../subcomponents/shopcar_numbox'
  import { getShopcarList } from '../../api/api'
export default {
  components: {
    numbox
  },
  data() {
    return {
      goodsList:[]
    }
  },

  created () {
    this.getCar()
  },
  methods: {
    getCar(){
      var idArr = []
      this.$store.state.car.forEach(item=> {
        idArr.push(item.id)
      })
      if(idArr.length<=0) {
        return
      }
      getShopcarList(idArr.join(",")).then(res=> {
        this.goodsList = res.data.message
        console.log(this.goodsList)
      })
    },
    remove(id,i) {
      this.goodsList.splice(i,1)
      this.$store.commit('removeCar',id)
    }
  }
}
</script>

<style scoped lang="scss">
.shopcar-container {
  background-color: #eee;
  overflow: hidden;
  .goods-list {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
    }
    img {
      width: 60px;
      height: 60px;
    }
    h1 {
      font-size: 13px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .price {
        color: red;
        font-weight: bold;
      }
    }
  }
  .jiesuan {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .red {
    color:red;
  }
}

</style>
