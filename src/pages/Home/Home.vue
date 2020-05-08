<template>
  <div id="homeContainer">
    <!-- 头部 -->
    <div class="imgWrap">
      <img src="./images/header.png" alt />
    </div>
    <div class="header">
      <img class="logo" src="./images/logo.png" alt />
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <div class="searchInput">
          <span>搜索商品</span>
        </div>
      </div>
      <div class="btn">登录</div>
    </div>

    <!-- nav滑屏-->
    <div class="navWrap">
      <div class="nav" ref="navContainer">
        <ul class="navUl">
          <li class="active">推荐</li>
          <li v-for="(navItem,index) in navListData" :key="index">
            {{navItem.name}}
          </li>
        </ul>
      </div>
      <!-- nav滑屏之 字体图标-->
      <div class="more">
        <span class="iconfont icon-arrow-down"></span>
      </div>
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
import {mapActions,mapState} from 'vuex'
import {GETNAVLIST} from '@/store/mutation_types'
import Recommend from "../../components/Recommend/Recommend";
export default {
  name: "Home",
  components: {
    "v-recommend": Recommend
  },
  computed: {
    ...mapState({
      navListData: state => state.shop.navListData
    })
  },
  methods: {
    ...mapActions([GETNAVLIST]),
    renderNavList() {
      this.$nextTick(() => {
        new BScroll(this.$refs.navContainer, { scrollX: true, click: true });
      });
    }
  },
  async mounted() {
    await this[GETNAVLIST](), //调用方法里的 ...mapActions([GETNAVLIST])
    this.renderNavList();
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
      position relative
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
      i
        position absolute
        top 16px
        left 30px
        font-size 30px
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
  .navWrap
    position relative
    width 100%
    height 60px
    .nav
      position relative
      width 620px
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
          position relative
          height 60px
          line-height 60px
          padding 0 16px
          margin 0 10px
          font-size 28px
          color #333
          &.active:after
            content ''
            height 1px
            width 100%
            position absolute
            bottom 1px
            left 0
            background #BB2C08
    .more
      position absolute
      right 0
      top 0
      width 120px
      height 60px
      line-height 60px
      text-align center
      span
        font-size 52px
        color #999
.text0000000000000000
  zoom 1
</style>