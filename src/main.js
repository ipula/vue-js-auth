// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { routes } from './router'
import HelloWorld from './components/HelloWorld.vue'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)
const router = new VueRouter({
  routes,
  mode: 'history'
})
Vue.component('hello-world', HelloWorld)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
