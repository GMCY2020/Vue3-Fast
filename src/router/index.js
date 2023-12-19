import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/LayouContainer.vue'),
      children: []
    }
  ]
})

// 校验
router.beforeEach((to) => {
  if (to.path !== '/login' && to.path != '/') return '/login'
})

export default router
