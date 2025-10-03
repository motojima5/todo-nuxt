<script setup lang="ts">
import TodoTable from "~/components/TodoTable.vue";

definePageMeta({
  middleware: ["loggedin-check"],
});
</script>

<template>
  <h2>新規TODO作成</h2>
  <h2>TODO一覧</h2>
  <TodoTable />
</template>
