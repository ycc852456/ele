<template>
    <div id="store">
        <nav>
            <img @click="goback" src="../../static/back.png" alt="">
            <div id="store_mask"></div>
        </nav>
        <!-- 商家详情头部 -->
        <div id="store_tit">
            <div id="store_logo">
                <span v-if="info.pinpai" id="pinpai">品牌</span>
                <img v-if="info.logo.endsWith('png')" :src="'https://fuss10.elemecdn.com/'+info.logo+'.png'" alt="">
                <img v-else-if="info.logo.endsWith('jpeg')" :src="'https://fuss10.elemecdn.com/'+info.logo+'.jpeg'" alt="">
                <img v-else-if="info.logo.endsWith('jpg')" :src="'https://fuss10.elemecdn.com/'+info.logo+'.jpg'" alt="">
            </div>
            <div id="store_name">
                <h2>{{info.stroe_name}}</h2>
                <img src="../../static/play_fill.png" alt="">
            </div>
            <div id="pingjia">
                <span>评价{{info.scroe}}</span>
                <span>月售{{info.xiaoliang}}单</span>
                <span>蜂鸟快送约{{info.time}}分钟</span>
            </div>
            <div v-if="hongbao_list!=null&&hongbao_list.length!=0" id="lingquan">
                <p>
                    <span>￥ <b>{{hb_amount}}</b></span>
                    <span>无门槛</span>
                    <span>
                        <span class="dot"></span>
                        <span class="dot"></span>
                        <span @click="linquan">领取</span>
                    </span>
                </p>
            </div>
            <div id="huodong">
                <p id="huodong_left">
                    <span>{{info.activities[0].icon_name}}</span>
                    <span>{{info.activities[0].description}}</span>
                </p>
                <p id="youhui" @click="change">
                    <span>{{info.activities.length}}个优惠</span>
                    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="">
                </p>
            </div>
            <div id="welcome" v-if="info.promotion_info">
                <span >公告:{{info.promotion_info}}</span>
            </div>
        </div>

        <!-- 面板切换 -->
       <!-- animate="false" 和  custom-bar-width冲突 -->
        <tab id="store_tab" custom-bar-width="40px"  :line-width="2" v-model="pannel_index" prevent-default @on-before-index-change="switchTabItem" >
            <tab-item  selected>点餐</tab-item>
            <tab-item >评价</tab-item>
            <tab-item >商家</tab-item>
        </tab>
        <!-- 点餐面板 -->
        <div id="diancan" class="pannel" style="">
          <!-- 大图 -->
          <div id="banner">
            <img src="http://fuss10.elemecdn.com/2/0a/328abfe18b86053b2a91dc9dbdba1png.png?imageMogr/thumbnail/686x/" alt="">
          </div>
          <!-- 面板 -->
          <div id="list">
              <!-- 左侧列表 -->
              <ul id="kind" >
                <!-- kind_list.length -->
                <!-- icon_url -->
                <li  class="kind_li" v-for="(item,index) in kind_list" :key="index" @click="jump(index)">
                  <img v-if="item.icon_url.endsWith('png')" :src="'https://fuss10.elemecdn.com/'+item.icon_url+'.png'" alt="">
                  <img v-else-if="item.icon_url.endsWith('jpeg')" :src="'https://fuss10.elemecdn.com/'+item.icon_url+'.jpeg'" alt="">
                  <img v-else-if="item.icon_url.endsWith('jpg')" :src="'https://fuss10.elemecdn.com/'+item.icon_url+'.jpg'" alt="">
                  <span>{{item.name}}</span>
                </li>
              </ul>
              <!-- 右侧列表 -->
              <div id="food_warp" ref="li_right">
                <ul class="food" v-for="(item,index) in kind_list" :key="index">
                  <div id="food_tit">
                    <h4>{{item.name}}</h4>
                    <span v-if="item.description">{{item.description}}</span>
                  </div>
                  
                  <storecard v-for="(item2,index) in item.foods" v-model="singleprice" :foodlist="item2" :price="item2.specfoods[0].price"  :key="index"></storecard>
                </ul>
                
              </div>
          </div>

           <!-- 底部 -->
          <footer>
            <div id="footer_top">
              
              <p v-if="totalprice==0" id="manjian">{{info.tip}}</p>
              <p v-else-if="totalprice.toFixed(2)<info.chushi" id="manjian">还差{{(info.chushi -totalprice).toFixed(2) }}元起送</p>
              <p v-else id="manjian">嗯,可以配送了</p>
              <ul id="yixuan">
                <li>
                  <span>已选商品</span>
                  <span id="kong">
                    <svg viewBox="0 0 15 15" fill-rule="evenodd">
                      <path fill="#979797" d="M7.05 15h-5.5c-.303 0-.55-.26-.55-.583V5.091c0-.322.246-.583.55-.583.304 0 .55.26.55.583v8.743h4.95c1.032 0 2-.426 2.728-1.2A4.18 4.18 0 0 0 10.9 9.735l-.03-7.15c0-.323.245-.585.548-.586h.003c.302 0 .548.26.55.58L12 9.732a5.374 5.374 0 0 1-1.442 3.724C9.622 14.451 8.376 15 7.05 15z"></path>
                      <path fill="#979797" d="M12.458 3H.542C.242 3 0 2.776 0 2.5S.243 2 .542 2h11.916c.3 0 .542.224.542.5s-.243.5-.542.5"></path>
                      <path fill="#979797" d="M5 2h3V1H5v1zm3.464 1H4.536C4.24 3 4 2.776 4 2.5v-2c0-.276.24-.5.536-.5h3.928C8.76 0 9 .224 9 .5v2c0 .276-.24.5-.536.5z" mask="url(#cart-remove_b)"></path>
                    </svg>
                    清空
                  </span>
                </li>
                <li>
                  <p>对不起老师,</p>
                  <div class="car_right">
                    <span><s>￥12</s><b>￥5</b></span>
                    <div class="btn">
                      <!-- @click="jian" -->
                      <span  class="jian" >
                        <svg fill="rgb(35, 149, 255)" viewBox="0 0 44 44">
                          <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span  class="count">12</span>
                      <!-- @click="jia" -->
                      <span class="jia" >
                        <svg fill="rgb(35, 149, 255)" viewBox="0 0 44 44">
                          <path fill="none" d="M0 0h44v44H0z"></path>                              
                          <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path>                            
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <p>这部分没来得及实现...</p>
                  <div class="car_right">
                    <span><s>￥12</s><b>￥5</b></span>
                    <div class="btn">
                      <!-- @click="jian" -->
                      <span  class="jian" >
                        <svg fill="rgb(35, 149, 255)" viewBox="0 0 44 44">
                          <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span  class="count">12</span>
                      <!-- @click="jia" -->
                      <span class="jia" >
                        <svg fill="rgb(35, 149, 255)" viewBox="0 0 44 44">
                          <path fill="none" d="M0 0h44v44H0z"></path>                              
                          <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path>                            
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                <li>
                  <p>华香脆骨串2串</p>
                  <div class="car_right">
                    <span><s>￥12</s><b>￥5</b></span>
                    <div class="btn">
                      <!-- @click="jian" -->
                      <span  class="jian" >
                        <svg fill="rgb(35, 149, 255)" viewBox="0 0 44 44">
                          <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path>
                          <path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span  class="count">12</span>
                      <!-- @click="jia" -->
                      <span class="jia" >
                        <svg fill="rgb(35, 149, 255)" viewBox="0 0 44 44">
                          <path fill="none" d="M0 0h44v44H0z"></path>                              
                          <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path>                            
                        </svg>
                      </span>
                    </div>
                  </div>
                </li>
                
              </ul>
              
            </div>
            <div id="footer_bot">
              <div id="img_warp">
                <badge v-if="counts!=0" :text="counts"></badge>
                <img v-if="counts!=0" src="../../static/car_show.png" alt="">
                <img v-else src="../../static/car.png" alt="">
              </div>
              <div id="text_big">
                <div id="text_small">
                  <p v-if="totalprice!=0" id="no_wei" >￥{{totalprice.toFixed(2)}}</p>
                  <p v-else id="wei">未选购商品</p>
                  <!-- float_delivery_fee -->
                  <p id="yunfei">另需配送费{{info.yunfei}}元</p>
                </div>
                <!-- float_minimum_order_amount -->
                
                <b v-if="totalprice==0">￥{{info.chushi}}元起送{{counts}}</b>
                <b v-else-if="totalprice.toFixed(2)<info.chushi"  style="font-size:0.9rem">还差{{(info.chushi -totalprice).toFixed(2) }}元起送</b>
                <b v-else id="jiesuan">去结算</b>
              </div>
            </div>
          </footer>

        </div>
        <!-- 评价面板 -->
        <pingjia id="pingjia" class="pannel" style="display:none"></pingjia>
      

        <shangjia id="shangjia" class="pannel" style="display:none;background-color:yellow;height:50px"></shangjia>
        <!-- <div id="shangjia" class="pannel" style="background-color:yellow;height:50px;display:none"></div> -->

       

        <!-- 活动 -->
        <div id="huodong_wrap">
          <ul id="huodong_pannel">
            <h2>优惠活动</h2>
            <div>
              <img @click="close_huodong" id="close1" src="../../static/close.png" alt="">
              <li v-for="(item,index) in info.activities" :key="index">
                <span :style="'background-color:#'+item.icon_color">{{item.icon_name}}</span>
                <span>{{item.description}}</span>
              </li>
            </div>
          </ul>
        </div>

        <!-- 领券 -->
        <div id="linquan_wrap" v-if="hongbao_list!=null" >
          <ul id="linquan_pannel">
            <h2>店铺专享红包</h2>
            <p>可领红包</p>
            <div>
              <img @click="close_linquan" id="close_lq" src="../../static/close.png" alt="">
              <li v-for="(item,index) in hongbao_list" :key="index">
                <div class="hb_left">
                  <p class="jine">￥<b>{{item.amount}}</b></p>
                  <div class="center">
                    <p class="limit">{{item.name}}</p>
                    <p class="tip">{{item.description}}</p>
                  </div>
                </div>
                <div class="hb_right">
                  <span class="get_btn">领取</span>
                </div>
              </li>
            </div>
          </ul>
        </div>
        <!-- 遮罩层 -->
        <div id="mask"></div>

        
    </div>
</template>

<script>
import bus from "../bus"
import storecard from "./store_card"
import shangjia from "./store_info/shangjia.vue"
import pingjia from "./store_info/pingjia.vue"
$(".pannel").eq(0).show() 


export default {
    
  name: "store",
  data: function() {
    return {
      pannel_index: 0,
      stroe_id:0,
      kind_list:null,
      hongbao_list:null,
      hb_amount:0,
      info:null,
      // 商品总数
      counts:0,
      // 单价
      singleprice:0,
      // 总价
      totalprice:0
    };
  },
  components:{
    storecard,
    shangjia,
    pingjia
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    // 面板切换
    switchTabItem(index) {
        $(".pannel").hide()
      this.$vux.loading.show({
      });
      setTimeout(() => {
        this.$vux.loading.hide();
        this.pannel_index = index;
        $(".pannel").eq(index).show()
      }, 1000);
    },
    // 活动展开
    change(){
      $("#huodong_wrap").animate({"height":"14rem"})
      $("#mask").show()
    },
    linquan(){
      $("#linquan_wrap").animate({"height":"18rem"})
      $("#mask").show()
    },

     // 活动收起
    close_huodong(){
      $("#huodong_wrap").animate({"height":"0px"})
      $("#mask").hide()
    },
    // 领券收起
    close_linquan(){
      $("#linquan_wrap").animate({"height":"0px"})
      $("#mask").hide()
    },
    // 动态锚点
    jump(i){
      $("#kind").children("li").removeClass()
      // console.log(i)
      // 点击左侧列表
      var nav=$("nav").innerHeight()
      var store_tit_height=$("#store_tit"). innerHeight()
      var store_tab_height=$("#store_tab").innerHeight()
      var banner_height=$("#banner").innerHeight()
      // 16px = 1rem
      var jump= document.querySelectorAll('.food')
      var total = jump[i].offsetTop - (nav + store_tit_height +store_tab_height + banner_height) 
      $('#food_warp').animate({scrollTop:total}, 500)

      // 左侧样式
      $("#kind").children("li").eq(i).addClass("active_kind")
    },
    // 减
    reduce(val){
      console.log(val)
    }

  },
 
  beforeMount() {
    // console.log(this.$route.params)
    this.info=this.$route.params
    bus.$emit("showBar",false)
    this.stroe_id=this.$route.params.id 
    // console.log(this.info)
    this.$http.get("/ele/shopping/v2/menu?restaurant_id="+this.stroe_id)
      .then(function(resdata){
      // console.log(resdata.body)
      this.kind_list=resdata.body
    })
    

    // 红包接口
    this.$http.get("/ele/shopping/v1/restaurants/"+this.stroe_id+"/exclusive_hongbao/detail?latitude=24.548241&longitude=118.123975&user_id=34496517&code=0.08567752473991508&terminal=h5")
    .then(function(hb_data){
      // console.log(hb_data.body)
      this.hongbao_list=hb_data.body
      for(var i=0;i<hb_data.body.length;i++){
        this.hb_amount+=hb_data.body[i].amount*1
      }
    })
  },

  mounted() {
    // 处理背景图
    function insertStr1(soure,start, newStr) {
      return soure.slice(0, start) + newStr + soure.slice(start)
    }
    var new1=insertStr1(this.info.logo,1,"/")
    var new_path=insertStr1(new1,4,"/")
    
    if(this.info.logo.endsWith('png')){
      $("nav").css("backgroundImage","url(https://fuss10.elemecdn.com/"+new_path+".png?imageMogr/thumbnail/750x/)")
    }else if(this.info.logo.endsWith('jpg')){
      $("nav").css("backgroundImage","url(https://fuss10.elemecdn.com/"+new_path+".jpg?imageMogr/thumbnail/750x/)")
    }else if(this.info.logo.endsWith('jpeg')){
      $("nav").css("backgroundImage","url(https://fuss10.elemecdn.com/"+new_path+".jpeg?imageMogr/thumbnail/750x/)")
    }


    // 滚动监听li的样式
    this.$refs.li_right.addEventListener('scroll', () => {
 
      // 在mounted执行时，dom其实并没有渲染完成，所以，在mounted中用动态的ID获取对象是获取不到的
      this.$nextTick(()=>{
        // console.log(this.$refs.li_right.scrollTop)


      // 滚动条的距离>= （容器高度的1/7 到窗口顶部） - 一堆innerheght
        var nav=$("nav").innerHeight()
        var store_tit_height=$("#store_tit"). innerHeight()
        var store_tab_height=$("#store_tab").innerHeight()
        var banner_height=$("#banner").innerHeight()
        // 16px = 1rem
        var total = nav + store_tit_height +store_tab_height + banner_height
        var ul_list=document.querySelectorAll(".food")
        // ul_list[1].style.backgroundColor="red"
        // console.log(ul_list[1].clientHeight)
        // console.log(ul_list[1].offsetTop - ul_list[1].clientHeigh - total)
        // console.log(this.$refs.li_right.scrollTop)
        for(var i=0;i<ul_list.length;i++){
          if(this.$refs.li_right.scrollTop >= ul_list[i].offsetTop - ul_list[i].clientHeight/7   - total){
            $("#kind").children("li").removeClass()
            $("#kind").children("li").eq(i).addClass("active_kind")
          }
        }
      })
    })
    // 初始购物车背景色
    $("#img_warp").addClass("gery")


    // 展示购物车
    
    $("#img_warp").click(()=>{
      if(this.counts!=0){
        console.log(this.counts)
        $("#yixuan").slideToggle()
      }else{
        console.log(this.counts)
      }
    })
    
    
    

  },
  watch:{
    singleprice(newnum){
      // console.log(newnum)
      if(newnum>0){
          this.counts++
          this.totalprice +=this.singleprice.toFixed(1) *1 
          $("#img_warp").removeClass("gery").addClass("blue").stop(true,false).animate({"width":"3.4rem","height":"3.4rem"},200,function(){
            $("#img_warp").animate({"width":"2.7rem","height":"2.7rem"},180,function(){
                $("#img_warp").animate({"width":"3.125rem","height":"3.125rem"},200)
              })
          })
        console.log(this.info.yunfei)
        }else{
          // 商品是不需要的 newnum是负值
          this.counts--
          this.totalprice +=newnum.toFixed(1) *1
        }
    },
    counts(){
      if(this.counts>0){
        // 购物车样式
        $("#img_warp").removeClass("gery").addClass("blue")
      }else{
          $("#img_warp").addClass("gery")
      }
    } 
  },
  

  
};


</script>

<style scoped>

#yixuan{
  width: 100%;
  display: none;
  z-index: 100;
  background-color: pink;
  max-height: 10.9375rem /* 175/16 */;
  overflow-y: scroll;
}
#yixuan li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: .625rem /* 10/16 */ .9375rem /* 15/16 */;
}
#yixuan li:nth-child(1){
  background-color: #eceff1;
  color: #666;
  padding: .5rem /* 8/16 */ .9375rem /* 15/16 */;
}
#yixuan li #kong{
  font-size: .75rem /* 12/16 */;
  cursor: pointer;
  display: flex;
  align-items: center;
}
#yixuan li #kong svg{
  width: .9375rem /* 15/16 */;
  height: .9375rem /* 15/16 */;
}
#yixuan li p{
  font-size: .875rem /* 14/16 */;
}
#yixuan .btn svg{
  width: 1.25rem /* 20/16 */;
  height: 1.25rem /* 20/16 */;
}
span b{
  font-size: 1rem /* 16/16 */;
  color: rgb(255, 83, 57);
}
span s{
    font-size: .625rem /* 10/16 */;
}
li .btn{
  display: flex;
  align-items: center;
  margin-left: .625rem /* 10/16 */;
}
li .btn span{
  padding: 0 .3125rem /* 5/16 */;
}
li .btn span.count{
  font-size: .875rem /* 14/16 */;
}
.car_right{
  display: flex;
  justify-content: space-around;
  align-items: center;
}


#store_mask {
  background-image: linear-gradient(
    0deg,
    hsla(0, 0%, 100%, 0),
    rgba(0, 0, 0, 0.5)
  );
  z-index: 10;
  position: absolute;
  width: 100%;
  height: 5rem /* 80/16 */;
}
nav {
  width: 100%;
  height: 5rem /* 80/16 */;
  /* background-image: url("http://fuss10.elemecdn.com/e/94/e10a2869dce90e9efce39e71d068apng.png?imageMogr/thumbnail/750x/"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  position: relative;
}
nav img {
  width: 1rem /* 16/16 */;
  height: 1rem /* 16/16 */;
  position: absolute;
  top: 0.625rem /* 10/16 */;
  left: 0.625rem /* 10/16 */;
  z-index: 11;
  cursor: pointer;
}
#store_tit {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.25rem /* 20/16 */ 0 .6rem /* 10/16 */ 0;
  
}
#store_logo {
  position: absolute;
  top: 1.25rem /* 20/16 */;
  z-index: 10;
}
#store_logo img {
  width: 5rem /* 80/16 */;
  height: 5rem /* 80/16 */;
  border-radius: 0.3125rem /* 5/16 */;
}
#store_logo #pinpai {
  position: absolute;
  top: 0;
  left: 0;
  font-size: 0.5625rem /* 9/16 */;
  font-weight: 600;
  color: #6f3f15;
  background-image: linear-gradient(90deg, #fff100, #ffe339);
  padding: 0.0625rem /* 1/16 */;
  border-top-left-radius: 0.3125rem /* 5/16 */;
}
#store_name {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#store_name h2{
  font-size: 1.125rem /* 18/16 */;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
#store_name img {
  width: 0.75rem /* 12/16 */;
  height: 1.25rem /* 20/16 */;
  margin-left: 0.625rem /* 10/16 */;
}
#pingjia span {
  font-size: 0.6875rem /* 11/16 */;
  color: #666;
  margin: 0 0.3125rem /* 5/16 */;
}
#lingquan .dot{
  position: absolute;
  padding: 0.1875rem /* 3/16 */;
  border-radius: 50%;
  /* background-color: #f5f5f5; */
  background-color: #fff;
}
#lingquan {
  color: #594519;
  background: #ffe578;
  font-size: 0.6875rem /* 11/16 */;
  padding: 0.3125rem /* 5/16 */ 0.3125rem /* 5/16 */;
}
#lingquan span {
  padding: 0 0.625rem /* 10/16 */;
}
#lingquan span b {
  font-size: 0.875rem /* 14/16 */;
  font-weight: 800;
}
#lingquan p span:nth-child(3) {
  position: relative;
  cursor: pointer;
}
#lingquan .dot:nth-child(1) {
  top: -0.8125rem /* 13/16 */;
  left: 0;
}
#lingquan .dot:nth-child(2) {
  bottom: -0.625rem /* 10/16 */;
  left: 0;
}
#huodong,
#welcome {
  width: 80%;
  display: flex;
  justify-content: space-between;
  font-size: 0.6875rem /* 11/16 */;
  margin: 0.3125rem /* 5/16 */;
}
#huodong_left span:nth-child(1) {
  color: white;
  padding: 0.125rem /* 2/16 */;
  background-color: rgb(112, 188, 70);
}
#huodong_left {
  margin-right: 0.625rem; /* 10/16 */
}
#huodong #youhui img {
  width: 0.4375rem /* 7/16 */;
  height: 0.25rem /* 4/16 */;
}
#welcome span {
  color: #666;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
/* 大图 */
#banner{
  width: 100%;
  background-color: #fff
}
#banner img{
  width: 20.9375rem /* 335/16 */;
  height: 5.3125rem /* 85/16 */;
  padding: .5rem /* 8/16 */ .625rem /* 10/16 */;
  border-radius: .75rem /* 12/16 */;
}
#list{
  display: flex;
  justify-content: flex-start;
  /* width: 100%; */
  background-color: #fff;
  font-size: .75rem /* 12/16 */;
  height: 39rem /* 650/16 */;
  overflow: scroll;
  margin-bottom: 1rem /* 30/16 */;
}
/* 左侧列表 */
#kind{
  width: 22%;
  height: 100%;
  /* background-color: palegoldenrod; */
  overflow-y: auto;
  background-color: #f8f8f8;
  padding-top: .5rem /* 8/16 */;
}

/* 被选中的li样式 */
.active_kind{
  color: #333;
  background-color: #fff;
}
#kind li{
  padding: .9375rem /* 15/16 */ .625rem /* 10/16 */;
  /* background-color: violet; */
  margin-bottom: .3125rem /* 5/16 */;
  display: flex;
  align-items: center;
}
#kind img{
  width: .8125rem /* 13/16 */;
  height: .8125rem /* 13/16 */;
  margin-right: .3125rem /* 5/16 */;
}

/* 右侧列表 */
#food_warp{
  width: 78%;
  height: 100%;
  overflow-y: auto;
  margin-bottom: 1.25rem /* 20/16 */;
}
.food{
  width: 90%;
  padding:0 .3125rem /* 5/16 */;
  /* overflow: scroll; */
  /* overflow-y: auto; */
}
#food_tit{
  display: flex;
  justify-content: flex-start;
  margin: .3125rem /* 5/16 */;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
#food_tit h4{
  margin-right: .3125rem /* 5/16 */;
  color: #666
}
#food_tit span{
  font-size: .625rem /* 10/16 */;
  color: #999;
  
}


/* 底部 */
footer{
  width: 100%;
  /* height: 4.375rem 70/16; */
  position: fixed;
  bottom: 0;
  background-color: brown;
}
footer #footer_top{
  width: 100%;
  /* height: 1.25rem 20/16; */
  background-color: #fffad6;
  border-top: .0625rem /* 1/16 */ solid #f9e8a3;
  text-align: center;
  font-size: .6875rem /* 11/16 */;
}
#footer_bot{
  position: relative;
}
footer #footer_bot{
  padding-left: 5.625rem /* 90/16 */;
  background-color: #505051;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: calc( 100% - 5.625rem);
  /* height: calc(100% - 1.25rem); */
  height: 3.125rem /* 50/16 */;
}
.blue{
   background-color: #3190e8;
}
.gery{
  background-image: radial-gradient(circle,#363636 6.266667vw,#444 0);
}
footer #footer_bot #img_warp{
  width: 3.125rem /* 50/16 */;
  height: 3.125rem /* 50/16 */;
  border-radius: 50%;
  border: .1875rem /* 3/16 */ /* 2/16 */ solid #444;
  position: absolute;
  top: -.6125rem /* 5/16 */;
  left: 1.25rem /* 20/16 */;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
.vux-badge{
  position: absolute !important;
  top: .1875rem /* 3/16 */ /* 5/16 */ !important;
  left: .1875rem /* 3/16 */ !important;
  z-index: 1000 !important;
}
footer #footer_bot img{
  width: 50%;
  height: 50%
}
footer #footer_bot #text_big{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: .9375rem /* 15/16 */;
}
footer #footer_bot #text_small p{
  color: #999;
  font-size: .8rem /* 12/16 */;
}
footer #footer_bot #text_small #no_wei{
  font-size:1rem;
  color: white;
}
footer #footer_bot #text_small #yunfei{
  font-size: .625rem /* 10/16 */;
}
footer #footer_bot b{
  color: #fff;
}
footer #footer_bot b#jiesuan{
  width: 5rem /* 80/16 */;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 .3125rem /* 5/16 */;
  background-color: #38ca73;
  cursor: pointer;
}
#price small{
  font-size: .875rem /* 14/16 */;
}
.vux-tab-wrap{
  position: sticky !important;
  top: 0 !important;
  z-index: 2 !important;
}
/* 活动弹窗 */
#store{
  position: relative;
}
#huodong_wrap{
  width: 100%;
  position: fixed;
  bottom: 0;
  /* height: 12.5rem 200/16; */
  height: 0;
  overflow: hidden;
  /* display: none; */
  z-index: 100;
}
#huodong_pannel{
  overflow: scroll;
  background-color: white;
  padding: 1.5625rem /* 25/16 */ ;
  position: absolute;
  background-color: #f5f5f5;
  box-shadow: 0 -1px 5px 0 rgba(0,0,0,.4);
  bottom: 0;
  left: 0;
  right: 0;
  
} 
#huodong_pannel h2,
#linquan_pannel h2{
  text-align: center;
  font-size: .875rem /* 14/16 */;
  font-weight: 600;
}
#huodong_pannel div{
  overflow-y: scroll; 
  height: 9.375rem /* 150/16 */;
}
#huodong_pannel li{
  padding: .1875rem /* 3/16 */ .625rem /* 10/16 */;
  font-size: .75rem /* 12/16 */;
}
#huodong_pannel li span:nth-of-type(1){
  color: #fff;
  padding: .125rem /* 2/16 */;
}
#huodong_wrap #close1,
#linquan_pannel #close_lq{
  width: 1rem /* 20/16 */;
  height: 1rem /* 20/16 */;
  position: absolute;
  top: 2rem /* 15/16 */;
  right: 1.25rem /* 20/16 */;
  cursor: pointer;
  z-index: 20;
}

/* 领券弹窗 */
#linquan_wrap{
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 0;
  overflow: hidden;
  /* display: none; */
  z-index: 100;
}
#linquan_pannel{
  /* overflow: scroll; */
  background-color: white;
  padding: .9375rem /* 15/16 */ ;
  position: absolute;
  background-color: #f5f5f5;
  box-shadow: 0 -1px 5px 0 rgba(0,0,0,.4);
  bottom: 0;
  left: 0;
  right: 0;
}
#linquan_pannel>div{
  overflow-y: scroll; 
  height: 12rem;
}
#linquan_pannel li{
  height: 5.625rem /* 90/16 */;
  border: .133333vw solid #f5d9d5;
  /* padding: .5rem 8/16; */
  margin: .3125rem /* 5/16 */;
  background: #fff;
  display: flex;
  justify-content: flex-start;
}
#linquan_pannel .hb_right{
  width: 20%;
  height: 100%;
  text-align: center;
  line-height: 5.625rem /* 90/16 */;
  position: relative;
}
#linquan_pannel .hb_left{
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  border-right: .0625rem /* 1/16 */ #ff5339 dotted;
}
.hb_left .jine{
  color: #ff5339;
  font-size: 1rem /* 16/16 */;
  margin: 0 .9375rem /* 15/16 */;
}
.hb_left .jine b{
  font-weight: 700;
  font-size: 1.5625rem /* 25/16 */;
}
.hb_left .center .limit{
  font-size: .875rem /* 14/16 */;
  font-weight: 700;
}
.hb_left .center .tip{
  color: #666;
  font-size: .75rem /* 12/16 */;
}
.hb_left::before{
  content: "";
  position: absolute;
  top: 0;
  right: -.4rem /* 5.5/16 */;
  background: #f5f5f5;
  width: .625rem /* 10/16 */;
  height: .3125rem /* 5/16 */;
  border-radius: 0 0 .3125rem /* 5/16 */ .3125rem /* 5/16 */;
  border: .0625rem /* 1/16 */ solid #f5d9d5;
  border-top: none;
}
.hb_left::after{
  content: "";
  position: absolute;
  bottom: 0;
  right: -.4rem /* 5.5/16 */;
  background: #f5f5f5;
  width: .625rem /* 10/16 */;
  height: .3125rem /* 5/16 */;
  border-radius: .3125rem /* 5/16 */ .3125rem /* 5/16 */ 0 0 ;
  border: .0625rem /* 1/16 */ solid #f5d9d5;
  border-bottom: none;
}
.hb_right::before{
   content: "";
  position: absolute;
  bottom:-.34375rem;
  left: -.32rem /* 5.5/16 */;
  background: #f5f5f5;
  width: .625rem /* 10/16 */;
  height: .625rem /* 10/16 */;
  border-radius: 50%;
  border: none;
}
.hb_right::after{
   content: "";
  position: absolute;
  top:-.34375rem;
  left: -.32rem /* 5.5/16 */;
  background: #f5f5f5;
  width: .625rem /* 10/16 */;
  height: .625rem /* 10/16 */;
  border-radius: 50%;
  border: none;
}

/* 遮罩层 */
#mask{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: 11;
  transition: all 1s;
  display: none;
}



</style>