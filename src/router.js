import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/admin/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/admin',
      name: 'admin-home',
      component: Home,
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('./views/admin/login.vue'),
    },
    {
      path: '/admin/create',
      name: 'admin-create',
      component: () => import('./views/admin/create.vue'),
    },
    {
      path: '/admin/approve',
      name: 'admin-approve',
      component: () => import('./views/admin/approve.vue'),
    },
    {
      path: '/admin/test',
      name: 'admin-test',
      component: () => import('./views/admin/test.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/front/FrontAuction.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/front/FrontLogin.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('./views/front/FrontMarketList.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./views/front/FrontProjectDetail.vue'),
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('./views/front/Test.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/front/FrontRegister.vue'),
    },
  ],
});
