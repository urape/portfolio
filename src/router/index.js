import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/views/Top.vue'
import About from '@/views/About.vue'
import Skills from '@/views/Skills.vue'
import Works from '@/views/Works.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'top',
    component: Top
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/skills',
    name: 'skills',
    component: Skills
  },
  {
    path: '/works',
    name: 'works',
    component: Works
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
