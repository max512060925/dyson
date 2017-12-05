<template>
<div class="pageFive">
	<img src="/static/img/f7.png" class="f7">
	<img src="/static/img/f8.png" class="f8">
	<img src="/static/img/f9.png" class="f9">
	<img src="/static/img/f10.png" class="f10">
	<img src="/static/img/f11.png" class="f11">
	<img src="/static/img/f12.png" class="f12">
	<img src="/static/img/f13.png" class="f13">
	<img src="/static/img/fb.png" class="fb">
	<a :href="href"><img src="/static/img/button.png" class="btn"></a>
</div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
export default {
	name: 'pageFive',
	data(){
		return href:''
	},
	created(){
    axios.get('/static/json/http.json').then(res=>{
      this.href=res.data.link
    })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">

.pageFive{
	position: relative;
	display: flex;
	width: 100vw;
	height: 100vh;
	background-image:url('/static/img/end.jpg')
  background-position:center center;
  background-repeat:no-repeat;
	overflow: hidden;
	@media screen and (max-width: 899px) and (max-height: 2000px){
		background-size:cover;
	}
	@media screen and (max-width: 899px) and (min-height: 2000px){
		background-size:auto 100%;
	}
  @media screen and (min-width: 899px) and (max-height: 2000px){
		background-size:100%;
  }
  @media screen and (min-width: 899px) and (min-height: 2000px){
		background-size:auto 100%;
  }
	img.f7{
		position:absolute;
    display:block;
    top:calc(100vh*(60/1920));
    left: 50vw;
    margin-left:calc(-100vw*(560/1080)/2);
    width: calc(100vw*(560/1080));
    height: calc(100vw*(234/1080));
	}
	img.f8{
		position:absolute;
    display:block;
		top:calc(100vh*(480/1920));
    left:calc(100vw*(25/1080));
    width: calc(100vw*(376/1080));
    height: calc(100vw*(133/1080));
	}
	img.f9{
		position:absolute;
    display:block;
		top:calc(100vh*(710/1920));
    right:calc(100vw*(25/1080));
    width: calc(100vw*(374/1080));
    height: calc(100vw*(136/1080));
	}
	img.f10{
		position:absolute;
    display:block;
		top:calc(100vh*(1175/1920));
    left:calc(100vw*(25/1080));
    width: calc(100vw*(352/1080));
    height: calc(100vw*(85/1080));
	}
	img.f11{
		position:absolute;
    display:block;
		top:calc(100vh*(1258/1920));
    right:calc(100vw*(25/1080));
    width: calc(100vw*(382/1080));
    height: calc(100vw*(86/1080));
	}
	img.f12{
		position:absolute;
    display:block;
		top:calc(100vh*(1379/1920));
    left:calc(100vw*(25/1080));
    width: calc(100vw*(367/1080));
    height: calc(100vw*(87/1080));
	}
	img.f13{
		position:absolute;
    display:block;
		top:calc(100vh*(1750/1920));
    right:calc(100vw*(30/1080));
    width: calc(100vh*(305/1920));
    height: calc(100vh*(109/1920));
	}
	img.fb{
		position:absolute;
    display:block;
    bottom:calc(100vh*(25/1920));
		left: calc(100vw*(30/1080));;
    width: calc(100vw*(187/1080));
    height: calc(100vw*(19/1080));
	}
	img.btn{
		position:absolute;
    display:block;
    top:calc(100vh*(1625/1920));
		left: 50vw;
    margin-left:calc(-100vw*(330/1080)/2);
    width: calc(100vw*(330/1080));
    height: calc(100vw*(77/1080));
	}
}
</style>
