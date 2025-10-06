<script setup lang="ts">
import type { Todo } from "~~/interfaces";

useState<Map<number, Todo>>("todoList", (): Map<number, Todo> => {
  const todoListInit = new Map<number, Todo>();
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
