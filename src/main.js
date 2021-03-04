import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import VueCookies from 'vue-cookies';

//CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


Vue.use(BootstrapVue);

Vue.config.productionTip = false;
Vue.use(require('vue-cookies'));
Vue.use(VueCookies);

// set default config
Vue.$cookies.config('7d');
Vue.$cookies.set('theme','default');
Vue.$cookies.set('hover-time','1s');

new Vue({
  render: h => h(App),
}).$mount('#app')
