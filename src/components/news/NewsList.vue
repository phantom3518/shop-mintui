<template>
    <div>
      <ul class="mui-table-view">
        <li class="mui-table-view-cell mui-media" v-for="item in newlist" :key="item.id">
          <router-link :to="`/home/newslist/newsinfo/${item.id}`">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body" >
              <h1>{{item.title}}</h1>
              <p class='mui-ellipsis'>
                <span>{{item.add_time | dataFormat}}</span>
                <span>点击：0次</span>
              </p>
            </div>
          </router-link>
        </li>

      </ul>
    </div>
</template>

<script>
  import { getNewList } from '@/api/api'

  export default {
    name: 'NewsList',
    data() {
      return {
        newlist:[]
      }
    },
    created () {
      getNewList().then(res=>{
        this.newlist = res.data.message
        // console.log(res)
      })


    }
  }
</script>

<style scoped>

  .mui-media-body h1{
    font-size: 14px;
  }
  .mui-ellipsis {
    font-size: 12px;
    color: deepskyblue;
    display: flex;
    justify-content: space-between;
  }
</style>
