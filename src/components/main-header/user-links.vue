<script setup lang="ts">
  import { Route } from '@/utils/const';
</script>

<template>
  <div class="navigation-buttons">
    <!--    <a class="user-profile-link" href="#">User Profile</a>-->
    <RouterLink class="login-link" :to="Route.Login">Log in</RouterLink>
  </div>
</template>

<style scoped>
  .content-wrapper--dark .user-profile-link {
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .user-profile-link {
    background-color: transparent;
    color: var(--white);
  }

  .login-link {
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    padding: 20px 0;
    background-color: transparent;
  }

  .content-wrapper--dark .login-link {
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--dark .login-link:hover {
    color: var(--pink);
  }

  .content-wrapper--light .login-link {
    color: var(--white);
  }

  .content-wrapper--light .login-link:hover {
    color: var(--dark-violet);
  }
</style>
