<template>
    <div id="back_header">
            <div id="header_wrapper">
                <div id="back" @click="goback"><img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=" alt=""></div>
                <h1 id="tit">
                    <slot></slot>
                </h1>
            </div>
    </div>
</template>

<script>
export default {
  name: "back_header",
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
#back_header {
  height: 2.5rem /* 40/16 */;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
}
#header_wrapper {
  display: flex;
  background-image: linear-gradient(90deg, #0af, #0085ff);
  align-items: center;
  /* justify-content: ; */
  width: 100%;
 
  color: #fff;
  text-align: center;
  padding: .625rem /* 10/16 */ 0;
}
#header_wrapper img{
    width: .75rem /* 12/16 */;
    padding-left: .625rem /* 10/16 */
}
#tit{
    position: absolute;
    left: 45%;
    font-size: 1.125rem /* 18/16 */;
}
</style>