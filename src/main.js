import Vue from 'vue'
import axios from 'axios'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.css'

import App from './App'
import store from './store'

Vue.use(Vuetify)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  store,
  router,
  template: '<App/>'
}).$mount('#app')
