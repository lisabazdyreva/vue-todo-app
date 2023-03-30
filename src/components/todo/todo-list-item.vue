<script setup lang="ts">
  import EditTodoButton from '@/components/todo-buttons/edit-todo-button.vue';
  import RemoveTodoButton from '@/components/todo-buttons/remove-todo-button.vue';
</script>

<template>
  <li class="todo-list__item">
    <div class="todo-list__item-info">
      <span class="todo-list__item-order">1. </span>
      <span class="todo-list__item-title">pet cats</span>
      <span class="todo-list__item-author"> by you</span>
    </div>

    <div class="todo-list__buttons">
      <EditTodoButton />
      <RemoveTodoButton />
    </div>
  </li>
</template>

<style>
  .todo-list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 2px solid green;
    border-radius: 5px;
    padding: 10px;
    margin: 5px 0;
  }

  .todo-list__item-title {
    text-transform: capitalize;
  }

  .todo-list__buttons {
    display: flex;
    gap: 5px;
  }
</style>
