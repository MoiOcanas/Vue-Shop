//  Basics
import Vue from 'vue'
import App from './App'

//  Tools
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'

//  Config
Vue.config.productionTip = false
Vue.use(VeeValidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
