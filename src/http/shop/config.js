// import local from '@/util/local' // 后加的

export default {
  name: "wrap",
  // baseUrl:"http://localhost:4000",
  api: {
    getNavList: { 
      url: "/indexCateModule",
      method: "get",
      corsUrl: "/3001"
    },
    getHomeRecommend: { //获取主页数据
      url: "/indexRecommend",
      method: "get",
      corsUrl: "/3001"
    },
    getCateListBanner: {  //获取导航除推荐以外的数据
      url: "/indexCateList",
      method: "get",
      corsUrl: "/3001"
    },
    getCateLeftNav: {  //获取分类左侧导航数据
      url: "/cateLeftNav",
      method: "get",
      corsUrl: "/3001"
    },
    getCateRightList: {  //获取分类左侧导航数据
      url: "/cateRightList",
      method: "get",
      corsUrl: "/3001"
    },






    // getPosition: {
    //   url: "/position/40.10038,116.36867",
    //   method: "get",
    //   corsUrl: "/4000"
    // },
    // getCategories: {
    //   url: "/index_category",
    //   method: "get",
    //   corsUrl: "/4000",
    //   token : () => {
    //     return local.get("ele-token")
    //   }
    // },
    // getShops: {
    //   url: "/shops?latitude=40.10038&longitude=116.36867",
    //   method: "get",
    //   corsUrl: "/4000",
    //   token : () => {
    //     return local.get("ele-token")
    //   }
    // },
    // autoLogin:{
    //   url:"/auto_login",
    //   method:"get",
    //   corsUrl:"/4000",
    //   token:()=>{
    //       return local.get("ele-token")
    //   }
    // }

  },

  // hooks:{ //一般不这样写,这是请求级别的钩子, 要配合 axios里的call方法传递axiosConfig参数
  //   beforeReq(axiosConfig){
  //     axiosConfig.headers.Authorization = "damu"
  //   }
  // }
}
