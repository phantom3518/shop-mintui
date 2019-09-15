<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
      <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
      <input id="test" class="mui-input-numbox" type="number" value="1"/>
      <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>
</template>

<script>
  import mui from '../../assets/mui/js/mui.min'
  export default {
    name: 'goodsInfo_numberbox',
    mounted () {
      mui(".mui-numbox").numbox();
    }
  }
</script>

<style scoped>

</style>
