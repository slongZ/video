<template>
  <div class="edit">
    <div style="margin-bottom: 10px">
      <nav-bar></nav-bar>
    </div>

    <div class="uploadfile">
      <van-uploader
        preview-size="100vw"
        class="uploadimg"
        :after-read="afterRead"
      />
      <edit-banner left="头像" >
        <img :src="model.user_img" alt="" slot="right" v-if="model.user_img" />
        <img src="@/assets/default_img.jpg" alt="" slot="right" v-else />
      </edit-banner>
    </div>

    <edit-banner left="昵称"  @bannerClick="show = true">
      <a href="javascript:;" slot="right">{{model.name}}</a>
    </edit-banner>
    <edit-banner left="UID">
      <a href="javascript:;" slot="right">6156165165</a>
    </edit-banner>
    <edit-banner left="性别"  @bannerClick="gendershow=true">
      <a href="javascript:;" slot="right">{{model.gender}}</a>
    </edit-banner>
    <edit-banner left="个性签名" @bannerClick="textshow = true">
      <a href="javascript:;" slot="right">{{model.text}}</a>
    </edit-banner>
    <div class="back" @click="$router.push('/userinfo')">
      返回
    </div>
    <div class="back" @click="$router.push('/login')">
      登陆页面
    </div>
    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm='confirmClick'>
      <van-field v-model="content" autofocus />
    </van-dialog>
    <van-dialog v-model="textshow" title="个性签名" show-cancel-button @confirm='confirmClickText'>
      <van-field v-model="content" autofocus />
    </van-dialog>
    <van-action-sheet v-model="gendershow" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
import EditBanner from "../components/common/EditBanner.vue";
import NavBar from "../components/common/NavBar.vue";

export default {
  components: {
    NavBar,
    EditBanner,
  },
  data() {
    return {
      model: {
        user_img: "",
        name: '小风',
        gender: ''
      },
      show: false,
      text: '',
      textshow: false,
      content: '',
      gendershow: false,
      actions:[
        {name: '男'},
        {name: '女'}
      ]
    };
  },
  methods: {
    selectUser() {
      // const res = await this.$http.ge('/user'+localStorage.getItem('id'));
      // this.model = res.data[0]
    },
    async afterRead(file) {
      const fromdata = new FormData();
      fromdata.append("file", file.file);
      // const res = await this.$http.post('/upload', fromdata);
      // this.model.user_img  = res.data.url;
      // 暂时替代
      this.model.user_img = file.content;
    },
    // 数据提交后端
    // async userUpdate(){
    //   const res = await this.$http.post('/update'+ localStorage.getItem('id'));

    // },
    // 点击确认
    confirmClick(){
      this.model.name = this.content;
      // this.UserUpdate
      console.log('tijiap ')
      this.content =''
    },
    confirmClickText(){
      this.model.text = this.content;
      this.content=''
    },
    onSelect(data){
      this.model.gender = data.name;
      this.gendershow = false;
    }
  },
  created() {
    this.selectUser();
  },
};
</script>

<style lang="less">
.edit a {
  color: #333;
}
.edit img {
  height: 46px;
  width: 46px;
  border-radius: 50%;
}
.uploadfile {
  position: relative;
  overflow: hidden;
  .uploadimg {
    opacity: 0;
    position: absolute;
  }
}
.back{
  background-color: white;
  margin-top: 10px;
  padding: 15px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>