<script setup lang="ts">
  import { computed, ref } from 'vue';

  import EditTodoButton from '@/components/todos/todo-buttons/edit-todo-button.vue';
  import RemoveTodoButton from '@/components/todos/todo-buttons/remove-todo-button.vue';
  import TodoFavoriteCheckbox from '@/components/todos/todo-checkboxes/todo-favorite-checkbox.vue';
  import TodoRegularCheckbox from '@/components/todos/todo-checkboxes/todo-regular-checkbox.vue';

  import type { Todo } from '../../../types/todo';
  import { useTodosStore } from '../../../stores/todos';
  import { Route } from '@/utils/const';

  const storeTodos = useTodosStore();
  const { toggleCompleted, toggleFavorite } = storeTodos;

  const props = defineProps<{ todo: Todo }>();
  const isCompleted = ref(props.todo.completed);

  const onCompleteCheckboxChangeHandler = () => {
    toggleCompleted(props.todo);
  };

  const onFavoriteCheckboxChangeHandler = () => {
    toggleFavorite(props.todo);
  };

  const computedDateFrom = computed(() => {
    const dateFrom = props.todo.dates?.dateFrom;

    if (dateFrom) {
      const valueDateFrom = new Date(dateFrom);
      return Intl.DateTimeFormat('en-US').format(valueDateFrom);
    }
  });

  const computedDateTo = computed(() => {
    const dateTo = props.todo.dates?.dateTo;

    if (dateTo) {
      const valueDateTo = new Date(dateTo);
      return Intl.DateTimeFormat('en-US').format(valueDateTo);
    }
  });
</script>

<template>
  <li class="todo-list__item">
    <div class="todo-list__item-info">
      <TodoRegularCheckbox
        :is-completed="isCompleted"
        @change-handler="onCompleteCheckboxChangeHandler"
      />

      <span class="todo-list__item-order">{{ props.todo.id }}.</span>
      <!--. это не точно, мб порядок-->
      <RouterLink
        :to="Route.TodoDetailed + props.todo.id"
        class="todo-list__item-title"
        :class="{ 'todo-list__item-title--completed': props.todo.completed }"
        >{{ props.todo.title }}</RouterLink
      >
    </div>
    <div v-if="props.todo.dates">
      <span>from {{ computedDateFrom }}</span>
      <span> to {{ computedDateTo }}</span>
    </div>
    <div class="todo-list__buttons">
      <TodoFavoriteCheckbox
        :isFavorite="props.todo.isFavorite"
        @favorite-change-handler="onFavoriteCheckboxChangeHandler"
      />
      <EditTodoButton
        v-if="!props.todo.completed"
        @edit-click-handler="$emit('edit-click-handler')"
      />
      <RemoveTodoButton @remove-click-handler="$emit('remove-click-handler')" />
    </div>
  </li>
</template>

<style scoped>
  .todo-list__item-info {
    display: flex;
  }

  .todo-list__item-order {
    margin-right: 5px;
  }

  .todo-list__item-title--completed {
    color: var(--gray);
    text-decoration: line-through;
  }
</style>
