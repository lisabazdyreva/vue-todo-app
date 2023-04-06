<script setup lang="ts">
  import SaveTodoButton from '@/components/todos/todo-buttons/save-todo-button.vue';
  import CancelTodoButton from '@/components/todos/todo-buttons/cancel-todo-button.vue';

  import { ref } from 'vue';
  import { useTodosStore } from '../../../stores/todos';
  import { storeToRefs } from 'pinia';
  import { useProcessStore } from '../../../stores/process';

  const todoTitle = ref('');
  const todoDescription = ref('');
  const todoDateFrom = ref('');
  const todoDateTo = ref('');

  const storeTodos = useTodosStore();
  const { addTodo } = storeTodos;
  const { todos } = storeToRefs(storeTodos);

  const storeProcess = useProcessStore();
  const { resetIsAddNewTodoActive } = storeProcess;

  const onCardAddFormSubmitHandler = () => {
    addTodo({
      id: todos.value.length + 1,
      title: todoTitle.value,
      description: todoDescription.value,
      completed: false,
      isFavorite: false,
      timeless: true,
      createdTime: new Date().toISOString(),
    });

    // // new Date(target.value).toISOString();
    resetIsAddNewTodoActive();
    todoTitle.value = '';
  };

  const onButtonCancelClickHandler = () => {
    todoTitle.value = '';
    todoDescription.value = '';
    resetIsAddNewTodoActive();
  };

  const onDateFromInputHandler = (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    todoDateFrom.value = target.value;
  };

  const onDateToInputHandler = (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    todoDateTo.value = target.value;
  };
</script>

<template>
  <div class="todo-card-new">
    <form class="card-add-form" @submit.prevent="onCardAddFormSubmitHandler">
      <fieldset class="card-add-form__group">
        <legend class="card-add-form__group-title">Todo description</legend>

        <label class="card-add-form__label" for="name">Title:</label>
        <input
          class="card-add-form__input"
          id="name"
          type="text"
          name="title"
          v-model="todoTitle"
        />
        <p class="card-add-form__validation-message">Поле обязательно к заполнению</p>

        <label class="card-add-form__label" for="description">Description:</label>
        <textarea
          class="card-add-form__textarea"
          id="description"
          name="description"
          v-model="todoDescription"
        ></textarea>
      </fieldset>

      <fieldset class="card-add-form__group">
        <legend class="card-add-form__group-title">Dates</legend>

        <label class="card-add-form__label">Date from:</label>
        <input
          class="card-add-form__input"
          type="datetime-local"
          name="date-from"
          id="date-from"
          :value="todoDateFrom"
          @input="onDateFromInputHandler"
        />

        <label class="card-add-form__label">Date to:</label>
        <input
          class="card-add-form__input"
          type="datetime-local"
          name="date-to"
          id="date-to"
          :value="todoDateTo"
          @input="onDateToInputHandler"
        />
      </fieldset>

      <div class="card-add-form__buttons-wrapper">
        <SaveTodoButton />
        <CancelTodoButton @cancel-click-handler="onButtonCancelClickHandler" />
      </div>
    </form>
  </div>
</template>

<style scoped>
  .todo-card-new {
    box-shadow: 1px 3px 5px var(--shadow-color);
    border-radius: 5px;
  }

  .content-wrapper--dark .todo-card-new {
    background-color: var(--dark-violet);
  }

  .card-add-form {
    display: flex;
    flex-direction: column;
  }

  .card-add-form__group {
    display: grid;
    border: none;
    margin: 0;
    padding-left: 10px;
    padding-right: 10px;
  }

  /*.card-add-form__group--one-row {*/
  /*    grid-template-columns: 1fr 2fr;*/
  /*    row-gap: 10px;*/
  /*}*/

  .card-add-form__group--one-row .card-edit-form__group-title {
    margin-bottom: 20px;
  }

  .card-add-form__group-title {
    text-align: center;
    padding-top: 20px;
    font-weight: 600;
    text-transform: uppercase;
  }

  .card-add-form__label {
    font-weight: 500;
    text-transform: lowercase;
    color: var(--dark-violet);
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .card-add-form__input {
    display: block;
    font-family: inherit;
    font-weight: 500;
    padding: 10px 10px;
    border: 2px solid var(--semi-dark-violet);
    border-radius: 5px;
  }

  .card-add-form__textarea {
    font-family: inherit;
    font-weight: 500;
    border: 2px solid var(--semi-dark-violet);
    border-radius: 5px;
    resize: none;
    padding: 10px 10px;
  }

  .card-add-form__validation-message {
    font-size: 10px;
    margin: 0;
    text-transform: uppercase;
  }

  .card-add-form__buttons-wrapper {
    display: flex;
    justify-content: space-between;
    padding-left: 10px;
    padding-right: 10px;
  }
</style>
