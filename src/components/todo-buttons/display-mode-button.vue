<script setup lang="ts">
  import { useProcessStore } from '../../stores/process';
  import { storeToRefs } from 'pinia';

  const storeProcess = useProcessStore();

  const { toggleIsBrieflyTodoDisplay } = storeProcess;

  const { isBrieflyTodoDisplay } = storeToRefs(storeProcess);

  const onButtonDisplayModeClickHandler = () => {
    toggleIsBrieflyTodoDisplay();
  };
</script>

<template>
  <button class="display-mode-button button" type="button" @click="onButtonDisplayModeClickHandler">
    Кратко / развёрнуто
  </button>
</template>

<style scoped>
  .display-mode-button {
    margin-top: 50px;
  }
</style>
