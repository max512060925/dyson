<template>
  <div class="pageFive">
		<img src="./f4.png" class="f4">
		<img src="./f5.png" class="f5">
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pageFive'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
.pageFive{
	position: relative;
	display: flex;
	width: 640px;
	height: 100%;
	min-height: 980px;
	max-height: 1150px;
	background: url('5.jpg') center center no-repeat;
	background-size: cover;
	overflow: hidden;
	img.f4{
		display: inline-block;
		position: absolute;
		width: 52%;
		left: 24%;
    top: 1%;
	}
	img.f5{
		display: inline-block;
		position: absolute;
		width: 92.6%;
		left: 3.7%;
    bottom: 2%;
	}
}
</style>
