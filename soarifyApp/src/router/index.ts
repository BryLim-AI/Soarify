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
      path: '/db',
      name: 'db',
      component: () => import('../views/page1.vue')
    },
    {
      path: '/office',
      name: 'office',
      component: () => import('../views/office.vue')
    },
    {
      path: '/acad',
      name: 'acad',
      component: () => import('../views/acad.vue')
    },
    {
      path: '/soc',
      name: 'soc',
      component: () => import('../views/social.vue')
    },
  ]
})

export default router
