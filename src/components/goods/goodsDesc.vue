<template>
    <div>
      <div class="goods-desc" v-for="item in info" :key="item.id">
        <h3 class="title">{{item.title}}</h3>
        <hr>
        <div class="content" v-html="item.content"></div>
      </div>
    </div>
</template>

<script>
  import { getGoodsDesc } from '@/api/api'
  export default {
    name: 'goodsDesc',
    data() {
      return {
        id:this.$route.params.id,
        info: {}
      }
    },
    created() {
      this.createGoodsDesc()
    },
    methods: {
      createGoodsDesc() {
        getGoodsDesc(this.id)
          .then(res=> {
            this.info = res.data.message
            console.log(this.info)
          })
      }
    }

  }
</script>

<style lang="scss">
  .goods-desc {
    padding: 4px;
    h3 {
      font-size: 16px;
      color: #226aff;
      text-align: center;
      margin: 15px 0;
    }
    .content {
      img {
        width: 100%;
      }
    }
  }

</style>
