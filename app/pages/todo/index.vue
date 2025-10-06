<script setup lang="ts">

definePageMeta({
  middleware: ["loggedin-check"],
});
</script>

<template>
  <h2>新規TODO作成</h2>
  <TodoAdd />
  <h2>TODO一覧</h2>
  <TodoTable />
</template>
