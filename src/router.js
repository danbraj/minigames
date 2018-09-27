import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/memory',
      name: 'memory',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Memory.vue')
    },
    {
      path: '/match3',
      name: 'match3',
      component: () => import('./views/Match3.vue')
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('./views/Playground.vue')
    }
  ]
})