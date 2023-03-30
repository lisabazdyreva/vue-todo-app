<script setup lang="ts">
  import Navigation from '@/components/header/navigation.vue';
  import NavigationButtons from '@/components/header/navigation-buttons.vue';
</script>

<template>
  <header class="header body__header">
    <h1 class="header__title">Todo app</h1>

    <Navigation />
    <NavigationButtons />
  </header>
</template>

<style scoped>
  .header {
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 20px;
    background-color: var(--violet-blue);
    color: var(--white);
    text-transform: uppercase;
    font-weight: 700;
  }

  .header__title {
    font-size: 20px;
    margin: 0;
  }
</style>
