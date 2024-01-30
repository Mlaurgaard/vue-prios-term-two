<template>
  <nav class="flex">
    <div class="p-3 space-x-4">
      <RouterLink class="font-mono text-2xl" to="/">CLOTHES</RouterLink>
      <RouterLink class="" to="/ProductsView">Products</RouterLink>
      <RouterLink class="" to="/AboutView">About</RouterLink>
      <RouterLink class="" to="/UserView">My Page</RouterLink>
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
