import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible' //1-1 引入适配库
import router from '@/router' //2-1 注册路由
import "@/static/iconfont/iconfont" //3-1 引用字体图标



Vue.config.productionTip = false

new Vue({
  router, //2-1 
  render: h => h(App),
}).$mount('#app')
