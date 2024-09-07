<script setup lang="ts">
import NavBar from "./components/NavBar.vue"
import Hero from "./Views/Hero.vue";
</script>

<template>
  <NavBar />
  <main>
    <Hero />
    <RouterView />
  </main>
</template>

<style scoped>

</style>
