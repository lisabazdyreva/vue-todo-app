<script setup lang="ts">
  import { Route } from '@/utils/const';
</script>

<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list__item">
        <RouterLink class="navigation-list__link" :to="Route.Home">Home</RouterLink>
      </li>
      <li class="navigation-list__item">
        <a class="navigation-list__link" href="#">Calendar</a>
      </li>

      <li class="navigation-list__item">
        <RouterLink class="navigation-list__link" :to="Route.Favorites">Favorites</RouterLink>
      </li>

      <li class="navigation-list__item">
        <RouterLink class="navigation-list__link" :to="Route.Settings">Settings</RouterLink>
      </li>

      <li class="navigation-list__item">
        <RouterLink class="navigation-list__link" :to="Route.About">About</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .navigation-list {
    display: flex;
    gap: 40px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .navigation-list__link {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;

    text-decoration: none;
    padding: 20px 0;
  }

  .content-wrapper--dark .navigation-list__link {
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .navigation-list__link {
    color: var(--white);
  }
</style>
