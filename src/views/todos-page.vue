<script setup lang="ts">
  import Pagination from '@/components/todos-pagination/todos-pagination.vue';
  import { useProcessStore } from '../stores/process';
  import Sorting from '@/components/sorting/sorting.vue';
  import Filter from '@/components/filter/filter.vue';
  import Todos from '@/components/todos/todos.vue';
  import { storeToRefs } from 'pinia';

  const storeProcess = useProcessStore();
  const { setIsAddNewTodoActive } = storeProcess;
  const { isAddNewTodoActive } = storeToRefs(storeProcess);

  const onButtonAddTodoHandler = () => {
    setIsAddNewTodoActive();
  };
</script>

<template>
  <main class="main body__main">
    <h2 class="title main__title">Your todo list of tasks</h2>

    <div class="main__wrapper">
      <div class="button-wrapper">
        <button
          class="create-todo-button button"
          type="button"
          @click="onButtonAddTodoHandler"
          :disabled="isAddNewTodoActive"
        >
          Add new
        </button>
      </div>

      <Filter />
      <Sorting />
    </div>

    <Todos />
    <Pagination />
  </main>
</template>

<style>
  .body__main {
    margin: 100px auto 50px;
  }

  .main {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    width: 70%;
  }

  .main__wrapper {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }

  .title {
    text-transform: uppercase;
    text-align: center;
    margin: 0;
    user-select: none;
  }

  .content-wrapper--dark .title {
    color: var(--light-pink);
    opacity: 0.9;
  }

  .content-wrapper--light .title {
    color: var(--dark-violet);
  }

  .create-todo-button {
    background-color: var(--dark-violet);
    color: var(--white);
  }

  .content-wrapper--dark .create-todo-button:hover:not(:disabled) {
    background-color: var(--semi-dark-violet);
  }

  .content-wrapper--light .create-todo-button:hover:not(:disabled) {
    background-color: var(--dark-violet-hover);
    color: var(--light-pink);
  }

  .content-wrapper--dark .create-todo-button:disabled {
    background-color: var(--gray);
    opacity: 0.8;
    color: var(--dark-violet);
    cursor: not-allowed;
  }

  .content-wrapper--light .create-todo-button:disabled {
    background-color: var(--gray);
    cursor: not-allowed;
  }

  .button-wrapper {
    width: 20%;
  }
</style>
