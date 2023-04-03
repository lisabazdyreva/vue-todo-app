<script setup lang="ts">
  import EditTodoButton from '@/components/todos/todo-buttons/edit-todo-button.vue';
  import RemoveTodoButton from '@/components/todos/todo-buttons/remove-todo-button.vue';
  import type { Todo } from '../../../types/todo';

  const props = defineProps<{ todo: Todo }>();
</script>

<template>
  <li class="todo-list__item">
    <div class="todo-list__item-info">
      <span class="todo-list__item-order">{{ props.todo.id }}. это не точно, мб порядок </span>
      <span class="todo-list__item-title">{{ props.todo.title }}</span>
    </div>
    <div class="todo-list__buttons">
      <EditTodoButton @edit-click-handler="$emit('edit-click-handler')" />
      <RemoveTodoButton @remove-click-handler="$emit('remove-click-handler')" />
    </div>
  </li>
</template>

<style scoped></style>
