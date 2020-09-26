import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '../views/Settings.vue'),
  },
  {
    path: '/memory',
    name: 'Memory',
    component: () => import(/* webpackChunkName: "memory" */ '../views/Games/MemoryGame.vue')
  },
  {
    path: '/repeat',
    name: 'Repeat',
    component: () => import(/* webpackChunkName: "repeat" */ '../views/Games/RepeatGame.vue')
  },
  {
    path: '/match3',
    name: 'Match3',
    component: () => import(/* webpackChunkName: "match3" */ '../views/Games/Match3Game.vue')
  },
  {
    path: '/snake',
    name: 'Snake',
    component: () => import(/* webpackChunkName: "snakeGame" */ '../views/Games/SnakeGame.vue')
  },
  {
    path: '/playground',
    name: 'Playground',
    component: () => import(/* webpackChunkName: "playground" */ '../views/Games/Playground.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router