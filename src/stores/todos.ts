import { defineStore } from 'pinia';
import { ref } from 'vue';

import { todosData } from '../mock/todos';
import type { Todo, Todos } from '../types/todo';
import type { SortingType } from '../types';
import { SortingValue } from '../utils/const';

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todos>([]);
  const favoriteTodos = ref<Todos>([]);

  const fetchTodos = () => {
    todos.value = todosData;
  };

  const addTodo = (todo: Todo) => {
    todos.value.push(todo);
  };

  const removeTodo = (idToRemove: number) => {
    todos.value = todos.value.filter(({ id }) => id !== idToRemove);
  };

  const editTodo = (todo: Todo) => {
    let indexToEdit = -1;

    todos.value.forEach((todoInStore, index) => {
      if (todoInStore.id === todo.id) {
        indexToEdit = index;
      }
    });

    if (indexToEdit === -1) {
      return;
    }

    todos.value = [
      ...todos.value.slice(0, indexToEdit),
      todo,
      ...todos.value.slice(indexToEdit + 1),
    ];
  };

  const sortTodos = (sortType: SortingType) => {
    switch (sortType) {
      case SortingValue.Alphabet: {
        todos.value = todos.value.sort((todoA, todoB) => todoA.title.localeCompare(todoB.title));
        break;
      }
      case SortingValue.Latest: {
        todos.value = todos.value.slice();
        break;
      }
      case SortingValue.Oldest: {
        todos.value = todos.value.slice();
        break;
      }
      default: {
        todos.value = todos.value.sort((todoA, todoB) => todoA.id - todoB.id);
        break;
      }
    }
  };

  const toggleCompleted = (todo: Todo) => {
    const newTodo = { ...todo, completed: !todo.completed };
    editTodo(newTodo);
  };

  const setFavorites = () => {
    favoriteTodos.value = todos.value.filter((todo) => todo.isFavorite);
  };

  const toggleFavorite = (todo: Todo) => {
    const newTodo = { ...todo, isFavorite: !todo.isFavorite };

    editTodo(newTodo);
    setFavorites();
  };

  return {
    todos,
    favoriteTodos,
    fetchTodos,
    addTodo,
    removeTodo,
    editTodo,
    sortTodos,
    toggleCompleted,
    setFavorites,
    toggleFavorite,
  };
});
