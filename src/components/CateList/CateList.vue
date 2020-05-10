<template>
  <div id="cateListContainer">
    <!-- 轮播图 -->
    <div class="swiper-container" v-if="cateObj">
      <div class="swiper-wrapper">
        <div
          class="swiper-slide"
          v-for="(item, index) in cateObj.category.bannerUrlList"
          :key="index"
        >
          <img :src="item" alt />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>

    <!-- 中间标题-->
    <div class="middleTitle" v-if="cateObj">
      <div class="m-t">{{cateObj.category.name}}</div>
      <div class="m-b">{{cateObj.category.frontDesc}}</div>
    </div>

    <!-- cateList 列表展示区-->
    <div class="listContainer">
      <ul class="listWrap" v-if="cateObj">
        <li class="listItem" v-for="(item,index) in cateObj.itemList" :key="item.id">
          <img :src="item.listPicUrl" alt />
          <div class="itemDesct">{{item.simpleDesc}}</div>
          <div class="itemName">{{item.name}}</div>
          <div class="itemPrice">
            <span class="span-orig">￥{{item.retailPrice}}</span>
            <span class="span-discount"></span>
          </div>
          <div class="newInfo" v-if="cateObj.itemTagList">
            <span>{{item.itemTagList[0].name}}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "CateList",
  // props:['navId'], // 简单的是可以是数组
  props: {
    navId: Number
  },
  data() {
    return {
      cateBannerList: [] //防止导航分类轮播数据
    };
  },
  methods: {
    async indexCateList() {
      let cateBannerListData = await this.$http.shop.getCateListBanner();
      // console.log(cateBannerListData);
      this.cateBannerList = cateBannerListData;
      // console.log(this.navId);
    },
    renderSwiper() {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
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
    await this.indexCateList();

    this.renderSwiper(); // 滑屏用
  },
  computed: {
    cateObj() {
      return this.cateBannerList.find(
        item => item.category.parentId === this.navId
      );
    }
  }
};
</script>

<style lang="stylus" scoped>
#cateListContainer
  width 100%
  height 100%
  .swiper-container
    width 100%
    height 370px
    // display flex
    .swiper-wrapper
      width 100%
      height 100%
      img
        display inline-block
        width 100%
        height 100%
  .middleTitle
    width 100%
    height 120px
    text-align center
    .m-t
      height 40px
      font-size 32px
      margin 16px 0
      color #333
    .m-b
      height 32px
      font-size 24px
      color #999
  .listContainer
    width 100%
    padding 10px
    // border 1px solid red
    box-sizing border-box
    .listWrap
      width 100%
      display flex
      flex-wrap wrap
      justify-content space-between
      .listItem
        width 345px
        height 530px
        padding 0 10px 33px 10px
        img
          display block
          width 100%
          height 340px
        .itemDesct
          width 100%
          height 48px
          padding 5px 10px 0
          box-sizing border-box
          color #9f8a60
          background #f1ece2
        .itemName
          width 100%
          margin-top 15px
          height 78px
          color #333
          font-size 28px
          line-height 1.4
        .itemPrice
          width 100%
          margin-top 10px
          .span-orig
            font-size 32px
            color #dd1a21
.test00000000000000000000
  zoom 1
</style>