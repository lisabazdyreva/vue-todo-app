<script setup lang="ts">
  import EditTodoButton from '@/components/todo/todo-buttons/edit-todo-button.vue';
  import RemoveTodoButton from '@/components/todo/todo-buttons/remove-todo-button.vue';
  const props = defineProps({ order: Number });
</script>

<template>
  <li class="todo-list__item">
    <div class="todo-list__item-info">
      <span class="todo-list__item-order">{{ props.order }}. </span>
      <span class="todo-list__item-title">pet cats</span>
    </div>
    <div class="todo-list__buttons">
      <EditTodoButton />
      <RemoveTodoButton />
    </div>
  </li>
</template>

<style>
  .todo-list__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid var(--dark-violet-transparent);
    box-shadow: 1px 3px 5px var(--shadow-color);
    border-radius: 5px;
    padding: 15px;
    margin: 10px 0;
    font-weight: 400;
  }

  .content-wrapper--dark .todo-list__item {
    background-color: var(--dark-violet);
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .todo-list__item {
    background-color: var(--white);
    color: var(--dark-violet);
  }

  .todo-list__item-title {
    text-transform: capitalize;
  }

  .todo-list__item-order {
    font-weight: 500;
  }

  .todo-list__buttons {
    display: flex;
    gap: 5px;
  }
</style>
