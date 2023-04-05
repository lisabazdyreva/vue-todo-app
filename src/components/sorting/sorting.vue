<script setup lang="ts">
  import { ref } from 'vue';

  import { SortingValue } from '../../utils/const';
  import { SortingType } from '../../types';
  import { useTodosStore } from '../../stores/todos';

  const sortType = ref<SortingType>(SortingValue.Default);

  const storeTodos = useTodosStore();
  const { sortTodos } = storeTodos;

  const onSelectSortingChangeHandler = (evt: Event) => {
    const target = evt.target as HTMLInputElement;

    if (sortType.value === target.value) {
      return;
    }

    sortType.value = target.value as SortingType;
    sortTodos(sortType.value);
  };
</script>

<template>
  <div class="sorting">
    <span class="sorting__title">Set sorting:</span>
    <select class="sorting__select" @change="onSelectSortingChangeHandler">
      <option class="sorting__option" disabled value="">Select sorting type</option>
      <option class="sorting__option" :value="SortingValue.Default">by id</option>
      <option class="sorting__option" :value="SortingValue.Alphabet">alphabetically</option>
      <option class="sorting__option" :value="SortingValue.Oldest">from oldest</option>
      <option class="sorting__option" :value="SortingValue.Latest">from latest</option>
    </select>
  </div>
</template>

<style>
  .sorting {
    width: 20%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .sorting__title {
    margin-right: 10px;
  }

  .sorting__select {
    font-size: inherit;
    font-family: inherit;
    padding: 5px 10px;
    border-color: var(--semi-dark-violet);
    border-width: 2px;
    border-radius: 5px;
    cursor: pointer;
  }

  .sorting__option:disabled {
    height: 30px;
    background-color: var(--semi-dark-violet);
    color: var(--white);
  }
</style>
