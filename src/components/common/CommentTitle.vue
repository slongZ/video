<template>
  <div class="comment">
    <p class="comment-title">
      <span>评论</span>
      <span>(400)</span>
    </p>
    <div class="comment-myinfo">
      <img src="@/assets/default_img.jpg" alt="">
      <input type="text" placeholder="说点什么">
      <button @click="commentPublish">发表</button>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      myuser:{}
    }
  },
  methods:{
    async myUserinfo(){
      // 获取个人评论数据
    },
    commentPublish(){
      if(this.myuser){
        this.$msg.file('请先登陆')
      }
    }
  },
  created(){
    this.myUserinfo()
  }

}
</script>

<style lang="less">
.comment{
  background-color: white;
  padding: 10px 10px;
  .comment-title{
    span:nth-child(2){
      color: #aaa;
      margin-left: 10px;
    }
  }
  .comment-myinfo{
    padding: 10px 0;
    display: flex;
    img{
      height: 30px;
      width: 30px;
      border-radius: 50%;
    }
    input{
      outline: none;
      border: 0;
      background-color: #f4f4f4;
      border-radius: 13px;
      font-size: 12px;
      padding: 0 20px 0 15px;
      margin-left: 10px;
    }
    button{
      outline: none;
      border: 0;
      border-radius: 12px;
      background: #fb7299;
      color: white;
      font-size: 12px;
      margin-left: 10px;
      padding: 0 15px
    }
  }
}
</style>