<script setup lang="ts">
import type { User } from "~~/interfaces";

definePageMeta({
  middleware: (to, from) => {
    const loginTokenCookie = useCookie<string | null>("loginToken");
    const loginUserCookie = useCookie<User | null>("loginUser");
    if (loginTokenCookie.value == null || loginUserCookie.value == null) {
      return navigateTo("/login");
    } else {
      return navigateTo("/todo");
    }
  },
});
</script>

<template>
  <h2>index.vue</h2>
</template>
