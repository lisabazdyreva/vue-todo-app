<script setup lang='ts'></script>

<template>
  <button class='button edit-button' type='button' @click='$emit("editClickHandler")'>Edit</button>
</template>

<style>
  .content-wrapper--dark .edit-button {
    background-color: var(--violet-blue);
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .edit-button {
    background-color: var(--pink);
    color: var(--dark-violet);
  }
</style>
