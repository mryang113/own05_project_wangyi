<template>
  <div id="classifyContainer">
    <!-- 头部图片-->
    <div class="imgWrap">
      <img src="./images/header.png" alt />
    </div>
    <!-- 搜索框-->
    <div class="searchWrap">
      <div class="search">
        <i class="iconfont icon-sousuo"></i>
        <span>搜索商品,共26556款好物</span>
      </div>
    </div>

    <!-- 分类-->
    <div class="classifyContent">
      <div class="contentLeft">
        <div class="listWrap" ref="slideContainer">
          <ul class="list-ul" >
            <li class="item" 
              v-for="(item,index) in cateLeftNavData.slice(4,-1)" 
              :key="index"
              :class="{active: navId === item.id}"
              @click="changeNavindex(item.id)"
            >
              {{item.name}}
            </li>
            <li class="item" >推荐专区</li>
            <li class="item" >宅家防护</li>
            <li class="item" >爆品专区</li>
            <li class="item" >新品专区</li>
          </ul>
        </div>
      </div>
      <div class="contentRight">
        <div class="rightWrap" ref="rightListScroll">
          <div class="listContent" v-if="cateObj">
            <div class="banner">
              <img :src="cateObj.imgUrl" alt="">
            </div>
            <ul class="list-ul">
              <li class="item" v-for="(item,index) in cateObj.subCateList" :key="index">
                <img :src="item.wapBannerUrl" alt="">
                <div class="text">{{item.name}}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";
  export default {
    name: "Classify",
    data() {
      return {
        cateLeftNavData: [], //左侧导航数据
        navId: 0, 
        cateRightList: [], //右侧导航数据
      };
    },
    methods: {
      changeNavindex(navId){
        // console.log(navId,'---');
        this.navId = navId
      },
      async getCateRightList(){
        let cateRightListData = await this.$http.shop.getCateRightList();
        this.cateRightList = cateRightListData
      },
      async getCateLeftNav() {
        let getCateLeftNavData = await this.$http.shop.getCateLeftNav();
        // console.log(getCateLeftNavData.categoryL1List,'---');
        this.cateLeftNavData = getCateLeftNavData.categoryL1List;
        this.navId = getCateLeftNavData.categoryL1List[4].id
      },
      renderLeftNav(){
        this.$nextTick(() => {
          new BScroll(this.$refs.slideContainer,{click: true });
        });
      },
      renderRightListScroll(){
        this.$nextTick(() => {
          new BScroll(this.$refs.rightListScroll,{click: true });
        })
      }
    },
    async mounted() {
      await this.getCateLeftNav();
      await this.getCateRightList();
      this.renderLeftNav();
      this.renderRightListScroll()
    },
    computed: {
      cateObj(){
        return this.cateRightList.find(item => item.id === this.navId)
      }
    },
  };
</script>

<style lang="stylus" scoped>
#classifyContainer
  width 100%
  height 100%
  overflow hidden
  .imgWrap
    width 100%
    height 104px
    img
      display block
      width 100%
      height 100%
  .searchWrap
    width 100%
    height 88px
    padding 0 30px
    border 1px solid #eee
    box-sizing border-box
    .search
      width 100%
      height 88px
      line-height 88px
      text-align center
      color #666666
      font-size 28px
      i
        width 28px
        height 28px
        display inline-block
        margin-right 10px
        font-size 30px
  .classifyContent
    width 100%
    height calc(100vh - 288px)
    display flex
    .contentLeft
      width 162px
      height 100%
      border-right 1px solid #eeeeee
      box-sizing border-box
      .listWrap
        width 162px
        height 100%
        overflow hidden
        .list-ul
          width 162px
          padding 40px 0
          .item
            position relative
            width 162px
            height 50px
            margin-bottom 50px
            font-size 28px
            color #333
            line-height 50px
            text-align center
            // background url("./images/header.png")
            // background-size cover
            &.active
              color #ab2b2b
            &.active:before
              content ''
              display inline-block
              position absolute
              left 0
              top 0
              height 50px
              width 5px
              background #ab2b2b
    .contentRight
      width 588px
      height 100%
      // background #99c
      .rightWrap
        width 588px
        height 100%
        overflow hidden
        .listContent
          width 588px
          padding 30px 30px 21px
          box-sizing border-box
          .banner
            width 528px
            height 192px
            img
              width 100%
              height 100%
              display block
          .list-ul
            width 100%
            display flex
            justify-content space-between
            flex-wrap wrap
            .item
              width 144px
              height 216px
              img 
                width 100%
                height 144px
                display block
              .text
                width 100%
                height 72px
                line-height 50px
                font-size 24px 
                color #333
                text-align center




.test00000000000000
  zoom 1
</style>