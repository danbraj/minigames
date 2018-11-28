import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'memory'
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import(/* webpackChunkName: "settings" */ './views/Settings.vue')
    },
    {
      path: '/memory',
      name: 'memory',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "memory" */ './views/Memory.vue')
    },
    {
      path: '/repeat',
      name: 'repeat',
      component: () => import(/* webpackChunkName: "repeat" */ './views/Repeat.vue')
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import(/* webpackChunkName: "playground" */ './views/Playground.vue')
    },
    // {
    //   path: '/match3',
    //   name: 'match3',
    //   component: () => import(/* webpackChunkName: "match3" */ './views/Match3.vue')
    // },
  ]
})