import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from './stores/auth.store';

export const router = createRouter({
  routes: [
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('./views/not-found-view.vue'),
    // },
    {
      path: '/register',
      component: () => import('@/views/register-view.vue'),
      name: 'register',
    },
    {
      path: '/login',
      component: () => import('@/views/login-view.vue'),
      name: 'login',
    },
    {
      path: '/',
      component: () => import('@/views/welcome-view.vue'),
    },
    {
      path: '/meditations',
      component: () => import('@/views/main-view.vue'),
      children: [
        {
          path: '',
          name: 'meditations',
          component: () => import('@/views/meditations-view.vue'),
        },
      ],
    },
    {
      path: '/statistics',
      component: () => import('@/views/main-view.vue'),
      children: [
        {
          path: '',
          name: 'statistics',
          component: () => import('@/views/statistics-view.vue'),
        },
      ],
    },
  ],
  history: createWebHistory(),
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  if (!authStore.getToken && to.name !== 'login') {
    return { name: 'login' };
  }
});
