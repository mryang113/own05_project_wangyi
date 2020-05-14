<template>
  <div id="cartContainer">
    <div class="imgWrap">
      <img src="./images/header.png" alt="">
    </div>

    <!-- 未登录内容区 -->
    <div class="notLoginWrap">
      <div class="title">
        <span class="t-left">购物车</span>
        <span class="t-right">领劵</span>
      </div>
      <div class="textInfo">
        <ul>
          <li>30天无忧退货</li>
          <li>48小时快速退款</li>
          <li>慢99元免邮费</li>
        </ul>
      </div>
      <div class="cartImg">
        <img src="./images/cart01.png" alt="">
      </div>
      <div class="login">登录</div>
    </div>



  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="stylus" scoped>
#cartContainer
  .imgWrap
    width 100%
    height 104px
    img
      width 100%
      height 100%
      display block
  .notLoginWrap
    width 100%
    // height calc(100vh - 201px) //667*2 - 201px 一样的
    height 1133px
    // background #99cccc
    .title
      width 100%
      height 88px
      padding 0 60px 0 30px
      box-sizing border-box
      display flex
      justify-content space-between
      align-items center
      .t-left
        color #333333
        font-size 36px
      .t-right
        color #dd1a21
        font-size 30px
    .textInfo
      width 100%
      height 70px
      background #eeeeee
      padding 0 30px
      box-sizing border-box
      ul
        width 100%
        height 70px
        display flex
        justify-content space-between
        align-items center
        li
          color #666666
          font-size 24px
    .cartImg
      width 100%
      height 248px
      padding 276px 0 50px
      display flex
      justify-content center
      img
        width 248px
        display block
        height 100%
    .login
      width 480px
      height 92px
      border-radius 4px
      margin 0 135px
      line-height 92px
      text-align center
      color #fff
      background #dd1a21
      background-origin padding-box
      font-size 30px


</style>