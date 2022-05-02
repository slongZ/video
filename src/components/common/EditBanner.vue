<template>
  <div @click="bannerClick">
    <div class="edit-banner">
      <span>{{left}}</span>
      <span>
        <slot name="right"></slot>
        {{right}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['left','right'],
  methods:{
    bannerClick(){
      this.$emit('bannerClick')
    }
  }
};
</script>

<style>
.edit-banner {
  background-color: white;
  padding: 15px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>