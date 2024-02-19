import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/steps/wakeup',
      name: 'WakeUp',
      component: () => import('../views/WakeUpView.vue')
    },
    {
      path: '/steps/personalinfo',
      name: 'PersonalInfo',
      component: () => import('../views/PersonalInfoView.vue')
    },
    {
      path: '/success',
      name: 'Success',
      component: () => import('../views/SuccessView.vue')
    }
  ]
})

export default router
