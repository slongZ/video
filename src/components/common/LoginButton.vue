<template>
  <div class="login-button" @click="registerClick">
    <div class="login-btn">{{btnText}}</div>
  </div>
</template>

<script>
export default {
  props:['btnText'],
  methods:{
    registerClick(){
      this.$emit('registerSubmit')
    }
  }
}
</script>

<style>
.login-button{
  padding-left: 16px;
  padding-right: 16px;
}
.login-btn{
  height: 45px;
  background-color: dodgerblue;
  color: white;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 22.5px;
}
</style>