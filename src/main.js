// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store/index'
import axios from 'axios'
import MintUI from 'mint-ui'
import VueLazyLoad from 'vue-lazyload'
import FastClick from 'fastclick'
import 'lib-flexible'


import 'mint-ui/lib/style.css'

import Loading from  './base/loading/index.js'//定义原型loading方法
Vue.use(Loading)

Vue.use(MintUI)
Vue.use(VueLazyLoad,{
    error:'./assets/img/error.jpg',
    loading:'./assets/img/loading.jpg'
})
  
FastClick.attach(document.body);

Vue.prototype.$http = axios;
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
