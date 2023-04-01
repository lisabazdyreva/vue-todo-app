<script setup lang='ts'>
  import NavigationLinks from '@/components/main-header/navigation-links.vue';
  import UserLinks from '@/components/main-header/user-links.vue';
  import { useLightModeStore } from '../../stores/light-mode';
  import { storeToRefs } from 'pinia';

  const store = useLightModeStore();

  const { isLight } = storeToRefs(store);
  const { toggleLightMode } = store;
</script>

<template>
  <header class='header body__header'>
    <h1 class='header__title'>Todo app</h1>

    <NavigationLinks />
    <UserLinks />
    <button class='light-mode-button button' type='button' @click='toggleLightMode'>
      {{ isLight ? 'Dark' : 'Light' }} mode
    </button>
  </header>
</template>

<style>
  .header {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 0 40px;
    box-shadow: 0 2px 10px var(--shadow-color);
  }

  .content-wrapper--dark .header {
    background-color: var(--deep-dark-violet);
  }

  .content-wrapper--light .header {
    background-color: var(--violet-blue);
  }

  .header__title {
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
  }

  .content-wrapper--dark .header__title {
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .header__title {
    color: var(--white);
  }

  .light-mode-button {
    min-width: 150px;
  }

  .content-wrapper--dark .light-mode-button {
    background-color: var(--violet-blue);
    color: var(--white);
  }

  .content-wrapper--light .light-mode-button {
    background-color: var(--dark-violet);
    color: var(--white);
  }
</style>
