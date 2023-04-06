<script setup lang="ts">
  const props = defineProps<{ filter: string }>();
</script>

<template>
  <label class="filter-custom-checkbox"
    >{{ props.filter }}
    <input
      class="filter-custom-checkbox__input"
      :id="props.filter"
      name="filter"
      type="checkbox"
      :value="props.filter"
    />
    <span class="filter-custom-checkbox__checkmark"></span>
  </label>
</template>

<style scoped>
  .filter-custom-checkbox {
    display: block;
    position: relative;
    padding-left: 35px;
    cursor: pointer;
    user-select: none;
  }

  .filter-custom-checkbox:hover
    .filter-custom-checkbox__input
    ~ .filter-custom-checkbox__checkmark {
    background-color: var(--semi-dark-violet);
    opacity: 0.5;
  }

  .filter-custom-checkbox
    .filter-custom-checkbox__input:checked
    ~ .filter-custom-checkbox__checkmark {
    background-color: var(--semi-dark-violet);
  }

  .filter-custom-checkbox
    .filter-custom-checkbox__input:checked
    ~ .filter-custom-checkbox__checkmark:after {
    display: block;
  }

  .filter-custom-checkbox .filter-custom-checkbox__checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid var(--white);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  .filter-custom-checkbox__input {
    height: 0;
    width: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .filter-custom-checkbox__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: var(--gray);
    border-radius: 2px;
  }

  .content-wrapper--dark .filter-custom-checkbox__checkmark:after {
    opacity: 0.8;
  }

  .filter-custom-checkbox__checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
</style>
