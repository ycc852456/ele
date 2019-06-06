
<template>
    <div>
    <!-- <main class="main3">
        <div class="main3banner" v-if="story.brand_intros.length>0">
            <img :src="'https://fuss10.elemecdn.com/'+story.header_image+'.png?imageMogr/thumbnail/!460x260r/gravity/Center/crop/460x260/'" alt="">
            <p class="main3ptitle">{{story.title}}</p>
            <p class="main3pstitle" >{{story.brand_intros.length>0?story.brand_intros[0].brief:''}}</p>

            <p class="ppgs">查看品牌故事</p>
            </div>
            <div class="psinfo">
                <p class="ptitle">配送信息</p>
                <p>
               
                由{{alldata.delivery_mode?alldata.delivery_mode.text:'商家配送'}}约<span class="sdsj">{{alldata.order_lead_time}}</span>分钟送达，距离<span class="jl">{{alldata.distance}}m</span></p>
                <p>配送费￥<span class="psf">{{alldata.float_delivery_fee}}</span></p>
            </div>

            <div class="hdyfw">
                <p class="ptitle">活动与服务</p>
                <ul>
                    <li v-for="(valu,ind) in ractives.concat(alldata.supports)" :key="ind"><badge :text="valu.icon_name=='首'?'首单':valu.icon_name=='满'?'满减':valu.icon_name=='折'?'折扣':valu.icon_name=='特'?'特价':'其他'" class="fnzs" :style="'background-color:#'+valu.icon_color+''"></badge>{{valu.description}}</li>
                </ul>
            </div>
            <div class="sjsj">
                <p class="ptitle">商家实景</p>
                <div>
                    <img src="http://fuss10.elemecdn.com/f/4f/936d3616894ada989c428be66b96bjpeg.jpeg?imageMogr/thumbnail/!200x200r/gravity/Center/crop/200x200/" alt="">
                    <span>门面( <span>2张</span> )</span>
                </div>
            </div>

            <div class="sjinfo">
                <div class="sjinfo1">
                <p class="ptitle">商家信息</p>
                <p class="">{{alldata.description}}</p>
                </div>
                <div class="sjinfo2">
            
                    <p><span class="ptitle2">品类</span> <span style="margin-top: .4375rem;"><span v-for="(ve,ie) in alldata.flavors" :key="ie">{{ve.name}} <span v-if="ie!=alldata.flavors.length-1">,</span> </span></span></p>
                    <p><span class="ptitle2">商家电话</span> <span>{{alldata.phone}} <span>></span></span></p>
                    <p><span class="ptitle2">地址</span> <span style="width: 70%;margin-top: .5rem;">{{alldata.address}}</span></p>
                    <p><span class="ptitle2">营业时间</span>  <span>{{alldata.opening_hours?alldata.opening_hours[0]:'24小时'}}</span> </p>
                </div>
            </div>
            <div class="yyzy">
                <p > <span class="ptitle">营业资源</span><span>></span></p> 
            </div>
    </main> -->

    </div>
</template>

<script>
export default {
    name:"shangjia"
}
</script>

<style scoped>
main{
 padding: .3825rem 0rem;
  
    background-color: #fff;
}
.main3{
    background-color: unset;

    padding: 0px;
   
}
.main3banner{
    padding: .625rem;
    background-color: #fff;

}
.main3banner img{
    width: 100%;

}
.main3ptitle{
    font-size: .905rem;
    font-weight: 700;
    color: #333

}
.main3pstitle,.ppgs,.psinfo,.hdyfw li,.sjinfo{
    font-size: .8rem;
    color: #666;
}
.ppgs{
    padding: 1.25rem /* 20/16 */ 0rem;
    text-align: center;
}
.psinfo{
     padding:/* 20/16 */ .625rem .625rem 1rem .625rem;
     margin: .625rem /* 10/16 */ 0rem;

     background-color: #fff;
}
.fnzs{
    
    font-size: 0.7rem;
    border-radius: 0px;
    margin-right:.555rem;
}

.ptitle{
    font-size: .905rem;
    font-weight: 700;
    color: black;
    padding: .325rem /* 10/16 */ 0rem;
}
 .hdyfw{
     padding: .625rem;
     background-color: #fff;
 }   
 .hdyfw li{
        list-style: none;
        
 }
 .sjsj{
     margin: .625rem 0rem;
     padding: .625rem;
     background-color: #fff;
  
 }
 .sjsj>div{
     width: 4rem;
     height: 4rem;
    position: relative; 
    font-size: .75rem;
    text-align: center;
 }
 .sjsj img{
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0px;
 }
.sjsj>div>span{
    position: absolute;
    bottom: 0rem;
    z-index: 100;
    width: 100%;
    color: #fff;
    left: 0px;
}
.ptitle2{
    font-size: .905rem;
    font-weight: 700;
    color: #333;
    padding: .325rem /* 10/16 */ 0rem;
}
.sjinfo{
    padding: .625rem;
    margin: .625rem 0rem;
    background-color: #fff;
  
}
.sjinfo p {
    padding: .325rem /* 10/16 */ 0rem;
}
.sjinfo2 p{
    display: flex;
    justify-content: space-between; 
    border-top: 1px solid #eee;
    
}
.sjinfo2 p:last-child{
    
    padding-bottom: 0px;
}
.yyzy{
    padding: .625rem ;
    background-color: #fff;
    margin: 0.625rem 0rem;
}
.yyzy p{
     display: flex;

    justify-content: space-between;
   
     
}
.yyzy p span.ptitle{
    padding: 0px;
}
.yyzy p span:last-child{
    font-size: 1rem;
    color: #666;

}
</style>
