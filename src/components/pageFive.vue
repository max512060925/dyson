<template>
<div class="pageFive" v-lazy:background-image="'/static/img/5.jpg'">
	<img v-lazy="'/static/img/f4.png'" class="f4">
	<img v-lazy="'/static/img/f5.png'" class="f5">
</div>
</template>

<script type="text/ecmascript-6">
export default {
	name: 'pageFive'
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
.pageFive{
	position: relative;
	display: flex;
	width: 640px;
	height: 100vh;
	background-size:cover;
  background-position:bottom center;
  background-repeat:no-repeat;
	overflow: hidden;
	img.f4{
		position:absolute;
    display:block;
    top:calc(100vh*(60/1920));
    left: 50vw;
    margin-left:calc(-100vh*(560/1920)/2);
    width: calc(100vh*(560/1920));
    height: calc(100vh*(234/1920));
	}
	img.f5{
		position:absolute;
    display:block;
    bottom:calc(100vh*(25/1920));
    left: 50vw;
    margin-left:calc(-100vh*(1001/1920)/2);
    width: calc(100vh*(1001/1920));
    height: calc(100vh*(103/1920));
	}
}
</style>
