// import {Toast} from "vant";
// import router from "@/router"
// import local from "@/util/local"

import http from "@/http"
import {GETNAVLIST} from "@/store/mutation_types"

const OK=0;
const ERROR=1;


export default {
    async [GETNAVLIST]({commit}){
        // const {code,data} = await http.shop.getNavList();
        // if(code === OK) //有些看数据,有些没有code和data
        //     commit(GETNAVLIST,data)  // 异步行为： 发送请求获取数据

        let navListData= await http.shop.getNavList();
        // console.log(navListData,'---');
        commit(GETNAVLIST,navListData)  // 异步行为： 发送请求获取数据

    },
}