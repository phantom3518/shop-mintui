<template>
  <div class="mui-numbox" data-numbox-min='1' style="height: 30px;">
    <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
    <input id="test" class="mui-input-numbox" type="number" :value="count" @change="countChange" ref="num"/>
    <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
  </div>
</template>

<script>
  import mui from '../../assets/mui/js/mui.min'
  export default {
    props:["count","id"],
    mounted () {
      mui(".mui-numbox").numbox();
      console.log(this.count)
    },
    methods: {
      countChange() {
        var goods = {
          id:this.id,
          count:this.$refs.num.value
        }
        this.$store.commit('addCarCount',goods)
      }
    }
  }
</script>

<style scoped>

</style>
