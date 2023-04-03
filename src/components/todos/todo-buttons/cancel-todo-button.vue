<script setup lang="ts"></script>

<template>
  <button class="button cancel-button" type="button" @click="$emit('cancelClickHandler')">
    Cancel
  </button>
</template>

<style scoped>
  .content-wrapper--dark .cancel-button {
    background-color: var(--dark-violet-theme-bg);
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .cancel-button {
    background-color: var(--violet-blue);
    color: var(--white);
  }
</style>
