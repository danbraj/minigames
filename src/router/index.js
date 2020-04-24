import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
    },
    {
      path: '/memory',
      name: 'memory',
      component: () => import(/* webpackChunkName: "memory" */ '../views/Memory.vue')
    },
    {
      path: '/repeat',
      name: 'repeat',
      component: () => import(/* webpackChunkName: "repeat" */ '../views/Repeat.vue')
    },
    {
      path: '/match3',
      name: 'match3',
      component: () => import(/* webpackChunkName: "match3" */ '../views/Match3.vue')
    },
    {
      path: '/snake',
      name: 'snake',
      component: () => import(/* webpackChunkName: "snakeGame" */ '../views/SnakeGame.vue')
    },
    // {
    //   path: '/playground',
    //   name: 'playground',
    //   component: () => import(/* webpackChunkName: "playground" */ '../views/Playground.vue')
    // },
  ],
});
