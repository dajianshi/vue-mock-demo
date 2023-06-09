import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './mock/index.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//使用Axios来调用接口
import api from "./interface/api";
Vue.prototype.$api = api;
import request from "./interface/axios";
Vue.prototype.$request = request;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
