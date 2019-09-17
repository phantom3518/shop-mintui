<template>
    <div class="mui-numbox" data-numbox-min='1' >
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1" @change="countChange" ref="num"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
  import mui from '../../assets/mui/js/mui.min'
  export default {
    props:["max"],
    name: 'goodsInfo_numberbox',
    mounted () {
      mui(".mui-numbox").numbox();

    },
    methods: {
      countChange() {
        // console.log(this.$refs.num.value)
        this.$emit('getcount',parseInt(this.$refs.num.value))
      }
    },
    watch:{
      'max':function (newVal,oldVal) {
        mui(".mui-numbox").numbox().setOption('max',newVal)
      }
    }
  }
</script>

<style scoped>

</style>
