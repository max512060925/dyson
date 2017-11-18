<template>
  <div class="pageTwo" v-lazy:background-image="'/static/img/bg.jpg'">
		<img v-lazy="'/static/img/f4.png'" class="f4"/>
		<img v-lazy="'/static/img/f5.png'" class="f5"/>
    <img v-lazy="'/static/img/arrow.png'" class="arrow"/>
    <div class="p1" v-lazy:background-image="'/static/img/1.png'">
      <div class="box1" @click="jump(1)"></div>
  		<div class="box2" @click="jump(2)"></div>
  		<div class="box3" @click="jump(3)"></div>
  		<div class="box4" @click="jump(4)"></div>
    </div>
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
			ga('send', 'pageview', `/kol${i}`);
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
	width: 100vw;
	height: 100vh;
	background-size:cover;
	background-position:bottom center;
	background-repeat:no-repeat;
	overflow: hidden;
	img.f4{
		position:absolute;
    display:block;
    top:calc(100vh*(100/1920));
    left: 50vw;
    margin-left:calc(-100vh*(536/1920)/2);
    width: calc(100vh*(536/1920));
    height: calc(100vh*(194/1920));
	}
	img.f5{
		position:absolute;
    display:block;
    top:calc(100vh*(450/1920));
    left: 50vw;
    margin-left:calc(-100vh*(862/1920)/2);
    width: calc(100vh*(862/1920));
    height: calc(100vh*(127/1920));

	}
  div.p1{
		position:absolute;
    bottom:5%;
    left: 50vw;
    margin-left : calc(-100vh*(1080/1920)/2);
    width: calc(100vh*(1080/1920));
    height: calc(100vh*(1131/1920));
    // height: calc(100vw*(1131/1080));
    background-size:cover;
  	background-position:bottom center;
  	background-repeat:no-repeat;
	}
	.box1{
		position: absolute;
    top: 0;
    left: 0;
    width: 53%;
    height: 47%;
		z-index: 2;
	}
	.box2{
		position: absolute;
    top: 0;
    right: 0;
    width: 45%;
    height: 47%;
		z-index: 2;
	}
	.box3{
		position: absolute;
    bottom: 0;
    left: 0;
    width: 43%;
    height: 51%;
		z-index: 2;
	}
	.box4{
		position: absolute;
    bottom: 0;
    right: 0;
    width: 55%;
    height: 48%;
		z-index: 2;
	}
}
</style>
