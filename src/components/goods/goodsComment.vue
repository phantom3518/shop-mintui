<template>
    <div>
      <cmt :id="id"></cmt>
    </div>
</template>

<script>
  import cmt from "../../components/subcomponents/comment"
  export default {
    name: 'goodsComment',
    components: {
      cmt
    },
    data() {
      return {
        id:this.$route.params.id,
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
