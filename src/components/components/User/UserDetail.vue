<template>
  <div class="user-detail">
    <div class="user-top">
      <div class="user_img">
        <img src="@/assets/default_img.jpg" alt="" />
      </div>
      <div class="user-text">
        <div class="user-info">
          <div>
            <div>0</div>
            <div>粉丝</div>
          </div>
          <span>|</span>
          <div>
            <div>0</div>
            <div>关注</div>
          </div>
          <span>|</span>
          <div>
            <div>0</div>
            <div>获赞</div>
          </div>
        </div>
        <div class="user-edit" @click="$router.push('/edit')">编辑资料</div>
      </div>
    </div>
    <div class="user-bottom">
      <h3>小风</h3>
      <div class="user-sign">这个人很神秘，什么都没有写</div>
      <div class="user-list">
        <div>动态</div>
        <div>视频</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.user-detail {
  background-color: white;
  .user-top {
    padding-left: 10px;
    display: flex;
    img {
      margin: -10px 20px 10px 10px;
      height: 85px;
      width: 85px;
      border-radius: 50%;
    }
    .user-text {
      flex: 1;
      .user-info {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        > div {
          flex: 1;
          text-align: center;
          div:nth-child(2) {
            color: gray;
          }
        }
        span {
          color: gainsboro;
        }
      }
      .user-edit {
        margin: 10px;
        padding: 3px 20px;
        border: 1px solid dodgerblue;
        border-radius: 5px;
        text-align: center;
        color: dodgerblue;
      }
    }
  }
  .user-bottom {
    padding-left: 10px;
    h3 {
      margin: 5px;
    }
    .user-sign {
      padding: 5px;
      font-size: 0.5em;
      color: gray;
    }
    .user-list {
      display: flex;
      div {
        padding: 10px;
      }
    }
  }
}
</style>