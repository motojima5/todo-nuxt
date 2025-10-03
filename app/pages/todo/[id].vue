<script setup lang="ts">
import type { Todo } from "~~/interfaces";

definePageMeta({
  layout: "detail",
});

const route = useRoute();
const todoList = useState<Map<number, Todo>>("todoList");
const todo = computed((): Todo => {
  const id = Number(route.params.id);
  return todoList.value.get(id) as Todo;
});
</script>

<template>
  <div>ID: {{ todo.id }}</div>
  <div>タスク名: {{ todo.task }}</div>
  <div>担当者名: {{ todo.person }}</div>
  <div>締切: {{ todo.deadline }}</div>
</template>
