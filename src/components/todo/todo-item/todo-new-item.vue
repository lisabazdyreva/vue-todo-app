<script setup lang="ts">
  import SaveTodoButton from '@/components/todo/todo-buttons/save-todo-button.vue';
  import CancelTodoButton from '@/components/todo/todo-buttons/cancel-todo-button.vue';
  import { ref } from 'vue';

  const todoTitle = ref('');

  const onButtonSaveClickHandler = () => {
    console.log('clicked')
    todoTitle.value = '';
  };

  const onButtonCancelClickHandler = () => {
    todoTitle.value = '';
  };
</script>

<template>
  <li class="todo-list__item">
    <label for="title">Title:</label>
    <input id="title" type="text" v-model='todoTitle' />

    <div class="todo-list__buttons">
      <SaveTodoButton @save-button-handler='onButtonSaveClickHandler'/>
      <CancelTodoButton @cancel-button-handler='onButtonCancelClickHandler'/>
    </div>
  </li>
</template>

<style scoped></style>
