<template>
  <div id="recommendContainer">
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
  </div>
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
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
</style>