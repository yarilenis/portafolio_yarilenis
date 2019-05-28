import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from "bootstrap-vue";
import scrollSpy, { Easing } from "vue2-scrollspy";

import Components from './components';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import './scss/main.scss';

Vue.use(BootstrapVue);
Vue.use(Components);
Vue.config.productionTip = false;

Vue.use(scrollSpy, {
  easing: Easing.Cubic.In
});

new Vue({
  render: h => h(App),
}).$mount('#app')
