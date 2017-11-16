<template>
  <div class="pageThree" v-lazy:background-image="'src/components/3.jpg'">
		<img v-lazy="'src/components/3-bottom.png'" class="bottom">
		<div class="box5" @click="jump(5)"></div>
		<div class="box6" @click="jump(6)"></div>
		<div class="box7" @click="jump(7)"></div>
		<div class="box8" @click="jump(8)"></div>
		<div class="box9" @click="jump(9)"></div>
		<div class="box10" @click="jump(10)"></div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pageThree',
	methods:{
		jump(i){
			ga('send', 'event', 'touch', 'kol', `kol${i}`);
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
	width: 640px;
	height: 100vh;
	background-size:cover;
  background-position:bottom center;
  background-repeat:no-repeat;
	overflow: hidden;
	img{
		position:absolute;
    display:block;
    bottom:calc(100vh*(25/1920));
    left: 50vw;
    margin-left:calc(-100vh*(1080/1920)/2);
    width: calc(100vh*(1080/1920));
    height: calc(100vh*(1920/1920));
		z-index: 1;
	}
	.box5{
		position: absolute;
		top: 4vh;
	    left: 0;
	    width: 640px;
	    height: 30vh;
		z-index: 2;
	}
	.box6{
		position: absolute;
		top: 34vh;
	    left: 0;
	    width: 33vw;
	    height: 29vh;
		z-index: 2;
	}
	.box7{
		position: absolute;
		top: 34vh;
		left: 35vw;
		width: 30vw;
		height: 29vh;
		z-index: 2;
	}
	.box8{
		position: absolute;
		top: 34vh;
		right: 0;
		width: 33vw;
		height: 29vh;
		z-index: 2;
	}
	.box9{
		position: absolute;
		top: 63.7vh;
		left: 0;
		width: 43vw;
		height: 30vh;
		z-index: 2;
	}
	.box10{
		position: absolute;
		top: 63.7vh;
		right: 0;
		width: 57vw;
		height: 30vh;
		z-index: 2;
	}
}
</style>
