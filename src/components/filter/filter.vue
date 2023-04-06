<script setup lang="ts">
  import { FilterValue } from '@/utils/const';
  import FilterCheckbox from '@/components/filter/filter-checkbox.vue';
</script>

<template>
  <div class="filter">
    <FilterCheckbox v-for="filter in FilterValue" :key="filter" :filter="filter" />
  </div>
</template>

<style scoped>
  .filter {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
  }

  .content-wrapper--dark .filter {
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .filter {
    color: var(--dark-violet);
  }
</style>
