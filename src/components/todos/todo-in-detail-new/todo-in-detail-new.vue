<script setup lang="ts">
  import SaveTodoButton from '@/components/todos/todo-buttons/save-todo-button.vue';
  import CancelTodoButton from '@/components/todos/todo-buttons/cancel-todo-button.vue';
</script>

<template>
  <div class="todo-card-new">
    <fieldset>
      <legend>Title and description</legend>

      <label for="name">Title</label>
      <input id="name" type="text" name="title" />

      <label for="description">Description</label>
      <input id="description" type="text" name="description" />
    </fieldset>

    <fieldset>
      <legend>Is timeless?</legend>

      <label for="timeless-true">True</label>
      <input type="radio" name="timeless" id="timeless-true" value="true" />

      <label for="timeless-false">False</label>
      <input type="radio" name="timeless" id="timeless-false" value="false" />
    </fieldset>

    <fieldset>
      <legend>Date from, date to</legend>

      <button type="button">Has date to?</button>

      <label>Date from</label>
      <input type="text" name="date-from" id="date-from" />

      <label>Date to (not required)</label>
      <input type="text" name="date-to" id="date-to" />
    </fieldset>

    <button type="button">Add to favorite</button>

    <div class="buttons">
      <SaveTodoButton />
      <CancelTodoButton />
    </div>
  </div>
</template>

<style scoped>
  .todo-card-new {
    border: 1px solid var(--dark-violet);
  }
</style>
