<script setup lang="ts">
  import TodoListItem from '@/components/todos/todo-list-item/todo-list-item.vue';
  import TodoBrieflyNew from '@/components/todos/todo-briefly-new/todo-briefly-new.vue';

  import { storeToRefs } from 'pinia';
  import { useProcessStore } from '../../../stores/process';

  import type { Todos } from '../../../types/todo';

  const props = defineProps<{ todos: Todos }>();

  const storeProcess = useProcessStore();
  const { isAddNewTodoActive } = storeToRefs(storeProcess);
</script>

<template>
  <ul class="todo-list main__todo-list">
    <TodoBrieflyNew v-if="isAddNewTodoActive" />
    <TodoListItem
      v-for="(todo, index) in props.todos"
      :key="todo.id"
      :order="index + 1"
      :todo="todo"
    />
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
