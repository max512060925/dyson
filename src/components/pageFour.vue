<template>
  <div class="pageFour" v-lazy:background-image="'/static/img/4.jpg'">
		<img v-lazy="'/static/img/f3.png'" class="f3"/>
		<img v-if="imgArr.length>0" v-for="(item,i) in imgArr" :class="{'show':number===i}" :key="i" v-lazy="item.url" class="list-item" :style="`top:${item.top||0};left:${item.left||0};`"/>
		<img v-lazy="'/static/img/arrow.png'" class="arrow"/>
	</div>
</template>
<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: 'pageFour',
	data() {
		return {
			imgArr:[],
			interval:null,
			number:0,
      imgStyle:[]
		}
	},
	methods: {
    randomIndex() {
      return Math.floor(Math.random() * this.imgArr.length)
    }
  },
  created() {
    axios.get('/static/json/img.json').then(res=>{
      if (res) {
        this.imgArr=res.data.imgArr
      }
    })
  },
	mounted(){
		this.interval=setInterval(()=>{
			if (this.number===this.randomIndex()) {
				if (this.randomIndex()===this.imgArr.length) {
					this.number=this.randomIndex()-1
				}else{
					this.number=this.randomIndex()+1
				}
			}else {
				this.number=this.randomIndex()
			}
		},3000)
	},
	distroy() {
		clearInterval(this.interval)
	}
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
.pageFour{
	position: relative;
	display: flex;
	width: 640px;
	height: 100vh;
	background-size:cover;
  background-position:bottom center;
  background-repeat:no-repeat;
	overflow: hidden;
	img.f3{
		position:absolute;
    display:block;
    top:calc(100vh*(85/1920));
    left: 50vw;
    margin-left:calc(-100vh*(629/1920)/2);
    width: calc(100vh*(629/1920));
    height: calc(100vh*(212/1920));
	}
	img.arrow{
		position:absolute;
    display:block;
    bottom:calc(100vh*(25/1920));
    left: 50vw;
    margin-left:calc(-100vh*(83/1920)/2);
    width: calc(100vh*(83/1920));
    height: calc(100vh*(32/1920));
	}
	.list-item{
		display: block;
		position: absolute;
		z-index: 2;
		width: calc(100vh*(669/1920));
    height: calc(100vh*(196/1920));
		opacity: 0;
		transition: all 4s;
	}
	.show {
		opacity: 1;
	}
	@keyframes animation
	{
		0% {opacity:0;}
		50% {opacity:1;}
		100% {opacity:0;}
	}
}
</style>
