<template>
	<div class="swiper-container" id="contianer" ref="swiper">
		<div class="swiper-wrapper">
			<div class="swiper-slide"><pageOne></pageOne></div>
			<div class="swiper-slide"><pageTwo></pageTwo></div>
			<div class="swiper-slide"><pageThree></pageThree></div>
			<div class="swiper-slide"><pageFour></pageFour></div>
			<div class="swiper-slide"><pageFive></pageFive></div>
		</div>
	</div>
</template>
<script>
// import BScroll from 'better-scroll'
import Swiper from '../../static/js/swiper.min.js'
import pageOne from '@/components/pageOne'
import pageTwo from '@/components/pageTwo'
import pageThree from '@/components/pageThree'
import pageFour from '@/components/pageFour'
import pageFive from '@/components/pageFive'
export default {
  name: 'contianer',
	components:{
		pageOne,
		pageTwo,
		pageThree,
		pageFour,
		pageFive
	},
	computed:{
	},
	methods:{
	},
	mounted() {
		let _this=this;
		const mySwiper = new Swiper (this.$refs.swiper, {
	    direction: 'vertical',
	    loop: false,
			setWrapperSize:true,
			on: {
		    slideChangeTransitionEnd(){
					if (this.activeIndex===1) {
						for (var i = 1; i < 11; i++) {
				      let img = new Image()
				      img.src = `/static/img/Dyson_KOL_${i}.jpg`
				    }
					}
					ga('send', 'pageview', `/page${this.activeIndex+1}`);
		      _this.$store.commit('saveIndex',this.activeIndex);//切换结束时，告诉我现在是第几个slide
		    },
		  }
  	})
		mySwiper.slideTo(this.$store.state.app.index)
  }
}
</script>
<style lang="stylus" type="stylesheet/stylus">
#contianer {
  position: relative;
	width: 100vw;
	height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}
img.arrow{
	position:absolute;
	display:block;
	bottom:calc(100vh*(25/1920));
	left: 50vw;
	margin-left:calc(-100vh*(83/1920)/2);
	width: calc(100vh*(83/1920));
	height: calc(100vh*(32/1920));
}
</style>
