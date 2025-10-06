<script setup lang="ts">
import type { Todo } from "~~/interfaces";

const todo: Todo = reactive({
  id: 0,
  task: "",
  person: "",
  deadline: "",
});
const pending = ref(false);
const noServerError = ref(true);
const onAdd = async () => {
  pending.value = true;
  const asyncData = await $fetch("/todo-management/todos", {
    method: "POST",
    body: todo,
  });
  if (asyncData.data != null && asyncData.result == 1) {
    todo.id = 0;
    todo.task = "";
    todo.person = "";
    todo.deadline = "";
    pending.value = false;
    refreshNuxtData();
  } else {
    pending.value = false;
    noServerError.value = false;
  }
};
</script>

<template>
  <p v-if="pending">データ送信中・・・</p>
  <form v-else v-on:submit.prevent="onAdd">
    <input type="number" v-model.number="todo.id" placeholder="ID" required />
    <input type="text" v-model="todo.task" placeholder="タスク名" required />
    <input type="text" v-model="todo.person" placeholder="担当者名" required />
    <input type="date" v-model="todo.deadline" placeholder="締切" required />
    <button type="submit">追加</button>
  </form>
</template>

<style scoped>
form {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
</style>
