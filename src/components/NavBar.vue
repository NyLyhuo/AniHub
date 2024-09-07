<script setup lang="ts">
import { ref, onMounted } from "vue";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const isDarkMode = ref(false);

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value;
  document.documentElement.classList.toggle("dark", isDarkMode.value);
  localStorage.setItem("darkMode", JSON.stringify(isDarkMode.value));
}

onMounted(() => {
  const savedDarkMode = localStorage.getItem("darkMode");
  if (savedDarkMode !== null) {
    isDarkMode.value = JSON.parse(savedDarkMode);
    document.documentElement.classList.toggle("dark", isDarkMode.value);
  }
});
</script>

<template>
  <nav class="flex justify-between items-center p-4 px-8">
    <router-link to="/" class="flex items-center gap-2">
      <font-awesome-icon
        icon="fa-solid fa-paw"
        class="h-8 text-secondary"
      /><span
        class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hover:text-secondary dark:hover:text-secondary transform"
        >AniHub</span
      >
    </router-link>
    <div class="flex items-center gap-4">
      <div class="relative w-[300px] hover:text-secondary">
        <input
          type="text"
          id="search"
          class="border border-gray-300 text-gray-800 text-sm rounded-lg block w-full ps-2 p-2.5 dark:bg-gray-800 dark:border-primary dark:placeholder-gray-400 dark:text-gray-300"
          placeholder="Search"
          required
        />
        <div
          class="absolute inset-y-0 end-0 flex items-center pe-4 pointer-events-none"
        >
          <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
        </div>
      </div>
      <button @click="toggleDarkMode" class="hover:text-secondary">
        <font-awesome-icon :icon="isDarkMode ? faSun : faMoon" />
      </button>
    </div>
  </nav>
</template>

<style scoped>
</style>