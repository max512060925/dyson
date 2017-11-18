<template>
  <div class="pageOne" v-lazy:background-image="'/static/img/bg.jpg'">
    <img v-lazy="'/static/img/f3.png'" class="f3"/>
    <img v-lazy="'/static/img/f2.png'" class="f2"/>
    <img v-lazy="'/static/img/f1.png'" class="f1"/>
    <img v-lazy="'/static/img/arrow.png'" class="arrow"/>
	  <video src="/static/1.mp4" autopaly preload poster="/static/img/video-loadpic.png"></video>
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
  img.f1{
    position:absolute;
    display:block;
    top:calc(100vh*(98/1920));
    left: 50vw;
    margin-left:calc(-100vh*(535/1920)/2);
    width: calc(100vh*(535/1920));
    height: calc(100vh*(194/1920));
  }
  img.f2{
    position:absolute;
    display:block;
    top:calc(100vh*(453/1920));
    left: 50vw;
    margin-left:calc(-100vh*(615/1920)/2);
    width: calc(100vh*(615/1920));
    height: calc(100vh*(127/1920));
  }
  img.f3{
    position:absolute;
    display:block;
    bottom:calc(100vh*(210/1920));
    left: 50vw;
    margin-left:calc(-100vh*(484/1920)/2);
    width: calc(100vh*(484/1920));
    height: calc(100vh*(173/1920));
  }
	video{
		display:block;
		top: calc(100vh*(700/1920));
		z-index: 2;
		position: absolute;
		width: 100vw;
	}
}
</style>
