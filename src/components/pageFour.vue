<template>
<div class="pageFour" v-lazy:background-image="'/static/img/bg.jpg'">
  <img src="/static/img/map.png" class="map">
  <img src="/static/img/bear.png" class="bear">
  <img src="/static/img/lion.png" class="lion">
  <img src="/static/img/f6.png" class="f6"/>
  <img src="/static/img/f13.png" class="f13">
  <img v-lazy="'/static/img/arrow.png'" class="arrow" />
  <div v-if="download">
    <div class="showBox" :style="`top:${imgShowArr[0].top||0};left:${imgShowArr[0].left||0};`" :class="[number%3===0?'show':'',imgShowArr[0].side==='left'?'leftBox':'rightBox']">
      <!-- <a :href="(number%3===0||number%3===1)?imgShowArr[0].link:'#'"> -->
        <img v-lazy="imgShowArr[0].url" :class="imgShowArr[0].side==='left'?'left':'right'">
        <p v-html="imgShowArr[0].text" :class="imgShowArr[0].side==='right'?'mr':''"></p>
      <!-- </a> -->
    </div>
    <div class="showBox" :style="`top:${imgShowArr[1].top||0};left:${imgShowArr[1].left||0};`" :class="[number%3===1?'show':'',imgShowArr[1].side==='left'?'leftBox':'rightBox']">
      <!-- <a :href="(number%3===1||number%3===2)?imgShowArr[1].link:'#'"> -->
        <img v-lazy="imgShowArr[1].url" :class="imgShowArr[1].side==='left'?'left':'right'">
        <p v-html="imgShowArr[1].text" :class="imgShowArr[1].side==='right'?'mr':''"></p>
      <!-- </a> -->
    </div>
    <div class="showBox" :style="`top:${imgShowArr[2].top||0};left:${imgShowArr[2].left||0};`" :class="[number%3===2?'show':'',imgShowArr[2].side==='left'?'leftBox':'rightBox']">
      <!-- <a :href="(number%3===2||number%3===0)?imgShowArr[2].link:'#'"> -->
        <img v-lazy="imgShowArr[2].url" :class="imgShowArr[2].side==='left'?'left':'right'">
        <p v-html="imgShowArr[2].text" :class="imgShowArr[2].side==='right'?'mr':''"></p>
      <!-- </a> -->
    </div>
  </div>

</div>
</template>
<script type="text/ecmascript-6">
import axios from 'axios'
export default {
  name: 'pageFour',
  data() {
    return {
      imgArr: [],
      interval: null,
      number: null,
      imgStyle: [],
      imgShowArr: [],
      download:false
    }
  },
  methods: {
    randomIndex(length) {
      return Math.floor(Math.random() * length)
    },
    imgChange() {
      this.number++
      this.imgShowArr[this.number%3]=this.imgArr[this.number%3][this.randomIndex(this.imgArr[this.number%3].length)]
    }
  },
  created(){
    axios.get('/static/json/img.json').then(res=>{
      this.imgArr=res.data.imgArr
      this.imgShowArr[0]=this.imgArr[0][this.randomIndex(this.imgArr[0].length)]
      this.imgShowArr[1]=this.imgArr[1][this.randomIndex(this.imgArr[1].length)]
      this.imgShowArr[2]=this.imgArr[2][this.randomIndex(this.imgArr[2].length)]
      this.download=true
    })
  },
  destroy() {
    clearInterval(this.interval)
  },
  watch: {
    download() {
      let _this=this
      this.interval=setInterval(()=>{
        _this.imgChange()
      },3000)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" type="stylesheet/stylus">
.pageFour{
	position: relative;
	display: flex;
	width: 100vw;
	height: 100vh;
	background-size:cover;
  background-position:bottom center;
  background-repeat:no-repeat;
	overflow: hidden;
	img.map{
		position:absolute;
    display:block;
    top:50vh;
    margin-top:calc(-100vw*(1667/1080)/2);
    left:0;
    width: 100vw;
    // height: calc(100vh*(1667/1920));
	}
  img.f6{
    position:absolute;
    display:block;
    top:calc(100vh*(90/1920));
    left: 50vw;
    margin-left:calc(-100vh*(629/1920)/2);
    width: calc(100vh*(629/1920));
    height: calc(100vh*(212/1920));
  }
  img.bear{
    position:absolute;
    display:block;
    bottom:0;
    left: 0;
    width: calc(100vh*(509/1920));
    height: calc(100vh*(467/1920));
  }
  img.lion{
    position:absolute;
    display:block;
    top:calc(100vh*(1600/1920));
    right: calc(100vw*(115/1080));
    width: calc(100vh*(161/1920));
    height: calc(100vh*(88/1920));
  }
  .showBox{
    position:absolute;
    display:block;
    height: calc(100vh*(173/1920));
    background-size:cover;
    background-position:bottom center;
    background-repeat:no-repeat;
    opacity: 0;
    transition: all 6s
    img {
      position:absolute;
      display:block;
      width: calc(100vh*(169/1920));
      height: calc(100vh*(169/1920));
      border-radius:50%;
      top:calc(-100vh*(25/1920));
      &.right{
        left:calc(-100vh*(70/1920));
      }
      &.left{
        right:calc(-100vh*(70/1920));
      }
    }
    p {
      position:absolute;
      font-size:calc(100vh*(38/1920));
      color:#fff;
      letter-spacing:calc(100vw*(3/1080));
      padding:calc(100vh*(15/1920)) calc(100vh*(20/1920));
      line-height:calc(100vh*(50/1920))
    }
    .mr{
      margin-left:calc(100vh*(80/1920));
    }
  }
  .leftBox{
    background-image:url('leftBox.png');
    width: calc(100vh*(601/1920));
  }
  .rightBox{
    background-image:url('rightBox.png');
    width: calc(100vh*(577/1920));
  }
  img.f13{
		position:absolute;
    display:block;
		top:calc(100vh*(1750/1920));
    right:calc(100vw*(30/1080));
    width: calc(100vh*(305/1920));
    height: calc(100vh*(109/1920));
	}
  .show{
    opacity:1;
  }
}
</style>
