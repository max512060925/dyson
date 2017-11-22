<template>
  <div class="kol">
    <div class="prev" @click="prev"></div>
    <div class="next" @click="next"></div>
    <div class="content" ref="kol">
      <div :class="`kol${id}`">
        <img v-for="(v,i) in imgArr[id-1]" :key="v" :src="`/static/img/${id}/${i}.jpg`" width="100%"/>
      </div>
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
  data() {
    return {
      imgArr:[4,4,5,5,6,5,4,5,5,5],
      scroll:null
    }
  },
	methods: {
		prev() {
			if (Number(this.id)!==1) {
        ga('send', 'pageview', `/kol${Number(this.id)-1}`);
				this.$router.push({ path: 'pic', query: { id: `${Number(this.id)-1}` }})
        this.$nextTick(()=>{
          this.scroll.refresh()
        })
			}
		},
		next() {
			if (Number(this.id)!==10) {
        ga('send', 'pageview', `/kol${Number(this.id)+1}`);
				this.$router.push({ path: 'pic', query: { id: `${Number(this.id)+1}` }})
        this.$nextTick(()=>{
          this.scroll.refresh()
        })
			}
		}
	},
  mounted() {
    this.scroll = new BScroll(this.$refs.kol)
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
  height:calc(100vw*(9770/1080));
}
.kol2{
  width:100vw;
  height:calc(100vw*(9764/1080));
}
.kol3{
  width:100vw;
  height:calc(100vw*(11553/1080));
}
.kol4{
  width:100vw;
  height:calc(100vw*(8617/1080));
}
.kol5{
  width:100vw;
  height:calc(100vw*(13013/1080));
}
.kol6{
  width:100vw;
  height:calc(100vw*(12342/1080));
}
.kol7{
  width:100vw;
  height:calc(100vw*(9290/1080));
}
.kol8{
  width:100vw;
  height:calc(100vw*(11810/1080));
}
.kol9{
  width:100vw;
  height:calc(100vw*(12784/1080));
}
.kol10{
  width:100vw;
  height:calc(100vw*(13480/1080));
}
</style>
