<script setup lang='ts'>
  import { ref } from 'vue';
  import { useTodosStore } from '../../../stores/todos';
  import { storeToRefs } from 'pinia';
  import { useProcessStore } from '../../../stores/process';

  import SaveTodoButton from '@/components/todo/todo-buttons/save-todo-button.vue';
  import CancelTodoButton from '@/components/todo/todo-buttons/cancel-todo-button.vue';

  const storeTodos = useTodosStore();
  const { addTodo } = storeTodos;
  const { todos } = storeToRefs(storeTodos);

  const storeProcess = useProcessStore();
  const { resetIsAddNewTodoActive } = storeProcess;

  const todoTitle = ref('');

  const onButtonSaveClickHandler = () => {
    addTodo({ id: todos.value.length, title: todoTitle.value, description: 'hi', completed: false });
    resetIsAddNewTodoActive();
    todoTitle.value = '';
  };

  const onButtonCancelClickHandler = () => {
    resetIsAddNewTodoActive();
    todoTitle.value = '';
  };
</script>

<template>
  <li class='todo-list__item'>
    <label for='title'>Title:</label>
    <input id='title' type='text' v-model='todoTitle' />

    <div class='todo-list__buttons'>
      <SaveTodoButton @save-button-handler='onButtonSaveClickHandler' />
      <CancelTodoButton @cancel-button-handler='onButtonCancelClickHandler' />
    </div>
  </li>
</template>

<style scoped></style>
