import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'

import Vant from 'vant'
import 'vant/lib/index.css'

// import './mock'
axios.defaults.baseURL = 'http://localhost:9999/api/v1'
// 为 axios 添加拦截器：每次发送请求之前会被调用
axios.interceptors.request.use(function (config) {
  let token = localStorage.getItem('token')

  if (token !== null) {
    // 把令牌添加到协议头的 Authorization 属性上
    config.headers.Authorization = 'Bearer ' + token
  }

  return config
})

Vue.prototype.$http = axios

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
