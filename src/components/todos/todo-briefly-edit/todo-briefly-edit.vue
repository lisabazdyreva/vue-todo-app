<script setup lang="ts">
  import CancelTodoButton from '@/components/todos/todo-buttons/cancel-todo-button.vue';
  import SaveTodoButton from '@/components/todos/todo-buttons/save-todo-button.vue';
  import type { Todo } from '../../../types/todo';
  import Filter from '@/components/filter/filter.vue';
  import { ref } from 'vue';

  const props = defineProps<{ todo: Todo }>();
  const isTimeless = ref(props.todo.timeless);

  const onTodoEditFormSubmitHandler = () => {};

  const onTimelessCheckboxChangeHandler = () => {
    isTimeless.value = !isTimeless.value;
  };
</script>

<template>
  <li class="todo-list__item">
    <form class="todo-edit-form" @submit.prevent="onTodoEditFormSubmitHandler">
      <fieldset class="todo-edit-form__group">
        <legend class="todo-edit-form__group-title">Todo description</legend>

        <label class="todo-edit-form__label" for="title">Title:</label>
        <input
          class="todo-edit-form__input"
          id="title"
          type="text"
          :value="props.todo.title"
          maxlength="60"
        />

        <label class="todo-edit-form__label">Description:</label>
        <textarea class="todo-edit-form__textarea" :value="props.todo.description"></textarea>

        <label class="todo-edit-form__label">
          <input
            class="todo-edit-form__input"
            type="checkbox"
            :value="isTimeless"
            :checked="isTimeless"
            @change="onTimelessCheckboxChangeHandler"
          />
          Is timeless?
        </label>
      </fieldset>

      <fieldset v-if="!isTimeless" class="todo-edit-form__group">
        <legend class="todo-edit-form__group-title">Duration</legend>

        <label class="todo-edit-form__label">From:</label>
        <input class="todo-edit-form__input" type="text" :value="props.todo.dates?.dateFrom" />

        <label class="todo-edit-form__label">To:</label>
        <input class="todo-edit-form__input" type="text" />
      </fieldset>

      <div class="todo-list__buttons">
        <SaveTodoButton @save-click-handler="$emit('save-click-handler')" />
        <CancelTodoButton @cancel-click-handler="$emit('cancel-click-handler')" />
      </div>
    </form>
  </li>
</template>

<style scoped>
  .todo-edit-form {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }

  .todo-edit-form__group {
    width: 50%;
    display: flex;
    flex-direction: column;
    border: none;
    margin: 0;
    padding-right: 20px;
  }

  .todo-edit-form__group-title {
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  }

  .todo-edit-form__label {
    text-transform: lowercase;
    margin-top: 20px;
  }

  .todo-edit-form__input {
    font-family: inherit;
    padding: 5px 10px;
    border: 2px solid var(--semi-dark-violet);
    border-radius: 5px;
    color: var(--dark-violet);
  }

  .todo-edit-form__textarea {
    font-family: inherit;
    padding: 5px 10px;
    border: 2px solid var(--semi-dark-violet);
    border-radius: 5px;
    resize: none;
    color: var(--dark-violet);
    line-height: inherit;
  }
</style>
