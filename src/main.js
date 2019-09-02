import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from '../node_modules/bootstrap-vue/dist/bootstrap-vue.esm';

import router from './router'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
