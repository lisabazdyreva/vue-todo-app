<script setup lang="ts">
  import TodoList from '@/components/todo-list/todo-list.vue';
  import Pagination from '@/components/todos-pagination/todos-pagination.vue';
  import { onMounted } from 'vue';
  import { useTodosStore } from '../stores/todos';
  import { useProcessStore } from '../stores/process';
  import Sorting from '@/components/sorting/sorting.vue';
  import Filter from '@/components/filter/filter.vue';
  import DisplayModeButton from '@/components/todo-buttons/display-mode-button.vue';

  const storeProcess = useProcessStore();
  const { setIsAddNewTodoActive } = storeProcess;

  const storeTodos = useTodosStore();
  const { fetchTodos } = storeTodos;

  const onButtonAddTodoHandler = () => {
    setIsAddNewTodoActive();
  };

  onMounted(() => {
    fetchTodos();
  });
</script>

<template>
  <main class="main body__main">
    <div class="main__wrapper">
      <h2 class="title main__title">Your todo list of tasks</h2>
      <button class="create-todo-button button" type="button" @click="onButtonAddTodoHandler">
        Add new
      </button>
    </div>

    <Sorting />
    <Filter />
    <DisplayModeButton />
    <TodoList />
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
    width: 50%;
  }

  .main__wrapper {
    display: flex;
    justify-content: space-between;
  }

  .title {
    text-transform: uppercase;
    text-align: center;
    margin: 0;
  }

  .content-wrapper--dark .title {
    color: var(--semi-dark-pink);
  }

  .content-wrapper--light .title {
    color: var(--dark-violet);
  }

  .create-todo-button {
    background-color: var(--dark-violet);
    color: var(--white);
  }
</style>
