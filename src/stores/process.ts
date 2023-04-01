import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useProcessStore = defineStore('process', () => {
  const isAddNewTodoActive = ref(false);
  const isBrieflyTodoDisplay = ref(true);

  const setIsAddNewTodoActive = () => {
    isAddNewTodoActive.value = true;
  };

  const resetIsAddNewTodoActive = () => {
    isAddNewTodoActive.value = false;
  };

  const toggleIsBrieflyTodoDisplay = () => {
    isBrieflyTodoDisplay.value = !isBrieflyTodoDisplay.value;
  };

  return {
    isAddNewTodoActive,
    isBrieflyTodoDisplay,
    setIsAddNewTodoActive,
    resetIsAddNewTodoActive,
    toggleIsBrieflyTodoDisplay,
  };
});
