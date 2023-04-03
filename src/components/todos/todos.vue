<script setup lang="ts">
  import { storeToRefs } from 'pinia';

  import TodoList from '@/components/todos/todo-list/todo-list.vue';
  import TodoCards from '@/components/todos/todo-cards/todo-cards.vue';

  import { useProcessStore } from '../../stores/process';
  import { useTodosStore } from '../../stores/todos';
  import { TodoListView } from '@/utils/const';
  import { ref } from 'vue';

  const storeTodos = useTodosStore();
  const { todos } = storeToRefs(storeTodos);

  const storeProcess = useProcessStore();
  const { displayModeTodo } = storeToRefs(storeProcess);

  // const displayMode = ref(displayModeTodo);
</script>

<template>
  <TodoList v-if="displayModeTodo === TodoListView.BrieflyList" :todos="todos" />
  <TodoCards v-if="displayModeTodo === TodoListView.Cards" :todos="todos" />

  <!--  <label :for="TodoListView.BrieflyList">briefly</label>-->
  <!--  <input-->
  <!--    type="radio"-->
  <!--    :id="TodoListView.BrieflyList"-->
  <!--    :value="TodoListView.BrieflyList"-->
  <!--    name="display-mode"-->
  <!--    v-model="displayMode"-->
  <!--  />-->

  <!--  <label :for="TodoListView.Cards">cards</label>-->
  <!--  <input-->
  <!--    type="radio"-->
  <!--    :id="TodoListView.Cards"-->
  <!--    :value="TodoListView.Cards"-->
  <!--    name="display-mode"-->
  <!--    v-model="displayMode"-->
  <!--  />-->
</template>

<style scoped></style>
