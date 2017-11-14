<template>
  <div class="pageOne">
		<video src="../../static/1.mp4" autoplay controls preload></video>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pageOne',
	created(){
		console.log(1);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="stylesheet/stylus">
.pageOne{
	position: relative;
	height: 100%;
	width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 11.5rem;
  max-width: 6.4rem;
	background: url('H5-01.jpg') center center no-repeat;
	background-size: auto 100%;
	overflow: hidden;
	video{
		top: 54%;
		z-index: 2;
		position: absolute;
		width: 100%;
	}
}
</style>
