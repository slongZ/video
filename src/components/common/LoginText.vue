<template>
  <div class="login-text">
    <van-field
      :label="label"
      :placeholder="placeholder"
      :type="type"
      v-model="value"
  
    />
  </div>
</template>

<script>
export default {
  props: ["label", "placeholder", "type", "rule"],
  data() {
    return {
      value: ''
    };
  },
  methods:{
    handlerulg(){
      const ruleReg =  new RegExp(this.rule);
      if(ruleReg.test(this.value)){
        this.$emit('inputChange',this.value)
      }
    }
  },
  watch:{
    value(){
      this.handlerulg()
    }
  }
};
</script>

<style scoped>
</style>