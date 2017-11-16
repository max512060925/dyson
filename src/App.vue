<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app{
  display: none;
}
@media all and (orientation: portrait){
  html {
  	position: relative;
  	width: 100%;
  	height: 100vh;
  	margin: 0 auto;
  	-webkit-tap-highlight-color: rgba(0,0,0,0);
  	-webkit-tap-highlight: rgba(0,0,0,0);
  	-webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
  	-webkit-font-smoothing: antialiased;
  	-webkit-touch-callout: inherit;
  	-webkit-user-select: none;
  	font-family: "SimHei", "Heiti SC", "微软雅黑", "Microsoft YaHei", "黑体";
  	overflow: hidden;
  }
  body{
  	width: 640px;
  	height: 100vh;
  	margin: 0 auto;
  	padding: 0;
  	overflow: visible;
  }
  #app{
    display: block;
  }
}
@media all and (orientation: landscape){
  html {
  	position: relative;
  	width: 100vw;
  	height: 100vh;
  }
  body{
  	width: 100vw;
  	height: 100vh;
    background:#666666 url('/static/img/l.png') center center no-repeat;
  }
  #app{
    display: none;
  }
}

img{
	-webkit-user-select:none;
  -webkit-touch-callout:none;
}
</style>
