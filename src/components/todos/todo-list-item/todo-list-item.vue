<script setup lang="ts">
  import { ref } from 'vue';
  import type { Todo } from '../../../types/todo';
  import { useTodosStore } from '../../../stores/todos';

  import TodoBrieflyEdit from '@/components/todos/todo-briefly-edit/todo-briefly-edit.vue';
  import TodoBrieflyView from '@/components/todos/todo-briefly-view/todo-briefly-view.vue';

  const props = defineProps<{ order: number; todo: Todo }>();
  const title = ref(props.todo.title);

  const isCurrentEdit = ref(false);

  const storeTodos = useTodosStore();
  const { editTodo, removeTodo } = storeTodos;

  const onEditButtonClickHandler = () => {
    isCurrentEdit.value = true;
  };

  const onRemoveButtonClickHandler = () => {
    removeTodo(props.todo.id);
  };

  const onSaveButtonClickHandler = () => {
    // editTodo({ ...props.todo, title: title.value });
    isCurrentEdit.value = false;
  };

  const onCancelButtonClickHandler = () => {
    isCurrentEdit.value = false;
  };
</script>

<template>
  <TodoBrieflyView
    v-if="!isCurrentEdit"
    :todo="todo"
    @edit-click-handler="onEditButtonClickHandler"
    @remove-click-handler="onRemoveButtonClickHandler"
  />
  <TodoBrieflyEdit
    v-else
    :todo="todo"
    @save-click-handler="onSaveButtonClickHandler"
    @cancel-click-handler="onCancelButtonClickHandler"
  />
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
