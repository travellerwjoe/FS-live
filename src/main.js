// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import config from './config'
import store from './store'
import io from 'socket.io-client'

Vue.config.productionTip = false

axios.defaults.baseURL = config.server

const socket = io('http://localhost:5555')
Vue.prototype.socket = socket

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

