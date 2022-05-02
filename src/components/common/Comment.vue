<template>
  <div class="commentParent">
    <div v-for="(item, index) in commentList" :key="index">
      <div class="commentItem">
        <div class="userImg">
          <img src="@/assets/default_img.jpg" alt="" />
        </div>
        <div class="commentContent">
          <p>
            <span>名字</span>
            <span>4-27</span>
          </p>
          <div>评论内容评论内容评论内容评论内容评论内容</div>
        </div>
      </div>
      <div>
        <comment-item  v-for="(item, index) in item.child" :key="index"></comment-item>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from "./CommentItem.vue";
export default {
  components: { CommentItem },
  data() {
    return {
      commentList: [
        {
          comment_id: 1,
          user_id: 1,
          comment_date: "4-23",
          comment_content: "这是一条评论",
          parent_id: null,
          child: [
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
          ],
        },
        {
          comment_id: 1,
          user_id: 1,
          comment_date: "4-23",
          comment_content: "这是一条评论",
          parent_id: null,
          child: [
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
          ],
        },
        {
          comment_id: 1,
          user_id: 1,
          comment_date: "4-23",
          comment_content: "这是一条评论",
          parent_id: null,
          child: [
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
          ],
        },
        {
          comment_id: 1,
          user_id: 1,
          comment_date: "4-23",
          comment_content: "这是一条评论",
          parent_id: null,
          child: [
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
            {
              comment_id: 2,
              user_id: 1,
              comment_date: "4-23",
              comment_content: "这是一条二级评论",
              parent_id: 1,
            },
          ],
        },
      ],
    };
  },
  methods: {
    async commentData() {
      // 获取评论数据
    },
  },
  created() {
    this.commentData();
  },
};
</script>

<style lang="less">
.commentParent {
  background-color: white;
  padding: 10px;
  .commentItem {
    padding: 10px 0;
    display: flex;
    border-bottom: 1px solid #e7e7e7;
    .userImg {
      img {
        width: 35px;
        height: 35px;
      }
    }
    .commentContent {
      flex: 1;
      p {
        font-size: 13px;
        color: #555;
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
      }
      div {
        font-size: 13px;
      }
    }
  }
}
</style>