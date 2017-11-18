<template>
<div class="pageFive" v-lazy:background-image="'/static/img/end.jpg'">
	<img v-lazy="'/static/img/f7.png'" class="f7">
	<img v-lazy="'/static/img/f8.png'" class="f8">
	<img v-lazy="'/static/img/f9.png'" class="f9">
	<img v-lazy="'/static/img/f10.png'" class="f10">
	<img v-lazy="'/static/img/f11.png'" class="f11">
	<img v-lazy="'/static/img/f12.png'" class="f12">
	<img v-lazy="'/static/img/f13.png'" class="f13">
	<img v-lazy="'/static/img/fb.png'" class="fb">
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
	width: 100vw;
	height: 100vh;
	background-size:cover;
  background-position:center center;
  background-repeat:no-repeat;
	overflow: hidden;
	img.f7{
		position:absolute;
    display:block;
    top:calc(100vh*(60/1920));
    left: 50vw;
    margin-left:calc(-100vh*(560/1920)/2);
    width: calc(100vh*(560/1920));
    height: calc(100vh*(234/1920));
	}
	img.f8{
		position:absolute;
    display:block;
		top:calc(100vh*(480/1920));
    left:calc(100vh*(25/1920));
    width: calc(100vh*(376/1920));
    height: calc(100vh*(133/1920));
	}
	img.f9{
		position:absolute;
    display:block;
		top:calc(100vh*(710/1920));
    right:calc(100vh*(25/1920));
    width: calc(100vh*(374/1920));
    height: calc(100vh*(136/1920));
	}
	img.f10{
		position:absolute;
    display:block;
    bottom:calc(100vh*(25/1920));
		top:calc(100vh*(1175/1920));
    left:calc(100vh*(25/1920));
    width: calc(100vh*(352/1920));
    height: calc(100vh*(85/1920));
	}
	img.f11{
		position:absolute;
    display:block;
		top:calc(100vh*(1258/1920));
    right:calc(100vh*(25/1920));
    width: calc(100vh*(382/1920));
    height: calc(100vh*(86/1920));
	}
	img.f12{
		position:absolute;
    display:block;
		top:calc(100vh*(1379/1920));
    left:calc(100vh*(25/1920));
    width: calc(100vh*(367/1920));
    height: calc(100vh*(87/1920));
	}
	img.f13{
		position:absolute;
    display:block;
		bottom:calc(100vh*(170/1920));
    right:calc(100vh*(30/1920));
    width: calc(100vh*(235/1920));
    height: calc(100vh*(85/1920));
	}
	img.fb{
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
