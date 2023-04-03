<script setup lang="ts">
  import { Route, TodoListView } from '../utils/const';
  import { useProcessStore } from '../stores/process';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const storeProcess = useProcessStore();

  const { setDisplayModeTodo } = storeProcess;

  const { displayModeTodo } = storeToRefs(storeProcess);

  const viewTodoMode = ref(displayModeTodo.value);

  const onSettingsFormSubmitHandler = () => {
    setDisplayModeTodo(viewTodoMode.value);
    router.push(Route.Home);
  };
</script>

<template>
  <main class="main body__main">
    <h2 class="title main__title">Settings</h2>
    <form @submit.prevent="onSettingsFormSubmitHandler">
      <fieldset>
        <legend>Todolist View</legend>

        <input
          :id="TodoListView.BrieflyList"
          type="radio"
          name="view"
          :value="TodoListView.BrieflyList"
          v-model="viewTodoMode"
        />
        <label :for="TodoListView.BrieflyList">Briefly List</label>

        <input
          :id="TodoListView.Cards"
          type="radio"
          name="view"
          :value="TodoListView.Cards"
          v-model="viewTodoMode"
        />
        <label :for="TodoListView.Cards">Cards</label>
      </fieldset>

      <fieldset>
        <legend>Language</legend>

        <input id="english" type="radio" name="language" value="english" />
        <label for="english">English</label>

        <input id="russian" type="radio" name="language" value="russian" />
        <label for="russian">Russian</label>
      </fieldset>
      <label> </label>
      <button class="button" type="submit">Save</button>
      <button class="button" type="reset">Cancel</button>
    </form>
  </main>
</template>

<style scoped></style>
