<template>
  <div class="article" v-if="model">
    <nav-bar></nav-bar>
    <div class="detail">
      <div class="video">
        <video controls src="@/assets/video/1.mp4"></video>
        <div class="detail-text">
          <div class="detail-title">
            <span>{{ model.name }}</span>
          </div>
          <div class="detail-info">
            <span>{{ model.date }}</span>
            <span>145.4万次播放</span>
          </div>
          <div class="detail-process">
            <p @click="collection" :class="{activeColor:collecctionActive}">
              <span class="icon-star-full"></span>
              <span>收藏</span>
            </p>
            <p>
              <span class="icon-box-add"></span>
              <span>下载</span>
            </p>
            <p>
              <span class="icon-redo2"></span>
              <span>分享</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="detailparent">
      <detail
        v-for="(item, index) in commendList"
        :key="index"
        :detailitem="item"
        class="detailitem"
      ></detail>
    </div>
    <comment-title></comment-title>
    <comment></comment>
  </div>
</template>

<script>
import Comment from '../components/common/Comment.vue';
import CommentTitle from '../components/common/CommentTitle.vue';
import NavBar from "../components/common/NavBar.vue";
import Detail from "./Detail.vue";
export default {
  components: {
    NavBar,
    Detail,
    CommentTitle,
    Comment,
  },
  data() {
    return {
      model: {
        name: "一个标题一个标题一个标题一个标题",
        date: "4-23",
      },
      commendList: [
        { name: "一个标题一个标题一个标题" },
        { name: "一个标题一个标题一个标题" },
        { name: "一个标题一个标题一个标题" },
        { name: "一个标题一个标题一个标题" },
        { name: "一个标题一个标题一个标题" },
        { name: "一个标题一个标题一个标题" },
      ],
      myuser:{},
      collecctionActive: false
    };
  },
  methods: {
    async articleitemData() {
      // 获取详情数据
      // const res = await this.$http.get('/article'+this.$route.param.id);
    },
    async commentData() {
      // 获取推荐文章数据
      // const res = await this.$http.get('/commend')
      // this.commendList = res.data
    },
    // 收藏
    async collection(){
      // 调用收藏接口
      this.collecctionActive=!this.collecctionActive
    },
    // 进入页面检查是否收藏
  },
  watch:{
    $route(){
      // 路径变化刷新数据
    }
  },
  // created(){
  //   this.articleitemData()
  //   this.commendData()
  // }
};
</script>

<style lang="less">
.detail {
  >.video {
    background-color: white;
    width: 100%;
    video {
      width: 100%;
    }
    .detail-text {
      padding: 15px 0 0 15px;
      .detail-info {
        font-size: 0.8em;
        color: gray;
        span {
          padding: 5px;
        }
      }
      .detail-process {
        display: flex;
        p {
          margin: 15px;
          display: flex;
          align-items: center;
          color: gray;
          span:nth-child(1) {
            font-size: 1.2em;
            padding-right: 5px;
          }
        }
        .activeColor{
          color: dodgerblue;
        }
      }
    }
  }
  .detailparent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background-color: white;
    margin: 2px 0;
    .title {
      padding: 15px;
      width: 100%;
      font-weight: bold;
      color: dodgerblue;
    }
    .detailitem {
      width: 45vw;
    }
  }
}
</style>