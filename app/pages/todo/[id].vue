<script setup lang="ts">
import type { Todo } from "~~/interfaces";

definePageMeta({
  layout: "detail",
});

const route = useRoute();
const asyncData = useLazyFetch(`/todo-management/todos/${route.params.id}`);
const responseData = asyncData.data;
const pending = asyncData.pending;

const todo = computed((): Todo | undefined => {
  return responseData.value?.data[0];
});

const isEmptyList = computed((): boolean => {
  return responseData.value?.data.length == 0;
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
      <p v-if="isEmptyList">指定された会員情報は存在しません。</p>
      <template v-else>
        <div>ID: {{ todo?.id }}</div>
        <div>タスク名: {{ todo?.task }}</div>
        <div>担当者名: {{ todo?.person }}</div>
        <div>締切: {{ todo?.deadline }}</div>
      </template>
    </template>
    <p v-else>サーバからデータ取得中に障害が発生しました。</p>
  </template>
</template>
