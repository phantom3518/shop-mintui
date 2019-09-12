<template>
  <div class="photoInfo-container">
    <div v-for="item in photoTitle" :key="item.id">
      <h2>{{item.title}}</h2>
      <p class="subtitle">
        <span>发表时间：{{item.add_time | dataFormat}}</span>
        <span>点击：{{item.click}}次</span>
      </p>
      <hr>
      <!--缩略图区域-->
      <vue-preview :slides="thumImages" @close="handleClose"></vue-preview>
      <!--图片内容区域-->
      <div class="content" v-html="item.content">
      </div>
      <!--评论子组件-->
      <div>
        <comment :id="id"></comment>
      </div>
    </div>
  </div>

</template>

<script>
  import { getImageDetail } from '@/api/api'
  import { getThumimages } from '@/api/api'
  import comment from '../subcomponents/comment'
  export default {
    name: 'photoInfo',
    components:{
      comment
    },
    data() {
      return {
        id:this.$route.params.id,
        photoTitle:[],
        thumImages:[]
      }
    },
    created() {
      this.createPhoto()
      this.createImages()
    },
    methods: {
      handleClose () {
        console.log('close event')
      },
      createPhoto() {
        //获取图片详情
        getImageDetail(this.id).then(res=>{
          this.photoTitle = res.data.message
          // console.log(this.photoTitle)
        })
      },
      createImages() {
        getThumimages(this.id)
          .then( res => {
            res.data.message.forEach(item=>{
              item.msrc = item.src
              item.w = 600
              item.h = 400
            })
            this.thumImages = res.data.message
            console.log(this.thumImages)
          })
      }
    }
  }
</script>

<style lang="scss">
  .photoInfo-container {
    padding: 3px;
    h2 {
      color: deepskyblue;
      font-size: 16px;
      text-align: center;
      margin: 15px 0;
    }
    .subtitle {
      display: flex;
      justify-content: space-between;
      font-size: 13px;
    }
    .content {
      font-size: 13px;
      line-height: 30px;
    }
    figure {
      margin: 5px 4px;
      width: 115px;
      height: 115px;
      display: inline-block;
      img {
        border: 0;
        width: 100%;
        height: 100%;
      }
    }
  }
</style>
