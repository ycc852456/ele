<template>
  <div id="app">
    <transition>
    

    <ul v-if="Barshow" id="footer">
      <router-link to="/first" tag="li">
        <svg id="footer_icon" viewBox="0 0 22 22" >
          <path fill="#818181" d="M16.822 17.089l.456.707c.212.33.14.778-.174 1.033a9.91 9.91 0 0 1-.767.555 9.817 9.817 0 0 1-7.473 1.395 9.867 9.867 0 0 1-6.265-4.334C-.383 11.822.927 5.618 5.52 2.616a9.81 9.81 0 0 1 7.475-1.394 9.866 9.866 0 0 1 6.264 4.334c.166.258.323.528.466.803.19.385.072.82-.262 1.039l-9.05 5.916a.783.783 0 0 1-1.086-.232l-.47-.73a1.668 1.668 0 0 1 .484-2.295l5.766-3.769a.286.286 0 0 0 .03-.455 6.576 6.576 0 0 0-7.821-.434 6.636 6.636 0 0 0-2.877 4.213 6.671 6.671 0 0 0 .926 5.026c1.99 3.085 6.104 3.968 9.17 1.969a1.65 1.65 0 0 1 2.288.482zm3.878-5.445c.56.863.314 2.02-.549 2.58l-.906.59a.786.786 0 0 1-1.086-.232l-1.177-1.812a.787.787 0 0 1 .23-1.086l1.813-1.176a.783.783 0 0 1 1.086.23l.589.906z"></path>
        </svg>
        <p>首页</p>
      </router-link>
      <router-link to="/find" tag="li">
        <svg id="footer_icon" viewBox="0 0 22 22">
          <path fill="#818181" d="M16.62 2.727a.75.75 0 0 1-.844 1.24 8.455 8.455 0 0 0-4.095-1.44 8.5 8.5 0 0 0-9.153 7.792 8.499 8.499 0 0 0 7.79 9.153 8.5 8.5 0 0 0 9.154-7.791 8.46 8.46 0 0 0-1.435-5.449.75.75 0 1 1 1.24-.842 9.96 9.96 0 0 1 1.69 6.411c-.442 5.505-5.264 9.609-10.768 9.166-5.505-.442-9.61-5.263-9.166-10.768C1.475 4.694 6.296.59 11.8 1.033c1.75.14 3.398.727 4.819 1.694zM14.638 7c.244 0 .44.254.331.506l-1.9 4.39c-.11.255-.264.494-.471.702-.21.21-.454.367-.712.476l-4.38 1.895a.363.363 0 0 1-.476-.476l1.895-4.38c.11-.258.266-.5.477-.711.207-.208.447-.362.7-.471l4.391-1.9A.367.367 0 0 1 14.638 7zM12.45 9.55l-1.751.757a.737.737 0 0 0-.237.156.753.753 0 0 0-.156.236l-.758 1.752 1.742-.753a.766.766 0 0 0 .247-.161.733.733 0 0 0 .154-.234l.76-1.754z"></path>
        </svg>
        <p>发现</p>
      </router-link>
      <router-link to="/dingdan" tag="li">
        <svg id="footer_icon" viewBox="0 0 22 22">
          <path fill="#818181" d="M7.25 8a.75.75 0 0 1 0-1.5h7.5a.75.75 0 1 1 0 1.5h-7.5zm0 5.004a.75.75 0 1 1 0-1.5h4.498a.75.75 0 1 1 0 1.5H7.25zM3.5 3v16h9.75c2.9 0 5.25-2.35 5.25-5.25V5.748a.75.75 0 1 1 1.5 0v8.002a6.75 6.75 0 0 1-6.75 6.75H2.75a.75.75 0 0 1-.75-.75V2.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 1 1 0 1.5H3.5z"></path>
        </svg>
        <p>订单</p>
        </router-link>
      <router-link to="/my" tag="li">
        <svg id="footer_icon" viewBox="0 0 22 22">
          <path fill="#818181" d="M10.955 12H7.75a5.25 5.25 0 0 0-5.25 5.25v2.25h17v-2.25a5.244 5.244 0 0 0-2.626-4.548.75.75 0 0 1 .75-1.3l.183.11A6.745 6.745 0 0 1 21 17.25v3a.75.75 0 0 1-.75.75H1.75a.75.75 0 0 1-.75-.75v-3a6.75 6.75 0 0 1 6.436-6.743A4.984 4.984 0 0 1 6 7V6a5 5 0 0 1 10 0v1a5 5 0 0 1-5.045 5zM11 10.5A3.5 3.5 0 0 0 14.5 7V6a3.5 3.5 0 0 0-7 0v1a3.5 3.5 0 0 0 3.5 3.5z"></path>
        </svg>
        <p>我的</p>
      </router-link>
    </ul>
        </transition>
    

    <router-view></router-view>
  </div>
</template>

<script>
import bus from "./bus"
export default {
  name: "app",
  data:function(){
    return{
      Barshow:true
    }
  },
  beforeMount() {
    bus.$on("showBar",function(val){
      this.Barshow=val
      // 注意这里的this指向问题啊!!
    }.bind(this))
  },
};


</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
.router-link-active {
  color: #0089dc;
}
.router-link-active svg path {
  fill: #0089dc;
}

body {
  background-color: #f5f5f5;
  height: 100%;
}
li{
  list-style: none;
}
#app {
  width: 100%;
  padding-bottom: 30px;
  // background-color: #fcfefd;
}
#footer {
  width: 100%;
  position: fixed;
  bottom: 0px;
  z-index: 10;
  box-shadow: 0 -0.266667vw 0.533333vw rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
}
#footer li {
  // float: left;
  // box-sizing: border-box;
  width: 25%;
  text-align: center;
  background-color: white;
  cursor: pointer;
  font-size: 0.625rem /* 10/16 */;
  padding: 0.3125rem /* 5/16 */ 0px;
}
#footer_icon {
  width: 1.25rem /* 20/16 */;
  height: 1.25rem /* 20/16 */;
}

// 分类轮播
.vux-slider {
  // height: 3.125rem /* 50/16 */;
  background-color: #fff;
  text-align: center;
  overflow:unset !important;
  // margin-bottom: 50px;
}
.vux-swiper-item .kind_swiper{
    width: 20%;
    height: 50%;
    float: left;
    box-sizing: border-box;
    /* position: absolute; */
}
.vux-swiper-item div img{
    width: 60%;
}

.vux-indicator .vux-icon-dot{
  width: .625rem !important/* 10/16 */;
  height: .125rem !important/* 2/16 */;

}
.vux-slider > .vux-indicator, .vux-slider .vux-indicator-right{
    bottom: 0px !important;
}
// 图片轮播
.vux-swiper-desc{
  background-image:unset !important ;
}
// tab
.vux-tab-selected{
  font-weight: 700;
}
.vux-card-content{
  width: 100% !important;
}
.weui-panel{
  margin-top: 0 !important;
}
.vux-tab-item{
  font-size: .875rem /* 14/16 */ !important;
}

#first_tab .vux-tab-container{
  height: 3.25rem !important;
}
#first_tab .vux-tab-container .vux-tab{
  height: 3.25rem /* 52/16 */ !important;
}
#first_tab .vux-tab .vux-tab-item{
  line-height: 3.25rem;
}

// 商家详情页 tab
#store_tab .vux-tab-container{
  height: 3.25rem !important;
}
#store_tab .vux-tab-container .vux-tab{
  height: 3.25rem /* 52/16 */ !important;
}
#store_tab .vux-tab .vux-tab-item{
  line-height: 3.25rem;
}
#store_tab {
  padding-top: 3.25rem !important;
}


</style>
