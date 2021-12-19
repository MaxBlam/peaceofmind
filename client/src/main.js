import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import GAuth from 'vue-google-oauth2';
const gauthOption = {
  clientId: '510930460352-helprk2rbp57j1p85tsv275pgopj2ldm.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account',
};
import AOS from "aos";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VueSimpleAlert from 'vue-simple-alert';

Vue.use(VueSimpleAlert);

AOS.init();
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');

Vue.use(GAuth, gauthOption);
