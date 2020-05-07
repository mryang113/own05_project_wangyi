<template>
  <div id="homeContainer">
    <!-- 头部 -->
    <div class="imgWrap">
      <img src="./images/header.png" alt />
    </div>
    <div class="header">
      <img class="logo" src="./images/logo.png" alt />
      <div class="search">
        <!-- <i class="iconfont icon-sousuo"></i> -->
        <div class="searchInput">
          <span>搜索商品</span>
        </div>
      </div>
      <div class="btn">登录</div>
    </div>

    <!-- nav滑屏-->
    <div class="nav" ref="navContainer">
      <ul class="navUl">
        <li class="active">推荐</li>
        <li>居家生活</li>
        <li>服饰鞋包</li>
        <li>美食酒水</li>
        <li>个人清洁</li>
        <li>母婴用品</li>
        <li>运动旅行</li>
        <li>数码加点</li>
        <li>严选全球</li>
        <li>美好生活</li>
        <li>数字时代</li>
      </ul>
    </div>

    <!-- 内容区 -->
    <div>
      <!-- Recommend 组件-->
      <v-recommend></v-recommend>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Swiper from 'swiper'
import Recommend from "../../components/Recommend/Recommend";
export default {
  name: "Home",
  components: {
    "v-recommend": Recommend
  },
  methods: {
    renderNavList() {
      this.$nextTick(() => {
        new BScroll(this.$refs.navContainer,{scrollX:true});
      })
    },
    renderSwiper(){
      this.$nextTick(() => {
        new Swiper ('.swiper-container', {
          // direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          
          // 如果需要分页器
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }
  },
  mounted() {
    this.renderNavList();
    this.renderSwiper();
  }
};
</script>

<style lang="stylus" scoped >
@import '../../common/stylus/mixin'
#homeContainer
  width 100%
  height 100%
  overflow hidden
  .imgWrap
    width 100%
    height 104px
    background #f99
    img
      display inline-block
      width 100%
      height 100%
  .header
    position relative
    display flex
    flex-direction row
    flex-wrap nowrap
    align-items center
    width 100%
    height 88px
    padding 10px
    box-sizing border-box
    // background #9cc
    // border 1px solid red
    // one-px(red)
    .logo
      display inline-block
      width 138px
      height 40px
  .search
    width 442px
    height 56px
    flex 1
    margin 0 20px
    padding 8px 30px
    box-sizing border-box
    background #ededed
    border-radius 10px
    // border 1px solid red
    // one-px(red)
    .searchInput
      width 320px
      height 42px
      margin 0 30px 0 60px
      span
        display inline-block
        width 100%
        font-size 28px
        line-height 40px
        color #666
  .btn
    width 74px
    height 40px
    line-height 32px
    padding 2px
    text-align center
    box-sizing border-box
    border 2px solid #DD1A21
    border-radius 8px
    color #DD1A21
    font-size 24px
    background #fff
  .nav
    position relative
    width 100%
    height 60px
    overflow hidden
    .navUl
      position absolute
      left 0
      top 0
      display flex
      align-items center
      height 100%
      flex-flow row nowrap
      white-space nowrap
      // border 1px solid #333
      li
        height 60px
        line-height 60px
        padding 0 16px
        margin 0 10px
        font-size 28px
        color #333
        &.active
          border-bottom 1px solid red
.text0000000000000000
  zoom 1
</style>