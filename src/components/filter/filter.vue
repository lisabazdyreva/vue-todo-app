<script setup lang="ts">
  import { FilterValue } from '@/utils/const';
</script>

<template>
  <div class="filter">
    <input
      class="filter__input"
      :id="FilterValue.Done"
      name="filter"
      type="checkbox"
      :value="FilterValue.Done"
    />
    <label class="filter__label" :for="FilterValue.Done">Законченные</label>

    <input
      class="filter__input"
      :id="FilterValue.Planned"
      name="filter"
      type="checkbox"
      :value="FilterValue.Planned"
    />
    <label class="filter__label" :for="FilterValue.Planned">Предстоящие</label>

    <input
      class="filter__input"
      :id="FilterValue.Today"
      name="filter"
      type="checkbox"
      :value="FilterValue.Today"
    />
    <label class="filter__label" :for="FilterValue.Today">Сегодняшние</label>

    <input
      class="filter__input"
      :id="FilterValue.Continuous"
      name="filter"
      type="checkbox"
      :value="FilterValue.Continuous"
    />
    <label class="filter__label" :for="FilterValue.Continuous">В процессе</label>
  </div>
</template>

<style scoped>
  .filter__input {
    cursor: pointer;
  }

  .filter__label {
    cursor: pointer;
  }
</style>
