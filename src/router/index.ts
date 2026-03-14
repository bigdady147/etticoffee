import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/franchise-detail',
      name: 'franchise-detail',
      component: () => import('../views/FranchiseDetailView.vue')
    }
  ]
})

export default router
