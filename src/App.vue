<script lang="ts" setup>
  import HomePage from '@/views/home-page.vue';
  import Header from '@/components/header/header.vue';
  import LoginPage from '@/views/login-page.vue';
  import { useLightModeStore } from './stores/light-mode';
  import { storeToRefs } from 'pinia';

  const store = useLightModeStore();

  const { isLight } = storeToRefs(store);
</script>

<template>
  <div
    class="content-wrapper"
    :class="[isLight ? 'content-wrapper--light' : 'content-wrapper--dark']"
  >
    <Header />
    <!--    <HomePage />-->
    <LoginPage />
    <footer class="footer body__footer">App with Vue 3</footer>
  </div>
</template>

<style scoped>
  .content-wrapper--dark {
    background-color: var(--dark-violet-theme-bg);
  }

  .content-wrapper--light {
    background-color: var(--white);
  }

  .footer {
    display: flex;
    flex: 0 0 auto;
    padding: 20px;
  }

  .content-wrapper--dark .footer {
    background-color: var(--dark-violet);
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .footer {
    background-color: var(--pink);
    color: var(--dark-violet);
  }
</style>
