import { createRouter, createWebHistory } from 'vue-router';
import TodosPage from '../views/todos-page.vue';
import LoginPage from '../views/login-page.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: () => ({ path: '/todos' }),
    },
    {
      path: '/todos',
      name: 'todos',
      component: TodosPage,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
  ],
});

export default router;
