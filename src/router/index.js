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
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/check-in',
      name: 'check-in',
      component: () => import('../views/CheckInView.vue')
    },
    {
      path: '/check-in-2',
      name: 'check-in-2',
      component: () => import('../views/CheckInTwo.vue')
    },
    {
      path: '/check-out',
      name: 'check-out',
      component: () => import('../views/CheckOutView.vue')
    }
  ]
})

export default router
