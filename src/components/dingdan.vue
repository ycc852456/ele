<template>
    <div id="dingdan">
        <back-header>{{tit}}</back-header>
        <h3>历史订单</h3>
        <card>
            <div slot="content" id="dingdan_content">
                <div class="dd_left">
                    <img src="https://fuss10.elemecdn.com/0/35/11f89c92c5e17dd0aa4b0384c9959jpeg.jpeg?imageMogr/thumbnail/!130x130r/gravity/Center/crop/130x130/" alt="">
                </div>
                <div class="dd_right">
                    <div class="row_tit">
                        <p class="shop_name">辉洪牛肉 ></p>
                        <p class="dd_state">订单已送达</p>
                    </div>
                    <div class="row_date">
                        <p class="time">2018-05-21 11:20</p>
                    </div>
                    <div class="row_list">
                        <p class="list">煎蛋&#x3000;等3件商品</p>
                        <p class="price">￥23</p>
                    </div>
                </div>
            </div>
        </card>
        <card>
            <div slot="content" id="dingdan_content">
                <div class="dd_left">
                    <img src="https://fuss10.elemecdn.com/1662603df4b0e6aee23a0c677f80303dpng.png" alt="">
                </div>
                <div class="dd_right">
                    <div class="row_tit">
                        <p class="shop_name">草本汤 (正荣店) ></p>
                        <p class="dd_state">订单已取消</p>
                    </div>
                    <div class="row_date">
                        <p class="time">2018-05-21 11:20</p>
                    </div>
                    <div class="row_list">
                        <p class="list">清凉解毒小肠汤&#x3000;等3件商品</p>
                        <p class="price">￥49</p>
                    </div>
                </div>
            </div>
        </card>
        <card>
            <div slot="content" id="dingdan_content">
                <div class="dd_left">
                    <img src="https://fuss10.elemecdn.com/ea031dae6e7b655dc14048dd05059f67jpeg.jpeg" alt="">
                </div>
                <div class="dd_right">
                    <div class="row_tit">
                        <p class="shop_name">杨记正宗漳州四果汤 ></p>
                        <p class="dd_state">订单已送达</p>
                    </div>
                    <div class="row_date">
                        <p class="time">2018-05-21 11:20</p>
                    </div>
                    <div class="row_list">
                        <p class="list">大份四果汤(850cc ) &#x3000; 加料可选</p>
                        <p class="price">￥15.6</p>
                    </div>
                </div>
            </div>
        </card>
    </div>
</template>

<script>
import backHeader from "./back_header/header.vue";
import bus from "../bus"
export default {
  name: "dingdan",
  data: function() {
    return {
      tit: "订单"
    };
  },
  components: {
    backHeader
  },
  beforeMount() {
      bus.$emit("showBar",true) 
  },
};
</script>

<style scoped>
#dingdan {
  margin-top: 2.5rem /* 40/16 */;
  background-color: white;
  margin-bottom: 3.125rem /* 50/16 */;
}
h3 {
  padding: 0.625rem /* 10/16 */;
  padding-bottom: 0;
  margin: 0;
}

#dingdan_content {
  display: flex;
  justify-content: flex-start;
  padding: 0.625rem /* 10/16 */ 0;
}

.dd_left img {
  width: 3.125rem /* 50/16 */;
  height: 3.125rem /* 50/16 */;
  margin: 0.625rem /* 10/16 */;
  border: 0.0625rem /* 1/16 */ solid #ddd;
  border-radius: 0.3125rem /* 5/16 */;
}
.dd_right {
  width: calc(100% - 5rem);
  margin-top: 0.625rem /* 10/16 */;
  margin-right: 0.625rem; /* 10/16 */
}
.row_tit p,
.row_date p,
.row_list p {
  display: inline-block;
}

.row_tit {
  height: 1.25rem /* 20/16 */;
}
.row_tit .shop_name {
  font-size: 1rem /* 16/16 */;
}
.row_tit .dd_state,
.row_list .price {
  font-size: 0.875rem /* 14/16 */;
  float: right;
}
.row_date {
  margin-bottom: 0.3125rem /* 5/16 */;
}
.time {
  font-size: 0.75rem /* 12/16 */;
  color: #999;
}
.row_list .list {
  font-size: 0.875rem /* 14/16 */;
}
.row_list .price {
  font-weight: 600;
}
</style>