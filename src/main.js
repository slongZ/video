import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import http from './request/request'
import { Toast } from 'vant';
import '@/assets/style.css'

Vue.config.productionTip = false;
Vue.use(Vant);
Vue.prototype.$http = http;
Vue.prototype.$msg = Toast

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
