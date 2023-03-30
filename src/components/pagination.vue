<script setup lang="ts"></script>

<template>
  <ul class="pagination-list">
    <li class="pagination-list__item">1</li>
    <li class="pagination-list__item">2</li>
    <li class="pagination-list__item">3</li>
  </ul>
</template>

<style scoped>
  .pagination-list {
    display: flex;
    gap: 20px;
    width: 50%;
    margin: 10px auto;
    padding: 0;
    list-style: none;
  }

  .pagination-list__item {
    padding: 10px 15px;
    cursor: pointer;
    border: 2px solid green;
    border-radius: 50%;
  }
</style>
