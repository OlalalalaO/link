import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import iView from "view-design";
import './plugins/iview.js'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import axios from 'axios';

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Antd);
new Vue({
    router,
    store,
    iView,
    render: h => h(App)
}).$mount('#app')
