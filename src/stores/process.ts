import { defineStore } from 'pinia';
import { ref } from 'vue';
import { TodoListView } from '../utils/const';

export const useProcessStore = defineStore('process', () => {
  const isAddNewTodoActive = ref(false);
  const displayModeTodo = ref<(typeof TodoListView)[keyof typeof TodoListView]>(
    TodoListView.BrieflyList
  );

  const setIsAddNewTodoActive = () => {
    isAddNewTodoActive.value = true;
  };

  const resetIsAddNewTodoActive = () => {
    isAddNewTodoActive.value = false;
  };

  const setDisplayModeTodo = (mode: (typeof TodoListView)[keyof typeof TodoListView]) => {
    displayModeTodo.value = mode;
  };

  return {
    isAddNewTodoActive,
    displayModeTodo,
    setIsAddNewTodoActive,
    resetIsAddNewTodoActive,
    setDisplayModeTodo,
  };
});
