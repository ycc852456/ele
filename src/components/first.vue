<template>
    <div id="first" >
        <!-- 头部 -->
        <header>
            <div id="first_header">
                <svg id="dingwei" viewBox="0 0 26 31">
                    <path fill="#FFF" d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"></path>
                </svg>
                <span id="address">万翔国际商务中心</span>
                <svg id="xiala" viewBox="0 0 14 8">
                    <path fill="#FFF" fill-rule="evenodd" d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"></path>
                </svg>
            </div>
        </header>


        <!-- 搜索 -->
        <div id="search-wrapper">
            <div id="search">
                <router-link to="/search" tag="a" id="a_search">
                    <svg id="svg_search" viewBox="0 0 16 16">
                        <path fill-opacity=".38" d="M14.778 13.732a.739.739 0 1 1-1.056 1.036l-2.515-2.565a.864.864 0 0 1-.01-1.206 4.894 4.894 0 0 0 1.357-3.651c-.126-2.492-2.156-4.52-4.648-4.647a4.911 4.911 0 0 0-5.16 5.163c.126 2.475 2.13 4.496 4.605 4.642.451.026.896-.008 1.326-.1a.739.739 0 0 1 .308 1.446c-.56.12-1.137.164-1.72.13-3.227-.19-5.83-2.815-5.995-6.042a6.39 6.39 0 0 1 6.71-6.715c3.25.165 5.884 2.8 6.05 6.048a6.37 6.37 0 0 1-1.374 4.3l2.12 2.161z"></path>
                    </svg>
                    <span>搜索饿了么商家、商品名称</span>
                </router-link>
            </div>
        </div>


        <!-- 分类轮播 -->
        <swiper loop  dots-position="center" height="10.625rem">
            <swiper-item v-for="(item,index) in category" :key="index">
                <div class="kind_swiper" v-for="(item2,index2) in item" :key="index2"><img :src="item2.img" alt=""><p>{{item2.title}}</p></div>
            </swiper-item>
        </swiper>


        <!-- 品质套餐 -->
        <div id="pztc-wrapper">
            <div id="pztc">
                <div id="pztc_small">
                    <h3>品质套餐</h3>
                    <p>搭配齐全吃得好</p>
                    <p>立即抢购 ></p>
                    <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
                </div>
                <div id="pztc_small">
                    <h3>限量抢购</h3>
                    <p>超值美味&#x3000;9.9元起</p>
                    <p><span>3323人</span><span>正在抢></span></p>
                    <img src="https://fuss10.elemecdn.com/d/d4/16ff085900d62b8d60fa7e9c6b65dpng.png?imageMogr/thumbnail/!240x160r/gravity/Center/crop/240x160/" alt="">
                </div>
            </div>
        </div>


        <!-- 图片轮播 -->
        <swiper id="img_swiper" auto :list="imgswiper" height="5.3125rem" dots-position="center"></swiper>
        
        
        <!-- 推荐商家 -->
        <p id="tjsj">推荐商家</p>
        <!-- tab切换 -->
        <div style="position: sticky;top: 3.125rem;z-index: 10;">
          <tab id="first_tab" ref="hh" :line-width="0" active-color='#333' v-model="pannel_index"  @on-before-index-change="switchTabItem" prevent-default style="position: sticky;top: 3.125rem;z-index: 10">
            <tab-item class="vux-center "  v-for="(item, index) in tab_list" :selected="tabclick === item" :key="index"><span>{{item}}</span> </tab-item>
          </tab>
              <ul id="zonghepaixu">
                  <li>综合排序<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
                  <li>好评优先<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
                  <li>销量最高<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
                  <li>起送价最低<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
                  <li>配送最快<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAkFJREFUSA3tlbtrVFEQxr/JusEkdqYR0mU3EGyECCKCIEIghIgSfBSCCkbwWqTQykoQ41+QbHaRRC0MSDCgjeADO0ERQRBB10YsU/gC89jd8ZuNez17H7gmN2BxT7Fnzpw587vzzbl3gXSkCqQKJKSAJJQnlKb3huawjDkCZj94KIiIukGbAs5P636t4h5J2w1GyHz5ghx1wW3uIgm7b0pPaQ2PHOg3tGEimDsxsKpKbkonqoqbqmivgwRLksFI+by8DoITkXqgqJ1fq7hN4GgDwMQVajxa9uR+w+fOW9zFeuz+ou74UoEl3+2fFyilPPs+BmpxkVLnpnVvflLHTT4/WYSRL+mu1QpecOsPlAseukTorYgjviuU2F4DWcFzytbNqCfSjtPlMfnsn/htsJ+HoLjDS9Tl7ongOuW97Pqi7FDFslzvlUFtHNRVvOkr6Im15dpvb0Ev8sEWglCWWmoFallCFeeLuqdWxVNW0+nCaM9JB8bxE9cIHAvsWaL5kx6OXxGpBfei1iGwBeUmdYTdXSA84x6ijCv+q9K0gcdbuzH89hib1OIISW3n+JV5wMkL5oiBviT0yL9ALW8k2DY+elLidNXsuEEF3mW7METoj7iYOH+k1G4wb+8MKz3j+uq24JNksS/qxodiIxyxFTdie/pxjk/3sLG2mZUu8sszuF5oPYebMM7eeVe3LS3iGS/bAKHfeasPsBWv4uJb8f+1YktiPezIYth6mhEc3ii0lQdriuGfQbbJkS5SBf5HBX4Bvl6o9YDxgOsAAAAASUVORK5CYII=" alt=""></li>
              </ul>
      </div>
        <div id="diancan" class="pannel" >
                <div class="tab-swiper vux-center">
                    <!-- 商家列表 -->
                    
                        <card v-for="(item3,index) in shoplist" :key="index">
                        
                            <div slot="content" class="card-content">
                                <router-link :to="{name:'store',params:{
                                  id:item3.id,
                                  yunfei:item3.float_delivery_fee,
                                  qibu:item3.float_minimum_order_amount,
                                  tip:item3.activities.length>1?item3.activities[1].description:'',
                                  logo:item3.image_path,
                                  stroe_name:item3.name,
                                  scroe:item3.rating,
                                  xiaoliang:item3.rating_count,
                                  time:item3.order_lead_time,
                                  pinpai:item3.is_premium,
                                  activities:item3.activities,
                                  promotion_info:item3.promotion_info,
                                  chushi:item3.float_minimum_order_amount,
                                  
                                  }}">
                                  <div id="card_left">
                                      <!-- :src="" 'https://fuss10.elemecdn.com/'+image_path+"jpeg" -->
                                      <img v-if="item3.image_path.endsWith('png')" :src="'https://fuss10.elemecdn.com/'+item3.image_path+'.png'" alt="">
                                      <img v-else-if="item3.image_path.endsWith('jpeg')" :src="'https://fuss10.elemecdn.com/'+item3.image_path+'.jpeg'" alt="">
                                      <img v-else-if="item3.image_path.endsWith('jpg')" :src="'https://fuss10.elemecdn.com/'+item3.image_path+'.jpg'" alt="">
                                  </div>
                                  <div id="card_right">
                                      <div class="card_row">
                                          <!-- i:  v-if="item.is_premium" -->
                                          <!-- item.name -->
                                          <h3><i v-if="item3.is_premium">品牌</i>{{item3.name}}</h3>
                                          <span class="float_left">...</span>
                                      </div>
                                      <div class="card_row">
                                          <div id="star">
                                              <!-- {{item3.rating / 5 * 100}} -->
                                              <!-- rating / 5 * 宽度 -->
                                              <div id="star_gery"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU0LjAxNyA4LjA3MmwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNTMuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0tNDggMEwzLjQ2NSA5LjYzM2MtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBMNy41NSAzLjM1MmwyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNkw4LjQ5NyA2LjI2OWwuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0wxNy42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDI5LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMNDEuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2eiIgZmlsbD0iI0VFRSIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt=""></div>
                                              <div id="star_yellow" :style="'width:'+item3.rating / 5 * 100 +'%'"><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiNGRkRFMDAiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRkZCMDAwIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48cGF0aCBkPSJNNTQuMDE3IDguMDcybC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w1My42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bS00OCAwTDMuNDY1IDkuNjMzYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDUuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMEw3LjU1IDMuMzUybDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2TDguNDk3IDYuMjY5bC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6bTEyIDBsLTIuNTUyIDEuNTYxYy0uNDc2LjI5MS0uNzU4LjA5Ni0uNjI2LS40NTVsLjY5Ni0yLjkwOS0yLjI3My0xLjk0NGMtLjQyNC0uMzYyLS4zMjUtLjY5MS4yMzktLjczNmwyLjk4Mi0uMjM3TDE3LjYzLjU4OWMuMjEzLS41MTUuNTU3LS41MjMuNzc0IDBsMS4xNDYgMi43NjMgMi45ODIuMjM3Yy41NTYuMDQ0LjY3LjM2OC4yNC43MzZsLTIuMjc0IDEuOTQ0LjY5NiAyLjkxYy4xMy41NDItLjE0My43NS0uNjI2LjQ1NGwtMi41NTEtMS41NnptMTIgMGwtMi41NTIgMS41NjFjLS40NzYuMjkxLS43NTguMDk2LS42MjYtLjQ1NWwuNjk2LTIuOTA5LTIuMjczLTEuOTQ0Yy0uNDI0LS4zNjItLjMyNS0uNjkxLjIzOS0uNzM2bDIuOTgyLS4yMzdMMjkuNjMuNTg5Yy4yMTMtLjUxNS41NTctLjUyMy43NzQgMGwxLjE0NiAyLjc2MyAyLjk4Mi4yMzdjLjU1Ni4wNDQuNjcuMzY4LjI0LjczNmwtMi4yNzQgMS45NDQuNjk2IDIuOTFjLjEzLjU0Mi0uMTQzLjc1LS42MjYuNDU0bC0yLjU1MS0xLjU2em0xMiAwbC0yLjU1MiAxLjU2MWMtLjQ3Ni4yOTEtLjc1OC4wOTYtLjYyNi0uNDU1bC42OTYtMi45MDktMi4yNzMtMS45NDRjLS40MjQtLjM2Mi0uMzI1LS42OTEuMjM5LS43MzZsMi45ODItLjIzN0w0MS42My41ODljLjIxMy0uNTE1LjU1Ny0uNTIzLjc3NCAwbDEuMTQ2IDIuNzYzIDIuOTgyLjIzN2MuNTU2LjA0NC42Ny4zNjguMjQuNzM2bC0yLjI3NCAxLjk0NC42OTYgMi45MWMuMTMuNTQyLS4xNDMuNzUtLjYyNi40NTRsLTIuNTUxLTEuNTZ6IiBmaWxsPSJ1cmwoI2EpIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=" alt=""></div>
                                          </div>
                                          <!-- item.rating -->
                                          <span id="pingfen">{{item3.rating}}</span>
                                          <!-- item.rating_countrating_count -->
                                          <span id="xiaoliang">月售{{item3.rating_count}}单</span>
                                      </div>
                                      <div class="card_row">
                                          <div id="moneylimit"><ul><li>￥{{item3.piecewise_agent_fee.rules[0].price}}元起送</li><li>{{item3.piecewise_agent_fee.description}}</li></ul></div>
                                          <!-- 公里：distance / 1000 .tofixed(2) -->
                                          <div id="julilimit " class="float_left"><ul><li>{{(item3.distance / 1000).toFixed(2)}}km</li><li>{{item3.order_lead_time}}分钟</li></ul></div>
                                      </div>
                                      <div class="card_row">
                                          <div id="fangkuai_kind">
                                              <!-- support_tags数组 里的text -->
                                              <span v-for="(item,i) in item3.support_tags" :key="i">{{item.text}}</span>
                                              <b>
                                                  <img src="https://fuss10.elemecdn.com/a/c1/24c767ffa7fd296d3e2d6f01798c6png.png?imageMogr/thumbnail/!20x20r/gravity/Center/crop/20x20/" alt="">
                                                  <i style="font-style:unset">口碑人气好店</i>
                                              </b>
                                          </div>
                                      </div>
                                      <!-- <br> -->
                                      <div class="card_row">
                                          <div id="shou">
                                              <!-- {{item3.activities}} -->
                                              <span>{{item3.activities[0].icon_name}}</span>
                                              <span>{{item3.activities[0].name}}</span>
                                              
                                          </div>
                                          <p id="huodong" class="float_left" style="cursor:default" @click.prevent="change">
                                              <span>{{item3.activities.length}}个活动</span>
                                              <img class="rotate_img" style="transform:'rotate(180deg)'" src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBmaWxsPSIjOTk5IiBkPSJNNC41NzcgNS40MjNjLjc5Ljc3IDIuMDczLjc2NyAyLjg1NyAwbDQuMTItNC4wMjZDMTIuMzQ1LjYyNSAxMi4wOSAwIDEwLjk4NSAwSDEuMDI3Qy0uMDc3IDAtLjMzLjYzLjQ1NyAxLjM5N2w0LjEyIDQuMDI2eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+" alt="">
                                          </p>
                                      <!-- {{huodong_show[index]}} -->
                                      </div>
                                      <div class="card_row">
                                          <p id="jian">
                                              <span>{{item3.activities.length>1?item3.activities[1].icon_name:''}}</span>
                                              <span>{{item3.activities.length>1?item3.activities[1].description:''}}</span>
                                          </p>
                                      </div>
                                      
                                      <div  id="more_hd">
                                          <p v-for="(items,i) in item3.activities" :key="i">
                                              <span v-if="!items.attribute" :style="'background-color:#'+items.icon_color+';color:white;padding:0 0.125rem;border-radius: 0.125rem'">{{items.icon_name}}</span>
                                              <span v-if="!items.attribute">{{items.name}}</span>
                                          </p>
                                      </div>
                                  </div> 
                                </router-link>
                            </div> 
                           
                        </card>
                   
                </div>
               
                
              <div id="mask"></div>
        </div>
        <div id="pingjia" class="pannel" style="background-color:pink;height:50px;display:none"></div>
        <div id="shangjia" class="pannel" style="background-color:yellow;height:50px;display:none"></div>
        <div id="shaixuan" class="pannel">
        <div class="sx">
            
                  <div class="sx1">
                      <p>商家服务(可多选)</p>
                      <ul>
                          <li>
                              <img src="https://fuss10.elemecdn.com/b/9b/45d2f6ff0dbeef3a78ef0e4e90abapng.png?imageMogr/thumbnail/!24x24r/gravity/Center/crop/24x24/" alt="">
                              蜂鸟专送</li>
                          <li>
                              <img src="https://fuss10.elemecdn.com/6/7c/417ba499b9ef8240b8014a453bf30png.png?imageMogr/thumbnail/!24x24r/gravity/Center/crop/24x24/" alt="">
                              品牌商家</li>
                          <li>
                              <img src="https://fuss10.elemecdn.com/2/cd/444d002a94325c5dff004fb3b9505png.png?imageMogr/thumbnail/!24x24r/gravity/Center/crop/24x24/" alt="">
                              食安保</li>
                          <li>
                              <img src="https://fuss10.elemecdn.com/c/93/ded991df780906f7471128a226104png.png?imageMogr/thumbnail/!24x24r/gravity/Center/crop/24x24/" alt="">
                              新店</li>
                          <li>
                              <img src="https://fuss10.elemecdn.com/3/d4/5668ffc03151826f95b75249bea31png.png?imageMogr/thumbnail/!24x24r/gravity/Center/crop/24x24/" alt="">
                              开发票</li>
                      </ul>
                  </div>
                  <div class="sx2">
                      <p>优惠活动(单选)</p>
                      <ul>
                          <li>新用户优惠</li>
                          <li>特价商品</li>
                          <li>下单立减</li>
                          <li>赠品优惠</li>
                          <li>下单返红包</li>
                          <li>进店领红包</li>
                      </ul>
                  </div>
                  <div class="sx3">
                      <p>人均消费</p>
                      <ul>
                          <li>￥20以下</li>
                          <li>￥20-￥40</li>
                          <li>￥40-￥60</li>
                          <li>￥60-￥80</li>
                          <li>￥80-￥100</li>
                          <li>￥100以上</li>
                      </ul>
                  </div>
                  <div class="buttongroup">
                      <button>清空</button><button>确定</button>
                  </div>
              </div>
              <div id="mask"></div>
        </div>
          
        
    </div>
</template>

<script>
import { Swiper, SwiperItem } from "vux";
import category from "../../static/category.js";
import bus from "../bus"
export default {
  components: {
    Swiper,
    SwiperItem
  },
  data: function() {
    return {
      imgswiper: [
        {
          url: "javascript:",
          img:
            "https://fuss10.elemecdn.com/4/31/bf736feabc32b61888d0169497c79jpeg.jpeg?imageMogr/thumbnail/568x/"
        },
        {
          url: "javascript:",
          img:
            "https://fuss10.elemecdn.com/a/a0/5ad263e2a53b72bf0814b9a3a8470jpeg.jpeg?imageMogr/thumbnail/568x/"
        }
      ],
      tab_list: ["综合排序", "距离最近", "品质联盟", "筛选"],
      tabclick: "综合排序",
      pannel_index: 0,
      category: category,
      // 推荐商家列表
      shoplist: null,
      // 星级
      star: 0,
      // 显示活动
      huodong_show: new Array(20).fill(false),
      height:0,
    };
  },
  methods: {
    // 活动展开
    change(e) {
      var click_tag = e.target;
      var click_index = $(click_tag)
        .parents(".weui-panel")
        .index();
      var click_img = $(".rotate_img").eq(click_index);
      if (this.huodong_show[click_index] == false) {
        $(".weui-panel")
          .eq(click_index)
          .children(".weui-panel__bd")
          .children()
          .children()
          .children()
          .children("#card_right")
          .children("#more_hd")
          .show(500);
       
        this.huodong_show[click_index] = true;

        click_img.css({
          transition: "all 0.5s",
          transform: "rotate(-180deg)"
        });
        // click_img.style. = "";
      } else {
        $(".weui-panel")
          .eq(click_index)
          .children(".weui-panel__bd")
          .children()
          .children()
          .children()
          .children("#card_right")
          .children("#more_hd")
          .hide(500);
        this.huodong_show[click_index] = false;
        click_img.css({
          transition: "all 0.5s",
          transform: "rotate(0deg)"
        });
      }
    },
    // 切换面板
    switchTabItem(index) {
     
      // console.log("on-before-index-change", index);
      $(".pannel").hide();
      this.pannel_index = index;
      $(".pannel").eq(index).show();
      // console.log($(".vux-tab-wrap").offset().top)
       this.height=$('#first_tab').offset().top - 44;

      $("html").animate({ scrollTop: this.height}, 1000);
      $('html').css({
        overflow:'hidden',
      })
    
    }
  },

  beforeMount() {
    bus.$emit("showBar",true) 
    this.$http
      .get(
        "/ele/shopping/restaurants?latitude=24.54786&longitude=118.124509&keyword=&offset=0&limit=20&extras[]=activities&restaurant_category_ids[]=207"
      )
      .then(function(resdata) {
        console.log(resdata.body);
        this.shoplist = resdata.body;
      });
  },

  mounted() {
    // 综合排序
    var zhpx_count=false
    $(".vux-tab-item:gt(0)").click(function(){
      zhpx_count=false
    })
    $(".vux-tab-item").eq(0).click(function(){
      zhpx_count=!zhpx_count
      $(this).css("color","#3190e8")
    })

    $(".vux-tab-item").click(function(){
      if(zhpx_count){
        $("#zonghepaixu").css("height","15rem")
        $(".img1").css({
          transition: "all 0.5s",
          transform: "rotate(-180deg)"
        });
        
        $("#diancan #mask").show()
      }else{
        $("#zonghepaixu").css("height","0")
         $('html').css({
        overflow:'scroll',
      })
        $(".img1").css({
          transition: "all 0.5s",
          transform: "rotate(0deg)"
        });
      
        $("#diancan #mask").hide()
      }
    })

    $("#zonghepaixu li").click(function(e){
      $("#zonghepaixu li img").hide()
      $(this).children("img").show()
      var li_index=$(this).index()
      $(".vux-tab-item").eq(0).children("span").text($(this).text())
      
      $("#zonghepaixu").css("height","0")
      zhpx_count=false
      $("#diancan #mask").hide()
      $(".img1").css({
          transition: "all 0.5s",
          transform: "rotate(0deg)"
        });
    })

    // 筛选
    $(".vux-tab-item").eq(3).click(function(){
      $(".sx").css("height","22.5rem")
      $("#shaixuan #mask").show()
      $('html').css({
        overflow:'hidden',
      })
    })
    $(".buttongroup").children("button").eq(1).click(function(){
      $(".sx").css("height","0")
      $("#shaixuan #mask").hide()
      $("#shaixuan").hide()
    })

    // 图标
    var img1=document.createElement("img")
    img1.setAttribute("src","../../static/down.png")
    img1.style.width="1.3rem"
    img1.style.height="1rem"
    img1.style.position="absolute"
    img1.style.top="1rem"
    img1.className="img1"
    document.querySelectorAll(".vux-tab-item")[0].style.position="relative"
    document.querySelectorAll(".vux-tab-item")[0].appendChild(img1)

    var img2=document.createElement("img")
    img2.setAttribute("src","../../static/shaixuan.png")
    img2.style.width="1rem"
    img2.style.height="1rem"
    img2.style.position="absolute"
    img2.style.top="1.1rem"
    img2.className="img2"
    document.querySelectorAll(".vux-tab-item")[3].style.position="relative"
    document.querySelectorAll(".vux-tab-item")[3].appendChild(img2)
    
   
  },
 
  
};


</script>

<style scoped>
#first {
  margin-bottom: 3.125rem /* 50/16 */;
  background-color: white;
}
/* 头部 */
header {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  color: #fff;
  padding: 0.625rem /* 10/16 */ 0.9375rem /* 15/16 */ 0.625rem;
  line-height: 1.2;
}
#first_header {
  width: 60%;
  display: flex;
  align-items: center;
  font-weight: 600;
}
#dingwei {
  width: 0.9375rem /* 15/16 */;
  height: 0.9375rem /* 15/16 */;
}
#xiala {
  width: 0.625rem /* 10/16 */;
  height: 0.3125rem /* 5/16 */;
  fill: #fff;
}
#address {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0 0.3125rem /* 5/16 */;
  font-size: 1rem /* 16/16 */;
  height: 1.25rem /* 20/16 */;
  cursor: default;
}
/* 搜索栏 */
#search-wrapper {
  background-image: linear-gradient(90deg, #0af, #0085ff);
  position: sticky;
  top: 0px;
  z-index: 10;
}
#search {
  padding: 0.3125rem /* 5/16 */ 0.5rem /* 8/16 */;
}
#a_search {
  display: flex;
  width: 100%;
  height: 2.5rem /* 40/16 */;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: #999;
  font-size: 0.8125rem /* 13/16 */;
  cursor: default;
}
#svg_search {
  width: 0.9375rem /* 15/16 */;
  height: 0.9375rem /* 15/16 */;
  margin: 0.5rem /* 8/16 */;
}
/* 分类轮播 */
.kind_swiper p {
  font-size: 0.75rem /* 12/16 */;
}
.kind_swiper {
  cursor: pointer !important;
}

/* 品质套餐 */
#pztc-wrapper {
  padding: 0 0.5rem /* 8/16 */;
  background: #fff;
}
#pztc {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.3125rem /* 5/16 */;
}
#pztc_small {
  width: 50%;
  height: 8.75rem /* 140/16 */;
  padding: 0.625rem /* 10/16 */ 0 0 0.9375rem /* 15/16 */;
  position: relative;
  background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
  margin: 0.0625rem /* 1/16 */;
}
#pztc_small h3 {
  font-size: 1rem /* 16/16 */;
}
#pztc_small p {
  font-size: 0.75rem /* 12/16 */;
  color: #777;
  margin-bottom: 0.3125rem /* 5/16 */;
}
#pztc_small p:nth-of-type(2) {
  color: #af8260;
  font-weight: 700;
}
#pztc_small img {
  width: 7.1875rem /* 115/16 */;
  height: 5rem /* 80/16 */;
  position: absolute;
  right: 0px;
  bottom: 0px;
}
#pztc_small:nth-of-type(2) h3 {
  color: red;
}
#pztc_small:nth-of-type(2) p:nth-of-type(2) span:nth-child(1) {
  color: red;
}
#pztc_small:nth-of-type(2) p:nth-of-type(2) span:nth-child(2) {
  color: #333;
}

/* 图片轮播 */
#img_swiper {
  padding: 0 0.5rem /* 8/16 */;
  height: 5.3125rem /* 85/16 */;
  margin-bottom: 0.625rem /* 10/16 */;
}

/* 推荐商家 */
#tjsj {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.875rem /* 14/16 */;
  color: #000;
  background-color: #fff;
}
#tjsj::before,
#tjsj::after {
  display: block;
  content: "";
  width: 1.25rem /* 20/16 */;
  height: 0.0625rem /* 1/16 */;
  background-color: #999;
  margin: 0.9375rem /* 15/16 */;
}

.vux-tab-item{
  font-size: .875rem /* 14/16 */ !important;
  cursor: pointer;
}
#shaixuan{
  display: none;
}
#shaixuan_svg{
  width: .78125rem /* 12.5/16 */;
  height: .78125rem /* 12.5/16 */;
  position: absolute;
  right: 1.125rem /* 18/16 */;
  top: 1.0625rem /* 17/16 */;
}
#zhpx_svg{
  width: .375rem /* 6/16 */;
  height: .1875rem /* 3/16 */;
  position: absolute;
  left: 5rem /* 80/16 */;
  top: 1.375rem /* 22/16 */;
}
.card-content a{
  padding: 0.625rem /* 10/16 */;
  background-color: #fff;
  border-bottom: 0.133333vw solid #eee;
  color: #666;
  font-size: 0.875rem /* 14/16 */;
  display: flex;
  justify-content: flex-start;
}
#card_left{
  width: 4.0625rem /* 65/16 */ !important;
}
#card_left img {
  width: 3.75rem /* 60/16 */;
  height: 3.75rem /* 60/16 */;
  border: 0.133333vw solid rgba(0, 0, 0, 0.08);
}
#card_right {
  width: calc( 100% - 4.0625rem);
}
#card_right .card_row {
  display: flex;
  margin-left: 0.625rem /* 10/16 */;
  padding: 0;
  overflow: hidden;
  width: 100%;
}
#card_right .card_row:nth-child(1) {
  color: #333;
  font-weight: 700;
  font-size: 0.75rem /* 12/16 */;
}

#card_right .card_row:nth-child(1) h3 i {
  padding: 0.15rem /* 2.4/16 */;
  text-align: center;
  white-space: nowrap;
  font-weight: 700;
  font-size: 0.625rem /* 10/16 */;
  font-style: unset;
  color: #6f3f15;
  background-image: linear-gradient(-139deg, #fff100, #ffe339);
  margin-right: 0.1875rem /* 3/16 */;
}
.float_left {
  position: absolute;
  right: 10px;
  line-height: 1.5;
  color: #666;
}
#star {
  position: relative;
  top: 0.3125rem /* 5/16 */;
  margin-right: 0.3125rem /* 5/16 */;
}
#star_gery {
  display: flex;
  width: 3.4375rem /* 55/16 */;
  height: 0.625rem /* 10/16 */;
}
#star_gery img {
  width: 100%;
  height: 100%;
  flex: none;
}
#star_yellow {
  display: flex;
  width: 86%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
}
#star_yellow img {
  width: 3.4375rem /* 55/16 */;
  height: 0.625rem /* 10/16 */; 
  flex: none;
}
.card_row:nth-child(2) span {
  font-size: 0.75rem /* 12/16 */;
  line-height: 1.25rem /* 20/16 */;
  margin-right: 0.3125rem /* 5/16 */;
}
.card_row:nth-child(3) ul li {
  float: left;
  font-size: 0.625rem /* 10/16 */;
  padding: 0 0.3125rem /* 5/16 */;
  border-right: 0.0625rem /* 1/16 */ solid #999;
}
.card_row:nth-child(3) ul li:nth-child(2) {
  border: none;
}

#fangkuai_kind span:nth-child(1),
#fangkuai_kind span:nth-child(2) {
  font-size: 0.5625rem /* 9/16 */;
  padding: 0.0625rem /* 1/16 */;
  border: 0.0625rem /* 1/16 */ solid #999;
  color: #666;
  margin-right: 0.3125rem /* 5/16 */;
}
#fangkuai_kind img {
  width: 0.625rem /* 10/16 */;
  height: 0.625rem /* 10/16 */;
  margin-right: 0.1875rem /* 3/16 */;
}
#fangkuai_kind b {
  color: #e8470b;
  font-size: 0.5625rem /* 9/16 */;
}
#card_right .card_row:nth-child(5) {
  /* display: unset; */
  position: relative;
}
#card_right .card_row:nth-child(5) p {
  display: flex;
  margin-top: 0.3125rem /* 5/16 */;
}
#card_right .card_row:nth-child(5) #shou span,
#card_right .card_row:nth-child(6) #jian,
#card_right .card_row:nth-child(5) p#huodong span,
#more_hd span {
  margin-right: 0.3125rem /* 5/16 */;
  font-size: 0.6875rem /* 11/16 */;
}
#card_right .card_row:nth-child(5) #shou span:nth-child(1) {
  background-color: rgb(112, 188, 70);
  color: white;
  padding: 0 0.125rem /* 2/16 */;
  border-radius: 0.125rem /* 2/16 */;
}
#card_right .card_row:nth-child(6) #jian span:nth-child(1) {
  background-color: rgb(240, 115, 115);
  color: white;
  padding: 0 0.125rem /* 2/16 */;
  border-radius: 0.125rem /* 2/16 */;
}
#huodong {
  line-height: 0.3125rem /* 5/16 */;
}
#huodong img {
  width: 0.375rem /* 6/16 */;
  height: 0.1875rem /* 3/16 */;
}
#more_hd {
  display: none;
  margin-left: 0.625rem /* 10/16 */;
}
#diancan{
  position: relative;
}

/* 综合排序下拉列表 */
#zonghepaixu{
  position: absolute;
 top: 2.45rem;
  /* padding: .625rem 10/16 1.25rem 20/16; */
  background-color: #fff;
  width: 100%;
  height: 0px;
  overflow: hidden;
  /* transition: all 0.5s; */
  z-index: 10;
}
#zonghepaixu li{
  padding: .625rem /* 10/16 */ 1.25rem /* 20/16 */;
  font-size: .875rem /* 14/16 */;
  cursor: pointer;
  /* border-bottom: .0625rem 1/16 solid #ddd;; */
  position: relative;
}
#zonghepaixu li img {
  width: .9375rem /* 15/16 */;
  height: .9375rem /* 15/16 */;
  position: absolute;
  right: 1.875rem /* 30/16 */;
  top: .9375rem /* 15/16 */;
  display: none;
}
#shaixuan{
  position: relative;
  height: 37.5rem /* 600/16 */;
}
/* 筛选 */
.sx>div{
    font-size: .75rem /* 12/16 */;
    padding:0rem .625rem /* 10/16 */;
    margin: .625rem /* 10/16 */ 0rem;
    
}
.sx>div:nth-child(3){
    margin-bottom: 1.025rem /* 10/16 */;
}
.sx{
    background-color: #fff;
    position: absolute;
    top: 0;
    overflow: hidden;
    height: 0;
    transition: all 1s;
    z-index: 10;
}
.sx ul{
    display: flex;
    flex-wrap:wrap;
}
.sx li{
    width: 28%;
    background: #fafafa;
    text-align: center;
    list-style: none;
    padding: .3125rem /* 5/16 */;
    margin: .425rem .425rem 0rem 0rem /* 10/16 */;
}
.sx li:last-of-type{
    margin-right: 0rem;
}
.sx li img{
    width: 0.75rem;
    height: 0.75rem;
    margin-right: 0.2rem;
}
.buttongroup{
    padding: 0px !important;
    margin: 0px !important;
    width: 100%;
    box-shadow: 0 -.4rem .2rem 0 #ededed;
}
.buttongroup button{
    width: 50%;
    font-size: 0.9rem;
    border: none;
    padding: .625rem /* 10/16 */ 0rem;
    background-color: #fff;
    color: #ddd;
}
.buttongroup button:last-child{
    color: #fff;
    background-color: #00d762;
}


/* 遮罩层 */
#mask{
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,.5);
  z-index: 3;
  transition: all 1s;
  display: none;
}



</style>