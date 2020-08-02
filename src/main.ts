import Vue from 'vue'
import '@/init'
import App from './App.vue'

Vue.config.productionTip = false

// @ts-ignore
App.mpType = 'app'

const app = new Vue({
  ...App,
})
app.$mount()
