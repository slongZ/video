<template>
  <div class="home">
    <nav-bar></nav-bar>
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-tabs v-model="active" scrollspy sticky>
        <van-tab
          v-for="(item, index) in category"
          :key="index"
          :title="item.title"
        >
          <div class="detailparent">
            <div class="title">{{ item.title }}</div>
            <detail
              :detailitem="categoryitem"
              v-for="(categoryitem, categoryindex) in item.list"
              :key="categoryindex"
              class="detailitem"
            ></detail>
          </div>
        </van-tab>
      </van-tabs>
    </van-list>
  </div>
</template>

<script>
import NavBar from "../components/common/NavBar.vue";
import Detail from "./Detail.vue";

export default {
  components: {
    NavBar,
    Detail,
  },
  data() {
    return {
      active: 0,
      loading: false,
      finished: false,
      category: [
        {
          title: "推荐",
          list: [
            { id: 0, img: "@/assets/img/0.webp", name: "随便起个名字" },
            { id: 1, img: "@/assets/img/1.webp", name: "随便起" },
            { id: 2, img: "@/assets/img/2.webp", name: "起个名字" },
            { id: 3, img: "@/assets/img/3.webp", name: "名字" },
            {
              id: 4,
              img: "@/assets/img/4.webp",
              name: "随便起个名字随便起个名字",
            },
            { id: 5, img: "@/assets/img/5.webp", name: "随便起个名" },
          ],
        },
        {
          title: "动画",
          list: [
            { id: 0, img: "@/assets/img/0.webp", name: "随便起个名字" },
            { id: 1, img: "@/assets/img/1.webp", name: "随便起" },
            { id: 2, img: "@/assets/img/2.webp", name: "起个名字" },
            { id: 3, img: "@/assets/img/3.webp", name: "名字" },
            {
              id: 4,
              img: "@/assets/img/4.webp",
              name: "随便起个名字随便起个名字",
            },
            { id: 5, img: "@/assets/img/5.webp", name: "随便起个名" },
          ],
        },
        {
          title: "番剧",
          list: [
            { id: 0, img: "@/assets/img/0.webp", name: "随便起个名字" },
            { id: 1, img: "@/assets/img/1.webp", name: "随便起" },
            { id: 2, img: "@/assets/img/2.webp", name: "起个名字" },
            { id: 3, img: "@/assets/img/3.webp", name: "名字" },
            {
              id: 4,
              img: "@/assets/img/4.webp",
              name: "随便起个名字随便起个名字",
            },
            { id: 5, img: "@/assets/img/5.webp", name: "随便起个名" },
          ],
        },
        {
          title: "国创",
          list: [
            { id: 0, img: "@/assets/img/0.webp", name: "随便起个名字" },
            { id: 1, img: "@/assets/img/1.webp", name: "随便起" },
            { id: 2, img: "@/assets/img/2.webp", name: "起个名字" },
            { id: 3, img: "@/assets/img/3.webp", name: "名字" },
            {
              id: 4,
              img: "@/assets/img/4.webp",
              name: "随便起个名字随便起个名字",
            },
            { id: 5, img: "@/assets/img/5.webp", name: "随便起个名" },
          ],
        },
        {
          title: "音乐",
          list: [
            { id: 0, img: "@/assets/img/0.webp", name: "随便起个名字" },
            { id: 1, img: "@/assets/img/1.webp", name: "随便起" },
            { id: 2, img: "@/assets/img/2.webp", name: "起个名字" },
            { id: 3, img: "@/assets/img/3.webp", name: "名字" },
            {
              id: 4,
              img: "@/assets/img/4.webp",
              name: "随便起个名字随便起个名字",
            },
            { id: 5, img: "@/assets/img/5.webp", name: "随便起个名" },
          ],
        },
        {
          title: "舞蹈",
          list: [
            { id: 0, img: "@/assets/img/0.webp", name: "随便起个名字" },
            { id: 1, img: "@/assets/img/1.webp", name: "随便起" },
            { id: 2, img: "@/assets/img/2.webp", name: "起个名字" },
            { id: 3, img: "@/assets/img/3.webp", name: "名字" },
            {
              id: 4,
              img: "@/assets/img/4.webp",
              name: "随便起个名字随便起个名字",
            },
            { id: 5, img: "@/assets/img/5.webp", name: "随便起个名" },
          ],
        },
        {
          title: "游戏",
          list: [
            { id: 0, img: "@/assets/img/0.webp", name: "随便起个名字" },
            { id: 1, img: "@/assets/img/1.webp", name: "随便起" },
            { id: 2, img: "@/assets/img/2.webp", name: "起个名字" },
            { id: 3, img: "@/assets/img/3.webp", name: "名字" },
            {
              id: 4,
              img: "@/assets/img/4.webp",
              name: "随便起个名字随便起个名字",
            },
            { id: 5, img: "@/assets/img/5.webp", name: "随便起个名" },
          ],
        },
        {
          title: "科技",
          list: [
            { id: 0, img: "@/assets/img/0.webp", name: "随便起个名字" },
            { id: 1, img: "@/assets/img/1.webp", name: "随便起" },
            { id: 2, img: "@/assets/img/2.webp", name: "起个名字" },
            { id: 3, img: "@/assets/img/3.webp", name: "名字" },
            {
              id: 4,
              img: "@/assets/img/4.webp",
              name: "随便起个名字随便起个名字",
            },
            { id: 5, img: "@/assets/img/5.webp", name: "随便起个名" },
          ],
        },
        {
          title: "数码",
          list: [
            { id: 0, img: "@/assets/img/0.webp", name: "随便起个名字" },
            { id: 1, img: "@/assets/img/1.webp", name: "随便起" },
            { id: 2, img: "@/assets/img/2.webp", name: "起个名字" },
            { id: 3, img: "@/assets/img/3.webp", name: "名字" },
            {
              id: 4,
              img: "@/assets/img/4.webp",
              name: "随便起个名字随便起个名字",
            },
            { id: 5, img: "@/assets/img/5.webp", name: "随便起个名" },
          ],
        },
      ],
    };
  },
  methods: {
    async selectCategory() {
      // 获取导航数据
      // const res = await this.$http.get('/category')
      // this.category = changeCategory(res.data);
    },
    changeCategory(data) {
      const category = data.map((item) => {
        item.list = [];
        item.page = 0;
        item.finished = false;
        item.loading = false;
        item.pagesize = 10;
        return item;
      });
      this.category = category;
    },
    async selectArticle() {
      const categoryitem = this.categoryItem();
      const res = await this.$http.get("/detail/" + "cattegory_id", {
        params: {
          page: categoryitem.page,
          pagesize: categoryitem.pagesize,
        },
      });
      categoryitem.list.push(...res.data);
      categoryitem.loading = false;
      if (res.data.length < categoryitem.pagesize) {
        categoryitem.finished = true;
      }
    },
    categoryItem() {
      const categoryitem = this.category[this.active];
      return categoryitem;
    },
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        this.finished = true;
      }, 1000);
    },
  },
  watch: {
    active() {
      this.categoryItem();
    },
  },
  created() {
    // this.selectCategory()
  },
};
</script>

<style lang="less">
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
</style>