<script setup lang="ts">
  import TodoListItem from '@/components/todo/todo-list-item.vue';
  import TodoNewItem from '@/components/todo/todo-new-item.vue';
</script>

<template>
  <ul class="todo-list main__todo-list">
    <!--    <TodoNewItem />-->
    <TodoListItem v-for="n in 10" />
  </ul>
</template>

<style scoped>
  .todo-list {
    width: 50%;
    list-style: none;
    padding: 0;
    margin: 20px auto;
  }
</style>
