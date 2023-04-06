<script setup lang="ts">
  import type { Todo } from '../../../types/todo';
  import { ref } from 'vue';
  import SaveTodoButton from '@/components/todos/todo-buttons/save-todo-button.vue';
  import CancelTodoButton from '@/components/todos/todo-buttons/cancel-todo-button.vue';

  const props = defineProps<{ todo: Todo }>();

  const title = ref(props.todo.title);
  const description = ref(props.todo.description);

  const onEditCardFormSubmitHandler = () => {};
</script>

<template>
  <div class="todo-card-edit">
    <form class="card-edit-form" @submit.prevent="onEditCardFormSubmitHandler">
      <fieldset class="card-edit-form__group">
        <legend class="card-edit-form__group-title">Todo description</legend>

        <label class="card-edit-form__label">Title:</label>
        <input class="card-edit-form__input" type="text" :value="title" />

        <label class="card-edit-form__label">Description:</label>
        <textarea class="card-edit-form__textarea" v-model="description"></textarea>
      </fieldset>

      <fieldset class="card-edit-form__group card-edit-form__group--one-row">
        <legend class="card-edit-form__group-title">Dates</legend>

        <label class="card-edit-form__label">Date from:</label>
        <input class="card-edit-form__input" type="text" />

        <label class="card-edit-form__label">Date to:</label>
        <input class="card-edit-form__input" type="text" />
      </fieldset>

      <div class="card-edit-form__buttons-wrapper">
        <SaveTodoButton @save-click-handler="$emit('saveClickHandler')" />
        <CancelTodoButton @cancel-click-handler="$emit('cancelClickHandler')" />
      </div>
    </form>
  </div>
</template>

<style scoped>
  .todo-card-edit {
    box-shadow: 1px 3px 5px var(--shadow-color);
    border-radius: 5px;
  }

  .content-wrapper--dark .todo-card-edit {
    background-color: var(--dark-violet);
  }

  .card-edit-form {
    display: flex;
    flex-direction: column;
  }

  .card-edit-form__group {
    display: grid;
    border: none;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
  }

  .card-edit-form__group--one-row {
    grid-template-columns: 1fr 2fr;
    row-gap: 10px;
  }

  .card-edit-form__group--one-row .card-edit-form__group-title {
    margin-bottom: 20px;
  }

  .card-edit-form__group-title {
    text-align: center;
    padding-top: 20px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .card-edit-form__label {
    font-weight: 500;
    text-transform: lowercase;
    color: var(--dark-violet);
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .card-edit-form__input {
    display: block;
    font-family: inherit;
    font-weight: 500;
    padding: 10px 10px;
    border: 2px solid var(--semi-dark-violet);
    border-radius: 5px;
  }
  .card-edit-form__textarea {
    font-family: inherit;
    font-weight: 500;
    border: 2px solid var(--semi-dark-violet);
    border-radius: 5px;
    resize: none;
    padding: 10px 10px;
  }

  .card-edit-form__buttons-wrapper {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
