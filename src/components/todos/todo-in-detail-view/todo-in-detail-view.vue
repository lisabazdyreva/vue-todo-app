<script setup lang="ts">
  import EditTodoButton from '@/components/todos/todo-buttons/edit-todo-button.vue';
  import RemoveTodoButton from '@/components/todos/todo-buttons/remove-todo-button.vue';
  import type { Todo } from '../../../types/todo';

  const props = defineProps<{ todo: Todo }>();
</script>

<template>
  <div class="todo-card">
    <h3 class="todo-card__title">{{ props.todo.title }}</h3>

    <p class="todo-card__description">{{ props.todo.description }}</p>

    <div class="todo-card__buttons">
      <EditTodoButton @edit-click-handler="$emit('edit-click-handler')" />
      <RemoveTodoButton @remove-click-handler="$emit('remove-click-handler')" />
    </div>
  </div>
</template>

<style scoped>
  .todo-card {
    border: 1px solid var(--dark-violet);
    border-radius: 5px;
    padding: 10px;
  }

  .todo-card__title {
    margin: 20px 0;
    text-align: center;
  }

  .todo-card__description {
    margin: 20px 0;
  }

  .todo-card__buttons {
    display: flex;
    justify-content: space-between;
  }
</style>
