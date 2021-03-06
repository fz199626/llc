import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Qs from 'qs'

Vue.config.productionTip = false
axios.defaults.withCredentials = true

let axios_instance = axios.create({
  transformRequest: [function (data) {
    data = Qs.stringify(data);
    return data;
  }],headers:{'Content-Type':'application/x-www-form-urlencoded'}
})
Vue.use(VueAxios, axios_instance)

Vue.use(VueAxios,axios)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
