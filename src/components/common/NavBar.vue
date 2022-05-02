<template>
  <div class="nav-bar">
    <div class="logo" @click="$router.push('/')">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <p>
        <van-icon name="search" />
        请输入内容
      </p>
    </div>
    <div @click="$router.push('/userinfo')">
      <img src="@/assets/default_img.jpg" alt="" />
      <p>下载APP</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.nav-bar {
  height: 45px;
  background-color: white;
  display: flex;
  .logo {
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 80%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
      background-color: #f4f4f4;
      width: 80%;
      border-radius: 10px;
      margin: 0;
      padding: 0px 5px ;
      line-height: 20px;
      font-size: 10px;
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      padding: 2px 7px;
      margin: 0 10px;
      background-color: dodgerblue;
      color: white;
      border-radius: 2px;
    }
  }
}
</style>