<script setup lang="ts">
  import TodoListItem from '@/components/todo/todo-item/todo-list-item.vue';
  import TodoNewItem from '@/components/todo/todo-item/todo-new-item.vue';
</script>

<template>
  <ul class="todo-list main__todo-list">
    <!--    <TodoNewItem />-->
    <TodoListItem v-for="n in 10" :order="n" />
  </ul>
</template>

<style scoped>
  .todo-list {
    width: 100%;
    list-style: none;
    padding: 0;
    margin: 50px auto;
  }
</style>
