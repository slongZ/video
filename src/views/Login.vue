<template>
  <div class="login">
    <login-top middleTop="登陆账号">
      <div
        slot="right"
        style="font-size: 13px"
        @click="$router.push('/register')"
      >
        注册
      </div>
    </login-top>
    <div class="login-content">
      <van-cell-group inset>
        <login-text
          label="账号"
          placeholder="请输入账号"
          rule="^.{6,16}$"
          @inputChange="(value) => (model.username = value)"
        ></login-text>
        <login-text
          label="密码"
          placeholder="请输入密码"
          type="password"
          rule="^.{6,16}$"
          @inputChange="(value) => (model.password = value)"
        ></login-text>
      </van-cell-group>
    </div>
    <login-button
      btnText="登陆"
      @registerSubmit="registerSubmit"
    ></login-button>
  </div>
</template>

<script>
import LoginTop from "../components/common/LoginTop.vue";
import LoginText from "../components/common/LoginText.vue";
import LoginButton from "../components/common/LoginButton.vue";
export default {
  data() {
    return {
      model: {
        username: "",
        password: "",
      },
    };
  },
  components: {
    LoginTop,
    LoginText,
    LoginButton,
  },
  methods: {
    async registerSubmit() {
            if (this.model.username && this.model.password) {
        // 接口不可用
        // const res = await this.$http.post('/login',this.model)
        // this.$msg.fail(res.data.msg)
        // localStorage.setItem('id',res.data.id);
        // localStorage.setItem('token',res.data.objtoken);
        setTimeout(() => {
          this.$router.push("/userinfo");
        }, 1000);
      } else {
        this.$msg.fail("格式不正确");
      }
    },
  },
};
</script>

<style scoped>
.login-content {
  padding-top: 16px;
  padding-bottom: 16px;
}
</style>