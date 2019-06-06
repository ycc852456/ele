<template>
    <div id="find">
        <back-header>{{tit}}</back-header>
        <div id="find_banner">
            <img src="https://fuss10.elemecdn.com/1/2f/aeacb6ba2daaf812ea729d1896273jpeg.jpeg" alt="">
        </div>
        <!-- 金币商城 -->
        <div id="jinbishop">
            <a href="https://h5.ele.me/exchange/" style="cursor:pointer">
                <div class="shop_left">
                    <div class="shop_text">
                        <p class="tit">金币商城</p>
                        <p class="jieshao">0元好物在这里</p>
                        
                    </div>
                    <img src="https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg" alt="">
                </div>
            </a>
            <div class="shop_right">
                <a href="https://h5.ele.me/commend/#/" style="cursor:pointer">
                    <div class="right1">
                        <div class="shop_text">
                            <p class="tit">推荐有奖</p>
                            <p class="jieshao">10元现金拿不停</p>
                            
                        </div>
                        <img src="https://fuss10.elemecdn.com/5/72/7232274c3c1934861abb86ba32b7bjpeg.jpeg" alt="">
                    </div>
                </a>
                <a href="https://h5.ele.me/discover/koubei/" style="cursor:pointer">
                    <div class="right2">
                        <div class="shop_text">
                            <p class="tit">周边优惠</p>
                            <p class="jieshao">领取口碑好券</p>
                        
                        </div>
                        <img src="https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg" alt="">
                    </div>
                </a>
            </div>
        </div>

        <!-- 限时好礼 -->
        <div id="xshl">
            <div id="xshl_tit">
                <span class="line ha"></span>
                <!-- <span class="dot"></span> -->
                <svg viewBox="-4 3 30 30">
                    <path fill="#f94843" d="M10 29.9c-7.2 0-13-5.8-13-13 0-2 .4-3.9 1.3-5.7C.5 6.7 5 3.9 10 3.9c7.2 0 13 5.8 13 13s-5.8 13-13 13zM.1 12.1C-.7 13.6-1 15.2-1 16.9c0 6.1 4.9 11 11 11s11-4.9 11-11-4.9-11-11-11c-4.3 0-8.1 2.3-9.9 6.2z"></path>
                    <path fill="#f94843"  d="M-1 12.1c-1.8-.9-3-2.7-3-4.8C-4 4.4-1.6 2 1.3 2c2 0 3.8 1.1 4.7 2.8l-1.8 1C3.7 4.7 2.5 4 1.3 4-.5 4-2 5.5-2 7.3c0 1.3.7 2.4 1.8 3l-.8 1.8zM21 11.8l-1-1.7c1-.6 1.6-1.7 1.6-2.8 0-1.8-1.5-3.3-3.3-3.3-1.3 0-2.5.8-3.1 2l-1.8-.8c.8-2 2.8-3.3 4.9-3.3 2.9 0 5.3 2.4 5.3 5.3-.1 2-1 3.7-2.6 4.6zM14.3 20.2h-4.2c-.6 0-1-.4-1-1v-8.1c0-.6.4-1 1-1s1 .4 1 1v7.1h3.2c.6 0 1 .4 1 1s-.4 1-1 1zM-1.2 32c-.2 0-.5-.1-.7-.3-.4-.4-.4-1-.1-1.4l4-4.5c.4-.4 1-.4 1.4-.1.4.4.4 1 .1 1.4l-4 4.5c-.2.3-.4.4-.7.4zM21.5 32c-.3 0-.5-.1-.7-.3l-4-4.5c-.4-.4-.3-1 .1-1.4.4-.4 1-.3 1.4.1l4 4.5c.4.4.3 1-.1 1.4-.2.1-.4.2-.7.2z"></path>
                </svg>
                限时好礼
                <!-- <span class="dot"></span> -->
                <span class="line"></span>
            </div>
            <p>金币换豪礼</p>
        </div>
        
        <!-- 主要内容 -->
        <div id="xshl_list">
            <ul>
                <li v-for="(item,index) in gift_list" v-if="index<=2" :key="index">
                    
                        <span>{{item.corner_marker}}</span>
                        <img v-if="item.image_hash.endsWith('jpeg')" :src="'https://fuss10.elemecdn.com/'+item.image_hash + '.jpeg'" alt="">
                        <!-- <img src="https://fuss10.elemecdn.com/c/66/89cc6ef54261bbd98b94deeff2546jpeg.jpeg" alt=""> -->
                        <p class="gift_name">{{item.title}}</p>
                        <p class="jinbi">{{item.points_required}}金币<s>￥{{item.original_price}}</s></p>
                  
                </li>
                
            </ul>
        </div>
        <!-- 查看更多 -->
        <div id="watch_more">
            <span>查看更多</span>
            <svg viewBox="0 0 16 25">
               <path fill="none" stroke="#aaa" d="M2.127 2l10.87 10.582L2.291 23.11"></path>
            </svg>
        </div>
    </div>
</template>

<script>
import backHeader from "./back_header/header.vue";
import bus from "../bus"
export default {
  components: {
    backHeader
  },
  data: function() {
    return {
      tit: "发现",
      gift_list:null
    };
  },
  beforeMount() {
        bus.$emit("showBar",true) 
        this.$http.get("/ele/member/gifts/suggest",{
            parmas:{
                limit:3
            }
        }).then(function(resdata){
          console.log(resdata.body)
          this.gift_list=resdata.body
      })
  },
};
</script>

<style scoped>
#find {
  margin-top: 2.5rem /* 40/16 */;
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 3.125rem /* 50/16 */;
}
#find_banner img {
  width: 100%;
}
#xshl{
    clear: both;
    background-color: white;
}
#xshl_tit {
  /* position: relative; */
  margin-top: 0.625rem /* 10/16 */;
  text-align: center;
  font-size: 1.125rem /* 18/16 */;
  font-weight: 700;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
}
#xshl p {
  font-size: 0.625rem /* 10/16 */;
  color: #999;
  text-align: center;
}

#xshl span.line {
  width: 0.9375rem /* 15/16 */;
  height: 0.125rem /* 2/16 */;
  /* position: absolute; */
  background: #333;
  font-weight: 700;
  top: 0px;
  margin: 0 0.3125rem /* 5/16 */;
  position: relative;
}
.line:nth-of-type(1)::after {
  content: "";
  width: 0.3125rem /* 5/16 */;
  height: 0.3125rem /* 5/16 */;
  border-radius: 50%;
  background-color: #333;
  position: absolute;
  right: 0;
  top: -0.0625rem /* 1/16 */;
}
.line:nth-of-type(2)::before {
  content: "";
  width: 0.3125rem /* 5/16 */;
  height: 0.3125rem /* 5/16 */;
  border-radius: 50%;
  background-color: #333;
  position: absolute;
  left: 0;
  top: -0.0625rem /* 1/16 */;
}

svg {
  width: 0.9375rem /* 15/16 */;
  height: 0.9375rem /* 15/16 */;
}

/* 限时优惠列表 */
ul li {
  float: left;
  width: calc(91% / 3);
  box-sizing: border-box;
  padding: 0.625rem /* 10/16 */;
  margin: 0.3125rem /* 5/16 */;
}
ul li span {
  width: 3.125rem /* 50/16 */;
  height: 1.125rem /* 18/16 */;
  background-color: #413d3c;
  color: white;
  font-size: 0.75rem /* 12/16 */;
  padding: 0.0625rem /* 1/16 */ 0.1875rem /* 3/16 */;
  line-height: 1.125rem /* 18/16 */;
  position: absolute;
}
ul li img {
  width: 6.6875rem /* 107/16 */;
  height: 6.6875rem /* 107/16 */;
  margin-bottom: 0.625rem /* 10/16 */;
}

.gift_name {
  color: #333;
  font-size: 0.75rem /* 12/16 */;
  margin-bottom: 0.3125rem /* 5/16 */;
}
.jinbi {
  color: #ff5339;
  font-size: 0.6875rem /* 11/16 */;
}

.jinbi s {
  color: #666;
  font-size: 0.625rem /* 10/16 */;
}

/* 查看更多 */
#watch_more {
  text-align: center;
  cursor: pointer;
  font-size: 0.875rem /* 14/16 */;
  padding: 0.625rem /* 10/16 */;
  color: #666;
  background-color: white;
}
#watch_more svg {
  height: 0.625rem /* 10/16 */;
}
#jinbishop {
  width: 100%;
  border-top: 1px solid #ededed;
  border-bottom: 1px solid #ededed;
  margin-bottom: .9375rem /* 15/16 */;
  height: 9.375rem /* 150/16 */;
  background-color: white;
}
#jinbishop img{
    position: absolute;
    right: .625rem /* 10/16 */;
    bottom: .625rem /* 10/16 */;
}
.shop_right,
.shop_left {
    width: 50%;
    height: 9.375rem /* 150/16 */;
    float: left;
    box-sizing: border-box;
}
.shop_left {
  /* height: 9.375rem 150/16; */
  border-right: 1px solid #ededed;
  padding: .625rem 10/16;
  position: relative;
}
.right1,
.right2 {
  height: 4.6875rem /* 75/16 */;
  position: relative;
}
.shop_left img {
  width: 4.5rem /* 72/16 */;
  height: 4.5rem /* 72/16 */;
}
.shop_right img {
  width: 2.8125rem /* 45/16 */;
  height: 2.8125rem /* 45/16 */;
}
.tit {
  line-height: 1.2;
  margin-bottom: 0.3125rem /* 5/16 */;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.jieshao {
  line-height: 1.2;
  font-size: .75rem /* 12/16 */;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.shop_left .tit{
    color: rgb(255, 153, 0);
}
.right1{
    border-bottom: 1px solid #ededed;
}
.right1 .tit{
    color: rgb(27, 169, 225);
}
.right2 .tit{
    color: rgb(237, 102, 96);
}
.shop_text{
    position: absolute;
    top: .625rem /* 10/16 */;
    left: .9375rem /* 15/16 */;
}


</style>