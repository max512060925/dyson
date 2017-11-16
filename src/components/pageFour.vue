<template>
  <div class="pageFour">
		<img src="./f3.png" class="f3">
		<img src="./m1.png" class="m1">
		<img src="./m2.png" class="m2">
		<img src="./m3.png" class="m3">
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pageFour'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
.pageFour{
	position: relative;
	display: flex;
	width: 640px;
	height: 100%;
	min-height: 980px;
	max-height: 1150px;
	background: url('4.jpg') center center no-repeat;
	background-size: 100% 100%;
	overflow: hidden;
	img.f3{
		display: inline-block;
		position: absolute;
		width: 58%;
		left: 17.75%;
		top: 5%;
	}
	img.m1{
		display: inline-block;
		position: absolute;
		width: 63%;
		left: 27%;
    top: 63%;
		opacity: 0;
		animation:animation 6s infinite;
		animation-delay:2s;
	}
	img.m2{
		display: inline-block;
		position: absolute;
		width: 63%;
		left: 32%;
    top: 50%;
		opacity: 0;
		animation:animation 6s infinite;
		animation-delay:4s;
	}
	img.m3{
		display: inline-block;
		position: absolute;
		width: 63%;
		left: 24%;
    top: 37%;
		animation:animation 6s infinite;
	}
	@keyframes animation
	{
		0% {opacity:0;}
		50% {opacity:1;}
		100% {opacity:0;}
	}
}
</style>
