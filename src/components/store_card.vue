<template>
    <div id="store_card">
        <li>
            <!-- {{price}} -->
            <img v-if="foodlist.image_path&&foodlist.image_path.endsWith('png')" :src="'https://fuss10.elemecdn.com/'+foodlist.image_path+'.png'" alt="">
            <img v-else-if="foodlist.image_path&&foodlist.image_path.endsWith('jpeg')" :src="'https://fuss10.elemecdn.com/'+foodlist.image_path+'.jpeg'" alt="">
            <img v-else-if="foodlist.image_path&&foodlist.image_path.endsWith('jpg')" :src="'https://fuss10.elemecdn.com/'+foodlist.image_path+'.jpg'" alt="">
            <div class="food_right">
                <p class="food_name">{{foodlist.name}}</p>
                <p class="food_jieshao">{{foodlist.description}}</p>
                <p class="chengji">
                    <span class="yueshou">月售{{foodlist.month_sales}}份</span>
                    <span class="haoping" v-if="foodlist.satisfy_rate!=0">好评率100%</span>
                </p>
                <div class="main">
                <div class="price">￥{{foodlist.specfoods[0].price}}<small v-if="foodlist.specfoods.length>1">起</small></div>
                    <div class="btn">
                        <span v-if="count>0" class="jian" @click="jian">
                            <svg fill="rgb(35, 149, 255)" viewBox="0 0 44 44">
                                <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm0 42C11 42 2 33 2 22S11 2 22 2s20 9 20 20-9 20-20 20z" clip-rule="evenodd"></path>
                                <path fill-rule="evenodd" d="M32 20c1.1 0 2 .9 2 2s-.9 2-2 2H12c-1.1 0-2-.9-2-2s.9-2 2-2h20z" clip-rule="evenodd"></path>
                            </svg>
                        </span>
                        <span v-if="count>0" class="count">{{count}}</span>
                        <span class="jia" @click="jia">
                            <svg fill="rgb(35, 149, 255)" viewBox="0 0 44 44">
                                <path fill="none" d="M0 0h44v44H0z"></path>                              
                                <path fill-rule="evenodd" d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm10 24h-8v8c0 1.1-.9 2-2 2s-2-.9-2-2v-8h-8c-1.1 0-2-.9-2-2s.9-2 2-2h8v-8c0-1.1.9-2 2-2s2 .9 2 2v8h8c1.1 0 2 .9 2 2s-.9 2-2 2z" clip-rule="evenodd"></path>                            
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    </div>
</template>


<script>
export default {
    name:"storecard",
    props:["foodlist","price"],
    data:function(){
        return{
            count:0
        }
    },
    methods:{
        jian(){
            if (this.count > 0) {
                this.count--
                // 乘随机数是为了让watch每次都能监听到值的变化
                this.$emit("input", (-1) * this.price + Math.random()*0.009)
            }else{
                this.count=0
            }
           
        },
        jia(){
            this.count++;
            this.$emit("input", 1 * this.price + Math.random()*0.009)
        }
    },
    beforeMount() {
        // console.log(this.foodlist)
    },
}
</script>



<style socped>
    .food li{
  margin:0 0 .3125rem /* 5/16 */ .3125rem /* 5/16 */;
  padding: .625rem /* 10/16 */ 0;
  display: flex;
  justify-content: flex-start;
  /* background-color: skyblue; */
  
}
.food li img{
  width: 5.625rem /* 90/16 */;
  height: 5.625rem /* 90/16 */;
  border-radius: .1875rem /* 3/16 */;
  margin-right: .3125rem /* 5/16 */;
}
.food_right{
  width: calc( 100% - 5.625rem - .3125rem);
}
.food_right .food_name{
  width: 100%;
  font-size: .875rem /* 14/16 */;
  font-weight: 600;
}
.food_right .food_jieshao{
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #999;
  font-size: .6875rem /* 11/16 */;
  width: 100%;
}
.food_right .chengji{
  color: #999;
  font-size: .6875rem;
}
.food_right .main{
  display: flex;
  justify-content: space-between;
  margin-top: .625rem /* 10/16 */;
  padding-right: .625rem /* 10/16 */;
}
.food_right .main .btn svg{
  width: 1.25rem /* 20/16 */;
  height: 1.25rem /* 20/16 */;
}
.main .price{
  font-size: 1rem /* 16/16 */;
  color: rgb(255, 83, 57);
}
.main .price small{
    font-size: .625rem /* 10/16 */;
}
.main .btn{
  display: flex;
}
.main .btn span{
  padding: 0 .3125rem /* 5/16 */;
}
.main .btn span.count{
  font-size: .875rem /* 14/16 */;
}
</style>