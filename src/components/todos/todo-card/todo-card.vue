<script setup lang="ts">
  import { ref } from 'vue';

  import TodoInDetailView from '@/components/todos/todo-in-detail-view/todo-in-detail-view.vue';
  import TodoInDetailEdit from '@/components/todos/todo-in-detail-edit/todo-in-detail-edit.vue';

  import type { Todo } from '../../../types/todo';

  import { useTodosStore } from '../../../stores/todos';

  const props = defineProps<{ order: number; todo: Todo }>();

  const storeTodos = useTodosStore();
  const { editTodo, removeTodo } = storeTodos;

  const isCurrentEdit = ref(false);

  const onEditButtonClickHandler = () => {
    isCurrentEdit.value = true;
  };

  const onRemoveButtonClickHandler = () => {
    removeTodo(props.todo.id);
  };

  const onSaveButtonClickHandler = (todo: Todo) => {
    // editTodo(todo);
    console.log('saved');
    isCurrentEdit.value = false;
  };

  const onCancelButtonClickHandler = () => {
    isCurrentEdit.value = false;
  };
</script>

<template>
  <TodoInDetailView
    v-if="!isCurrentEdit"
    :todo="props.todo"
    @edit-click-handler="onEditButtonClickHandler"
    @remove-click-handler="onRemoveButtonClickHandler"
  />
  <TodoInDetailEdit
    v-else
    :todo="props.todo"
    @save-click-handler="onSaveButtonClickHandler"
    @cancel-click-handler="onCancelButtonClickHandler"
  />
</template>

<style scoped></style>
