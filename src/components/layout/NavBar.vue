<template>
  <nav class="w-full p-4 border-b-2">
    <!-- LOGO -->
    <div class="flex items-center">
      <RouterLink class="font-mono text-2xl pr-8" to="/" role="button"
        >AuraAttire</RouterLink
      >
      <!-- NAV MOBILE -->
      <!-- BURGER MENU -->
      <div class="navbar-burger lg:hidden ml-auto">
        <a
          @click.prevent="toggleMenu = !toggleMenu"
          class="focus:bg-blue-500"
          :class="{ 'focus:bg-blue-500' : toggleMenu }"
          role="button"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </a>
      </div>
      <!-- MOBILE NAV CONTENT (DROPDOWN) -->
    <div class="lg:hidden flex" v-show="toggleMenu">
      <div class="flex space-x-2">
        <RouterLink class="" to="/products" role="button">Products</RouterLink>
        <RouterLink class="" to="/about" role="button">About</RouterLink>
        <RouterLink class="" to="/user" role="button">My Page</RouterLink>
      </div>
      <!-- SIGNUP / LOGIN -->
      <div class="flex ml-auto space-x-2 pr-2">
        <button class="">Sign up</button>
        <button class="">Log in</button>
      </div>
    </div>
    <!-- ___________ -->
    <!-- NAV DESKTOP -->
    <!-- PAGES -->
    <div class="hidden lg:flex space-x-2">
        <RouterLink class="btn focus:bg-blue-500" to="/products" role="button">Products</RouterLink>
        <RouterLink class="btn" to="/about" role="button">About</RouterLink>
        <RouterLink class="btn" to="/user" role="button">My Page</RouterLink>
    </div>
      <!-- SIGNUP / LOGIN -->
      <div class="hidden lg:flex ml-auto space-x-2 pr-2">
        <button class="btn">Sign up</button>
        <button class="btn">Log in</button>
      </div>
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
const toggleMenu = ref(false);



</script>
