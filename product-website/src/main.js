import Vue from 'vue';
import App from './App.vue';
import router from './router';
import AOS from 'aos';
import Rellax from 'rellax';

AOS.init();
new Rellax('.rellax', {
  speed: -2,
  center: false,
  wrapper: null,
  round: true,
  vertical: true,
  horizontal: false,
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
