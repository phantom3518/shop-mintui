<template>
    <div class="comment">
      <h3>评论</h3>
      <hr>
      <textarea placeholder="请输入评论" maxlength="120"
      v-model="msg"
      ></textarea>
      <mt-button type="primary" size="large" @click="addComment">发表评论</mt-button>
      <div class="cmt-list">
        <div class="cmt-item" v-for="(item,index) in newComments" :key="index">
          <div class="cmt-title">
            第{{index+1}}楼
            用户：{{item.user_name}}
            发表时间：{{item.add_time | dataFormat}}
          </div>
          <div class="cmt-content">
            {{item.content}}
          </div>
        </div>
      </div>
      <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
  import { getComment } from '@/api/api'
  import { postComment } from '@/api/api'
  import { Toast } from 'mint-ui'
  export default {
    name: 'comment',
    props:{
      id: String,
    },
    data() {
      return {
        page:1,
        newComments:[],
        msg:''
      }
    },
    created () {
      this.createComment()
    },
    methods: {
      createComment() {
        getComment(this.id,this.page).then(res=>{
          this.newComments = this.newComments.concat(res.data.message)
          // console.log(this.newComments)

        }).catch(error=>{
          console.log(error)
        })
      },
      getMore() {
        this.page++
        this.createComment()
      },
      addComment() {
        postComment(this.id,this.msg).then(res=>{
          console.log(res)
          Toast('发表成功')
          var firstComment = {
            id:this.id,
            user_name:'本地用户',
            add_time:new Date(),
            content:this.msg
          }
          this.newComments.unshift(firstComment)
          this.msg = ""
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comment {
    padding: 5px;
  }
  .cmt-list {
    margin: 10px 0;
    width: 100%;
    .cmt-title {
      font-size: 14px;
      background-color: #ddd;
      padding: 5px;
    }
    .cmt-content {
      padding: 5px;
      background-color: #fff;
      border: 1px solid #ddd;
    }
  }

</style>
