import { createRouter, createWebHistory } from 'vue-router';

import TodosPage from '../views/todos-page.vue';
import LoginPage from '../views/login-page.vue';
import AboutPage from '../views/about-page.vue';
import SettingsPage from '../views/settings-page.vue';
import FavoritesPage from '../views/favorites-page.vue';
import TodoDetailedPage from '../views/todo-detailed-page.vue';

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
      path: Route.Favorites,
      name: 'favorites',
      component: FavoritesPage,
    },
    {
      path: Route.Settings,
      name: 'settings',
      component: SettingsPage,
    },
    {
      path: Route.About,
      name: 'about',
      component: AboutPage,
    },
    {
      path: Route.Login,
      name: 'login',
      component: LoginPage,
    },
    {
      path: `${Route.TodoDetailed}:id`,
      name: 'todo',
      component: TodoDetailedPage,
    },
  ],
});

export default router;
