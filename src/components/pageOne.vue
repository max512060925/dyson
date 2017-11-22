<template>
  <div class="pageOne" v-lazy:background-image="'/static/img/bg.jpg'">
    <img v-lazy="'/static/img/f3.png'" class="f3"/>
    <img v-lazy="'/static/img/f2.png'" class="f2"/>
    <img v-lazy="'/static/img/f1.png'" class="f1"/>
    <img v-lazy="'/static/img/arrow.png'" class="arrow"/>
	  <video id="video" src="/static/1.mp4" poster="/static/img/video-loadpic.png" @touchend="play($event)" playsinline webkit-playsinline x-webkit-airplay="true" x5-video-player-type="h5" x5-video-player-fullscreen="true" preload style="object-fit:fill;"></video>
    <div class="play" @touchend="play($event)" v-show="!isPlay"></div>
	</div>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'pageOne',
  data(){
    return {
      isPlay:true
    }
  },
  methods:{
    play(e){
      console.log(e);
      if (video.paused) {
        this.isPlay=true
        video.play()
      }else {
        this.isPlay=false
        video.pause()
      }
    }
  },
  mounted() {
    let img
		img = new Image()
		img.src = '/static/img/1.png'
		img.src = '/static/img/2.png'
		img.src = '/static/img/map.png'
		img.src = '/static/img/f3.png'
		img.src = '/static/img/f4.png'
		img.src = '/static/img/f5.png'
		img.src = '/static/img/f6.png'
		img.src = '/static/img/f7.png'
		img.src = '/static/img/f8.png'
		img.src = '/static/img/f9.png'
		img.src = '/static/img/f10.png'
		img.src = '/static/img/f11.png'
		img.src = '/static/img/f12.png'
		img.src = '/static/img/f13.png'
		img.src = '/static/img/fb.png'
		img.src = '/static/img/bear.png'
		if (this.activeIndex===1) {
			for (var i = 1; i < 11; i++) {
				img = new Image()
				img.src = `/static/img/Dyson_KOL_${i}.jpg`
			}
		}
    console.log();
  }

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
		top: calc(100vh*(690/1920));
		z-index: 2;
		position: absolute;
		width: 100vw;

	}
  .play{
    position:absolute;
    top:calc(100vh*(900/1920));
    left:50vw;
    margin-left:calc(-100vh*(128/1920)/2);
    // margin-top:calc(-100vh*(128/1920)/2);
    z-index:9999;
    background:url('/static/img/play.png') center center no-repeat;
    background-size:cover;
    width: calc(100vh*(128/1920));
    height: calc(100vh*(128/1920));
  }
}
</style>
