<template>
  <div class="kol">
    <div class="prev" @click="prev"></div>
    <div class="next" @click="next"></div>
    <div class="content" ref="kol">
      <img :src="`/static/img/Dyson_KOL_${id}.jpg`" width="100%;"/>
    </div>
	</div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
export default {
  name: 'kol',
	props:{
		id:{
			type:String,
			default() {
				return '1'
			}
		}
	},
	methods: {
		prev() {
			if (Number(this.id)!==1) {
        ga('send', 'pageview', `/kol${Number(this.id)-1}`);
				this.$router.push({ path: 'pic', query: { id: `${Number(this.id)-1}` }})
			}
		},
		next() {
			if (Number(this.id)!==10) {
        ga('send', 'pageview', `/kol${Number(this.id)+1}`);
				this.$router.push({ path: 'pic', query: { id: `${Number(this.id)+1}` }})
			}
		}
	},
  mounted() {
    const scroll = new BScroll(this.$refs.kol)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
.content{
  position: relative;
	width: 100vw;
	height: 100vh;
  margin: 0 auto;
  overflow: hidden;
}
.next,.prev{
	position: fixed;
	top: 2%;
  padding:1%;
	width: 11%;
	height: 7%;
  z-index:1000;
}
.prev{
	left: 4%;
}
.next{
	right: 4%;
}
</style>
