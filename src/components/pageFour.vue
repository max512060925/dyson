<template>
  <div class="pageFour">
		<img src="./f3.png" class="f3">
		<img src="./m1.png" class="m1">
		<img src="./m2.png" class="m2">
		<img src="./m3.png" class="m3">
    	<div id="triangle-facing-bottom"></div>
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
	height: 100vh;
	background: url('4.jpg') center center no-repeat;
	background-size: 100% 100%;
	overflow: hidden;
  #triangle-facing-bottom {
    width:640px;
    height:100vh;
    bottom:0;
    position: absolute;
    background: url('a.png') center center no-repeat;
  }
	img.f3{
		display: inline-block;
		position: absolute;
		width: 58vw;
		left: 17.75vw;
		top: 5vh;
	}
	img.m1{
		display: inline-block;
		position: absolute;
		width: 63vw;
		left: 27vw;
    	top: 63vh;
		opacity: 0;
		animation:animation 6s infinite;
		animation-delay:2s;
	}
	img.m2{
		display: inline-block;
		position: absolute;
		width: 63vw;
		left: 32vw;
    top: 50vh;
		opacity: 0;
		animation:animation 6s infinite;
		animation-delay:4s;
	}
	img.m3{
		display: inline-block;
		position: absolute;
		width: 63vw;
		left: 24vw;
    	top: 37vh;
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
