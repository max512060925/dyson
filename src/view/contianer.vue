<template>
	<div class="main">
		<div v-if="mobile" class="swiper-container" id="contianer" ref="swiper">
			<div class="swiper-wrapper">
				<div class="swiper-slide"><pageOne></pageOne></div>
				<div class="swiper-slide"><pageTwo></pageTwo></div>
				<div class="swiper-slide"><pageThree></pageThree></div>
				<div class="swiper-slide"><pageFour></pageFour></div>
				<div class="swiper-slide"><pageFive></pageFive></div>
			</div>
		</div>
		<div v-else>
			<pageOne style="height:1139px;"></pageOne>
			<pageTwo style="height:1139px;"></pageTwo>
			<pageThree style="height:1139px;"></pageThree>
			<pageFour style="height:1139px;"></pageFour>
			<pageFive style="height:1139px;"></pageFive>
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
		mobile() {
			if (!this.IsPC()&&document.documentElement.clientWidth<document.documentElement.clientHeight) {
				return true
			}else {
				return false
			}
		}
	},
	methods:{
		IsPC() {
			let userAgentInfo = navigator.userAgent;
			let Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod");
			let flag = true;
			for (var v = 0; v < Agents.length; v++) {
				if (userAgentInfo.indexOf(Agents[v]) > 0) { flag = false; break; }
			}
			return flag;
		}
	},
	mounted() {
		let _this=this;
		const mySwiper = new Swiper (this.$refs.swiper, {
	    direction: 'vertical',
	    loop: false,
			on: {
		    slideChangeTransitionEnd(){
					console.log(_this);
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
	width: 640px;
	height: 100%;
	min-height: 980px;
	max-height: 1150px;
  margin: 0 auto;
  overflow: hidden;
}
</style>
