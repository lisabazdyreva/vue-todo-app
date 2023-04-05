<script setup lang="ts">
  import { useTodosStore } from '../stores/todos';
  import { storeToRefs } from 'pinia';

  const storeTodos = useTodosStore();
  const { favoriteTodos } = storeToRefs(storeTodos);
</script>

<template>
  <main class="main body__main">
    <h2 class="main__title title">Your favorite todos</h2>
    <ul>
      <li v-for="todo in favoriteTodos">{{ todo.title }}</li>
    </ul>
  </main>
</template>

<style scoped></style>
