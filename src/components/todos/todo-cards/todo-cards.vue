<script setup lang="ts">
  import TodoCard from '@/components/todos/todo-card/todo-card.vue';
  import type { Todos } from '../../../types/todo';
  import TodoInDetailNew from '@/components/todos/todo-in-detail-new/todo-in-detail-new.vue';
  import { useProcessStore } from '../../../stores/process';
  import { storeToRefs } from 'pinia';

  const props = defineProps<{ todos: Todos }>();

  const storeProcess = useProcessStore();
  const { isAddNewTodoActive } = storeToRefs(storeProcess);
</script>

<template>
  <div class="todo-cards main__todo-cards">
    <TodoInDetailNew v-if="isAddNewTodoActive" />
    <TodoCard v-for="(todo, index) in props.todos" :key="todo.id" :order="index + 1" :todo="todo" />
  </div>
</template>

<style scoped>
  .main__todo-cards {
    margin-top: 50px;
  }

  .todo-cards {
    display: grid;
    grid-template-columns: 30% 30% 30%;
    justify-content: space-between;
    row-gap: 20px;
    align-items: stretch;
  }
</style>
