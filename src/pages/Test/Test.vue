<template>
  <div id="app">
    <div class="box">box000</div>
    <div class="box1">box111</div>
    <div class="box2">box22222</div>
  </div>
</template>

<script>
export default {
  name: "Cart"
};
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin'
#app
  width 100%
  height 100%
  padding 20px 10px
  box-sizing border-box
  .box
    width 600px
    height 200px
    // border 1px solid orange
    one-px(red)
    padding 10px
    box-sizing border-box
    margin-bottom 20px
  .box1
    width 100%
    height 200px
    background #9cc
  .box2
    width 100%
    height calc(100vh - 667px)
    background #f0f
  .test000000000000
    zoom 1
</style>