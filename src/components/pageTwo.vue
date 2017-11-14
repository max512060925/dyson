<template>
  <div class="pageTwo">
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
	// height: 100%;
	// width: 100%;
  // height: 100%;
	// min-height: 9.8rem;
  // max-height: 11.5rem;
  // max-width: 6.4rem;
	width: 100vw;
	height: 100vh;
	background: url('2.jpg') center center no-repeat;
	background-size: cover;
	overflow: hidden;
	.box1{
		position: absolute;
		top: 35%;
		left: 0;
		width: 53%;
		height: 29%;
	}
	.box2{
		position: absolute;
		top: 35%;
    right: 0;
    width: 45%;
    height: 29%;
	}
	.box3{
		position: absolute;
		top: 35%;
		left: 0;
		width: 43%;
		height: 29%;
	}
	.box4{
		position: absolute;
		top: 64%;
    right: 0;
    width: 55%;
    height: 30%;
	}
}
</style>
