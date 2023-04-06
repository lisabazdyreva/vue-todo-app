<script setup lang="ts">
  import { ref } from 'vue';
  import { useTodosStore } from '../../../stores/todos';
  import { storeToRefs } from 'pinia';
  import { useProcessStore } from '../../../stores/process';

  import SaveTodoButton from '@/components/todos/todo-buttons/save-todo-button.vue';
  import CancelTodoButton from '@/components/todos/todo-buttons/cancel-todo-button.vue';

  const storeTodos = useTodosStore();
  const { addTodo } = storeTodos;
  const { todos } = storeToRefs(storeTodos);

  const storeProcess = useProcessStore();
  const { resetIsAddNewTodoActive } = storeProcess;

  const todoTitle = ref('');
  const todoDescription = ref('');

  const onButtonSaveClickHandler = () => {
    addTodo({
      id: todos.value.length + 1,
      title: todoTitle.value,
      description: todoDescription.value,
      completed: false,
      timeless: true,
      createdTime: new Date().toISOString(),
      isFavorite: false,
    });
    resetIsAddNewTodoActive();
    todoTitle.value = '';
  };

  const onButtonCancelClickHandler = () => {
    resetIsAddNewTodoActive();
    todoTitle.value = '';
  };
</script>

<template>
  <li class="todo-list__item">
    <form class="todo-add-form">
      <fieldset class="todo-add-form__group">
        <legend class="todo-add-form__group-title">Todo description</legend>

        <label class="todo-add-form__label" for="title">Title:</label>
        <input class="todo-add-form__input" id="title" type="text" v-model="todoTitle" />

        <label class="todo-add-form__label">Description:</label>
        <textarea
          class="todo-add-form__textarea"
          id="description"
          v-model="todoDescription"
        ></textarea>
      </fieldset>

      <fieldset class="todo-add-form__group">
        <legend class="todo-add-form__group-title">Dates</legend>

        <label class="todo-add-form__label" for="title">Date from:</label>
        <input class="todo-add-form__input" type="text" />

        <label class="todo-add-form__label" for="title">Date to:</label>
        <input class="todo-add-form__input" type="text" />
      </fieldset>

      <div class="todo-list__buttons">
        <SaveTodoButton @save-click-handler="onButtonSaveClickHandler" />
        <CancelTodoButton @cancel-click-handler="onButtonCancelClickHandler" />
      </div>
    </form>
  </li>
</template>

<style scoped>
  .todo-add-form {
    width: 100%;
    display: flex;
  }

  .todo-add-form__group {
    width: 50%;
    display: flex;
    flex-direction: column;
    border: none;
  }

  .todo-add-form__group-title {
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  }

  .todo-add-form__label {
    text-transform: lowercase;
    margin-top: 20px;
  }

  .todo-add-form__input {
    font-family: inherit;
    padding: 5px 10px;
    border: 2px solid var(--semi-dark-violet);
    border-radius: 5px;
    color: var(--dark-violet);
  }

  .todo-add-form__textarea {
    font-family: inherit;
    padding: 5px 10px;
    border: 2px solid var(--semi-dark-violet);
    border-radius: 5px;
    resize: none;
    color: var(--dark-violet);
    line-height: inherit;
  }
</style>
