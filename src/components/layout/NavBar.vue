<template>
  <nav class="w-full pl-4 border-b-2 sticky top-0 z-10 bg-base-100">
    <div class="flex items-center">
      <!-- NAV MOBILE -->
      <!-- BURGER MENU/X ICONS -->
      <div class="navbar-burger lg:hidden pr-4">
        <a @click.prevent="toggleMenu = !toggleMenu" class="" role="button">
          <span @click="toggleIcon = !toggleIcon">
            <!-- BURGER ICON -->
            <svg
              v-if="!toggleIcon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
            <!-- CLOSE ICON -->
            <svg
              v-else="toggleIcon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </span>
        </a>
      </div>
      <!-- MOBILE NAV CONTENT (SIDEBAR) -->
      <div class="lg:hidden flex" v-show="toggleMenu">
        <div class="flex">
          <RouterLink class="" to="/products" role="button"
            >Products</RouterLink
          >
          <RouterLink class="" to="/about" role="button">About</RouterLink>
          <RouterLink class="" to="/user" role="button">My Page</RouterLink>
          <!-- SIGNUP / LOGIN -->
          <div class="flex">
            <button class="">Sign up</button>
            <button class="">Log in</button>
          </div>
        </div>
      </div>
      <!-- ___________ -->
      <!-- NAV DESKTOP -->
      <!-- LOGO -->
      <RouterLink class="font-mono text-2xl py-2.5" to="/" role="button"
        >AuraAttire</RouterLink
      >
      <!-- PAGES -->
      <div class="hidden lg:flex space-x-2 pl-8">
        <RouterLink
          class="rounded p-3 hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-400"
          to="/products"
          role="button"
          >Products</RouterLink
        >
        <RouterLink
          class="rounded p-3 hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-400"
          to="/about"
          role="button"
          >About</RouterLink
        >
        <RouterLink
          class="rounded p-3 hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-400"
          to="/user"
          role="button"
          >My Page</RouterLink
        >
      </div>
      <!-- SIGNUP / LOGIN -->
      <div class="hidden lg:flex ml-auto space-x-2 pr-4">
        <button
          class="rounded p-3 hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-400"
        >
          Sign up
        </button>
        <button
          class="rounded p-3 hover:bg-gray-200 focus:bg-gray-300 active:bg-gray-400"
        >
          Log in
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
/* Imports */
import { ref } from "vue";

/* Mobile nav */
const toggleIcon = ref(false);

const toggleMenu = ref(false);
</script>
