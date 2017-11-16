import Vue from 'vue'
import Router from 'vue-router'
import contianer from '@/view/contianer'
import kol from '@/view/kol'
// import pic from '@/view/pic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'contianer',
      component: contianer,
			meta:{
				keepAlive:true
			}
    },
		{
      path: '/pic',
      name: 'kol',
      component: kol,
			props: (route) => ({ id: route.query.id.toString() })
    }
  ]
})
