<script setup lang="ts">
  import type { Todo } from '../../../types/todo';
  import { ref } from 'vue';
  import SaveTodoButton from '@/components/todos/todo-buttons/save-todo-button.vue';
  import CancelTodoButton from '@/components/todos/todo-buttons/cancel-todo-button.vue';

  const props = defineProps<{ todo: Todo }>();
  const title = ref(props.todo.title);
</script>

<template>
  <div class="todo-card-edit">
    <label>Title</label>
    <input type="text" :value="title" />

    <div>
      <SaveTodoButton @save-click-handler="$emit('saveClickHandler')" />
      <CancelTodoButton @cancel-click-handler="$emit('cancelClickHandler')" />
    </div>
  </div>
</template>

<style scoped>
  .todo-card-edit {
    border: 1px solid var(--dark-violet);
  }
</style>
