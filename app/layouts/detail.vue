<template>
  <header>
    <h1>TODO詳細</h1>
    <TheLoggedInSection />
  </header>
  <main>
    <slot />
  </main>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
