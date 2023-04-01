<script setup lang='ts'></script>

<template>
  <ul class='pagination-list'>
    <li class='pagination-list__item'>1</li>
    <li class='pagination-list__item'>2</li>
    <li class='pagination-list__item'>3</li>
  </ul>
</template>

<style scoped>
  .pagination-list {
    display: flex;
    gap: 20px;
    margin: 0 auto;
    padding: 0;
    list-style: none;
  }

  .pagination-list__item {
    padding: 5px 15px;
    cursor: pointer;

    border-radius: 10px;

    font-weight: 900;
  }

  .content-wrapper--dark .pagination-list__item {
    background-color: var(--dark-violet);
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .pagination-list__item {
    background-color: var(--semi-dark-violet);
    color: var(--white);
  }
</style>
