import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home'
import Memory from './pages/Memory'
import Playground from './pages/Playground'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/memory', component: Memory },
  { path: '/playground', component: Playground },
]

new Vue({
  el: '#app',
  router: new VueRouter({routes, mode: 'history', base: '/minigames'}),
  render: h => h(App)
})
