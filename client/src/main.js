import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import AOS from "aos";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import VueSimpleAlert from 'vue-simple-alert';

Vue.use(VueSimpleAlert);

AOS.init();
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
