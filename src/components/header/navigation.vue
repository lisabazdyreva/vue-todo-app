<script setup lang="ts"></script>

<template>
  <nav class="navigation">
    <ul class="navigation-list">
      <li class="navigation-list__item">
        <a class="navigation-list__link" href="#">Home</a>
      </li>

      <li class="navigation-list__item">
        <a class="navigation-list__link" href="#">Calendar</a>
      </li>

      <li class="navigation-list__item">
        <a class="navigation-list__link" href="#">Favorites</a>
      </li>

      <li class="navigation-list__item">
        <a class="navigation-list__link" href="#">About</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  .navigation-list {
    display: flex;
    gap: 20px;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .navigation-list__link {
    color: var(--white);
    text-decoration: none;
  }
</style>
