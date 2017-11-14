<template>
  <div class="kol">
		<div class="prev" @click="prev"></div>
		<div class="next" @click="next"></div>
		<img :src="`/static/img/Dyson_KOL_${id}.jpg`" width="100%;"/>
	</div>
</template>

<script type="text/ecmascript-6">
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
				this.$router.push({ path: 'pic', query: { id: `${Number(this.id)-1}` }})
			}
		},
		next() {
			if (Number(this.id)!==10) {
				this.$router.push({ path: 'pic', query: { id: `${Number(this.id)+1}` }})
			}
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
.next,.prev{
	position: fixed;
	top: 2%;
	width: 11%;
	height: 7%;
}
.prev{
	left: 4%;
}
.next{
	right: 4%;
}
</style>
