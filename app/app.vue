<script setup lang="ts">
import type { Todo } from "~~/interfaces";

useState<Map<number, Todo>>("todoList", (): Map<number, Todo> => {
  const todoListInit = new Map<number, Todo>();
  todoListInit.set(33456, {
    id: 33456,
    task: "掃除",
    person: "田中",
    deadline: "2025-10-03",
  });
  todoListInit.set(47783, {
    id: 47783,
    task: "選択",
    person: "山田",
    deadline: "2025-10-05",
  });
  return todoListInit;
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
body {
  margin: 0;
}

#__nuxt {
  margin: 0 auto;
  max-width: 1080px;
}
</style>
