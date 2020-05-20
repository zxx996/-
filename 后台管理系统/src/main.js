import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/reset.css"; //重置浏览器默认样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from "@/http";
import HkUI from './components/hekr'

// import axios from 'axios';
// import 'normalize.css/normalize.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(HkUI);
Vue.prototype.$http = http;
// Vue.prototype.$axios=axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
