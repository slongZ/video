<template>
  <div class="user-info">
    <nav-bar></nav-bar>
    <img src="@/assets/bannerTop_new.png" alt="">
    <div class="user">
      <user-detail></user-detail>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/common/NavBar.vue";
import UserDetail from '@/components/components/User/UserDetail.vue';
export default {
  components: {
    NavBar,
    UserDetail,
  },
  data(){
    return {
      model:{}
    }
  },
  methods:{
    async userinfoData(){
      // 登陆信息
      // const res = await this.$http.ge('/user'+localStorage.getItem('id'));
      // this.model = res.data[0]
    }
  },
  created(){
    this.userinfoData()
  }
};
</script>

<style scoped lang="less">
img{
  width: 100%;
}
.user{
  position: relative;
  top: -80px
}
</style>