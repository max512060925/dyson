<template>
  <div class="pageThree" v-lazy:background-image="'/static/img/bg.jpg'">
		<img v-lazy="'/static/img/arrow.png'" class="arrow"/>
    <div class="p2" v-lazy:background-image="'/static/img/2.png'">
      <div class="box5" @click="jump(5)"></div>
  		<div class="box6" @click="jump(6)"></div>
  		<div class="box7" @click="jump(7)"></div>
  		<div class="box8" @click="jump(8)"></div>
  		<div class="box9" @click="jump(9)"></div>
  		<div class="box10" @click="jump(10)"></div>
    </div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pageThree',
	methods:{
		jump(i){
      ga('send', 'pageview', `/kol${i}`);
			this.$router.push({ path: 'pic', query: { id: i }})
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
.pageThree{
	position: relative;
	display: flex;
	width: 100vw;
	height: 100vh;
	background-size:cover;
  background-position:bottom center;
  background-repeat:no-repeat;
	overflow: hidden;
  div.p2{
		position:absolute;
    width: calc(100vh*(1080/1920));
    top:50vh;
    left:50vw;
    margin-left:calc(-100vh*(1080/1920)/2);
    margin-top:calc(-100vh*(1718/1920)/2);
    height: calc(100vh*(1718/1920));
    background-size:cover;
  	background-position:bottom center;
  	background-repeat:no-repeat;
	}
	.box5{
		position: absolute;
    top: 33%;
    left: 0;
    width: 32%;
    height: 32%;
		z-index: 2;
	}
	.box6{
		position: absolute;
    top: 33%;
    left: 34%;
    width: 31%;
    height: 32%;
		z-index: 2;
	}
	.box7{
		position: absolute;
    top: 33%;
    right: 0;
    width: 33%;
    height: 32%;
		z-index: 2;
	}
	.box8{
		position: absolute;
    top: 33%;
    right: 0;
    width: 33%;
    height: 32%;
		z-index: 2;
	}
	.box9{
		position: absolute;
		bottom: 0;
		left: 0;
		width: 43%;
		height: 34%
		z-index: 2;
	}
	.box10{
		position: absolute;
		bottom: 0;
		right: 0;
    width: 57%;
    height: 34%;
		z-index: 2;
	}
}
</style>
