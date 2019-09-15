<template>
    <div>
      <!--tab栏-->
      <div id="slider" class="mui-slider ">
          <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
            <div class="mui-scroll">
              <a :class="['mui-control-item',item.id === 0?'mui-active':'']"
                 v-for="item in cateGoryList" :key="item.id"
              >
                {{item.title}}
              </a>

            </div>
          </div>
        </div>
      <!--懒加载-->
      <ul class="photo-list">
        <router-link
          tag="li"
          v-for="item in imageList"
          :key="item.id"
          :to="`/home/photoinfo/${item.id}`"
        >
          <img v-lazy="item.img_url">
          <div class="info">
            <h1 class="info-title">{{item.title}}</h1>
            <div class="info-content">{{item.zhaiyao}}</div>
          </div>
        </router-link>
      </ul>
    </div>

</template>
<script >
  import mui from '../../assets/mui/js/mui.min.js'
  import { getCategroy } from '@/api/api'
  import { getImageList } from '@/api/api'
  export default {
    name: 'PhotosList',
    data() {
      return {
        cateGoryList:[],
        imageList:[]
      }
    },
    created () {
      this.createCate()
      this.createImageList()
    },
    mounted() {
      mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      });
    },
    methods: {
      createCate() {
        getCategroy().then(res=>{
          res.data.message.unshift({title:"全部",id:0})
          this.cateGoryList = res.data.message
          // console.log(this.cateGoryList)
        })
      },
      createImageList() {
        getImageList(0)
          .then(res=> {
            this.imageList = res.data.message
            // console.log(res.data.message)
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    touch-action: pan-y;
  }
  #slider {
    z-index:0
  }
  .photo-list {
    margin: 0;
    list-style: none;
    padding: 10px;
    li {
      position: relative;
      background-color: #ccc;
      text-align: center;
      margin-bottom: 10px;
      img {
        width: 100%;
        vertical-align: middle;
        box-shadow: 0 0 9px #999;
      }
      img[lazy="loading"] {
        width: 40px;
        height: 300px;
        margin: auto;
      }
      .info {
        width: 100%;
        max-height: 84px;
        position: absolute;
        bottom: 0;
        background-color: rgba(0,0,0,0.5);
        .info-title {
          font-size: 14px;
          color: white;
        }
        .info-content {
          font-size: 12px;
          color: #eee;
          text-align: left;
        }
      }
    }
  }


</style>
