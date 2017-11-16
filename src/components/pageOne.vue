<template>
  <div class="pageOne">
		<img src="./1-top.jpg" width="100%">
		<video src="../../static/1.mp4" controls preload poster="../../static/img/video-loadpic.png"></video>
		<img src="./1-bottom.jpg" width="100%">
	</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'pageOne'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="stylesheet/stylus">
.pageOne{
	position: relative;
	width: 640px;
	height: 100%;
	min-height: 980px;
	max-height: 1150px;
	overflow: hidden;
	img{
		position: absolute;
		display:inline-block;
		z-index: 1;
		&:first-child{
			top: 0;
      height:64%;
		}
		&:last-child{
			bottom: 0;
		}
	}
	video{
		display:inline-block;
		bottom: 15%;
		z-index: 2;
		position: absolute;
		width: 100%;
	}
}
</style>
