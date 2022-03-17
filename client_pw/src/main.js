import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import AOS from 'aos';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'aos/dist/aos.css';

AOS.init();
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');