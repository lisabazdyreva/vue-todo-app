<script setup lang="ts">
  const props = defineProps<{ isCompleted?: boolean }>();
</script>

<template>
  <label class="custom-checkbox">
    <span class="visually-hidden">Set complete</span>
    <input
      class="custom-checkbox__input"
      type="checkbox"
      :value="props.isCompleted"
      @change="$emit('changeHandler')"
      :checked="props.isCompleted"
    />
    <span class="custom-checkbox__checkmark"></span>
  </label>
</template>

<style scoped>
  .custom-checkbox {
    display: block;
    position: relative;
    cursor: pointer;
    padding-left: 35px;
    user-select: none;
  }

  .custom-checkbox:hover .custom-checkbox__input ~ .custom-checkbox__checkmark {
    background-color: var(--semi-dark-violet);
    opacity: 0.5;
  }

  .custom-checkbox .custom-checkbox__input:checked ~ .custom-checkbox__checkmark {
    background-color: var(--semi-dark-violet);
  }

  .custom-checkbox .custom-checkbox__input:checked ~ .custom-checkbox__checkmark:after {
    display: block;
  }

  .custom-checkbox .custom-checkbox__checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid var(--white);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }

  .custom-checkbox__input {
    height: 0;
    width: 0;
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }

  .custom-checkbox__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    border-radius: 2px;
    background-color: var(--gray);
  }

  .custom-checkbox__checkmark:after {
    content: '';
    position: absolute;
    display: none;
  }
</style>
