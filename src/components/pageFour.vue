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
	width: 100vw;
	height: 100vh;
	background: url('4.jpg') center center no-repeat;
	background-size: cover;
	overflow: hidden;
	img.f3{
		display: inline-block;
		position: absolute;
		width: 58vw;
		left: 17.75vw;
		top: 5%;
	}
	img.m1{
		display: inline-block;
		position: absolute;
		width: 63vw;
		left: 27%;
    top: 63%;
		opacity: 0;
		animation:animation 5s infinite;
		animation-delay:1.5s;
	}
	img.m2{
		display: inline-block;
		position: absolute;
		width: 63vw;
		left: 32%;
    top: 50%;
		opacity: 0;
		animation:animation 5s infinite;
		animation-delay:3s;
	}
	img.m3{
		display: inline-block;
		position: absolute;
		width: 63vw;
		left: 24%;
    top: 37%;
		animation:animation 5s infinite;
	}
	@keyframes animation
	{
		0% {opacity:0;}
		50% {opacity:1;}
		100% {opacity:0;}
	}
}
</style>
