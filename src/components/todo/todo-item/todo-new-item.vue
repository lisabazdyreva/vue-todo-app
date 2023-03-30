<script setup lang="ts">
  import SaveTodoButton from '@/components/todo/todo-buttons/save-todo-button.vue';
  import CancelTodoButton from '@/components/todo/todo-buttons/cancel-todo-button.vue';
</script>

<template>
  <li class="todo-list__item">
    <form>
      <label for="title">Title:</label>
      <input id="title" type="text" />
    </form>

    <div class="todo-list__buttons">
      <SaveTodoButton />
      <CancelTodoButton />
    </div>
  </li>
</template>

<style scoped></style>
