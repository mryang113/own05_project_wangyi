
<template>
  <div class="container-water-fall">
    <waterfall :col='col'  :gutterWidth="gutterWidth"  :data="data" @finish="finish" @loadmore="loadmore"   >
      <template >
        <div class="cell-item" v-for="(item,index) in data" :key="index">
          <img :src="item.img"  />
          <div class="item-body">
              <div class="item-desc">{{item.title}}</div>
              <div class="item-footer">
                  <div class="avatar" :style="{backgroundImage : `url(${item.avatar})` }"></div>
                  <div class="name">{{item.user}}</div>
                  <div class="like" :class="item.liked?'active':''" >
                      <i ></i>
                      <div class="like-total">{{item.liked}}</div>  
                  </div>
              </div>
          </div>
        </div>
      </template>
    </waterfall>
    
  </div>
</template>


<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      data:[],
      col:'3',
      originData: [
        
        
        
        {
          img:
            "https://image.watsons.com.cn//upload/589585c1.jpeg?x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/d862d932.jpg?w=1080&h=1440&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/eb4fb58f.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/71d19462.jpg?x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title:
            "贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/415f984f.jpeg?w=828&h=1104&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/5c3e51e4.jpg?w=720&h=960&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "夏天用这款姨妈巾，让你体验真正的清爽",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精123",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/da61c0f5.jpg?w=959&h=958&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/fcd68df4.jpg?w=1080&h=1080&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/bef41e67.JPG?w=712&h=534&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "夏天用这款姨妈巾，让你体验真正的清爽",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/25ab20fe.JPG?w=1000&h=1200&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精123",
          like: "953"
        },
        {
          img:
            "https://ci.xiaohongshu.com/eb971d00-05ab-5b2a-ba03-52d8f544c42b?imageView2/2/w/400/q/50/format/jpg",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/4a3c1788.jpg?w=823&h=1000&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "夏天用这款姨妈巾，让你体验真正的清爽",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/0a89e6b7.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/99253111.jpg?w=1080&h=1920&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精123",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/13afe9a7.jpg?x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title:
            "贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试贵妇级好用的水乳有哪些呢？千万不要去乱尝试",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/98c7c4c3.jpg?w=1210&h=1210&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/54c5d7b4.jpg?w=828&h=991&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/71d19462.jpg?x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "夏天用这款姨妈巾，让你体验真正的清爽",
          user: "迷人的小妖精迷人的小妖精123",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/642cb83c.jpeg?w=1080&h=1080&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/31e42833.jpg?w=750&h=750&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/92761043.JPG?w=1000&h=999&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "夏天用这款姨妈巾，让你体验真正的清爽",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/60cc9b8e.jpg?w=991&h=744&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "150元搞定全套护肤品，这些护肤好物必须交出来！",
          user: "迷人的小妖精迷人的小妖精123",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/b709ed72.jpg?w=552&h=414&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/137b50b0.jpg?x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "夏天用这款姨妈巾，让你体验真正的清爽",
          user: "迷人的小妖精迷人的小妖精",
          like: "952"
        },
        {
          img:
            "https://image.watsons.com.cn//upload/31e42833.jpg?w=750&h=750&x-oss-process=image/resize,w_1080",
          avatar:
            "https://img.xiaohongshu.com/avatar/5b7d198a7e6e15000155f7c9.jpg@80w_80h_90q_1e_1c_1x.jpg",
          title: "最近浴室新宠，日系神仙好物了解一下～",
          user: "迷人的小妖精迷人的小妖精",
          like: "953"
        }
      ]
    }
  },
  computed:{
    itemWidth(){  
      return (138*0.5*(document.documentElement.clientWidth/375)).toString()  
    },
    gutterWidth(){
      return (9*0.5*(document.documentElement.clientWidth/375)).toString() 
    }
  },
  methods:{
    // mix(){
    //   this.$waterfall.mix()
    // },
    switchCol(col){
      this.col = col
      console.log(this.col)
    },
    loadmore(index){
      console.log(1)
      this.data = this.data.concat(this.data)
    },
    finish(){
      console.log('finish')
    }
  },
  mounted() {
    this.data = this.originData;
  }

}
</script>

<style>
  .cell-item{
    width: 187px;
    margin-right: 10px;
  }
  .cell-item img{
    width: 100%;
  }
</style>