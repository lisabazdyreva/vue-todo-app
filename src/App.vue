<script lang="ts" setup>
  import Header from '@/components/main-header/main-header.vue';

  import { useLightModeStore } from './stores/light-mode';
  import { storeToRefs } from 'pinia';
  import { useTodosStore } from './stores/todos';
  import { onMounted } from 'vue';

  const storeMode = useLightModeStore();
  const { isLight } = storeToRefs(storeMode);

  const storeTodos = useTodosStore();
  const { fetchTodos, setFavorites } = storeTodos;

  onMounted(() => {
    fetchTodos();
    setFavorites();
  });
</script>

<template>
  <div
    class="content-wrapper"
    :class="[isLight ? 'content-wrapper--light' : 'content-wrapper--dark']"
  >
    <Header />
    <RouterView />
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
    pointer-events: none;
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
