<script lang="ts" setup>
  import HomePage from '@/views/home-page.vue';
</script>

<template>
  <header class="header body__header">Todo app</header>
  <HomePage />
  <footer class="footer body__footer">App with Vue 3</footer>
</template>

<style scoped>
  .header {
    display: flex;
    flex: 0 0 auto;
    padding: 20px;
    background-color: forestgreen;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
  }

  .footer {
    display: flex;
    flex: 0 0 auto;
    padding: 20px;
    background-color: darkgreen;
    color: white;
  }
</style>
