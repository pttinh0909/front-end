import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbvue/lib/mdbvue.css';
import Vue from 'vue';
import App from './App.vue';
import Notifications from 'vue-notification';
import router from './routes';

Vue.config.productionTip = false
Vue.use(Notifications)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
