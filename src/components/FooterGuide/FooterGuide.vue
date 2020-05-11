<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" @click="goto(`/Home`)" :class="{on: $route.path === `/Home`}">
      <span class="item_icon">
        <i class="iconfont icon-zhuye"></i>
      </span>
      <span class="item_text">首页</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Classify`)" :class="{on: $route.path === `/Classify`}">
      <span class="item_icon">
        <i class="iconfont icon-Householdappliances"></i>
      </span>
      <span class="item_text">分类</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Worthy`)" :class="{on: $route.path === `/Worthy`}">
      <span class="item_icon">
        <i class="iconfont icon-inquiry-template"></i>
      </span>
      <span class="item_text">值得买</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Cart`)" :class="{on: $route.path === `/Cart`}">
      <span class="item_icon">
        <i class="iconfont icon-searchcart"></i>
      </span>
      <span class="item_text">购物车</span>
    </a>
    <a href="javascript:;" class="guide_item" @click="goto(`/Personal`)" :class="{on: $route.path === `/Personal`}">
      <span class="item_icon">
        <i class="iconfont icon-account"></i>
      </span>
      <span class="item_text">个人</span>
    </a>
  </footer>
</template>

<script>
export default {
  name: "FooterGuide",
  methods: {
    goto(path){
      //編程式导航 这里切记不是$route, 在app里用的是$route这是vue开发者工具里的
      this.$router.replace(path)
    }
  },
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.footer_guide
  position fixed
  z-index 100
  left 0
  right 0
  bottom 0
  background-color #fff
  width 100%
  height 97px
  border-top: 1px solid #d9d9d9
  display flex
  padding 8px 0
  box-sizing border-box
  .guide_item
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    justify-content space-between
    margin 5px
    color #999999
    &.on
      color #dd1a21 
    .item_icon
      width 40px
      height 40px
      margin-bottom 2px
      i
        display inline-block
        width 40px
        height 40px
        font-size 42px
    .item_icon:nth-child(1)>i.icon-zhuye
      font-size 32px 
    .item_text
      font-size 24px
      color #666666
    &.on>.item_text
      color #dd1a21

</style>
