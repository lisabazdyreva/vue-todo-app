<script setup lang='ts'>
  import TodoListItem from '@/components/todo/todo-item/todo-list-item.vue';
  import TodoNewItem from '@/components/todo/todo-item/todo-new-item.vue';
  import { storeToRefs } from 'pinia';
  import { useTodosStore } from '../../stores/todos';
  import { useProcessStore } from '../../stores/process';

  const storeTodos = useTodosStore();
  const { todos } = storeToRefs(storeTodos);

  const storeProcess = useProcessStore();
  const { isAddNewTodoActive } = storeToRefs(storeProcess);
</script>

<template>
  <ul class='todo-list main__todo-list'>
    <TodoNewItem v-if='isAddNewTodoActive' />
    <TodoListItem v-for='(todo, index) in todos' :key='todo.id' :order='index + 1' :todo='todo' />
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
