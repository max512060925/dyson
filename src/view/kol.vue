<template>
  <div class="kol">
    <div class="prev" @click="prev"></div>
    <div class="next" @click="next"></div>
    <div class="content" ref="kol">
      <div :class="`kol${id}`"/>
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
    this.scroll.refresh();
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
	position: absolute;
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

.kol1{
  width:100vw;
  height:calc(100vw*(9869/1080));
  background:url('/static/img/Dyson_KOL_1.jpg') top center no-repeat;
  background-size:cover;
}
.kol2{
  width:100vw;
  height:calc(100vw*(9869/1080));
  background:url('/static/img/Dyson_KOL_2.jpg') top center no-repeat;
  background-size:cover;
}
.kol3{
  width:100vw;
  height:calc(100vw*(11676/1080));
  background:url('/static/img/Dyson_KOL_3.jpg') top center no-repeat;
  background-size:cover;
}
.kol4{
  width:100vw;
  height:calc(100vw*(9458/1080));
  background:url('/static/img/Dyson_KOL_4.jpg') top center no-repeat;
  background-size:cover;
}
.kol5{
  width:100vw;
  height:calc(100vw*(13154/1080));
  background:url('/static/img/Dyson_KOL_5.jpg') top center no-repeat;
  background-size:cover;
}
.kol6{
  width:100vw;
  height:calc(100vw*(12417/1080));
  background:url('/static/img/Dyson_KOL_6.jpg') top center no-repeat;
  background-size:cover;
}
.kol7{
  width:100vw;
  height:calc(100vw*(9553/1080));
  background:url('/static/img/Dyson_KOL_7.jpg') top center no-repeat;
  background-size:cover;
}
.kol8{
  width:100vw;
  height:calc(100vw*(11950/1080));
  background:url('/static/img/Dyson_KOL_8.jpg') top center no-repeat;
  background-size:cover;
}
.kol9{
  width:100vw;
  height:calc(100vw*(13021/1080));
  background:url('/static/img/Dyson_KOL_9.jpg') top center no-repeat;
  background-size:cover;
}
.kol10{
  width:100vw;
  height:calc(100vw*(13572/1080));
  background:url('/static/img/Dyson_KOL_10.jpg') top center no-repeat;
  background-size:cover;
}
</style>
