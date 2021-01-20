import Vue from 'vue';
import App from './App.vue';
import Pagination from 'vue-pagination-2';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false;
Vue.component('pagination', Pagination);
Vue.filter('toUpperCase', (text) => {
  return text.toUpperCase();
})

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
