import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './routers/index';
import store from '@/store/index';

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
