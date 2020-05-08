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
        <img :src="item.icon" alt="">
        <span>{{item.desc}}</span>
      </div>
    </div>
    
    <!-- kingkongList 10个图标区域 -->
		<div class="kingkongList" v-if="homeRecommendData.kingKongModule">
			<div class="kingkongItem" v-for="(item,index) in homeRecommendData.kingKongModule.kingKongList" :key='index'>
				<img :src="item.picUrl" mode="" />
				<span>{{item.text}}</span>
			</div>
		</div>


  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Recommend",
  data(){
    return{
      homeRecommendData:{},//主页推荐数据
    }
  },
  methods: {
    //获得首页商品信息
    async getHomeRecommend(){ // 这个也要去http里的shop里的config.js去配置请求信息
      let homeRecommendData = await this.$http.shop.getHomeRecommend()
      // console.log(HomeRecommendData);
      this.homeRecommendData = homeRecommendData
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
    await this.getHomeRecommend()
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
      //   width 30px
      //   height 30px
      //   background-image url('http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png')
      //   background-size cover
      //   margin-right 8px
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
        































  .test222222222222222222222222
    zoom 1
</style>