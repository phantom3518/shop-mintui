<template>
    <div>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="item in list" :key="item.id">
          <img :src="item.img" :class="{'full':isfull}">
        </mt-swipe-item>
      </mt-swipe>
    </div>
</template>

<script>
  export default {
    name: 'swiper',
    props:["list","isfull"],
    created () {
    }

  }
</script>

<style scoped lang="scss">
.mint-swipe {
  height: 200px;
  text-align: center;
  /*.mint-swipe-item {*/
  /*&:nth-child(1) {*/
     /*background-color: hotpink;*/
   /*}*/
  /*&:nth-child(2) {*/
     /*background-color: skyblue;*/
   /*}*/
  /*&:nth-child(3) {*/
     /*background-color: lightcoral;*/
   /*}*/
  /*}*/
  img {
    /*width: 100%;*/
    height: 100%;
  }
  .full {
    width: 100%;
  }
}
</style>
