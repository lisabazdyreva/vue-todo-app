<script setup lang="ts">
  import { ref } from 'vue';
  import type { Todo } from '../../types/todo';
  import { useTodosStore } from '../../stores/todos';

  import SaveTodoButton from '@/components/todo-buttons/save-todo-button.vue';
  import CancelTodoButton from '@/components/todo-buttons/cancel-todo-button.vue';
  import EditTodoButton from '@/components/todo-buttons/edit-todo-button.vue';
  import RemoveTodoButton from '@/components/todo-buttons/remove-todo-button.vue';

  const props = defineProps<{ order: number; todo: Todo }>();
  const title = ref(props.todo.title);

  const isCurrentEdit = ref(false);

  const storeTodos = useTodosStore();
  const { editTodo, removeTodo } = storeTodos;

  const onTitleInputHandler = (evt: Event) => {
    const target = evt.target as HTMLInputElement;
    title.value = target.value;
  };

  const onButtonEditClickHandler = () => {
    isCurrentEdit.value = true;
  };

  const onButtonRemoveClickHandler = () => {
    removeTodo(props.todo.id);
  };

  const onButtonSaveClickHandler = () => {
    editTodo({ ...props.todo, title: title.value });
    isCurrentEdit.value = false;
  };

  const onButtonCancelClickHandler = () => {
    title.value = props.todo.title;
    isCurrentEdit.value = false;
  };
</script>

<template>
  <li v-if="!isCurrentEdit" class="todo-list__item">
    <div class="todo-list__item-info">
      <span class="todo-list__item-order">{{ props.todo.id }}. это не точно, мб порядок </span>
      <span class="todo-list__item-title">{{ title }}</span>
    </div>
    <div class="todo-list__buttons">
      <EditTodoButton @edit-click-handler="onButtonEditClickHandler" />
      <RemoveTodoButton @remove-button-handler="onButtonRemoveClickHandler" />
    </div>
  </li>
  <li v-else class="todo-list__item">
    <label for="title">Title:</label>
    <input id="title" type="text" :value="title" @input="onTitleInputHandler" />

    <div class="todo-list__buttons">
      <SaveTodoButton @save-button-handler="onButtonSaveClickHandler" />
      <CancelTodoButton @cancel-button-handler="onButtonCancelClickHandler" />
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
