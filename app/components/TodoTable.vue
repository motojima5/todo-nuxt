<script setup lang="ts">
import type { Todo } from "~~/interfaces";

const todoList = useState<Map<number, Todo>>("todoList");
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>タスク名</th>
        <th>担当者名</th>
        <th>締切</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="[id, todo] in todoList" v-bind:key="id">
        <th>
          <NuxtLink v-bind:to="{ name: 'todo-id', params: { id: id } }">
            {{ todo.id }}
          </NuxtLink>
        </th>
        <th>
          {{ todo.task }}
        </th>
        <th>
          {{ todo.person }}
        </th>
        <th>
          {{ todo.deadline }}
        </th>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  width: 100%;
}
</style>
