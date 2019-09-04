<template>
  <div class="home" >
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img">
      </mt-swipe-item>
    </mt-swipe>
    home
  </div>
</template>

<script>
// import axios from 'axios'
import { getSwiperList } from '@/api/api'
import { getTest } from '@/api/api'
export default {
  name: 'home',
  data () {
    return {
      list: [],
      id: 20,
      params: {
        id: 10,
        name: 20
      }
    }
  },
  methods: {
    getSwipe () {
      getSwiperList(this.id)
        .then(res => {
          this.list = res.data.message
          console.log(res)
        })
        .catch(error => {
          console.log(error)
        })
      getTest(this.params)
        .then(res => {
          console.log(res)
        })
      // axios.get('http://www.liulongbin.top:3005/api/getlunbo')
      //   .then(res => {
      //     this.list = res.data.message
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
  .mint-swipe {
    height: 200px;
    .mint-swipe-item {
      &:nth-child(1) {
        background-color: hotpink;
      }
      &:nth-child(2) {
        background-color: skyblue;
      }
      &:nth-child(3) {
        background-color: lightcoral;
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
