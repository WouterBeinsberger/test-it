import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import BugsView from '@/views/BugsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/bugs',
    name: 'bugs',
    component: BugsView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
