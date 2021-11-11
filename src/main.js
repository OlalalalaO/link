import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from "view-design";
import './plugins/iview.js'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  iView,
  render: h => h(App)
}).$mount('#app')
