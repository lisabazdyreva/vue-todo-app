<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  const isPasswordShowed = ref(false);

  const passwordInput = ref(null);
  const usernameInput = ref(null);

  const usernameValue = ref('');
  const passwordValue = ref('');

  const showPassword = () => {
    isPasswordShowed.value = !isPasswordShowed.value;
  };
  // TODO bug with focus

  const onLoginFormSubmitHandler = () => {};

  onMounted(() => {
    if (usernameInput.value) {
      const input = usernameInput.value as HTMLInputElement;
      input.focus();
    }
  });
</script>

<template>
  <main class="main body__main">
    <h2 class="title main__title">Please login</h2>

    <form class="login-form main__login-form" @submit.prevent="onLoginFormSubmitHandler">
      <div class="login-form__field user-name">
        <label class="login-form__label" for="user-name">Username:</label>
        <input
          class="login-form__input"
          v-model="usernameValue"
          id="user-name"
          type="text"
          ref="usernameInput"
          :autocomplete="false"
        />
        <span class="login-form__validation-message login-form__validation-message--warning"
          >Correct</span
        >
      </div>

      <div class="login-form__field password">
        <label class="login-form__label" for="password">Password:</label>
        <input
          class="login-form__input"
          id="password"
          v-model="passwordValue"
          :type="isPasswordShowed ? 'text' : 'password'"
          ref="passwordInput"
        />
        <span class="login-form__validation-message login-form__validation-message--warning"
          >Correct</span
        >
        <button class="show-password-button" type="button" @click="showPassword">Show</button>
      </div>

      <button class="login-button button" type="submit">Log in</button>
    </form>
  </main>
</template>

<style>
  .login-form {
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    padding: 20px;
    margin: 100px auto 0;
  }

  .content-wrapper--dark .login-form {
    background-color: var(--dark-violet);
  }

  .content-wrapper--light .login-form {
    background-color: var(--semi-dark-violet);
  }

  .login-form__field {
    position: relative;
    width: 100%;
    margin: 10px;
  }

  .login-form__label {
    color: white;
    display: block;
    padding: 10px 0;
    text-transform: uppercase;
    font-size: 14px;
  }

  .login-form__input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 5px;
    font-size: 16px;
    border-radius: 2px;
    border: none;
    font-family: inherit;
  }

  .login-form__validation-message {
    padding-top: 10px;
    font-size: 12px;
    text-transform: uppercase;
  }

  .login-form__validation-message--success {
    color: greenyellow;
  }

  .login-form__validation-message--warning {
    color: sandybrown;
  }

  .login-form__validation-message--error {
    color: crimson;
  }

  .show-password-button {
    position: absolute;
    top: 48px;
    right: 5px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
    color: var(--dark-violet);
  }
</style>
