<script setup lang="ts"></script>

<template>
  <button class="button save-button" type="button" @click="$emit('saveClickHandler')">Save</button>
</template>

<style scoped>
  .content-wrapper--dark .save-button {
    background-color: var(--violet-blue);
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .save-button {
    background-color: var(--pink);
    color: var(--dark-violet);
  }
</style>
