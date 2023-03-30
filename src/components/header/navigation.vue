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
    gap: 40px;
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .navigation-list__link {
    display: inline-block;
    font-size: 18px;
    font-weight: 500;

    text-decoration: none;
    padding: 20px 0;
  }

  .content-wrapper--dark .navigation-list__link {
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .navigation-list__link {
    color: var(--white);
  }
</style>
