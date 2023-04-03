<script setup lang="ts">
  import CancelTodoButton from '@/components/todos/todo-buttons/cancel-todo-button.vue';
  import SaveTodoButton from '@/components/todos/todo-buttons/save-todo-button.vue';
  import type { Todo } from '../../../types/todo';

  const props = defineProps<{ todo: Todo }>();
</script>

<template>
  <li class="todo-list__item">
    <label for="title">Title:</label>
    <input id="title" type="text" :value="props.todo.title" />

    <div class="todo-list__buttons">
      <SaveTodoButton @save-click-handler="$emit('save-click-handler')" />
      <CancelTodoButton @cancel-click-handler="$emit('cancel-click-handler')" />
    </div>
  </li>
</template>

<style scoped></style>
