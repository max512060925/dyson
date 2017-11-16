// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
// import store from './store';
// import '../static/js/rem';
import '../static/css/reset.css';
import '../static/css/swiper.min.css';
import Vuex from 'vuex'



import FastClick from 'fastclick'
FastClick.attach(document.body);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	// store,
  template: '<App/>',
  components: { App }
})
