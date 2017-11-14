<template>
  <div class="pageTwo">
		<div class="box1" @click="jump(1)"></div>
	</div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'pageTwo',
  data () {
    return {}
  },
	methods:{
		jump(i){
			this.$router.push({ path: 'pic', query: { id: i }})
		}
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus" type="stylesheet/stylus">
.pageTwo{
	position: relative;
	display: flex;
	height: 100%;
	width: 100%;
  height: 100%;
  min-height: 100vh;
  max-height: 11.5rem;
  max-width: 6.4rem;
	background: url('H5-02.jpg') center center no-repeat;
	background-size: auto 100%;
	overflow: hidden;
	.box1{
		position: absolute;
		top: 35%;
		left: 0;
		width: 53%;
		height: 29%;
	}
}
</style>
