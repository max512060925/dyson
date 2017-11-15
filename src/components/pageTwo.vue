<template>
  <div class="pageTwo">
		<img src="./f1.png" class="f1">
		<img src="./f2.png" class="f2">
		<img src="./2-bottom.png" class="bottom">
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
	background: url('3.jpg') top center no-repeat;
	background-size: cover;
	overflow: hidden;
	img.f1{
		display: inline-block;
		position: absolute;
		width: 48vw;
		left: 26vw;
		top: 4vh;
	}
	img.f2{
		display: inline-block;
		position: absolute;
		width: 78vw;
		left: 11vw;
		top: 20vh;
	}
	img.bottom{
		display: inline-block;
		position: absolute;
		width: 96vw;
		bottom: 1.5%;
		z-index: 1;
		left: 2vw;
	}
	.box1{
		position: absolute;
		bottom: 35%;
		left: 0;
		width: 53%;
		height: 29%;
		z-index: 2;
	}
	.box2{
		position: absolute;
		bottom: 35%;
    right: 0;
    width: 45%;
    height: 29%;
		z-index: 2;
	}
	.box3{
		position: absolute;
		bottom: 5%;
		left: 0;
		width: 43%;
		height: 31%;
		z-index: 2;
	}
	.box4{
		position: absolute;
		bottom: 5%;
    right: 0;
    width: 55%;
    height: 31%;
		z-index: 2;
	}
}
</style>
