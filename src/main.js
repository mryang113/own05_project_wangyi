import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible' //1-1 引入适配库
import router from '@/router' //2-1 注册路由
import '@/static/font_i4f3h1zfru/iconfont.css' //3-1 引用字体图标
import http from "@/http"; //4-1 注册axios
Vue.prototype.$http = http;

import store from "@/store"; //5-1 注册vuex



Vue.config.productionTip = false

new Vue({
  router, //2-1 
  store, //5-1
  render: h => h(App),
}).$mount('#app')
