<template>
  <div class="kol">
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
	created(){
		console.log(this.id);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="stylesheet/stylus">
</style>
