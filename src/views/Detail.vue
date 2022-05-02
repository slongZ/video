<template>
  <div class="detail" @click="$router.push('/article')">
    <div class="imgparent">
      <img src="@/assets/img/0.webp" alt="" />
      <span class="video icon-play2"> 1223</span>
      <span class="comment icon-file-text"> 66</span>
    </div>
    <p>{{ detailitem.name }}</p>
  </div>
</template>

<script>
export default {
  props: ["detailitem"],
};
</script>

<style lang="less">
img {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
p {
  margin: 0;
  padding: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.imgparent {
  position: relative;
  color: white;
  span{
    background-color:transparent;
  }
  .video {
    padding: 4px;
    position: absolute;
    left: 0;
    bottom: 0;
    font-size: 0.8em;
  }
  .comment {
    padding: 4px;
    position: absolute;
    right: 0;
    bottom: 0;
    font-size: 0.8em;
  }
}
</style>