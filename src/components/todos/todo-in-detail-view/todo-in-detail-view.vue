<script setup lang="ts">
  import EditTodoButton from '@/components/todos/todo-buttons/edit-todo-button.vue';
  import RemoveTodoButton from '@/components/todos/todo-buttons/remove-todo-button.vue';

  import type { Todo } from '../../../types/todo';
  import { CompleteValue, FavoriteValue } from '../../../utils/const';

  import { useTodosStore } from '../../../stores/todos';

  const props = defineProps<{ todo: Todo }>();

  const storeTodos = useTodosStore();
  const { toggleFavorite, toggleCompleted } = storeTodos;

  const onToggleFavoriteButtonClickHandler = () => {
    toggleFavorite(props.todo);
  };

  const onCompleteButtonClickHandler = () => {
    toggleCompleted(props.todo);
  };
</script>

<template>
  <div class="todo-card">
    <h3 class="todo-card__title">{{ props.todo.title }}</h3>

    <p class="todo-card__description">{{ props.todo.description }}</p>

    <div class="todo-card__user-buttons">
      <button class="button" type="button" @click="onToggleFavoriteButtonClickHandler">
        {{ props.todo.isFavorite ? FavoriteValue.Remove : FavoriteValue.Add }} favorite
      </button>
      <button class="button" type="button" @click="onCompleteButtonClickHandler">
        {{ props.todo.completed ? CompleteValue.InProgress : CompleteValue.Completed }}
      </button>
    </div>

    <div class="todo-card__dates">
      <p>From: {{ props.todo?.dates?.dateTo }}</p>
      <p>To: {{ props.todo?.dates?.dateFrom }}</p>
    </div>

    <div class="todo-card__buttons">
      <EditTodoButton @edit-click-handler="$emit('edit-click-handler')" />
      <RemoveTodoButton @remove-click-handler="$emit('remove-click-handler')" />
    </div>
  </div>
</template>

<style scoped>
  .todo-card {
    box-shadow: 1px 3px 5px var(--shadow-color);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .todo-card__title {
    box-sizing: border-box;
    background-color: var(--semi-dark-violet);
    padding: 20px 0;
    margin: 0;
    text-align: center;
    border-radius: 5px 5px 0 0;
    color: var(--white);
    font-weight: 500;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .todo-card__user-buttons {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  .todo-card__description {
    margin: 20px 10px;
  }

  .todo-card__dates {
    margin: 0 10px;
  }

  .todo-card__buttons {
    margin: 20px 10px 10px;
    display: flex;
    justify-content: space-between;
  }
</style>
