<template>
  <div class="pageTwo" v-lazy:background-image="'src/components/3.jpg'">
		<img v-lazy="'src/components/f1.png'" class="f1"/>
		<img v-lazy="'src/components/f2.png'" class="f2"/>
		<img v-lazy="'src/components/2-bottom.png'" class="bottom"/>
		<div class="box1" @click="jump(1)"></div>
		<div class="box2" @click="jump(2)"></div>
		<div class="box3" @click="jump(3)"></div>
		<div class="box4" @click="jump(4)"></div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pageTwo',
  data () {
    return {}
  },
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
.pageTwo{
	position: relative;
	display: flex;
	width: 640px;
	height: 100vh;
	background-size:cover;
	background-position:bottom center;
	background-repeat:no-repeat;
	overflow: hidden;
	img.f1{
		position:absolute;
    display:block;
    top:calc(100vh*(100/1920));
    left: 50vw;
    margin-left:calc(-100vh*(536/1920)/2);
    width: calc(100vh*(536/1920));
    height: calc(100vh*(194/1920));
	}
	img.f2{
		position:absolute;
    display:block;
    top:calc(100vh*(437/1920));
    left: 50vw;
    margin-left:calc(-100vh*(862/1920)/2);
    width: calc(100vh*(862/1920));
    height: calc(100vh*(127/1920));
	}
	img.bottom{
		position:absolute;
    display:block;
    bottom:calc(100vh*(25/1920));
    left: 50vw;
    margin-left:calc(-100vh*(1053/1920)/2);
    width: calc(100vh*(1053/1920));
    height: calc(100vh*(1212/1920));
		z-index: 1;
	}
	.box1{
		position: absolute;
		bottom: 35vh;
		left: 0;
		width: 53vw;
		height: 29vh;
		z-index: 2;
	}
	.box2{
		position: absolute;
		bottom: 35vh;
	    right: 0;
	    width: 45vw;
	    height: 29vh;
		z-index: 2;
	}
	.box3{
		position: absolute;
		bottom: 5vh;
		left: 0;
		width: 43vw;
		height: 31vh;
		z-index: 2;
	}
	.box4{
		position: absolute;
		bottom: 5vh;
	    right: 0;
	    width: 55vw;
	    height: 31vh;
		z-index: 2;
	}
}
</style>
