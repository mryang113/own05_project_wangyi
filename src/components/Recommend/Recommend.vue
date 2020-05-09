<template>
  <div id="recommendContainer">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="./images/01-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/02-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/03-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/04-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/05-img.webp" alt />
        </div>
        <div class="swiper-slide">
          <img src="./images/06-img.webp" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 字体图标标题-->
    <div class="iconText">
      <div class="item" v-for="(item,index) in homeRecommendData.policyDescList" :key="index">
        <img :src="item.icon" alt />
        <span>{{item.desc}}</span>
      </div>
    </div>

    <!-- kingkongList 10个图标区域 -->
    <div class="kingkongList" v-if="homeRecommendData.kingKongModule">
      <div
        class="kingkongItem"
        v-for="(item,index) in homeRecommendData.kingKongModule.kingKongList"
        :key="index"
      >
        <img :src="item.picUrl" mode />
        <span>{{item.text}}</span>
      </div>
    </div>

    <!-- banner -->
    <div class="promoteImg">
      <img src="./images/promote.gif" alt />
    </div>
    <!-- giftBag新人专享 -->
    <div class="giftBag">
      <div class="giftTop">
        <span>一 新人专享礼 一</span>
      </div>
      <div class="giftContent">
        <div class="giftLeft">
          <div class="imgText">新人专享礼包</div>
          <div class="imgWrap">
            <img src="./images/giftBag.png" alt />
          </div>
        </div>
        <div class="giftRight">
          <div class="right-t" v-if="homeRecommendData.indexActivityModule">
            <div class="right-t-1">{{homeRecommendData.indexActivityModule[0].title}}</div>
            <div class="right-t-2">{{homeRecommendData.indexActivityModule[0].subTitle}}</div>
            <div class="discount">
              <div class="line1">{{homeRecommendData.indexActivityModule[0].activityPrice}}</div>
              <div class="line2">{{homeRecommendData.indexActivityModule[0].originPrice}}</div>
            </div>
            <div class="discountImg">
              <img src="./images/soap.webp" alt />
            </div>
          </div>
          <div class="right-b" v-if="homeRecommendData.indexActivityModule">
            <div class="right-t-1">{{homeRecommendData.indexActivityModule[1].title}}</div>
            <div class="right-t-2">{{homeRecommendData.indexActivityModule[1].tag}}</div>
            <div class="discount">
              <div class="line1">¥49</div>
              <div class="line2">¥0.0</div>
            </div>
            <div class="discountImg">
              <img src="./images/wash.webp" alt />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 类目热销榜 -->
    <div class="categoryHot" v-if="homeRecommendData.categoryHotSellModule">
      <div class="categoryHotTitle">{{homeRecommendData.categoryHotSellModule.title}}</div>
      <div class="categoryHotContent">
        <div class="content-t">
          <div
            class="content-t-item"
            v-for="(item,index) in homeRecommendData.categoryHotSellModule.categoryList"
            v-if="(index<2)"
            :key="index"
          >
            <div class="itemTitle">{{item.categoryName}}</div>
            <div class="itemWrap">
              <img :src="item.showPicUrl" alt />
            </div>
          </div>
        </div>
        <div class="content-b">
          <div
            class="content-b-item"
            v-for="(item,index) in homeRecommendData.categoryHotSellModule.categoryList.slice(2,`${length}`)"
            :key="index"
          >
            <div class="itemTitle">{{item.categoryName}}</div>
            <img :src="item.showPicUrl" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Recommend",
  data() {
    return {
      homeRecommendData: {}, //主页推荐数据
      length:0 //homeRecommendData的长度
    };
  },
  methods: {
    //获得首页商品信息
    async getHomeRecommend() {
      // 这个也要去http里的shop里的config.js去配置请求信息
      let homeRecommendData = await this.$http.shop.getHomeRecommend();
      // console.log(HomeRecommendData);
      this.homeRecommendData = homeRecommendData;
      this.length = homeRecommendData.categoryHotSellModule.categoryList.length +1;
      console.log(this.length);
    },
    renderSwiper() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          // direction: 'vertical', // 垂直切换选项
          loop: true, // 循环模式选项
          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination"
          }
        });
      });
    }
  },
  async mounted() {
    await this.getHomeRecommend();
    this.renderSwiper();
  }
};
</script>

<style lang="stylus" scoped>
// @import url('../../static/font_i4f3h1zfru/iconfont');
#recommendContainer
  .swiper-container
    width 100%
    height 370px
    .swiper-wrapper
      width 100%
      height 370px
      .swiper-slide
        width 100%
        height 370px
        img
          display inline-block
          width 100%
          height 100%
  .iconText
    width 100%
    height 72px
    padding 10px 30px
    box-sizing border-box
    display flex
    justify-content space-between
    color #333
    .item
      width 220px
      height 60px
      display flex
      align-items center
      // background #9cc
      // i // 模拟用的
      // width 30px
      // height 30px
      // background-image url('http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png')
      // background-size cover
      // margin-right 8px
      img
        display inline-block
        width 30px
        height 30px
        margin-right 8px
      span
        font-size 12px
        white-space nowrap
  .kingkongList
    display flex
    flex-wrap wrap
    margin 20px 0
    .kingkongItem
      width 20%
      display flex
      flex-direction column
      align-items center
      img
        width 110px
        height 110px
      span
        font-size 24px
        line-height 50px
  .promoteImg
    width 100%
    height 240px
    margin-bottom 20px
    img
      width 100%
      height 100%
      display inline-block
  .giftBag
    width 100%
    height 560px
    // border 1px solid red
    box-sizing border-box
    .giftTop
      width 100%
      height 90px
      line-height 90px
      text-align center
      span
        font-size 32px
        color #333
    .giftContent
      width 720px
      height 440px
      padding-left 30px
      box-sizing border-box
      // background #9cc
      display flex
      justify-content space-between
      .giftLeft
        width 49.8%
        height 100%
        background #f9e9cf
        border-radius 6px
        .imgText
          width 100%
          height 108px
          line-height 78px
          font-size 32px
          color #333
          padding 30px 0 0 30px
          box-sizing border-box
        .imgWrap
          width 344px
          height 332px
          display table-cell
          vertical-align middle
          text-align center
          img
            width 258px
            height 257px
      .giftRight
        width 49.7%
        height 440px
        .right-t
          position relative
          width 100%
          height 217px
          padding 20px 0 0 30px
          box-sizing border-box
          margin-bottom 3px
          background #FBE2D3
          border-radius 6px
          .right-t-1
            height 48px
            font-size 32px
            color #333
          .right-t-2
            height 36px
            color #7f7f7f
          .discount
            position absolute
            top 20px
            right 30px
            z-index 2
            width 80px
            height 85px
            color #fff
            background #F59524
            border-radius 50%
            padding 10px
            box-sizing border-box
            .line1
              width 100%
              height 40%
              text-align center
              margin-bottom 5px
            .line2
              width 100%
              height 40%
              text-align center
              text-decoration line-through
          .discountImg
            position absolute
            top 0
            right 0
            width 200px
            height 200px
            img
              width 100%
              height 100%
        .right-b
          position relative
          width 100%
          height 220px
          padding 20px 0 0 30px
          box-sizing border-box
          background #FFECC2
          border-radius 6px
          .right-t-1
            font-size 32px
            color #333
            height 48px
          .right-t-2
            display inline-block
            height 36px
            line-height 32px
            padding 0 10px
            border-radius 6px
            font-size 20px
            color #fff
            background #cbb693
          .discount
            position absolute
            top 20px
            right 30px
            z-index 2
            width 80px
            height 85px
            color #fff
            background #F59524
            border-radius 50%
            padding 10px
            box-sizing border-box
            .line1
              width 100%
              height 40%
              text-align center
              margin-bottom 5px
            .line2
              width 100%
              height 40%
              text-align center
              text-decoration line-through
          .discountImg
            position absolute
            top 0
            right 0
            width 200px
            height 200px
            img
              width 100%
              height 100%
  .categoryHot
    width 100%
    height 710px
    padding 0 20px 20px 30px
    // border 1px solid red
    box-sizing border-box
    .categoryHotTitle
      width 100%
      height 100px
      line-height 100px
      padding 0 30px
      box-sizing border-box
      font-size 32px
      color #333
    .categoryHotContent
      width 100%
      height 610px
      // border 1px solid blue
      box-sizing border-box
      .content-t
        width 100%
        height 200px
        margin-bottom 10px
        display flex
        justify-content space-between
        // background #f9f3e4
        .content-t-item
          width 344px
          height 200px
          background #ebeff6
          border-radius 6px
          display flex
          justify-content space-between
          align-items center
          // border 1px solid red
          padding 0 0 0 20px
          box-sizing border-box
          .itemTitle
            position relative
            display inline-block
            font-size 28px
            color #333
            &:after
              content ''
              display block
              position absolute
              bottom -20px
              left 0
              height 3px
              width 50px
              background black
          .itemWrap
            width 200px
            height 200px
            img
              width 100%
              background-size cover
        .content-t-item:nth-child(1)
          background #F9F3E4
      .content-b
        width 100%
        height 390px
        display flex
        flex-direction row
        flex-wrap wrap
        // border 1px solid blue
        // box-sizing border-box
        margin-right 10px
        .content-b-item
          width 167px
          height 185px
          background #f5f5f5
          margin 0 10px 10px 0
          border-radius 6px
          display flex
          flex-direction column
          justify-content space-around
          align-items center
          .itemTitle
            color #333
            font-size 24px
          img
            width 120px
            height 120px
        .content-b-item:nth-child(4),.content-b-item:nth-child(8)
          margin-right 0
  .test222222222222222222222222
    zoom 1
</style>