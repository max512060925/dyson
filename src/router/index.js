import Vue from 'vue'
import Router from 'vue-router'
import container from '@/view/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'container',
      component: container
    }
  ]
})
