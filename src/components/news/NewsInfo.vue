<template>
  <div>
    <div class="news-info">
      <h1>{{news.title}}</h1>
      <div class="news-title-span">
        <span>发表时间：{{news.add_time | dataFormat}}</span>
        <span>点击{{news.click}}次</span>
      </div>
      <div v-html="news.content"></div>
    </div>
    <comment :id="id"></comment>
  </div>
</template>

<script>
  import { getNewInfo } from '@/api/api'
  import comment from '../subcomponents/comment'
  export default {
    name: 'NewsInfo',
    components: {
      comment
    },
    data() {
      return {
        id:this.$route.params.id,
        news:[]
      }
    },
    created () {
      this.createNewInfo()
    },
    methods:{
      createNewInfo() {
        getNewInfo(this.id).then(res=>{
          this.news = res.data.message[0]
          // console.log(res)
          // console.log(this.news)
        })
      }
    }
  }
</script>

<style lang="scss">
.news-info {
  padding: 10px;
  h1 {
    color: red;
    text-align: center;
    font-size: 15px;
    margin: 8px 5px;
  }
  .news-title-span {
    display: flex;
    justify-content: space-between;
    span {
      color: deepskyblue;
      font-size: 13px;
    }
  }
}
</style>
