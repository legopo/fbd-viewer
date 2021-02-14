import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tables from '../views/Tables.vue'
import Rankings from '../views/Rankings.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/tables',
    name: 'Tables',
    component: Tables
  },
  {
    path: '/rankings',
    name: 'Rankings',
    component: Rankings
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
