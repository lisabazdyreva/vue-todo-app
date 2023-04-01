import { defineStore } from 'pinia';
import { ref } from 'vue';
import { todosData } from '../mock/todos';
import type { Todos } from '../types/todo';

export const useTodoStore = defineStore('todos', () => {
   const todos = ref<Todos>([]);

   const fetchTodos = () => {
     todos.value = todosData;
   };

  return {todos, fetchTodos};
});
