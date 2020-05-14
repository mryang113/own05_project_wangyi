<template>
  <div id="worthyContainer">
    <!-- 顶部图片 -->
    <div class="imgWrap">
      <img src="./images/header.png" alt="">
    </div>
    <!-- 头部导航板块 -->
    <div class="headerTitle">
      <div class="headerHome">
        <router-link :to="`/Home`">
          <i class="iconfont icon-zhuye"></i>
        </router-link>
      </div>
      <div class="titleText">值得买</div>
      <div class="headerIcon">
        <a href=";javascript">
          <i class="iconfont icon-Group-"></i>
        </a>
        <router-link :to="`/Cart`">
          <i class="iconfont icon-cart-full"></i>
        </router-link>
      </div>
    </div>

    <!-- swiperrWrap 轮播-->
    <div class="swiperWrap">
      <div class="s-titleWrap">
        <div class="s-title">
          <div class="logo"></div>
          <div class="text">严选好物 用心生活</div>
        </div>
      </div>
      <!-- 真正的轮播-->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(bannerArr,index) in bannerArrs" :key="index">
            <div class="itemWrap">
              <div class="item" v-for="(item,index) in bannerArr" :key="item.id">
                <img :src="item.picUrl" alt="">
                <div class="text">{{item.mainTitle}}</div>
                <div class="info">{{item.viceTitle}}</div>
              </div>
            </div>
          </div>

        </div>
        <!-- 分页器结构 -->
        <div class="swiper-pagination"></div>
      </div>

    </div>

    <!-- swiperrWrap 轮播-->
    <div class="mainContainer">
      <div class="container-water-fall">

        <waterfall :col='col' 
          
          :data="data"  
          @loadmore="loadmore"  
           @scroll="scroll" 
        >
          <template>
            <div class="cell-item" v-for="(item,index) in data" :key="index">
              <div class="item-body">
                
                <img 
                  :src="item.topics[0].newAppBanner?item.topics[0].newAppBanner:item.topics[0].picUrl" 
                  alt=""
                >
                <div class="item-desc">{{item.topics[0].title}}
                </div>
                <div class="item-footer">
                  <img :src="item.topics[0].avatar" alt="">
                  <div class="name">{{item.topics[0].nickname}}</div>
                  <div class="like" >
                      <i ></i>
                      <div class="like-total">{{Math.ceil(item.topics[0].readCount/1000)}}k</div>  
                  </div>
                </div>
              </div>
            </div>
          </template>
        </waterfall>
      </div>

    </div>

  </div>
</template>
<!-- <div class="pic" :style="{backgroundImage : `url(${item.topics[0].picUrl})` }">
    </div> -->

<script>
  import _ from 'lodash'
  import Swiper from 'swiper'
  // import {mapState,mapActions} from 'vuex'
  // import {GETWORTHYLISTFIRST} from '@/store/mutation_types'
  export default {
    name: 'Worthy',
    data(){
      return {
        worthyBanner:{}, //存放轮播数据
        // worthyList: [] //整合后的数组
        data:[], //存放瀑布流数据
        col:2,
        index: 0, 
      }
    },
    methods: {
      async getSwiperList(){
        let result = await this.$http.shop.getWorthyBanner()
        // console.log(result);
        this.worthyBanner = result.data
      },
      // ...mapActions([GETWORTHYLISTFIRST]), 
      renderSwiper(){
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            slidesPerView: 4,
            // slidesPerColumn : 2,
            // slidesPerColumnFill : 'row',
            // direction: 'vertical', // 垂直切换选项
            // loop: true, // 循环模式选项
            // 如果需要分页器
            pagination: {
              el: ".swiper-pagination"
            }
          });
        })
      },

      // worthyList(){
      //   let result = this.worthyListFirst.filter(item => item.topics)
      //   console.log(result,'++++');  //3-1 测试处理数据
      // }

      // // 这个是本地数据
      // async getListData(){
      //   let result = await this.$http.shop.getWorthyList()
      //   this.data = result.data.result
      //   // console.log(result);
      // },

      //这个是网易实时接口
      async getListData(){
        let result = await this.$http.shop.getWangyiList()
        this.data = result.data
        // console.log(result);
      },


      scroll(scrollData){
        // console.log(scrollData)
      },
      switchCol(col){
        this.col = col
        console.log(this.col)
      },
      async loadmore(){
        let index = ++this.index
        // console.log('-----',index);
        let newData = await this.$http.shop.getWangyiAutoList(
          {index}
          // {url= `/topic/v1/find/recAuto.json?page=${index}&size=5`}
        )
        // console.log(newData);
        this.data = this.data.concat(newData.data.result)
      }
        
    },
    async mounted(){
      await this.getSwiperList()

      // await this[GETWORTHYLISTFIRST]() //调用方法里的 ...mapActions([GETWORTHYLISTFIRST])

      this.renderSwiper();
      // this.worthyList(); //3-1 测试处理数据
      await this.getListData()
    },
    computed: {
      bannerArrs(){
        return _.chunk(this.worthyBanner.navList,2)
      },



      // ...mapState({ //把store仓库里的数据赋值给到组件的计算属性
      //   listData: state => state.shop.worthyListFirst 
      // }),


      itemWidth(){  
        return (138*0.5*(document.documentElement.clientWidth/750)*5)
      },
      gutterWidth(){
        return (9*0.5*(document.documentElement.clientWidth/750)*5) 
      }
      
    },

  }
</script>

<style lang="stylus" >
html,body
  height auto 
  @import './Worthy'

</style>