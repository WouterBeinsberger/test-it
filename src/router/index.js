import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import BugsView from '@/views/BugsView.vue'

const routes = [
  {
    path: '/',
    component: HomeView
  },
  {
    path: '/bugs',
    component: BugsView
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
