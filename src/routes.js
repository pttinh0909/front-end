import Vue from 'vue';
import Router from 'vue-router';

import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Layout from './components/Layout.vue';
import PageNotFound from './components/PageNotFound.vue';
import Forbidden from './components/Forbidden.vue';
import InternalServerError from './components/InternalServerError.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/dashboard", component: Layout, children: [
        {
          path: "/",
          name: "Home",
          component: Home,
        },
      ]
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: '', redirect: '/dashboard'
    },
    {
      path: '404', component: PageNotFound
    },
    {
      path: '403', component: Forbidden
    },
    {
      path: '500', component: InternalServerError
    },
    {
      path: '**', component: PageNotFound
    }
  
  ]
});
