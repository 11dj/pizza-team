import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/admin/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'home',
      component: Home,
    },
    {
      path: '/admin/login',
      name: 'login',
      component: () => import('./views/admin/login.vue'),
    },
    {
      path: '/admin/create',
      name: 'create',
      component: () => import('./views/admin/create.vue'),
    },
    {
      path: '/admin/approve',
      name: 'approve',
      component: () => import('./views/admin/approve.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/admin/test.vue'),
    },
  ],
});
