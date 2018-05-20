// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMasonry from 'vue-masonry-css'
import VueBlu from 'vue-blu'
import './../node_modules/vue-blu/dist/css/vue-blu.min.css'
import './../node_modules/font-awesome/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.use(VueMasonry)
Vue.use(VueBlu)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
