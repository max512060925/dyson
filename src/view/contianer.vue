<template>
  <div id="contianer" ref="contianer">
    <div>
    	<pageOne ref="pageOne"></pageOne>
			<pageTwo></pageTwo>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import pageOne from '@/components/pageOne'
import pageTwo from '@/components/pageTwo'
export default {
  name: 'contianer',
	components:{
		pageOne,
		pageTwo
	},
	methods:{
		scrollPage(){
			console.log(2);
		},
		handleScroll(){
			console.log(12);
		}
	},
	mounted() {
		console.log(1);
  },
	created(){
		this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.contianer,{
				startY: 0,
				scrollY: true,
				click:true
			})
			this.scroll.on('touchstart', (pos) => {
				console.log(pos);
      })
			this.scroll.on('touchEnd', (pos) => {
				console.log(pos);
      })
    })
	},
	destroyed () {
	}
}
</script>
<style>
#contianer {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 9.8rem;
  max-height: 11.5rem;
  max-width: 6.4rem;
  margin: 0 auto;
  background: #000;
  background-size: cover;
  overflow: hidden;
}
</style>
