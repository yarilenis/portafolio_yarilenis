import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import scrollSpy, { Easing } from "vue2-scrollspy";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);
Vue.config.productionTip = false;

Vue.use(scrollSpy, {
  easing: Easing.Cubic.In
});

new Vue({
  render: h => h(App),
}).$mount('#app')
