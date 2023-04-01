<script setup lang="ts"></script>
<template>
  <button class="button remove-button" type="button" @click='$emit("removeButtonHandler")'>Remove</button>
</template>

<style scoped>
  .content-wrapper--dark .remove-button {
    background-color: var(--dark-violet-theme-bg);
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .remove-button {
    background-color: var(--violet-blue);
    color: var(--white);
  }
</style>
