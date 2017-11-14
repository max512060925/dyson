<template>
  <div class="pageThree">
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
	// height: 100%;
	// width: 100%;
  // height: 100%;
	// min-height: 9.8rem;
  // max-height: 11.5rem;
  // max-width: 6.4rem;
	width: 100vw;
	height: 100vh;
	background: url('3.jpg') center center no-repeat;
	background-size: cover;
	overflow: hidden;
	.box5{
		position: absolute;
		top: 4%;
    left: 0;
    width: 100%;
    height: 30%;
	}
	.box6{
		position: absolute;
		top: 34%;
    left: 0;
    width: 33%;
    height: 29%;
	}
	.box7{
		position: absolute;
		top: 34%;
		left: 35%;
		width: 30%;
		height: 29%;
	}
	.box8{
		position: absolute;
		top: 34%;
		right: 0;
		width: 33%;
		height: 29%;
	}
	.box9{
		position: absolute;
		top: 63.7%;
    left: 0;
    width: 36%;
    height: 30%;
	}
	.box10{
		position: absolute;
		top: 63.7%;
    right: 0;
    width: 63%;
    height: 30%;
	}
}
</style>
