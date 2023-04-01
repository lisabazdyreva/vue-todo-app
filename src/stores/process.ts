import { defineStore } from 'pinia';
import {ref} from 'vue';

export const useProcessStore = defineStore('process', () => {
  const isAddNewTodoActive = ref(false);

  const setIsAddNewTodoActive = () => {
    isAddNewTodoActive.value = true;
  };

  const resetIsAddNewTodoActive = () => {
    isAddNewTodoActive.value = false;
  };

  return {isAddNewTodoActive, setIsAddNewTodoActive, resetIsAddNewTodoActive};
});
