<script setup lang="ts">
  import EditTodoButton from '@/components/todos/todo-buttons/edit-todo-button.vue';
  import RemoveTodoButton from '@/components/todos/todo-buttons/remove-todo-button.vue';

  import type { Todo } from '../../../types/todo';
  import { CompleteValue, Route } from '../../../utils/const';

  import { useTodosStore } from '../../../stores/todos';
  import TodoRegularCheckbox from '@/components/todos/todo-checkboxes/todo-regular-checkbox.vue';
  import TodoFavoriteCheckbox from '@/components/todos/todo-checkboxes/todo-favorite-checkbox.vue';

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
    <h3 class="todo-card__title" :class="{ 'todo-card__title--completed': props.todo.completed }">
      {{ props.todo.title }}
      <TodoFavoriteCheckbox
        :is-favorite="props.todo.isFavorite"
        @favorite-change-handler="onToggleFavoriteButtonClickHandler"
      />
    </h3>

    <p v-if="props.todo.description" class="todo-card__description">
      {{ props.todo.description }}
    </p>

    <p class="todo-card__user-actions">
      <TodoRegularCheckbox
        @change-handler="onCompleteButtonClickHandler"
        :is-completed="props.todo.completed"
      >
        <span>
          {{ props.todo.completed ? CompleteValue.Completed : CompleteValue.InProgress }}
        </span>
      </TodoRegularCheckbox>
      <RouterLink :to="Route.TodoDetailed + props.todo.id">Go to detailed>></RouterLink>
    </p>

    <div v-if="props.todo.dates?.dateFrom" class="todo-card__dates">
      <p>From: {{ props.todo?.dates?.dateTo }}</p>
      <p v-if="props.todo.dates.dateTo">To: {{ props.todo?.dates?.dateFrom }}</p>
    </div>

    <div class="todo-card__buttons">
      <EditTodoButton
        v-if="!props.todo.completed"
        @edit-click-handler="$emit('edit-click-handler')"
      />
      <RemoveTodoButton @remove-click-handler="$emit('remove-click-handler')" />
    </div>

    <div class="todo-card__user-buttons"></div>
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

  .content-wrapper--dark .todo-card {
    background-color: var(--dark-violet);
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

  .content-wrapper--dark .todo-card__title {
    background-color: var(--semi-dark-violet);
  }

  .todo-card__title--completed {
    text-decoration: line-through;
  }

  .todo-card__user-buttons {
    display: flex;
    justify-content: space-between;
    margin: 10px;
  }

  .todo-card__description {
    margin: 20px 10px;
  }

  .content-wrapper--dark .todo-card__description {
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .todo-card__description {
    color: var(--dark-violet);
  }

  .todo-card__user-actions {
    margin: 20px 10px;
    user-select: none;
    display: flex;
    justify-content: space-between;
  }

  .content-wrapper--dark .todo-card__user-actions {
    color: var(--dark-violet-theme-color);
  }

  .content-wrapper--light .todo-card__user-actions {
    color: var(--dark-violet);
  }

  .todo-card__completed-title {
    margin-left: 30px;
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
