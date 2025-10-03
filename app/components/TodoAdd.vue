<script setup lang="ts">
import type { Todo } from "~~/interfaces";

const todoList = useState<Map<number, Todo>>("todoList");
const todo: Todo = reactive({
  id: 0,
  task: "",
  person: "",
  deadline: "",
});
const onAdd = (): void => {
  todoList.value.set(todo.id, todo);
};
</script>

<template>
  <form v-on:submit.prevent="onAdd">
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
