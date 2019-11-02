import Vue from 'vue'
import VueRouter from 'vue-router'

import Top from '@/views/Top.vue'
import Careers from '@/views/Careers.vue'
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
    path: '/careers',
    name: 'careers',
    component: Careers
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
