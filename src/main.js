// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import App from './App'
import Home from './components/HelloFromVux'
import First from './components/first'
import Find from './components/find'
import Dingdan from './components/dingdan'
import My from './components/my'
import Store from './components/store'
import Login from './components/login'

import VueResource from 'vue-resource'
Vue.use(VueResource)
// tab
import { Tab, TabItem } from 'vux'
Vue.component('tab', Tab)
Vue.component('tab-item', TabItem)
// card
import { Card } from 'vux'
Vue.component('card', Card)

// loading
import { Loading } from 'vux'
Vue.component('loading', Loading)
import  { LoadingPlugin } from 'vux'
Vue.use(LoadingPlugin)

// Badge
import { Badge } from 'vux'
Vue.component('badge', Badge)

// toast
import { Toast } from 'vux'
Vue.component('toast', Toast)
import  { ToastPlugin } from 'vux'
Vue.use(ToastPlugin)

// 引入jquery
import $ from "jquery"

Vue.use(VueRouter)


const routes = [{
  path: '/',
  component: Home
},
{
  path: '/first',
  component: First,
  name:"first"
},
{
  path: '/find',
  component: Find,
  name:"find"
},
{
  path: '/dingdan',
  component: Dingdan,
  name:"dingdan"
},
{
  path: '/my',
  component: My,
  name:"my"
},
{
  path: '/first/store/:id',
  component: Store,
  name:"store"
},
{
  path: '/login',
  component: Login,
  name:"login"
},
]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')

// 适配
// 1rem=16px
function calcSize(){
  var width=document.documentElement.clientWidth
  var height=document.documentElement.clientHeight

  // 设置根标签的fontSize属性
  var html=document.querySelector("html")
  html.style.fontSize=width / 360  * 16 +"px"
}

calcSize()

// 窗口重置大小时，调用该方法
window.onresize=function(){
  calcSize()
}

router.push("/first")



