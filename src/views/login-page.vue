<script setup lang="ts"></script>

<template>
  <main class="main body__main">
    <h2 class="title main__title">Please login</h2>

    <form class="login-form main__login-form">
      <div class="login-form__field user-name">
        <label class="login-form__label" for="user-name">Username:</label>
        <input class="login-form__input" id="user-name" type="text" />
        <span class="login-form__validation-message login-form__validation-message--warning">
          Correct
        </span>
      </div>

      <div class="login-form__field password">
        <label class="login-form__label" for="password">Password:</label>
        <input class="login-form__input" id="password" type="password" />
        <button class="show-password-button" type="button">Show</button>
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
    background-color: darkslategray;
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto;
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
    color: black;
    position: absolute;
    top: 41px;
    right: 5px;
    padding: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 16px;
  }

  .login-button {
    color: white;
    background-color: green;
  }
</style>
