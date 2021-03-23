import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Login from './components/Login.vue';

Vue.use(Router);

export const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },

    // otherwise redirect to home
    { path: '*', redirect: '/' }
  ]
});
