import { defineStore } from 'pinia';
import { ref } from 'vue';

import { todosData } from '../mock/todos';
import type { Todo, Todos } from '../types/todo';
import type { SortingType } from '../types';
import { SortingValue } from '../utils/const';

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todos>([]);

  const fetchTodos = () => {
    todos.value = todosData;
  };

  const addTodo = (todo: Todo) => {
    console.log(todos);
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

  return { todos, fetchTodos, addTodo, removeTodo, editTodo, sortTodos };
});
