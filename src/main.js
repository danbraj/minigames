import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from './pages/Home'
import Memory from './pages/Memory'
import Match3 from './pages/Match3'

Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/memory', component: Memory },
  { path: '/match3', component: Match3 },
]

new Vue({
  el: '#app',
  router: new VueRouter({routes, mode: 'history', base: '/minigames'}),
  render: h => h(App)
})
