<template>
    <div id="my">
        <back-header>{{tit}}</back-header>
        <router-link class="jump" to="/login" :style="{'pointer-events':(userphone==undefined?'all':'none')}">
            <div id="my_header">
                <div id="header_img">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg==" alt="">
                </div>
                <div id="header_text">
                    <h3 v-if="userphone==undefined">登录/注册</h3>
                    <h3 v-else>{{userphone}}</h3>
                    <div id="phone_svg">
                        <svg viewBox="0 0 655 1024" fill="#fff">
                            <path d="M0 122.501v778.998C0 968.946 55.189 1024 123.268 1024h408.824c68.52 0 123.268-54.846 123.268-122.501V122.501C655.36 55.054 600.171 0 532.092 0H123.268C54.748 0 0 54.846 0 122.501zM327.68 942.08c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zM81.92 163.84h491.52V819.2H81.92V163.84z"></path>
                        </svg>
                        <span v-if="userphone==undefined">登录后享受更多特权</span>
                        <span v-else>注销</span>
                    </div>
                    <div id="more_svg">
                    <svg fill="#fff" viewBox="0 0 1024 1024">
                        <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
                    </svg>
                    </div>
                </div>
            </div>
        </router-link>
        
        <!-- 钱包列表 -->
        <ul id="my_list">
            <li>
                <svg fill="#0098fb" viewBox="0 0 48 48">
                    <path fill="#f90" d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7 28c.6 0 1 .4 1 1s-.4 1-1 1h-6v5c0 .6-.4 1-1 1s-1-.4-1-1v-5h-6c-.6 0-1-.4-1-1s.4-1 1-1h6v-4h-6c-.6 0-1-.4-1-1s.4-1 1-1h5.6c-.6 0-1.3-.3-1.6-.8l-4.6-5.5c-.4-.4-.2-.8.4-.8h1.1c.6 0 1.3.3 1.6.8l4.3 5.1 4.3-5.1c.4-.4 1.1-.8 1.6-.8h1.1c.6 0 .7.3.4.8l-4.6 5.5c-.3.5-1 .8-1.6.8h6c.6 0 1 .4 1 1s-.4 1-1 1h-6v4h6z"></path>
                </svg>
                <p>钱包</p>
            </li>
            <li>
                <svg fill="#ff5f3e" viewBox="0 0 48 48">
                    <path  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm7.6 15H16.4c.1.1.1.2.1.4.4 2.5 3.3 4.3 7.1 4.4 2.4 0 4.8-.6 6.1-1.6.4-.3 1.1-.3 1.4.2.3.5.3 1.1-.2 1.4-1.6 1.3-4.3 2.1-7.1 2.1h-.5c-3.9-.2-7-2-8.3-4.6V32c0 .5.7 1 1.4 1h15.2c.8 0 1.4-.5 1.4-1V16c0-.5-.7-1-1.4-1zM35 32c0 1.7-1.5 3-3.4 3H16.4c-1.9 0-3.4-1.3-3.4-3V16c0-1.4 1-2.5 2.5-2.9h.2c.1-.1.3-.1.4-.1h15.5c1.9 0 3.4 1.3 3.4 3v16z"></path>
                </svg>
                <p>红包</p>
            </li>
            <li>
                <svg fill="#6ac20b" viewBox="0 0 48 48">
                    <path  d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm-9 26.8v3.3c0 1.2 3.6 2.9 9 2.9s9-1.7 9-2.9v-3.3c-2.1 1.3-5.6 1.9-9 1.9-3.4.1-6.9-.6-9-1.9zM24 15c-5.8 0-9 1.8-9 2.8 0 1 3.2 2.8 9 2.8s9-1.8 9-2.8c0-1-3.2-2.8-9-2.8zm-9 5.6V24c0 .9 3.2 2.8 9 2.8s9-1.8 9-2.8v-3.4c-2.1 1.3-5.6 1.9-9 1.9-3.4 0-6.9-.6-9-1.9zM35 24v6.1c0 3.2-5.5 4.9-11 4.9s-11-1.7-11-4.9V17.8c0-3.1 5.5-4.8 11-4.8s11 1.6 11 4.8V24z"></path>
                </svg>
                <p>金币</p>
            </li>
        </ul>
        <nav style="clear:both"></nav>
        <!-- 我的地址列表 -->
        <div class="my_row">
            <div class="row_svg">
                <svg class="svg" fill="#4aa5f0" viewBox="0 0 16 16" fill-rule="evenodd">
                    <path fill="none" d="M0 0h16v16H0z"></path>
                    <path d="M8 2.667A2.667 2.667 0 1 1 8 8a2.667 2.667 0 0 1 0-5.333M2.273 6.509a5.48 5.48 0 0 1-.051-.732 5.778 5.778 0 1 1 11.556 0 5.54 5.54 0 0 1-.085.948 5.704 5.704 0 0 1-.258.999 6.565 6.565 0 0 1-.081.22c-.016.039-.03.078-.047.116C11.932 11.45 8 13.778 8 13.778S3.734 11.273 2.535 7.64a5.756 5.756 0 0 1-.262-1.132zm8.584 6.701c2.516.124 5.143.43 5.143 1.068 0 .901-5.233 1.138-8 1.138-2.768 0-8-.237-8-1.138 0-.639 2.627-.944 5.143-1.068 1.22 1.044 2.3 1.61 2.404 1.663.14.07.296.108.453.108.156 0 .314-.038.454-.109.104-.052 1.184-.618 2.403-1.662z"></path>
                </svg>
            </div>
            
            <div class="row_right">
                <span>我的地址</span>
                <svg viewBox="0 0 1024 1024"> 
                    <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
                </svg>
            </div>
        </div>
        <!-- 金币列表 -->
        <div>
            <div class="my_row" style="margin:0px;border-bottom:none">
                <div class="row_svg">
                    <svg class="svg" fill="#fc7b53" viewBox="0 0 16 16" fill-rule="evenodd">
                        <path fill="#FFF" fill-opacity="0" d="M0 0h16v16H0z"></path>
                        <path fill="#94D94A" d="M2.257.5h11.486a1 1 0 0 1 .998.936l.757 11.728a2 2 0 0 1-1.996 2.129H2.498a2 2 0 0 1-1.996-2.129L1.26 1.436A1 1 0 0 1 2.257.5zm9.658 3.782C11.82 6.452 10.14 8.18 7.95 8.18c-2.202 0-3.925-1.747-4.003-3.933a.594.594 0 0 1 .36-1.075.596.596 0 1 1 .25 1.14c.109 1.82 1.548 3.26 3.393 3.26 1.853 0 3.263-1.455 3.357-3.287a.595.595 0 0 1 .3-1.113.595.595 0 1 1 .307 1.11z"></path>
                    </svg>
                </div>
                <div class="row_right">
                    <span>金币商城</span>
                    <svg viewBox="0 0 1024 1024"> 
                        <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
                    </svg>
                </div>
            </div>
            <div class="my_row" style="margin:0px;">
                <div class="row_svg">
                    <svg class="svg" viewBox="0 0 40 40" fill-rule="evenodd">
                        <path fill="#FC7B53" d="M21 12c-.167-.434-1-1-1-1-.275.437-.767.601-1 1v7H4v-6c0-.843.716-1.562 2-2h6c-1.49.06-2.84-.711-3-2 .06-1.814 1.949-4.528 5-4 2.552.733 4.541 2.943 6 5 1.6-2.094 3.778-4.58 7-5 2.23-.288 4.282 2.198 4 4-.208 1.276-1.582 2.06-3 2h6c1.173.437 1.89 1.156 2 2v6H21v-7zm-7-6c-1.123-.321-1.966.238-3 1 .097.68-.258 1.373 0 2 1.653 1.192 5.452 1.096 8 1-1.202-1.529-2.679-3.07-5-4zm16 3c.726-1.246-1.22-3.714-3-3-2.313 1.075-3.755 2.506-5 4 1.071 0 2.158.023 3 0 1.542-.075 3.965-.16 5-1zM19 36H8c-1.326-.255-2-.907-2-2V20h13v16zm13 0H21V20h13v14c-.47 1.53-1.124 1.745-2 2z"></path>                
                    </svg>
                </div>
                <div class="row_right">
                    <span>分享拿10元现金</span>
                    <svg viewBox="0 0 1024 1024"> 
                        <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
                    </svg>
                </div>
            </div>
        </div>
        <!-- 我的客服 -->
        <div style="margin:.9375rem /* 15/16 */ 0">
            <div class="my_row" style="margin:0px;border-bottom:none">
                <div class="row_svg">
                    <svg class="svg" fill="#4aa5f0" viewBox="0 0 54 54" fill-rule="evenodd">
                        <path stroke="#4DA6F0" stroke-width="3" d="M48 28c0 11.598-9.402 21-21 21"></path>
                        <path fill="#4DA6F0" d="M43 40.012v-18h2a9 9 0 0 1 9 9 9 9 0 0 1-9 9h-2zM10 40.012H9a9 9 0 0 1-9-9 9 9 0 0 1 9-9h1v18zM27 46a3 3 0 1 0 0 6 3 3 0 1 0 0-6"></path>
                        <path fill="#4DA6F0" d="M43 24h6c0-12.426-9.574-23-22-23S4 11.574 4 24h6c0-9.098 7.902-17 17-17 9.097 0 16 7.902 16 17z"></path>
                    </svg>
                </div>
                <div class="row_right">
                    <span>我的客服</span>
                    <svg viewBox="0 0 1024 1024"> 
                        <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
                    </svg>
                </div>
            </div>
            <div class="my_row" style="margin:0px;">
                <div class="row_svg">
                    <svg class="svg" fill="#3cabff" viewBox="0 0 40 40" >
                        <path d="M30 5H10c-2.8 0-5 2.2-5 5v20c0 2.8 2.2 5 5 5h20c2.8 0 5-2.2 5-5V10c0-2.8-2.2-5-5-5zm-3.9 22.7c-.1.2-.3.4-.6.5-4.3 2.8-10.1 1.6-13-2.8-2.8-4.3-1.6-10.2 2.8-13 4.3-2.8 10.2-1.6 13 2.8.2.2.3.5.4.8.1.2 0 .5-.2.7l-8.8 5.7c-.2.2-.6.1-.7-.2l-.5-.7c-.4-.6-.2-1.5.4-1.9l5.6-3.6c.2-.2.3-.5.2-.7l-.1-.1c-2.2-1.8-5.4-2.1-7.9-.4-3.1 2-4 6.1-2 9.2 2 3.1 6.1 4 9.2 2 .6-.4 1.3-.2 1.7.4l.3.7c.1.2.4.5.2.6zm3.1-4.4l-.9.6c-.2.2-.6.1-.7-.2L26.5 22c-.2-.2-.1-.6.2-.7l1.8-1.1c.2-.2.6-.1.7.2l.6.9c.3.6.1 1.5-.6 2z"></path>
                    </svg>
                </div>
                <div class="row_right">
                    <span>下载饿了么</span>
                    <svg viewBox="0 0 1024 1024"> 
                        <path d="M716.298 417.341l-.01.01L307.702 7.23l-94.295 94.649 408.591 410.117-408.591 410.137 94.295 94.639 502.891-504.76z"></path>
                    </svg>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import backHeader from "./back_header/header.vue";
import bus from "../bus"
export default {
  name: "my",
    data: function() {
        return {
            tit: "我的",
            userphone:""
        };
    },
    components: {
        backHeader
    },
    beforeMount() {
        bus.$emit("showBar",true) 
        // console.log(this.$route.query.phone)
        this.userphone=this.$route.query.phone
        
    },
    mounted() {
        if(this.userphone!=undefined){
            console.log(122222221)
            $(".jump").removeAttr('href').prop("disabled","disabled").click(function(e){
                e.preventDefault();
            })
        }
    },
    
};
</script>

<style scoped>
#my{
    margin-top: 2.5rem /* 40/16 */;
    margin-bottom: 3.125rem /* 50/16 */;
}
#my_header{
    display: flex;
    justify-content: flex-start;
    background-image: linear-gradient(90deg,#0af,#0085ff);
    padding: 1.25rem /* 20/16 */;
    color: #fff;
}

#header_img img{
    border-radius: 50%;
    width: 3.625rem /* 58/16 */;
    height: 3.625rem /* 58/16 */;
}
#header_text{
    width: calc( 100% - 3.625rem);
    padding: 0 1.25rem /* 20/16 */;
    position: relative;
    cursor: default;
}
#phone_svg svg{
    width: .5rem /* 8/16 */;
    height: .6875rem /* 11/16 */;
}
#phone_svg span{
    font-size: .75rem /* 12/16 */;
}
#more_svg{
    width: .625rem /* 10/16 */;
    height: 1.25rem /* 20/16 */;
    position: absolute;
    right: 0;
    top:.625rem /* 10/16 */;
}

#my_list li{
    float: left;
    box-sizing: border-box;
    width: calc( 100% / 3);
    text-align: center;
    border-bottom: .0625rem  solid #ddd;
    background-color: white;
    padding:  .625rem /* 10/16 */;
    border-right: 1px solid #ddd;
}
#my_list li:last-child{
    border-right: none;
}
#my_list li svg{
    width: 1.5625rem /* 25/16 */;
    height: 1.5625rem /* 25/16 */;
}
#my_list li p{
    font-size: .875rem /* 14/16 */;
    font-weight: 600;
}

/* 我的地址 */
.my_row{
    cursor: pointer;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: flex-start;
    background-color: white;
    padding: .625rem /* 10/16 */ .9375rem /* 15/16 */;
    margin: .9375rem /* 15/16 */ 0;
}
.svg{
   
    width: 1.125rem /* 18/16 */;
    height: 1.125rem /* 18/16 */;
}
.row_right{
    width: calc(100% - 1.125rem);
    margin-left: .625rem /* 10/16 */;
    line-height: 1.25rem /* 20/16 */;
    position: relative;
}
.row_right svg{
    position: absolute;
    right: .625rem /* 10/16 */;
    top: .375rem /* 6/16 */;
    width: .625rem /* 10/16 */;
    height: .625rem /* 10/16 */;
    fill: #bbb;
}
</style>