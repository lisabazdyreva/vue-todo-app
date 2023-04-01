<script setup lang="ts">
  import { ref, watch } from 'vue';
  import { SortingValue } from '../../utils/const';
  import { SortingType } from '../../types';
  import { useTodosStore } from '../../stores/todos';

  const sortType = ref<SortingType>(SortingValue.Default);

  const storeTodos = useTodosStore();
  const { sortTodos } = storeTodos;

  const onRadioSortingChangeHandler = (evt: Event) => {
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
    <input
      class="sorting__input"
      :id="SortingValue.Default"
      name="sort"
      type="radio"
      :value="SortingValue.Default"
      @change="onRadioSortingChangeHandler"
      checked
    />
    <label class="sorting__label" :for="SortingValue.Default">по идентификатору</label>

    <input
      class="sorting__input"
      :id="SortingValue.Alphabet"
      name="sort"
      type="radio"
      :value="SortingValue.Alphabet"
      @change="onRadioSortingChangeHandler"
    />
    <label class="sorting__label" :for="SortingValue.Alphabet">по алфавиту</label>

    <input
      class="sorting__input"
      :id="SortingValue.Oldest"
      name="sort"
      type="radio"
      :value="SortingValue.Oldest"
      @change="onRadioSortingChangeHandler"
    />
    <label class="sorting__label" :for="SortingValue.Oldest">сначала старые</label>

    <input
      class="sorting__input"
      :id="SortingValue.Latest"
      name="sort"
      type="radio"
      :value="SortingValue.Latest"
      @change="onRadioSortingChangeHandler"
    />
    <label class="sorting__label" :for="SortingValue.Latest">сначала новые</label>
  </div>
</template>

<style>
  .sorting__input {
    cursor: pointer;
  }

  .sorting__label {
    cursor: pointer;
  }
</style>
