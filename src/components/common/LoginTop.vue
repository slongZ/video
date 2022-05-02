<template>
  <div class="login-top">
    <div></div>
    <div>{{middle}}</div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ['middleTop'],
  data(){
    return {
      middle: this.middleTop,
    }
  }
}
</script>

<style lang='less'>
.login-top{
  display:flex;
  height: 45px;
  background-color: white;
  div{
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.444vw;
  }
}

</style>