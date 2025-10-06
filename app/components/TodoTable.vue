<script setup lang="ts">
import type { Todo } from "~~/interfaces";

const asyncData = useLazyFetch("/todo-management/todos");
const responseData = asyncData.data;
const pending = asyncData.pending;
const todoList = computed((): Todo[] => {
  let returnList: Todo[] = [];
  if (responseData.value != null) {
    returnList = responseData.value.data;
  }

  return returnList;
});

const isEmptyList = computed((): boolean => {
  return todoList.value.length == 0;
});

const noServerError = computed((): boolean => {
  let returnVal = false;
  if (
    asyncData.error.value == null &&
    responseData.value != null &&
    responseData.value.result == 1
  ) {
    returnVal = true;
  }
  return returnVal;
});
</script>

<template>
  <p v-if="pending">データ取得中・・・</p>
  <template v-else>
    <template v-if="noServerError">
      <p v-if="isEmptyList">会員情報は存在しません。</p>
      <table v-else>
        <thead>
          <tr>
            <th>ID</th>
            <th>タスク名</th>
            <th>担当者名</th>
            <th>締切</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="todo in todoList" v-bind:key="todo.id">
            <th>
              <NuxtLink v-bind:to="{ name: 'todo-id', params: { id: todo.id } }">
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
    <p v-else>サーバからデータ取得中に障害が発生しました。</p>
  </template>
</template>

<style scoped>
table {
  width: 100%;
}
</style>
