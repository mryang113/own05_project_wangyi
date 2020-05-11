<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide></FooterGuide>
  </div>
</template>

<script>
  import FooterGuide from '@/components/FooterGuide/FooterGuide'
  export default {
    name: 'App',
    components: {
      FooterGuide, //Es6简写形式
    }
  }
</script>

<style lang="stylus" scoped >
// @import url('./static/iconfont/iconfont');
  #app 
    width 100%
    height 100%
    // overflow hidden
    // background #f99
</style>
