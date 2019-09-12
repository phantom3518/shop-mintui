<template>
    <div>
      <div class="goods-list" >
        <div class="goods-item" v-for="item in goodsList" :key="item.id">
          <img :src="item.img_url">
          <h1 class="goods-title">
            {{item.title}}
          </h1>
          <div class="goods-info">
            <div class="price">
              <span class="new">￥{{item.sell_price}}</span>
              <span class="old">￥{{item.market_price}}</span>
            </div>
            <div class="sell">
              <span class="hot">热卖中</span>
              <span class="save">剩{{item.stock_quantity}}件</span>
            </div>
          </div>
        </div>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
      </div>
    </div>
</template>

<script>
  import { getGoods } from '@/api/api'


  export default {
    name: 'goodList',
    data() {
      return {
        pageindex:1,
        goodsList:[]
      }
    },
    created () {
      this.createGoods()
    },
    methods: {
      createGoods() {
        getGoods(this.pageindex)
          .then(res=>{
            this.goodsList = this.goodsList.concat(res.data.message)
            console.log(this.goodsList)
          })
      },
      getMore() {
        this.pageindex++
        this.createGoods()
      },
    }
  }
</script>

<style scoped lang="scss">
  .goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 7px;
    .goods-item {
      width: 49%;
      border: 1px solid #ccc;
      box-shadow: 0 0 5px #ccc;
      margin-bottom: 10px;
      padding:2px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      min-height: 290px;
      img{
        width: 100%;
      }
      .goods-title {
        font-size: 14px;
        padding:0 2px;
      }
      .goods-info {
        background-color: #eee;
        padding:0 5px;
        .price {
          .new {
            color: red;
            font-size: 16px;
            margin-right: 10px;
          }
          .old {
            color: #bbb;
            text-decoration: line-through;
            font-size: 12px;
          }
        }
        .sell {
          margin: 3px;
          font-size: 12px;
          color: #8f8f94;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }
</style>
