<template>
  <nav class="flex w-full">
    <div class="p-3 space-x-4">
      <RouterLink class="font-mono text-2xl" to="/" role="button"
        >CLOTHES</RouterLink
      >
      <RouterLink class="btn" to="/products" role="button">Products</RouterLink>
      <RouterLink class="btn" to="/about" role="button">About</RouterLink>
      <RouterLink class="btn" to="/user" role="button">My Page</RouterLink>
    </div>
  </nav>
</template>

<script setup>
/*
Imports
*/
import { ref } from "vue";

/*
Mobile nav
*/
const showMobileNav = ref(false);
</script>
