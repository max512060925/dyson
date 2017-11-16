<template>
  <div class="pageOne" v-lazy:background-image="'src/components/1.jpg'">
    <img v-lazy="'src/components/logo.png'" class="logo"/>
    <img v-lazy="'src/components/f6.png'" class="f6"/>
    <img v-lazy="'src/components/f7.png'" class="f7"/>
	  <video src="../../static/1.mp4" controls preload poster="../../static/img/video-loadpic.png"></video>
	</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'pageOne'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
.pageOne{
	position: relative;
	width: 100vw;
	height: 100vh;
	overflow: hidden;
  background-size:cover;
  background-position:bottom center;
  background-repeat:no-repeat;
  img.logo{
    position:absolute;
    display:block;
    top:calc(100vh*(60/1920));
    left: 50vw;
    margin-left:calc(-100vh*(484/1920)/2);
    width: calc(100vh*(484/1920));
    height: calc(100vh*(173/1920));
  }
  img.f6{
    position:absolute;
    display:block;
    top:calc(100vh*(370/1920));
    left: 50vw;
    margin-left:calc(-100vh*(536/1920)/2);
    width: calc(100vh*(536/1920));
    height: calc(100vh*(209/1920));
  }
  img.f7{
    position:absolute;
    display:block;
    top:calc(100vh*(726/1920));
    left: 50vw;
    margin-left:calc(-100vh*(615/1920)/2);
    width: calc(100vh*(615/1920));
    height: calc(100vh*(127/1920));
  }
	video{
		display:inline-block;
		bottom: calc(100vh*(350/1920));
		z-index: 2;
		position: absolute;
		// height: calc(100vh*(620/1920));
		width: 100%;
	}
}
</style>
