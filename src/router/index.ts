import { createRouter, createWebHistory } from 'vue-router';

import TodosPage from '../views/todos-page.vue';
import LoginPage from '../views/login-page.vue';
import AboutPage from '../views/about-page.vue';
import SettingsPage from '../views/settings-page.vue';

import { Route } from '../utils/const';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: Route.Home,
      name: 'home',
      redirect: () => ({ path: Route.Todos }),
    },
    {
      path: Route.Todos,
      name: 'todos',
      component: TodosPage,
    },
    {
      path: Route.Login,
      name: 'login',
      component: LoginPage,
    },
    {
      path: Route.About,
      name: 'about',
      component: AboutPage,
    },
    {
      path: Route.Settings,
      name: 'settings',
      component: SettingsPage,
    },
  ],
});

export default router;
