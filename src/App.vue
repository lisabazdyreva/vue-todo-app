<script lang="ts" setup>
  import HomePage from '@/views/home-page.vue';
  import Header from '@/components/header/header.vue';
  import LoginPage from '@/views/login-page.vue';
</script>

<template>
  <Header />
  <HomePage />
  <!--  <LoginPage />-->
  <footer class="footer body__footer">App with Vue 3</footer>
</template>

<style scoped>
  .footer {
    display: flex;
    flex: 0 0 auto;
    padding: 20px;
    background-color: var(--pink);
    color: var(--dark-violet);
  }
</style>
