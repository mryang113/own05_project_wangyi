import Home from 'pages/Home/Home'
import Classify from 'pages/Classify/Classify'
import Worthy from 'pages/Worthy/Worthy'
import Cart from 'pages/Cart/Cart'
import Personal from 'pages/Personal/Personal'

export default [ //meta:{showFooter:true} 是代表底部图标导航是否显示
  {path: '/Home',component:Home,meta:{showFooter:true}},
  {path: '/Classify',component:Classify,meta:{showFooter:true}},
  {path: '/Worthy',component:Worthy,meta:{showFooter:true}},
  {path: '/Cart',component:Cart,meta:{showFooter:true}},
  {path: '/Personal',component:Personal,meta:{showFooter:true}},
  {path:"/",redirect:"/Home"}
]