<template>
  <!-- Login Container -->
  <div class="flex flex-col w-96 h-96 bg-base-200 mx-auto my-auto">
    <h3 class="mx-auto mt-12 font-bold">Login</h3>
    <!-- Username -->
    <div class="mx-auto mt-6">
      <div class="my-auto">
        <p class="text-sm">Username:</p>
        <input class="mb-1" type="text" />
      </div>
    </div>
    <!-- password -->
    <div class="mx-auto">
      <div class="mt-2">
        <p class="text-sm">Password:</p>
        <input class="mb-1" type="password" />
        <!-- show password -->
        <button class=""></button>
      </div>
    </div>
    <div>
      <!-- Buttons -->
      <div class="mx-auto space-x-7 ml-24 mt-2">
        <button class="ml-1 text-xs btn-link">Forgot password?</button>
        <button class="p-2 rounded bg-gray-300 active:bg-gray-400 text-xs">
          LOGIN &blacktriangleright;
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
/* Imports */
import { ref } from "vue";

const togglePassword = ref(false);
</script>
