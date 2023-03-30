<script setup lang="ts">
  import TodoList from '@/components/todo/todo-list.vue';
  import Pagination from '@/components/pagination.vue';
</script>

<template>
  <main class="main body__main">
    <h2 class="title main__title">Your todo list of tasks:</h2>
    <TodoList />
    <Pagination />
  </main>
</template>

<style>
  .main {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
  }

  .title {
    color: darkslategray;
    text-align: center;
    margin: 100px 0 40px;
  }
</style>
