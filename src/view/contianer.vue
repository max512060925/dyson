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
	mounted() {
		const mySwiper = new Swiper (this.$refs.swiper, {
	    direction: 'vertical',
	    loop: false
  	})
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
</style>
